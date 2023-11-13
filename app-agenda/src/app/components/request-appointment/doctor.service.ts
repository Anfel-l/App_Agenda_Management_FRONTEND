import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorResponse } from './models/doctorResponse';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private apiUrl = 'http://localhost:8080/v1/api/doctor-manage';

  constructor(private http: HttpClient) {}

  getAvailableDoctor(
    appointmentId: number,
    userId: number
  ): Observable<DoctorResponse> {
    return this.http.get<DoctorResponse>(
      `${this.apiUrl}/doctor-available/${appointmentId}/${userId}`
    );
  }
}
