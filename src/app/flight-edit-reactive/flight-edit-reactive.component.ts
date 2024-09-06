import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './flight-edit-reactive.component.html',
  styleUrl: './flight-edit-reactive.component.scss'
})
export class FlightEditReactiveComponent {
  private fb = inject(FormBuilder);

  editForm = this.fb.group({
    id: [0],
    from: ['',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    ],
    to: [''],
    date: [new Date().toISOString()],
  });

  save(): void {}
}
