import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { switchMap } from 'rxjs/operators';

import { Symptom } from './models/symptom';
import { MedicalField } from './models/medical-field';
import { AppointmentType } from './models/appointment-type';


import { AppointmentService } from './appointment.service';
import { DoctorService } from './doctor.service';
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

  constructor(
    private detailService: DetailService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
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

  agendarCita() {
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
          const detailRequest = {
            userId: userId,
            appointmentId: parseInt(localStorage.getItem('medicalAppointmentId') || '0', 10),
            doctorId: doctorResponse.doctorId
          };
          return this.appointmentService.registerDetail(detailRequest);
        })
      )
      .subscribe(detailResponse => {
        console.log('Detalle de la cita creado con éxito:', detailResponse.detailId);
        // Aquí puedes mostrar el detailId en la interfaz de usuario o realizar otras acciones
      }, error => {
        console.error('Error al agendar la cita', error);
      });
  }
}
