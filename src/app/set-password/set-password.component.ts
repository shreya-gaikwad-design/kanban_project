import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.css'
})
export class SetPasswordComponent {
  newPassword = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onNewPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newPassword = input.value;
  }

  onConfirmPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.confirmPassword = input.value;
  }

  onSubmit() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Password reset confirmed');
    } else {
      console.log('Passwords do not match');
    }
  } 
}
