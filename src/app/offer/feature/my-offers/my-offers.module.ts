import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyOffersPage } from './my-offers.page';
import { MyOffersPageRoutingModule } from './my-offers-routing.module';
import { OffersListModule } from '../../ui/offers-list/offers-list.module';

@NgModule({
  imports: [CommonModule, MyOffersPageRoutingModule, OffersListModule],
  declarations: [MyOffersPage],
})
export class MyOffersPageModule {}
