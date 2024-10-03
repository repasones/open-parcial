import { Component } from '@angular/core';
import { TicketValidationComponent } from "../../../registration/components/ticket-validation/ticket-validation.component";

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [TicketValidationComponent],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.css'
})
export class CheckinComponent {

}
