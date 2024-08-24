import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, LoginPageRoutingModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
