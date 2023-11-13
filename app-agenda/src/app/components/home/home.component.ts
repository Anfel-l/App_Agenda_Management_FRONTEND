import { Component, OnInit } from '@angular/core';
import { AppointmentDataService } from '../request-appointment/appointment-data.service';
import { AppointmentDetailResponse } from '../request-appointment/models/appointmentDetailResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userId: string | null = localStorage.getItem('userId');
  currentView: string = 'default';
  appointmentDetailResponse?: AppointmentDetailResponse | null;
  showAppointmentDetails = false;

  constructor(private appointmentDataService: AppointmentDataService) {}

  ngOnInit() {
    this.appointmentDataService.currentAppointmentDetail.subscribe((detail) => {
      this.appointmentDetailResponse = detail;
    });
  }

  changeView(newView: string): void {
    this.currentView = newView;
    this.showAppointmentDetails = false;
    this.appointmentDetailResponse = null;
  }

  onAppointmentScheduled(): void {
    this.showAppointmentDetails = true;
  }
}
