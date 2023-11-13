import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from './doctor-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent {
  doctorId: number | null = null;

  constructor(private doctorService: DoctorService, private router: Router) {}

  onSubmit() {
    const doctorId = this.doctorId;
    if (doctorId !== null) {
      this.doctorService.getDoctorDetails(doctorId).subscribe(
        (doctorInfo) => {
          localStorage.setItem('doctorInfo', JSON.stringify(doctorInfo));
          localStorage.setItem('doctorId', doctorId.toString());
          this.router.navigate(['/doctor']);
        },
        (error) => {
          Swal.fire(
            '¡Atención!',
            'El doctor no se encuentra en turno en este momento',
            'info'
          );
        }
      );
    } else {
      console.error('Doctor ID es nulo');
    }
  }
}
