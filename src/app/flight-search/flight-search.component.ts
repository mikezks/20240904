import { DatePipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe, JsonPipe,
    FlightCardComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  search(): void {
    this.flightService
      .find(this.from, this.to).pipe(
        catchError(() => of([]))
      )
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error(err)
      });
  }
}
