import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('../offer-exchange/offer-exchange.module').then(
        m => m.OfferExchangePageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeOfferShellRoutingModule { }
