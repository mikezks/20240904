import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe, JsonPipe, AsyncPipe,
    FlightCardComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = 'Hamburg';
  to = 'Graz';
  flights$ = new BehaviorSubject<Flight[]>([]);
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor() {
    this.flights$.subscribe(flights => console.log(flights));
  }

  search(): void {
    this.flightService
      .find(this.from, this.to).pipe(
        catchError(() => of([]))
      )
      .subscribe({
        next: flights => this.flights$.next(flights),
        error: err => console.error(err)
      });
  }
}
