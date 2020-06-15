import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassedCount'
})
export class TimePassedCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
