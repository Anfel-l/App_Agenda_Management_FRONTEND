// sidebar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SidebarComponent implements OnInit {
  user!: User;
  userId: number = parseInt(localStorage.getItem('userId') || '0', 10);

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit() {
    this.userService.getUserDetails(this.userId).subscribe(
      data => this.user = data,
      error => console.error(error)
    );
  }

  @Output() solicitarCita = new EventEmitter<void>();
  @Output() actualizarInfo = new EventEmitter<void>();

  onSolicitarCita() {
    this.solicitarCita.emit();
  }

  onActualizarInfo() {
    this.actualizarInfo.emit();
  }

  logout(): void {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
