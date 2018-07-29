import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsPipe'
})
export class CarsPipePipe implements PipeTransform {

  transform(value: any, filtered: string, show: boolean): any {
    // return value.map((v) => {
    //   return v.make === 'BMW'
    // });
    console.log('searched make: ', filtered);
    if (filtered !== undefined) {
      value = value.map((v) => {
        if (v.make.toLowerCase().indexOf(filtered.toLocaleLowerCase()) !== -1) {
           return v;
        } else {
         return show = false;
        }
      });
    } 
    return value;
  }

}
