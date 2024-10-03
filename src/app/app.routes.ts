import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { CheckinComponent } from './public/pages/checkin/checkin.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "registration/event-check-ins/new", component: CheckinComponent }
];
