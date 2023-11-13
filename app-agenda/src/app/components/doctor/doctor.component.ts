import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  currentView: string = 'default';

  changeView(newView: string): void {
    this.currentView = newView;
  }
}
