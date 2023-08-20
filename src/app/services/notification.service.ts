import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { sanckBarDuration } from '../data/constants/services';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  confirmationMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: sanckBarDuration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'confirmation-toast',
    } as MatSnackBarConfig);
  }
  errorMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: sanckBarDuration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'error-toast',
    } as MatSnackBarConfig);
  }
}
