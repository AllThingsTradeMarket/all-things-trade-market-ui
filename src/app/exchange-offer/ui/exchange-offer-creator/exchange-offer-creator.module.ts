import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOfferCreatorComponent } from './exchange-offer-creator.component';
import { OfferSelectableTileModule } from '../offer-selectable-tile/offer-selectable-tile.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, OfferSelectableTileModule, FormsModule, ButtonModule, RouterModule],
  declarations: [ExchangeOfferCreatorComponent],
  exports: [ExchangeOfferCreatorComponent]
})
export class ExchangeOfferCreatorModule {}