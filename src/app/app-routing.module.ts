import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/feature/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./my-account/feature/my-account-shell/my-account-shell.module').then(m => m.MyAccountShellModule)
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offer/feature/offer-shell/offer-shell.module').then(m => m.OfferShellModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
