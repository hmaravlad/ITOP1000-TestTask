import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import RateListComponent from './rate-list/rate-list.component';
import ConverterComponent from './converter/converter.component';

@NgModule({
  declarations: [
    RateListComponent,
    ConverterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    RateListComponent,
    ConverterComponent,
  ],
})
export default class CurrenciesModule { }
