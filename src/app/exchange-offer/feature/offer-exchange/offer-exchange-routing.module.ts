import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferExchangePage } from './offer-exchange.page';

const routes: Routes = [
  {
    path: '',
    component: OfferExchangePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferExchangePageRoutingModule {}
