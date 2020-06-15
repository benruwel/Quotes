import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassedCount'
})
export class TimePassedCountPipe implements PipeTransform {

  transform(value: any): number {

    let postedTime : Date = value;
    let postedTimeMilliseconds : any =  postedTime.getTime();

    let today : Date = new Date();
    let todayWithTime : any = new Date(today.getTime())

    var timeInMinutes = Math.round(( todayWithTime - postedTimeMilliseconds ));
 
    return timeInMinutes;
    
  }

}
