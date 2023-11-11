import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentResponse } from './models/appointmentResponse';
import { DetailResponse } from './models/detailResponse';
import { AppointmentRequest } from './models/appointmentRequest';
import { DetailRequest } from './models/detailRequest';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/v1/api';

  constructor(private http: HttpClient) {}

  createAppointment(appointmentRequest: AppointmentRequest): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(`${this.apiUrl}/apppointment/insert/`, appointmentRequest);
  }

  registerDetail(detailRequest: DetailRequest): Observable<DetailResponse> {
    return this.http.post<DetailResponse>(`${this.apiUrl}/appointment-detail/insert/`, detailRequest);
  }
}
