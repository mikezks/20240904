import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private http = inject(HttpClient);

  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';
    const params = { from: this.from, to: this.to };
    const headers = { 'Accept': 'application/json' };

    this.http.get<Flight[]>(url, { params, headers })
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight === this.selectedFlight
      ? undefined
      : flight;
  }
}
