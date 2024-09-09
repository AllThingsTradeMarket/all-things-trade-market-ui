import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../utils/userValidation';
import { AuthService } from '../../utils/auth.service';
import { LoadingService } from '../../../shared/utils/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tm-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  }, {
    validators: passwordMatchValidator('password', 'repeatPassword')
  });

  constructor(private authService: AuthService, private loadingService: LoadingService, private router: Router) { };

  onSubmit() {
    if (this.userForm.valid) {
      const createdUser = this.userForm.value;
      this.loadingService.setIsLoading(true);
      this.authService.createUser({
        email: createdUser.email!,
        password: createdUser.password!,
        username: createdUser.username!,
        firstName: createdUser.firstName!,
        lastName: createdUser.lastName!
      }).subscribe(() => {
        this.loadingService.setIsLoading(false);
        this.router.navigate(['my-account/login']);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
