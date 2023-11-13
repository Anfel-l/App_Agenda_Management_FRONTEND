import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {

  @Output() reviewAgenda = new EventEmitter<void>();
  @Output() uploadMassive = new EventEmitter<void>();
  @Output() reviewShifts = new EventEmitter<void>();
  
  constructor(private router:Router) {}

  ngOnInit() {
  }

  onReviewAgenda() {
    this.reviewAgenda.emit();
  }

  onUploadMassive() {
    this.uploadMassive.emit();
  }

  onReviewShifts() {
    this.reviewShifts.emit();
  }

  logout(): void {
    localStorage.removeItem('doctorInfo');
    Swal.fire('Sesión cerrada', 'Hasta pronto', 'success');
    this.router.navigate(['/']);
  }
}
