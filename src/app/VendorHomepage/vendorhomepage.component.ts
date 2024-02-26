import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorhomepage',
  templateUrl: './vendorhomepage.component.html',
  styleUrl: './vendorhomepage.component.css'
})
export class VendorhomepageComponent {
 

  constructor(private router:Router){
  }
  vendorpage(){
    this.router.navigateByUrl('vendor');
  }

}