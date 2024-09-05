import { Component, effect, input } from '@angular/core';
import { Flight } from '../model/flight';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    DatePipe,
    NgClass
  ],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  item = input.required<Flight>();
  selected = input(false);

  constructor() {
    effect(
      () => console.log(this.item(), this.selected())
    );
  }

  toggleSelection(): void {
    // this.selected
  }
}
