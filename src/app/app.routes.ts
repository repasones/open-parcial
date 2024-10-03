import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { CheckinComponent } from './public/pages/checkin/checkin.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "registration/event-check-ins/new", component: CheckinComponent },
    { path: "**", component: NotFoundComponent }
];
