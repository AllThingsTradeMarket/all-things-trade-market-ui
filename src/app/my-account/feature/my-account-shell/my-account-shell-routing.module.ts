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
    },
    {
        path: 'register',
        loadChildren: () =>
            import('../register/register.module').then(
                m => m.RegisterPageModule
            )
    },
    {
        path: 'login',
        loadChildren: () =>
            import('../login/login.module').then(
                m => m.LoginPageModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyAccountShellRoutingModule { }
