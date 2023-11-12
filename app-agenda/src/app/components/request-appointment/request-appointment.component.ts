import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DetailService } from './detail.service';
import { map, switchMap } from 'rxjs/operators';

import { Symptom } from './models/symptom';
import { MedicalField } from './models/medical-field';
import { AppointmentType } from './models/appointment-type';


import { AppointmentService } from './appointment.service';
import { DoctorService } from './doctor.service';

import { AppointmentDetailResponse } from './models/appointmentDetailResponse';
import Swal from 'sweetalert2';
import { AppointmentDataService } from './appointment-data.service';
@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {
  isLoading: boolean = true;  
  symptoms: Symptom[] = [];
  medicalFields: MedicalField[] = [];
  appointmentTypes: AppointmentType[] = [];
  selectedSymptomId: number = 0;
  selectedMedicalFieldId: number = 0;
  selectedAppointmentTypeId: number = 0;

  appointmentDetail?: AppointmentDetailResponse;
  @Output() appointmentScheduled = new EventEmitter<void>();

  
  constructor(
    private detailService: DetailService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private appointmentDataService: AppointmentDataService

  ) {}

  ngOnInit() {
    this.detailService.getSymptoms().pipe(
      switchMap(symptoms => {
        this.symptoms = symptoms;
        return this.detailService.getMedicalFields();
      }),
      switchMap(medicalFields => {
        this.medicalFields = medicalFields;
        return this.detailService.getAppointmentTypes();
      })
    ).subscribe(appointmentTypes => {
      this.appointmentTypes = appointmentTypes;
      this.isLoading = false;
    }, error => {
      console.error('Error al cargar los datos', error);
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    localStorage.removeItem('medicalAppointmentId');
    localStorage.removeItem('doctorId');
    localStorage.removeItem('detailId');
    localStorage.removeItem('medicalCenterId');
  }

  agendarCita() {
    if (this.selectedSymptomId === 0 || this.selectedMedicalFieldId === 0 || this.selectedAppointmentTypeId === 0) {
      Swal.fire('Error','Por favor, completa todos los campos.', 'warning');
      return;
    }

    const userId = parseInt(localStorage.getItem('userId') || '0', 10);
    const appointmentRequest = {
      userId,
      medicalAppointmentTypeId: this.selectedAppointmentTypeId,
      medicalFieldId: this.selectedMedicalFieldId,
      symptomId: this.selectedSymptomId
    };

    this.appointmentService.createAppointment(appointmentRequest)
      .pipe(
        switchMap(appointmentResponse => {
          localStorage.setItem('medicalAppointmentId', appointmentResponse.medicalAppointmentId.toString());
          return this.doctorService.getAvailableDoctor(appointmentResponse.medicalAppointmentId, userId);
        }),
        switchMap(doctorResponse => {
          localStorage.setItem('doctorId', doctorResponse.doctorId.toString());
          localStorage.setItem('medicalCenterId', doctorResponse.medicalCenterId.toString());

          const detailRequest = {
            userId: userId,
            appointmentId: parseInt(localStorage.getItem('medicalAppointmentId') || '0', 10),
            doctorId: doctorResponse.doctorId

          };
          return this.appointmentService.registerDetail(detailRequest);
        }),
        switchMap(appointmentDetailResponse => {
          localStorage.setItem('detailId', appointmentDetailResponse.detailId.toString());
          return this.appointmentService.getAppointmentDetail(appointmentDetailResponse.detailId).pipe(
            switchMap(detailResponse => {
              const medicalCenterId = parseInt(localStorage.getItem('medicalCenterId') || '0', 10);
              return this.appointmentService.getMedicalCenterDetails(medicalCenterId).pipe(
                map(medicalCenterResponse => ({ ...detailResponse, medicalCenterName: medicalCenterResponse.medicalCenterName }))
              );
            })
          );
        })
      )      
      .subscribe(extendedAppointmentDetailResponse  => {
        this.appointmentDataService.changeAppointmentDetail(extendedAppointmentDetailResponse );

        this.appointmentDetail = extendedAppointmentDetailResponse ;
        this.appointmentScheduled.emit();
      
        Swal.fire('¡Cita agendada!', 'Tu cita ha sido agendada con éxito.', 'success');

      }, error => {
        console.error('Error en la solicitud:', error);
        if (error.status === 500) {
          Swal.fire('Error', 'No hay turnos disponibles en este momento.', 'question');
        } else {
          Swal.fire('Error','Ocurrió un error al procesar tu solicitud.', 'question');
        }
      });
  }
}
