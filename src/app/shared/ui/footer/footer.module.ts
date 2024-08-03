import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { LogoModule } from '../logo/logo.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, LogoModule, FontAwesomeModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
