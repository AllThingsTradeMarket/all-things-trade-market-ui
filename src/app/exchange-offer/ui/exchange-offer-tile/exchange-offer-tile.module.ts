import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOfferTileComponent } from './exchange-offer-tile.component';
import { OfferTileSmallModule } from '../../../offer/ui/offer-tile-small/offer-tile-small.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExchangeOfferTileOfferedProductSectionModule } from '../exchange-offer-tile-offered-product-section/exchange-offer-tile-offered-product-section.module';
import { ExchangeOfferTileRequestedProductSectionModule } from '../exchange-offer-tile-requested-product-section/exchange-offer-tile-requested-product-section.module';
import { ExchangeOfferTileActionsModule } from '../exchange-offer-tile-actions/exchange-offer-tile-actions.module';

@NgModule({
  imports: [
    CommonModule, 
    OfferTileSmallModule, 
    FontAwesomeModule,
    ExchangeOfferTileOfferedProductSectionModule,
    ExchangeOfferTileRequestedProductSectionModule,
    ExchangeOfferTileActionsModule
  ],
  declarations: [ExchangeOfferTileComponent],
  exports: [ExchangeOfferTileComponent]
})
export class ExchangeOfferTileModule {}