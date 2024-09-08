import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOfferTileOfferedProductSectionComponent } from './exchange-offer-tile-offered-product-section.component';
import { OfferTileSmallModule } from '../../../offer/ui/offer-tile-small/offer-tile-small.module';

@NgModule({
  imports: [CommonModule, OfferTileSmallModule],
  declarations: [ExchangeOfferTileOfferedProductSectionComponent],
  exports: [ExchangeOfferTileOfferedProductSectionComponent]
})
export class ExchangeOfferTileOfferedProductSectionModule {
  
}