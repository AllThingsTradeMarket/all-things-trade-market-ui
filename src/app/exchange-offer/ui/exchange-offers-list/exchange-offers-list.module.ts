import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOffersListComponent } from './exchange-offers-list.component';
import { ExchangeOfferTileModule } from '../exchange-offer-tile/exchange-offer-tile.module';

@NgModule({
  imports: [CommonModule, ExchangeOfferTileModule],
  declarations: [ExchangeOffersListComponent],
  exports: [ExchangeOffersListComponent]
})
export class ExchangeOffersListModule {}