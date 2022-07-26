import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';

export interface Currency {
  cc: string,
  rate: number,
}

@Injectable({
  providedIn: 'root',
})
export default class CurrencyService {
  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .pipe(
        retry(3),
        map((cs) => {
          cs.push({ cc: 'UAH', rate: 1 });
          return cs;
        }),
      );
  }
}
