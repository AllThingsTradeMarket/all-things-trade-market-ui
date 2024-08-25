import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { loginFormModule } from '../../ui/login-form/login-form.module';

@NgModule({
  imports: [CommonModule, LoginPageRoutingModule, loginFormModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
