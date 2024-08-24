import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterPage } from './register.page';
import { RegisterPageRoutingModule } from './register-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterFormModule } from '../../ui/register-form/register-form.module';

@NgModule({
  imports: [CommonModule, RegisterPageRoutingModule, FormsModule, RegisterFormModule],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
