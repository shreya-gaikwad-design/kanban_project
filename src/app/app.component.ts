import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';  
import { FormsModule } from '@angular/forms';   
import { Router } from '@angular/router';
//import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanbanproject';     
  otp = '';   
  email ='';    
  otpSent = false;
  correctOtp = '1234';

  constructor(private router: Router) {}

  sendOtp() {
    if (this.email) {
      this.otpSent = true; 
    } else {
      alert('Please enter your email');
    }
  }
  verifyOtp() {
    if (this.otp === this.correctOtp) { 
      this.router.navigate(['/set-password']);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
  navigateToSetPassword() {
    this.router.navigate(['/set-password']);
  }
}
