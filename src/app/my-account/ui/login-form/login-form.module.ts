import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { loginFormComponent } from './login-form.component'; 
 
@NgModule({ 
   imports: [CommonModule], 
   declarations: [loginFormComponent], 
   exports: [loginFormComponent] 
}) 
export class loginFormModule {} 
