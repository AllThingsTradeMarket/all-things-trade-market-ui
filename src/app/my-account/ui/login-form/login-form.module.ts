import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { LoginFormComponent } from './login-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { ContainerModule } from '../../../shared/ui/container/container.module';
import { RouterModule } from '@angular/router';
 
@NgModule({ 
   imports: [CommonModule, ReactiveFormsModule, ButtonModule, ContainerModule, RouterModule],
   declarations: [LoginFormComponent], 
   exports: [LoginFormComponent] 
}) 
export class loginFormModule {} 
