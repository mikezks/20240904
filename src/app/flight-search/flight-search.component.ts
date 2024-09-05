import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
  /* providers: [{
    provide: FlightService,
    useClass: DummyFlightService
  }] */
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

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

  select(flight: Flight): void {
    this.selectedFlight = flight === this.selectedFlight
      ? undefined
      : flight;
  }
}
