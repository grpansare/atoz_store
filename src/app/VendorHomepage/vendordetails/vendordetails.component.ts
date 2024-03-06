import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrl: './vendordetails.component.css'
})
export class VendordetailsComponent {
  showdropdown:boolean=false;
  product:any={
    productid:"01",
    productname:"iPhone",
    price:40000,
    category:"electronics",
    description:"Iphone 14 pro max is a fastest model",
    size:["128 GB", "256 GB", "512 GB", "1 TB"],
    color:["White", "Black", "Red", "Blue", "Green"]
  };
  products:any=[];
  constructor(private router:Router){
    this.products=[
      {
        productid:"01",
        productname:"iPhone",
        price:40000,
        category:"electronics",
        description:"Iphone 14 pro max is a fastest model",
        size:["128 GB", "256 GB", "512 GB", "1 TB"],
        color:["White", "Black", "Red", "Blue", "Green"]
      },
      {    
        productid:"02",
        productname:"Laptop",
        price:70000,
        category:"electronics",
        description:" Laptop is a 8GB RAM model",
        size:["128 GB", "256 GB", "512 GB", "1 TB"],
        color:["White", "Black"]

      },
      {
        productid:"03",
        productname:"Charger",
        price:2000,
        category:"electronics",
        description:"Charger  has 1.5 w speed charger",
        size:["standard"],
        color:["White", "Black"]

      },
      {
        productid:"04",
        productname:"Keyboard",
        price:4000,
        category:"electronics",
        description:"Keyboard is use for PC ",
        size:["standard"],
        color:["White", "Black"]

      },
      {
        productid:"05",
        productname:"TV",
        price:100000,
        category:"electronics",
        description:"Panasonic Tv with 32 inches size with high definition screen",
        size:["32 inches", "43 inches", "56 inches", "72 inches"],
        color:["White", "Black"]

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


