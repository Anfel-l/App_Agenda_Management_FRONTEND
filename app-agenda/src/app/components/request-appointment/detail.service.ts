import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailService {
  private apiUrl = 'http://localhost:8080/v1/api/detail';

  constructor(private http: HttpClient) {}

  getSymptoms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/symptom/`);
  }

  getMedicalFields(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medical-field/`);
  }

  getAppointmentTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointment-type/`);
  }
}
