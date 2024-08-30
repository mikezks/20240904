import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialFlight } from '../model/flight';
import { JsonPipe } from '@angular/common';
import { CityValidatorDirective } from '../shared/validation/city-validator.directive';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    CityValidatorDirective
  ],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.scss'
})
export class FlightEditComponent {
  flight = initialFlight;

  save(): void {
    console.log(this.flight);
  }
}
