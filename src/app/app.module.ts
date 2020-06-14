import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDescriptionComponent } from './components/quote-description/quote-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
