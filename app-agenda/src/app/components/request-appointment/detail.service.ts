import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Symptom } from './models/symptom';
import { AppointmentType } from './models/appointment-type';
import { MedicalField } from './models/medical-field';

@Injectable({ providedIn: 'root' })
export class DetailService {
  private apiUrl = 'http://localhost:8080/v1/api/detail';

  constructor(private http: HttpClient) {}

  getSymptoms(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(`${this.apiUrl}/symptom/`);
  }

  getMedicalFields(): Observable<MedicalField[]> {
    return this.http.get<MedicalField[]>(`${this.apiUrl}/medical-field/`);
  }

  getAppointmentTypes(): Observable<AppointmentType[]> {
    return this.http.get<AppointmentType[]>(`${this.apiUrl}/appointment-type/`);
  }
}
