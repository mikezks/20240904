import { Component } from '@angular/core';
import { NextFlightsService } from './next-flights.service';

@Component({
  selector: 'app-next-flights',
  templateUrl: './next-flights.component.html',
  styleUrl: './next-flights.component.scss'
})
export class NextFlightsComponent {
  flights$ = this.nextFlightsService.load();

  constructor(private nextFlightsService: NextFlightsService) {}
}
