// home.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: string | null = localStorage.getItem('userId');
  currentView: string = 'default';





  changeView(newView: string): void {
    this.currentView = newView;
  }
}