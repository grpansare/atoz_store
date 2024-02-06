
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css',
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', []),
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class WelcomepageComponent {

  email: string = '';
  message: string = '';

  sendEmail() {

    console.log('Email sent:', this.email, 'Message:', this.message);
  }
  constructor(private router: Router) {}

  animationState = 'out';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    // Adjust the offset value as needed
    if (scrollPosition > 100) {
      this.animationState = 'in';
    } else {
      this.animationState = 'out';
    }
  }
  handleSignIn() {

    this.router.navigateByUrl('signin');
  }

  handleLogIn() {

    this.router.navigateByUrl('login');
  }

}
