import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import { DoctorComponent } from './components/doctor/doctor.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'doctor', component: DoctorComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
