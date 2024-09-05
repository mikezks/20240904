import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { FlightService } from './flight-search/flight.service';
import { DummyFlightService } from './flight-search/dummy-flight.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    /* {
      provide: FlightService,
      useClass: DummyFlightService
    } */
  ]
};
