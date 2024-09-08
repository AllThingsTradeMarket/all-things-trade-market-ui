import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeOfferTileActionsComponent } from './exchange-offer-tile-actions.component';
import { ButtonModule } from '../../../shared/ui/button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [ExchangeOfferTileActionsComponent],
  exports: [ExchangeOfferTileActionsComponent]
})
export class ExchangeOfferTileActionsModule {}