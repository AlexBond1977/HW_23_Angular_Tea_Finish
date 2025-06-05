import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  public transform(value: number): string {
    return `${value} рублей/100 грамм`;
  }
}
