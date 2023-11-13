import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { DoctorDetail } from './models/doctor.detail.model';
import { Doctor } from './models/doctor.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private baseUrl = 'http://localhost:8080/v1/api/doctor';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/`);
  }

  getDoctorDetails(doctorId: number): Observable<DoctorDetail> {
    return this.http.get<DoctorDetail>(`${this.baseUrl}/detail/${doctorId}`);
  }

  getAllDoctorDetails(doctors: Doctor[]): Observable<DoctorDetail[]> {
    return forkJoin(
      doctors.map(doctor => 
        this.getDoctorDetails(doctor.doctorId).pipe(
          map(detail => ({ ...detail, doctorId: doctor.doctorId })) 
        )
      )
    );
  }
}
