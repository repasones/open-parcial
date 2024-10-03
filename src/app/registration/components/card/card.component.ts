import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Event } from '../../model/event';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event!: Event;

}
