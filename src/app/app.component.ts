import { Component, OnInit } from '@angular/core';
import CurrencyService from './currencies/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent implements OnInit {
  constructor(private currencyService: CurrencyService) { }

  title = 'ITOP1000-TestTask';

  isApiError = false;

  ngOnInit(): void {
    this.getCurrencyData();
  }

  retry(): void {
    if (this.isApiError) {
      this.getCurrencyData();
    }
  }

  getCurrencyData(): void {
    this.currencyService.getExchangeRates().subscribe({
      next: () => { this.isApiError = false; },
      error: () => { this.isApiError = true; },
    });
  }
}
