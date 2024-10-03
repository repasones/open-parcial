import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
}
