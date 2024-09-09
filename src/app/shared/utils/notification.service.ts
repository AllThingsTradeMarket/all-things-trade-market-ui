import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(private snackBar: MatSnackBar) { }

    displayNotification(message: string, duration: number = 3000) {
        this.snackBar.open(message, 'Close', {
            duration: duration,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
};
