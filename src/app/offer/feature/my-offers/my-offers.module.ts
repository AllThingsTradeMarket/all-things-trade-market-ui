import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyOffersPage } from './my-offers.page';
import { MyOffersPageRoutingModule } from './my-offers-routing.module';
import { MyOffersListModule } from '../../ui/my-offers-list/my-offers-list.module';

@NgModule({
  imports: [CommonModule, MyOffersPageRoutingModule, MyOffersListModule],
  declarations: [MyOffersPage],
})
export class MyOffersPageModule {}
