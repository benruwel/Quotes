import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassedCount'
})
export class TimePassedCountPipe implements PipeTransform {

  transform(value: any): number {

    let currentTime : Date = new Date();
    let time : any = new Date(currentTime.getTime())

    var timeDifference = Math.abs(value - time)

    const secondsInAMinute = 60;

    var timeDifferenceSeconds = timeDifference * 0.001;

    var timeCounter = timeDifferenceSeconds / secondsInAMinute;

    if (timeCounter > 0 && value > time) {
      return timeCounter
    } else {
      return 0;
    }
  }

}
