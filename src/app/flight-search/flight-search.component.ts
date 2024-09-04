import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  search(): void {
    console.log(this.from, this.to);
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
