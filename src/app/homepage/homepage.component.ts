import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   showdropdown:boolean=false;
   constructor(private router:Router){}
   changeDropDown(){
    this.showdropdown=!this.showdropdown;
   }
   logout(){
    this.router.navigateByUrl("home/logout");
   }
}
