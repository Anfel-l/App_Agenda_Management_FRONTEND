import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { TableModule } from 'primeng/table';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { LoginService } from './components/login/login.service';
import { SidebarComponent } from './components/side-bar/side-bar.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';
import { RequestAppointmentComponent } from './components/request-appointment/request-appointment.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AdminAgendaComponent } from './components/admin-agenda/admin-agenda.component';
import { AdminMassiveComponent } from './components/admin-massive/admin-massive.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorShiftComponent } from './components/doctor-shift/doctor-shift.component';
import { DoctorSidebarComponent } from './components/doctor-side-bar/doctor-side-bar.component';
import { MainComponent } from './components/main/main.component';
import { AdminReviewShiftsComponent } from './components/admin-review-shifts/admin-review-shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    DoctorComponent,
    UpdateInfoComponent,
    SidebarComponent,
    RequestAppointmentComponent,
    AppointmentComponent,
    AdminAgendaComponent,
    AdminMassiveComponent,
    AdminSideBarComponent,
    DoctorLoginComponent,
    DoctorShiftComponent,
    DoctorSidebarComponent,
    MainComponent,
    AdminReviewShiftsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule,
    TableModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
