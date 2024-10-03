import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Attendee } from '../model/attendee';

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {
  http = inject(HttpClient);
  urlBase = "http://localhost:3000"

  constructor() { }

  getAllEvents() {
    return this.http.get(`${this.urlBase}/events`);
  }

  getAttendeesByEventId(eventId: number) {
    return this.http.get(`${this.urlBase}/attendees?eventId=${eventId}`);
  }

  getTicket(ticketIdentifier: string) {
    return this.http.get(`${this.urlBase}/attendees?ticketIdentifier=${ticketIdentifier}`);
  }

  updateTicket(attendee: Attendee) {
    return this.http.put(`${this.urlBase}/attendees/${attendee.id}`, attendee);
  }
}
