import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TopOffersBarModule } from '../../ui/top-offers-bar/top-offers-bar.module';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, TopOffersBarModule],
  declarations: [HomePage],
})
export class HomePageModule {}
