import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YourExchangeOffersPage } from './your-exchange-offers.page';
import { YourExchangeOffersPageRoutingModule } from './your-exchange-offers-routing.module';
import { RouterModule } from '@angular/router';
import { ExchangeOffersListModule } from '../../ui/exchange-offers-list/exchange-offers-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    YourExchangeOffersPageRoutingModule,
    RouterModule,
    ExchangeOffersListModule,
    FormsModule
  ],
  declarations: [YourExchangeOffersPage],
})
export class YourExchangeOffersPageModule { }