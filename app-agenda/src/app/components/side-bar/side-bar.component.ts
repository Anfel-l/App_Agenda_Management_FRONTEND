// sidebar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User = {
    firstName: '',
    secondName: '',
    lastName: '',
    document: '',
    documentType: '',
    contractType: '',
    locationName: ''
  };
  userId: number = parseInt(localStorage.getItem('userId') || '0', 10);

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit() {
    this.userService.getUserDetails(this.userId).subscribe(
      data => this.user = data,
      error => console.error(error)
    );
  }

  @Output() solicitarCita = new EventEmitter<void>();
  onSolicitarCita() {
    this.solicitarCita.emit();
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('selectedSymptomId');
    localStorage.removeItem('selectedMedicalFieldId');
    localStorage.removeItem('selectedAppointmentTypeId');
    Swal.fire('Sesión cerrada', 'Hasta pronto', 'success');
    this.router.navigate(['/']);
  }
}
