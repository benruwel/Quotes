import { Quote } from './../../models/quote';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() quote : Quote

 totalUpVotes : number;

  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.quote.upVote += 1;
  }

  downVote() {
    this.quote.downVote +=1;
  }
 
}
