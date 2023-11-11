// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDTO } from './models/login-response.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/v1/api/login/validation/';

  constructor(private http: HttpClient) {}

  login(documentTypeId: number, document: string, password: string): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(this.apiUrl, { documentTypeId, document, password });
  }
}
