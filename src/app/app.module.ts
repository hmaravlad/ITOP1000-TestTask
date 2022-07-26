import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import CurrenciesModule from './currencies/currencies.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CurrenciesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
