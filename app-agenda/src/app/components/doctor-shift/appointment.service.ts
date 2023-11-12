// appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendaDetails } from './models/agendaDetails';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/v1/api';

  constructor(private http: HttpClient) {}

  getAgendaDetails(doctorId: number): Observable<AgendaDetails[]> {
    return this.http.get<AgendaDetails[]>(`${this.apiUrl}/detail/agenda-detail/${doctorId}`);
  }
}
