import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

const useDummy = false;

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if (useDummy) {
      return new DummyFlightService();
    } else {
      return new DefaultFlightService();
    }
  }
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
