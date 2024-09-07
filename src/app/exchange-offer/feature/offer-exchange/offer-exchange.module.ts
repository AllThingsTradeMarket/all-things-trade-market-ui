import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OfferExchangePage } from './offer-exchange.page';
import { OfferExchangePageRoutingModule } from './offer-exchange-routing.module';
import { RouterModule } from '@angular/router';
import { OfferTileModule } from '../../../offer/ui/offer-tile/offer-tile.module';
import { ExchangeOfferCreatorModule } from '../../ui/exchange-offer-creator/exchange-offer-creator.module';

@NgModule({
  imports: [CommonModule, OfferExchangePageRoutingModule, RouterModule, OfferTileModule, ExchangeOfferCreatorModule],
  declarations: [OfferExchangePage],
})
export class OfferExchangePageModule {}