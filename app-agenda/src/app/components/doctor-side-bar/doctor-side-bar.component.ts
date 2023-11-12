// doctor-sidebar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-side-bar',
  templateUrl: './doctor-side-bar.component.html',
  styleUrls: ['./doctor-side-bar.component.css']
})
export class DoctorSidebarComponent implements OnInit {
  doctorInfo: any;
  @Output() changeView = new EventEmitter<string>();

  constructor(private router:Router) {}

  ngOnInit() {
    this.doctorInfo = JSON.parse(localStorage.getItem('doctorInfo') || '{}');
  }


  onReviewShift() {
    this.changeView.emit('reviewShift');
  }

  logout(): void {
    localStorage.removeItem('doctorInfo');
    this.router.navigate(['/']);
  }
}
