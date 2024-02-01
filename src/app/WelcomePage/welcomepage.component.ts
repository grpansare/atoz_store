import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  email: string = '';
  message: string = '';

  sendEmail() {

    console.log('Email sent:', this.email, 'Message:', this.message);
  }
  constructor(private router: Router) {}

  handleSignIn() {
    
    this.router.navigateByUrl('signin');
  }

  handleLogIn() {
    
    this.router.navigateByUrl('login');
  }
 
}
