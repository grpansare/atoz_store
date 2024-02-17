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
    category:"electronics",
    description:"Iphone 14 pro max is a fastest model"
  };
  products:any=[];
  constructor(private router:Router){
    this.products=[
      {
        productname:"iPhone",
        price:40000,
        category:"electronics",
        description:"Iphone 14 pro max is a fastest model"

      },
      {
        productname:"Laptop",
        price:70000,
        category:"electronics",
        description:" Laptop is a 4GBRAM model"

      },
      {
        productname:"Charger",
        price:2000,
        category:"electronics",
        description:"Charger  has 1.5 w speed charger"

      },
      {
        productname:"Keyboard",
        price:4000,
        category:"electronics",
        description:"Keyboard is use for PC "

      },
      {
        productname:"TV",
        price:100000,
        category:"electronics",
        description:"Panasonic Tv with 32 inches size with high definition screen"

      },
      
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
