import { Quote } from './../../models/quote';
import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

}
