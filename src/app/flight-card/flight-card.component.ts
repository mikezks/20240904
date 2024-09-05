import { Component, computed, effect, input, model, OnDestroy, OnInit, signal } from '@angular/core';
import { Flight } from '../model/flight';
import { DatePipe, NgClass } from '@angular/common';
import { CityPipe } from '../shared/pipes/city.pipe';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    DatePipe,
    NgClass,
    CityPipe
  ],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent implements OnInit, OnDestroy {
  name = signal('Michael');
  item = input.required<Flight>();
  selected = model(false);
  flightRoute = computed(() => {
    const route = 'From ' + this.item().from + ' to ' + this.item().to + '.';

    return this.selected() ? route : 'No information for you available.';
  });

  constructor() {
    /* effect(
      () => console.log(this.item(), this.selected())
    );

    effect(
      () => console.log(this.name())
    ); */

    setTimeout(
      () => this.name.set('Marie'), 5_000
    )
  }

  ngOnInit(): void {
    console.log('Flight Card INIT', this.item().id);
  }

  toggleSelection(): void {
    this.selected.update(currentValue => !currentValue);
  }

  ngOnDestroy(): void {
    console.log('Flight Card DESTROY', this.item().id);
  }
}
