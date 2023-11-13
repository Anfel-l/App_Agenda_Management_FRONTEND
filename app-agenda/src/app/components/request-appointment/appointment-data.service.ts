import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppointmentDetailResponse } from './models/appointmentDetailResponse';

@Injectable({ providedIn: 'root' })
export class AppointmentDataService {
  private appointmentDetailSource =
    new BehaviorSubject<AppointmentDetailResponse | null>(null);
  currentAppointmentDetail = this.appointmentDetailSource.asObservable();

  constructor() {}

  changeAppointmentDetail(detail: AppointmentDetailResponse | null) {
    this.appointmentDetailSource.next(detail);
  }
}
