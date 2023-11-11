import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8080/v1/api/medical-user/detail/';

  constructor(private http: HttpClient) {}

  getUserDetails(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${userId}`);
  }
}
