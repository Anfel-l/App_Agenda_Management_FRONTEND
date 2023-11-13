import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { AgendaDetails } from './models/agendaDetails';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-doctor-shift',
  templateUrl: './doctor-shift.component.html',
  styleUrls: ['./doctor-shift.component.css']
})
export class DoctorShiftComponent implements OnInit {
  calendarOptions?: CalendarOptions;
  selectedEvent: any;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    const doctorId = parseInt(localStorage.getItem('doctorId') || '0');
    const doctorInfo = JSON.parse(localStorage.getItem('doctorInfo') || '{}');
    this.loadShifts(doctorId);

    this.calendarOptions = {
      initialView: 'timeGridDay', 
      plugins: [dayGridPlugin, timeGridPlugin],
      locale: 'es',
      nowIndicator: true,
      events: [],
      eventClick: this.handleEventClick.bind(this),
      initialDate: doctorInfo.startTime || new Date().toISOString()
    };
  }

  loadShifts(doctorId: number) {
    this.appointmentService.getAgendaDetails(doctorId).subscribe(
      data => {
        console.log(data);
        this.calendarOptions!.events = this.mapToCalendarEvents(data);
      },
      error => console.error(error)
    );
  }

  mapToCalendarEvents(agendaDetails: AgendaDetails[]): EventInput[] {
    return agendaDetails.map(detail => ({
      title: `Cita con ${detail.userName}`,
      start: new Date(detail.appointmentTime),
      end: new Date(new Date(detail.appointmentTime).getTime() + 30 * 60000),
      color: 'red',
      extendedProps: detail
    }));
  }

  handleEventClick(clickInfo: any) {
    this.selectedEvent = {
      ...clickInfo.event.extendedProps,
      start: clickInfo.event.start
    };
  }

  refresh() {
    const doctorId = parseInt(localStorage.getItem('doctorId') || '0');
    this.loadShifts(doctorId);
  }
}
