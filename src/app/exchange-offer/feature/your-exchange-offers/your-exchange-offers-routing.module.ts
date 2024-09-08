import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourExchangeOffersPage } from './your-exchange-offers.page';

const routes: Routes = [
  {
    path: '',
    component: YourExchangeOffersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourExchangeOffersPageRoutingModule {}