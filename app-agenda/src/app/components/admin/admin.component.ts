import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  currentView: string = 'default';
  ngOnInit() {

  }

  changeView(newView: string): void {
    this.currentView = newView;
   
  }
}