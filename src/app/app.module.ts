import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDescriptionComponent } from './components/quote-description/quote-description.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { TimePassedCountPipe } from './pipes/time-passed-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDescriptionComponent,
    HighlighterDirective,
    TimePassedCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
