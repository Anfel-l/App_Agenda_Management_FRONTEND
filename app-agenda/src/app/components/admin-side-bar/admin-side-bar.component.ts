import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  onUploadMassive() {

  }

  onReviewAgenda(){

  }

  logout(): void {
    localStorage.removeItem('doctorInfo');
    this.router.navigate(['/']);
  }
}
