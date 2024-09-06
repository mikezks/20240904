import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

export type Error = Record<string, unknown>;

@Component({
  selector: 'app-validation-errors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="errors['required']" class="alert alert-danger">
      The field '{{ field }}' is required!
    </div>

    <div *ngIf="errors['minlength']" class="alert alert-danger">
      The field '{{ field }}' needs to have at least
      {{ errors["minlength"]["requiredLength"] }}
      characters.
    </div>

    <div *ngIf="hasErrors">
      <pre>Internal error object: {{ errors | json }}
      </pre>
    </div>
  `
})
export class ValidationErrorsComponent implements OnChanges {
  @Input() errors: ValidationErrors = {};
  @Input() field = '';
  hasErrors = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.hasErrors = Object.keys(changes['errors'].currentValue).length > 0;
  }
}
