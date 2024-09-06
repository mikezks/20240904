import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";
import { FlightEditReactiveComponent } from "./features/flight-edit-reactive/flight-edit-reactive.component";


export const BOOKING_ROUTES: Routes = [
  {
    path: 'booking',
    children: [
      {
        path: 'flight/search',
        component: FlightSearchComponent
      },
      {
        path: 'flight/edit/:id',
        component: FlightEditReactiveComponent
      },
      {
        path: 'passenger/search',
        component: PassengerSearchComponent
      },
    ]
  }
];
