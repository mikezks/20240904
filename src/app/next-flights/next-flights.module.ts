import { NextFlightsService } from './next-flights.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';



@NgModule({
  declarations: [
    NextFlightsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NextFlightsService
  ],
  exports: [
    NextFlightsComponent
  ]
})
export class NextFlightsModule { }
