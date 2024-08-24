import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(password: string, repeatPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
        const passwordControl = formGroup.get(password);
        const repeatPasswordControl = formGroup.get(repeatPassword);

        if (!passwordControl || !repeatPasswordControl) {
            return null;
        }

        if (repeatPasswordControl.errors && !repeatPasswordControl.errors['passwordMismatch']) {
            return null;
        }

        if (passwordControl.value !== repeatPasswordControl.value) {
            repeatPasswordControl.setErrors({ passwordMismatch: true });
        } else {
            repeatPasswordControl.setErrors(null);
        }

        return null;
    };
}
