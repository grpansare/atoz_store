import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorhomepage',
  templateUrl: './vendorhomepage.component.html',
  styleUrl: './vendorhomepage.component.css'
})
export class VendorhomepageComponent {
 

  showdropdown:boolean=false;
  product:any={
    productname:"iPhone",
    price:40000,
    category:"electronics"
  };
  products:any=[];
  constructor(private router:Router){
    this.products=[
      {
        productname:"iPhone",
        price:40000,
        category:"electronics"
      },
      {
        productname:"Laptop",
        price:70000,
        category:"electronics"
      },
      {
        productname:"Charger",
        price:2000,
        category:"electronics"
      },
      {
        productname:"Keyboard",
        price:4000,
        category:"electronics"
      },
      {
        productname:"TV",
        price:100000,
        category:"electronics"
      },
      {
        productname:"Mouse",
        price:250,
        category:"electronics"
      }
    ]
  }
  changeDropDown(){
   this.showdropdown=!this.showdropdown;
   
  } 
  showprodinfo(product:any){
    this.product=product;
  }


}
function info(product: any, any: any) {
  throw new Error('Function not implemented.');
}
