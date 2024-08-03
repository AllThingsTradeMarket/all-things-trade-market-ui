import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NavModule } from '../nav/nav.module';
import { LogoModule } from '../logo/logo.module';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  imports: [CommonModule, NavModule, LogoModule, SearchBarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
