import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';
    const params = { from, to };
    const headers = { 'Accept': 'application/json' };

    return this.http.get<Flight[]>(url, { params, headers });
  }
}
