import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor'
})
export class PriorityColorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case -1:
        return 'gray'
      case 0:
        return 'rgb(0,220,0)'
      case 1:
        return 'yellow'
      case 2:
        return 'orange'
      default:
        return 'red'
    }
  }

}
