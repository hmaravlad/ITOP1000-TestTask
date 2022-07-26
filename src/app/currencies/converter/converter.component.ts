import { Component, OnInit } from '@angular/core';
import CurrencyService, { Currency } from '../currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export default class ConverterComponent implements OnInit {
  constructor(private currencyService: CurrencyService) { }

  currencies: Currency[] = [];

  inputRates: { [key: string]: number } = {};

  inputValues: { [key: string]: number } = {};

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((values) => {
      this.currencies = values;
      this.inputRates = {
        1: this.currencies[0]?.rate || 1,
        2: this.currencies[1]?.rate || 1,
      };
      this.inputValues = {
        1: 1,
        2: ConverterComponent.calculateValue(1, this.currencies[0]?.rate, this.currencies[1]?.rate) || 1,
      };
    });
  }

  recalculate(selectNumber: 1 | 2) {
    const oppositeInput = selectNumber === 1 ? 2 : 1;
    this.convert(this.inputValues[oppositeInput].toString(), oppositeInput);
  }

  convert(newValueRaw: string, inputNumber: 1 | 2) {
    const oppositeInput = inputNumber === 1 ? 2 : 1;
    const newValue = Number.parseFloat(newValueRaw);
    this.inputValues[oppositeInput] = ConverterComponent.calculateValue(
      newValue,
      this.inputRates[inputNumber],
      this.inputRates[oppositeInput],
    );
  }

  static calculateValue(value1: number, rate1: number, rate2: number): number {
    return (value1 * rate1) / rate2;
  }
}
