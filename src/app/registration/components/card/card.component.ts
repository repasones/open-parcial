import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Event } from '../../model/event';
import { RegistrationApiService } from '../../services/registration-api.service';
import { Attendee } from '../../model/attendee';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() event!: Event;
  api = inject(RegistrationApiService);
  registeredAttendees = 0;
  attendance = 0;

  ngOnInit(): void {
    this.api.getAttendeesByEventId(this.event.id).subscribe((data: any) => {
      this.registeredAttendees = data.length;

      const asistentes = data.filter((a: Attendee) => a.checkedInAt != null);

      this.attendance = asistentes.length / this.registeredAttendees * 100;
      this.attendance = Number(this.attendance.toFixed(2));
    })
  }
}
