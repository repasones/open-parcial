import { Component } from '@angular/core';
import { CardComponent } from "../../../registration/components/card/card.component";
import { ListComponent } from "../../../registration/components/list/list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
