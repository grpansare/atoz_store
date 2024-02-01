import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   showdropdown:boolean=false;
   changeDropDown(){
    this.showdropdown=!this.showdropdown;
   }
}
