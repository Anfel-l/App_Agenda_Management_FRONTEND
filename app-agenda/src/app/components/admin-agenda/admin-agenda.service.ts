import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendaDetails } from './models/agendaDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminAgendaService {
  private apiUrl = 'http://localhost:8080/v1/api/detail';

  constructor(private http: HttpClient) {}

  getAgendaDetails(doctorId: number): Observable<AgendaDetails[]> {
    return this.http.get<AgendaDetails[]>(`${this.apiUrl}/agenda-detail/${doctorId}`);
  }

  generateCSV(doctorId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/agenda-detail/generate-csv/${doctorId}`, { responseType: 'blob' });
  }
}