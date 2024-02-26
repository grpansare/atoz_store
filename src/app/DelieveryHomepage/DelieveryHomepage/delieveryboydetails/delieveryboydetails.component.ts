import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delieveryboydetails',
  templateUrl: './delieveryboydetails.component.html',
  styleUrl: './delieveryboydetails.component.css'
})
export class DelieveryboydetailsComponent {
  showdropdown:boolean=false;
  order:any={
    availability:"available",
    username:"Shardul",
    email:"shardul@gmail.com",
    orderid:1,
    contactno:9887909009,
    street:"Baner",
    state:"Maharahtra",

    city:"Pune",
    country:"India",
    pincode:411058,
    landmark:"banergaon",
    productname:"Shirts",
    price:2000,

  };
  orders:any=[];
  constructor(private router:Router){
    this.orders=[
      {
        availability:"available",
    username:"Shardul",
    email:"shardul@gmail.com",
    orderid:1,
    contactno:9887909009,
    street:"Baner",
    state:"Maharahtra",

    city:"Pune",
    country:"India",
    pincode:411058,
    landmark:"banergaon",
    productname:"Shirts",
    price:2000,
      },
      {
        availability:" not available",
    username:"Soham",
    email:"soham@gmail.com",
    orderid:1,
    contactno:9887909009,
    street:"Baner",
    state:"Maharahtra",

    city:"Pune",
    country:"India",
    pincode:411058,
    landmark:"banergaon",
    productname:"Pants",
    price:1000,
      },
      {
        availability:"available",
    username:"Ajay",
    email:"ajay@gmail.com",
    orderid:1,
    contactno:9887909009,
    street:"Baner",
    state:"Maharahtra",

    city:"Pune",
    country:"India",
    pincode:411058,
    landmark:"banergaon",
    productname:"Laptop",
    price:42000,
      },
      {
        availability:"available",
    username:"Shreya",
    email:"shreya@gmail.com",
    orderid:1,
    contactno:9887909009,
    street:"Baner",
    state:"Maharahtra",

    city:"Pune",
    country:"India",
    pincode:411058,
    landmark:"banergaon",
    productname:"Lipstick",
    price:500,
      },
     
    ]
  }
  changeDropDown(){
   this.showdropdown=!this.showdropdown;
   
  } 
  showprodinfo(order:any){
    this.order=order;
  }

  
}
function info(order: any, any: any) {
  throw new Error('Function not implemented.');
}



