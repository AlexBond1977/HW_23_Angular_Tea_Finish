import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longText'
})
export class LongTextPipe implements PipeTransform {

  public transform(value: string): string {
    if (value.length <= 150) {
      return value;
    } else {
      return  value.slice(0, 150) + '...';
    }
  }

}
