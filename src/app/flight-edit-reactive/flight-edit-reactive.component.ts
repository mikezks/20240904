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

  editForm = this.fb.nonNullable.group({
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

  constructor() {
    this.editForm.valueChanges.subscribe(console.log);
    this.editForm.controls.from.valueChanges.subscribe(console.log);
  }

  save(): void {
    /* this.editForm.patchValue({
      from: ''
    });
    this.editForm.reset();
    this.editForm.getRawValue(); */

    console.log({
      value: this.editForm.value,
      valid: this.editForm.valid,
      dirty: this.editForm.dirty,
      touched: this.editForm.touched
    });
  }
}
