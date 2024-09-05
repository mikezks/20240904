import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';
import { BASE_URL } from '../app.tokens';


@Injectable()
export class DefaultFlightService implements FlightService {
  private http = inject(HttpClient);
  private baseUrl = inject(BASE_URL);

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + '/flight';
    const params = { from, to };
    const headers = { 'Accept': 'application/json' };

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
