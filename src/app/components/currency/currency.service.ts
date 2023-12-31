import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'; // Замініть на реальний URL API

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
