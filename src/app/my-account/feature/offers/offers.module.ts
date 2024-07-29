import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OffersPage } from './offers.page';
import { OffersPageRoutingModule } from './offers-routing.module';

@NgModule({
  imports: [CommonModule, OffersPageRoutingModule],
  declarations: [OffersPage],
})
export class OffersPageModule {}
