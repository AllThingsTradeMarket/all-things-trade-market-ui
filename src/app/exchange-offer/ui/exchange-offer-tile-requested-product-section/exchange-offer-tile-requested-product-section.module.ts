import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOfferTileRequestedProductSectionComponent } from './exchange-offer-tile-requested-product-section.component';
import { OfferTileSmallModule } from '../../../offer/ui/offer-tile-small/offer-tile-small.module';

@NgModule({
  imports: [CommonModule, OfferTileSmallModule],
  declarations: [ExchangeOfferTileRequestedProductSectionComponent],
  exports: [ExchangeOfferTileRequestedProductSectionComponent]
})
export class ExchangeOfferTileRequestedProductSectionModule {}