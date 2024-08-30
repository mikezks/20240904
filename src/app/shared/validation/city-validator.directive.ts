import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: CityValidatorDirective
  }]
})
export class CityValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const validCities = [
      'Graz', 'Hamburg', 'Wien'
    ];

    if (control?.value && !validCities.includes(control.value)) {
      return {
        city: {
          actualCity: control.value,
          validCities
        }
      };
    }

    return null;
  }
}
