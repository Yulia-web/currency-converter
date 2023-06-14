import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency/currency.service';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnInit {
  exchangeRates: any[] = [];
  selectedCurrency1: string = 'EUR';
  amount1: number = 0;
  selectedCurrency2: string = 'USD';
  amount2: number = 0;
  result1: number = 0;
  result2: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((exchangeRates: any) => {
      this.exchangeRates = exchangeRates;
    });
  }

  updateAmount2() {
    const rate = this.getExchangeRate(this.selectedCurrency1);
    this.result1 = this.amount1 * rate;
  }

  updateAmount1() {
    const rate = this.getExchangeRate(this.selectedCurrency2);
    this.result2 = this.amount2 * rate;
  }

  updateAmount() {
    const rate1 = this.getExchangeRate(this.selectedCurrency1);
    const rate2 = this.getExchangeRate(this.selectedCurrency2);

    if(this.amount1 > 0 && this.selectedCurrency1 != 'USD' || this.selectedCurrency2 != 'USD') {
      this.result1 = (rate1*this.amount1)/rate2
    }
    if(this.amount2 > 0 && this.selectedCurrency1 != 'USD' || this.selectedCurrency2 != 'USD') {
      this.result2 = (rate2*this.amount2)/rate1
    }
    if(this.selectedCurrency1 == 'USD') {
      this.result1 = this.amount1/rate2
    }
    if(this.selectedCurrency2 == 'USD') {
      this.result2 = this.amount2/rate1
    }
  }

  getExchangeRate(currencyFrom: string): number {
    const rateObj = this.exchangeRates.find(rate => rate.cc === currencyFrom);
    return rateObj ? rateObj.rate : 1;
  }
}
