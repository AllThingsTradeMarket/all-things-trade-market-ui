import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OffersListComponent } from './offers-list.component';
import { OfferTileModule } from '../offer-tile/offer-tile.module';

@NgModule({
  imports: [CommonModule, OfferTileModule],
  declarations: [OffersListComponent],
  exports: [OffersListComponent]
})
export class OffersListModule {}
