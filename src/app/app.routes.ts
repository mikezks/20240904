import { Routes } from  '@angular/router';
import { HomeComponent } from './core/features/home/home.component';
import { FlightSearchComponent } from './booking/features/flight-search/flight-search.component';
import { PassengerSearchComponent } from './booking/features/passenger-search/passenger-search.component';
import { AboutComponent } from './core/features/about/about.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
