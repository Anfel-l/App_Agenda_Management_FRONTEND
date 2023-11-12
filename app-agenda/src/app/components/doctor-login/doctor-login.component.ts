// doctor-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from './doctor-login.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  doctorId: number | null = null;  // Inicializado con null

  constructor(private doctorService: DoctorService, private router: Router) {}

  onSubmit() {
    if (this.doctorId !== null) {
      this.doctorService.getDoctorDetails(this.doctorId).subscribe(doctorInfo => {
        localStorage.setItem('doctorInfo', JSON.stringify(doctorInfo));
        this.router.navigate(['/doctor']);
      }, error => {
        console.error('Error al obtener información del doctor', error);
      });
    } else {
      // Manejar caso donde doctorId es null
      console.error('Doctor ID es nulo');
    }
  }
}
