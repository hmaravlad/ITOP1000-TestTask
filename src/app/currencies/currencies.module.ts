import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import RateListComponent from './rate-list/rate-list.component';

@NgModule({
  declarations: [
    RateListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    RateListComponent,
  ],
})
export default class CurrenciesModule { }
