// request-appointment.component.ts
import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {
  symptoms: any[] = [];
  medicalFields: any[] = [];
  appointmentTypes: any[] = [];

  selectedSymptomId: number= 0;
  selectedMedicalFieldId: number=0;
  selectedAppointmentTypeId: number=0;

  constructor(private detailService: DetailService) {}

  ngOnInit() {
    this.detailService.getSymptoms().subscribe(data => this.symptoms = data);
    this.detailService.getMedicalFields().subscribe(data => this.medicalFields = data);
    this.detailService.getAppointmentTypes().subscribe(data => this.appointmentTypes = data);
  }

  agendarCita() {
    localStorage.setItem('selectedSymptomId', this.selectedSymptomId.toString());
    localStorage.setItem('selectedMedicalFieldId', this.selectedMedicalFieldId.toString());
    localStorage.setItem('selectedAppointmentTypeId', this.selectedAppointmentTypeId.toString());
  }
}
