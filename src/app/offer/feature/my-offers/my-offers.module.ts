import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyOffersPage } from './my-offers.page';
import { MyOffersPageRoutingModule } from './my-offers-routing.module';

@NgModule({
  imports: [CommonModule, MyOffersPageRoutingModule],
  declarations: [MyOffersPage],
})
export class MyOffersPageModule {}
