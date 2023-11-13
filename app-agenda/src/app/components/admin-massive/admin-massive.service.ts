// admin-massive.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminMassiveService {
  private apiUrl = 'http://localhost:8080/v1/api/detail';
  private doctorShiftApiUrl = 'http://localhost:8080/v1/api/doctor/doctor-shift/upload/';

  constructor(private http: HttpClient) {}

  downloadMassiveAgenda() {
    window.location.href = `${this.apiUrl}/agenda-detail/massive/generate-xlsx`;
  }

  uploadDoctorShifts(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post(this.doctorShiftApiUrl, formData, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          Swal.fire('Éxito', 'Archivo subido y procesado con éxito', 'success');
        },
        error: (error: HttpErrorResponse) => {
          const errorMessage = error.error?.message || error.message;
          Swal.fire('Error', `Error al subir archivo: ${errorMessage}`, 'error');
        }
      });
  }
}
