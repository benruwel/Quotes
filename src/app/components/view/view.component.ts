import { Quote } from './../../models/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  quotes : Quote[] = [
    new Quote(1, 'Keep calm', 'Ben Ruwel', 'ben', new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteGoal(index) {
    this.quotes.splice(index, 1);
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

}
