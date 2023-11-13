// doctor-sidebar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-side-bar',
  templateUrl: './doctor-side-bar.component.html',
  styleUrls: ['./doctor-side-bar.component.css'],
})
export class DoctorSidebarComponent implements OnInit {
  doctorInfo: any;
  @Output() changeView = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.doctorInfo = JSON.parse(localStorage.getItem('doctorInfo') || '{}');
  }

  onReviewShift() {
    this.changeView.emit('reviewShift');
  }

  logout(): void {
    localStorage.removeItem('doctorInfo');
    Swal.fire('Sesión cerrada', 'Hasta pronto', 'success');
    this.router.navigate(['/']);
  }
}
