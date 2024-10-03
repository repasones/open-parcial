import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Event } from '../../model/event';
import { RegistrationApiService } from '../../services/registration-api.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  events: Array<Event> = [];
  api = inject(RegistrationApiService);


  ngOnInit(): void {
    this.api.getAllEvents().subscribe((data: any) => {
      //console.log(data);
      this.events = data;
      console.log(this.events)
    })
  }
}
