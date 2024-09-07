import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersListPage } from './offers-list.page';

const routes: Routes = [
  {
    path: '',
    component: OffersListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersListPageRoutingModule {}