// doctor-shift.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service'; // Asume que tienes este servicio
import { AgendaDetails } from './models/agendaDetails';

@Component({
  selector: 'app-doctor-shift',
  templateUrl: './doctor-shift.component.html',
  styleUrls: ['./doctor-shift.component.css']
})
export class DoctorShiftComponent implements OnInit {
  agendaDetails: AgendaDetails[] = [];
  events: any[] = []; // Para el calendario
  selectedEvent: any; // Evento seleccionado en el calendario

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    const doctorId = JSON.parse(localStorage.getItem('doctorInfo') || '{}').doctorId;
    this.appointmentService.getAgendaDetails(doctorId).subscribe(
      data => {
        this.agendaDetails = data;
        this.events = this.mapToCalendarEvents(data);
      },
      error => console.error(error)
    );
  }

  mapToCalendarEvents(agendaDetails: AgendaDetails[]): any[] {
    return agendaDetails.map(detail => {
      return {
        title: detail.userName,
        start: new Date(detail.appointmentTime),
        end: new Date(new Date(detail.appointmentTime).getTime() + 30 * 60000), 
        meta: detail 
      };
    });
  }

  onEventSelect(event: any): void {
    this.selectedEvent = event;
  }

  refreshCalendar(): void {
    // Vuelve a cargar los detalles del turno
    this.ngOnInit();
  }
}
