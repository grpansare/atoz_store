import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrls: ['./vendordetails.component.css']
})
export class VendordetailsComponent {
  showdropdown:boolean=false;
  product:any={
    productname:"iPhone",
    price:40000,
    category:"electronics",
    description:"Iphone 14 pro max is a fastest model"
  };
  products:any=[];
  http: any;
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

  changeDropDown() {
    this.showdropdown = !this.showdropdown;
  }

  showprodinfo(product: any) {
    this.product = product;
  }

  // You need to provide a URL for the HTTP request
  fetchData() {
    this.http.get(`http://localhost:8081/vendor/getProducts/${this.vendor.username}`).subscribe
    ((data: any) => {
this.products=data;
console.log(this.products)
this.product=this.products[0];
    });
  }
  deleteProduct(productid:any){
    this.http.delete(`http://localhost:8081/product/deleteProductById/${productid}`).subscribe(
      (response:any)=>{
            this.fetchData()
      },
      (error:any)=>{

      }
    )
  }
}
