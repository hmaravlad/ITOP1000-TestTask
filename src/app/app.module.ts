import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import CurrenciesModule from './currencies/currencies.module';
import HeaderComponent from './header/header.component';
import ErrorBoxComponent from './error-box/error-box.component';
import CentrerComponent from './centrer/centrer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorBoxComponent,
    CentrerComponent,
  ],
  imports: [
    BrowserModule,
    CurrenciesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
