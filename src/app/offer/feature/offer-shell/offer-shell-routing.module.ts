import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () =>
            import('../create-offer/create-offer.module').then(
                m => m.CreateOfferPageModule
            )
    },
    {
        path: 'my-offers',
        loadChildren: () =>
            import('../my-offers/my-offers.module').then(
                m => m.MyOffersPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OfferShellRoutingModule { }
