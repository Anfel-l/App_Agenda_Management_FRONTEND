// admin-agenda.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminAgendaService } from './admin-agenda.service';
import { AgendaDetails } from './models/agendaDetails';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-agenda',
  templateUrl: './admin-agenda.component.html',
  styleUrls: ['./admin-agenda.component.css']
})
export class AdminAgendaComponent implements OnInit {
  doctorId: number | null = null;
  calendarOptions?: CalendarOptions;

  constructor(private adminAgendaService: AdminAgendaService) {}

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'timeGridDay',
      plugins: [dayGridPlugin, timeGridPlugin],
      nowIndicator: true,
      events: []
    };
  }

  loadShifts() {
    if (this.doctorId !== null) {
      this.adminAgendaService.getAgendaDetails(this.doctorId).subscribe(
        data => {
          this.calendarOptions!.events = this.mapToCalendarEvents(data);
        },
        error => Swal.fire('Error', 'No se ha podido cargar la agenda', 'error')
      );
    } else {
      Swal.fire('Error', 'No se ha seleccionado un doctor', 'error');
    }
  }

  mapToCalendarEvents(agendaDetails: AgendaDetails[]): EventInput[] {
    return agendaDetails.map(detail => ({
      title: `Cita con ${detail.userName}`,
      start: new Date(detail.appointmentTime),
      end: new Date(new Date(detail.appointmentTime).getTime() + 30 * 60000),
      color: 'red'
    }));
  }

  downloadCSV() {
    if (this.doctorId !== null) {
      this.adminAgendaService.generateCSV(this.doctorId).subscribe(
        data => {
          const blob = new Blob([data], { type: 'text/csv' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `report-${this.doctorId}.csv`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error => console.error('Error al descargar el archivo', error)
      );
    } else {
      Swal.fire('Error', 'No se ha seleccionado un doctor', 'error');
    }
  }
}