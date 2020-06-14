import { Quote } from './../models/quote';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() quotes : Quote;

  constructor() { }

  private highestUpVote(totalUpVotes : number) {
    if (this.quotes.upVote) {
      
    }
  }

}
