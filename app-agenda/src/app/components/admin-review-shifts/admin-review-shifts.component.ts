import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { DoctorService } from './doctor.service';
import { DoctorDetail } from './models/doctor.detail.model';

@Component({
  selector: 'app-admin-review-shifts',
  templateUrl: './admin-review-shifts.component.html',
  styleUrls: ['./admin-review-shifts.component.css']
})
export class AdminReviewShiftsComponent implements OnInit {
  doctorDetails: DoctorDetail[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService.getDoctors().pipe(
      switchMap(doctors => this.doctorService.getAllDoctorDetails(doctors))
    ).subscribe(details => {
      this.doctorDetails = details;
    });
  }
}
