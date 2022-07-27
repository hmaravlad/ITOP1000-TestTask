import { Component, OnInit } from '@angular/core';
import CurrencyService, { Currency } from '../currency.service';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css'],
})
export default class RateListComponent implements OnInit {
  constructor(private currencyService: CurrencyService) { }

  interestingCurrencies = ['USD', 'EUR'];

  currencies: Currency[] = [];

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((values) => {
      this.currencies = values.filter((cur) => this.interestingCurrencies.includes(cur.cc));
    });
  }
}
