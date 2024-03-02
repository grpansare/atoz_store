import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delieveryhomepage',
  templateUrl: './delieveryhomepage.component.html',
  styleUrl: './delieveryhomepage.component.css'
})
export class DelieveryhomepageComponent {
 
  constructor(private router:Router){
  }
  deliverypage(){
    this.router.navigateByUrl('delieveryhome');
  }



}
