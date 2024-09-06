import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyOffersListComponent } from './my-offers-list.component';
import { MyOfferTileModule } from '../my-offer-tile/my-offer-tile.module';

@NgModule({
  imports: [CommonModule, MyOfferTileModule],
  declarations: [MyOffersListComponent],
  exports: [MyOffersListComponent]
})
export class MyOffersListModule {}