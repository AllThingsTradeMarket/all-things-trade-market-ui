import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../profile/profile.module').then(
                m => m.ProfilePageModule
            )
    },
    {
        path: 'offers',
        loadChildren: () =>
            import('../offers/offers.module').then(
                m => m.OffersPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyAccountShellRoutingModule { }
