import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';


@Injectable()
export class DummyFlightService implements FlightService {
  find(): Observable<Flight[]> {
    const flights: Flight[] = [
      {
        id: 999,
        from: 'Madrid',
        to: 'Rom',
        date: new Date().toISOString(),
        delayed: false
      }
    ];

    return of(flights);
  }
}
