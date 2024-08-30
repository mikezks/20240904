import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [JsonPipe, FormsModule, MatDialogModule],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.scss'
})
export class FlightEditComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  /*
    Alternative:
    type FlightData = { flight: Flight };
    data = inject<FlightData>(MAT_DIALOG_DATA);
  */

  flight = this.data.flight;

  close(): void {
    this.dialogRef.close();
  }
}
