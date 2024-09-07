import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OffersListPage } from './offers-list.page';
import { OffersListPageRoutingModule } from './offers-list-routing.module';
import { OffersListModule } from '../../ui/offers-list/offers-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, OffersListPageRoutingModule, OffersListModule, RouterModule],
  declarations: [OffersListPage],
})
export class OffersListPageModule {}