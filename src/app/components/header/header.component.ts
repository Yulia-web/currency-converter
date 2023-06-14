import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exchangeRates: any[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(
      (response) => {
        this.exchangeRates = response;
      },
      (error) => {
        console.log('Помилка отримання курсу валют', error);
      }
    );
  }
}
