import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('../offer-exchange/offer-exchange.module').then(
        m => m.OfferExchangePageModule
      )
  },
  {
    path: 'yours',
    loadChildren: () => 
      import('../your-exchange-offers/your-exchange-offers.module').then(
        m => m.YourExchangeOffersPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeOfferShellRoutingModule { }
