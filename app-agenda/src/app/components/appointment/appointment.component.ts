import { Component, Input } from '@angular/core';
import { AppointmentDetailResponse } from '../request-appointment/models/appointmentDetailResponse';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() detail?: AppointmentDetailResponse;
  medicalCenterName?: string; // Campo opcional para el nombre del centro médico

}