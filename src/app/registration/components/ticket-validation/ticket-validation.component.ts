import { Component, inject, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RegistrationApiService } from '../../services/registration-api.service';
import { Attendee } from '../../model/attendee';

@Component({
  selector: 'app-ticket-validation',
  standalone: true,
  imports: [MatInputModule, MatButton, FormsModule],
  templateUrl: './ticket-validation.component.html',
  styleUrl: './ticket-validation.component.css'
})
export class TicketValidationComponent {
  @Input() ticketId: string = '';
  api = inject(RegistrationApiService);
  attendee!: Attendee;
  text = '';

  checkIn() {
    this.api.getTicket(this.ticketId).subscribe((data: any) => {
      if (data[0] != null) {
        const attendeeData = data[0] as Attendee;

        this.attendee = new Attendee(attendeeData.id, attendeeData.firstName, attendeeData.lastName, attendeeData.eventId, attendeeData.ticketIdentifier, attendeeData.checkedInAt);

        if (this.attendee.checkedInAt != '0')
          this.text = 'Already Checked-In';
        else {
          const date = new Date().toISOString();
          this.attendee.checkedInAt = date;

          this.api.updateTicket(this.attendee).subscribe();

          this.text = JSON.stringify(this.attendee);
        }

      }
      else
        this.text = 'Invalid Ticket Identifier';
    })
  }
}


/* 
Cuando el usuario ingresa el identificador de ticket y hace click en el botón Check-In, el sistema valida si el ticket concuerda con alguno de los tickedIdentifier existentes en Attendees. 

Si encuentra una coincidencia y checkedInAt no tiene valor, actualiza en el endpoint /attendees el valor de checkedInAt con la fecha y hora actual y muestra debajo los datos asociados al ticket y el evento (Event Id, Event
Name, Event Description, Attendee First Name, Attendee Last Name, Checked-In At).

Si no encuentra coincidencia, debe mostrar debajo el texto “Invalid Ticket Identifier”. 

Si se encuentra coincidencia, pero ya existe un valor de fecha y hora en checkedInAt, entonces debe mostrar
debajo el texto “Already Checked-In”. 
*/