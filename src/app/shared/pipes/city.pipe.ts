import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  standalone: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, format: 'short' | 'long' = 'long'): string {
    let long = ''
    let short = '';

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'München':
        short = 'MUC';
        long = 'Flughafen München';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Flughafen Hamburg';
        break;
      default:
        long = short = value;
    }

    if (format === 'short') {
      return short;
    }

    return long;
  }

}
