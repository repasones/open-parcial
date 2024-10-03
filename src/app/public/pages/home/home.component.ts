import { Component } from '@angular/core';
import { CardComponent } from "../../../registration/components/card/card.component";
import { ListComponent } from "../../../registration/components/list/list.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ListComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
