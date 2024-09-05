import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavDropdownItemModule } from '../nav-dropdown-item/nav-dropdown-item.module';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule, NavDropdownItemModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
