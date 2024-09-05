import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/auth.service';
import { CURRENT_USER_LOCAL_STORAGE_KEY } from '../../../shared/constants/constants';

@Component({
   selector: 'tm-login-form',
   templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
   userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
   });

   constructor(private authService: AuthService, private router: Router) { };

   onSubmit() {
      if (this.userForm.valid) {
         const createdUser = this.userForm.value;
         this.authService.signIn({
            email: createdUser.email!,
            password: createdUser.password!,
         }).subscribe((response) => {
            try {
               const user = response.data;
               localStorage.setItem(CURRENT_USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
               this.authService.setIsLogged(true);
               this.router.navigate(['/']);
            } catch (error) {
               console.error(`error occured: ${error}`);
            }
         });
      } else {
         console.error('Form is invalid');
      }
   }
} 
