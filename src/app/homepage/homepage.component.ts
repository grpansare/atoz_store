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

   searchProd(searchpro:any){

    this.router.navigate(['home/searchproduct', searchpro]);
   }
   goToHome(){
    this.router.navigateByUrl('home')
   }

}
