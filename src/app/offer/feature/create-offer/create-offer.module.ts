import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateOfferPage } from './create-offer.page';
import { CreateOfferPageRoutingModule } from './create-offer-routing.module';

@NgModule({
  imports: [CommonModule, CreateOfferPageRoutingModule],
  declarations: [CreateOfferPage],
})
export class CreateOfferPageModule {}
