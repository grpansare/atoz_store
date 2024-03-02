import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrl: './productsummary.component.css'
})
export class ProductsummaryComponent implements OnInit {

  products:any=[];
  userinfo:any={};
  sum:number=0;

  baseurl="http://localhost:8081"
  constructor(private http:HttpClient,private cartService: CartServiceService,private route: ActivatedRoute){
    this.products=this.cartService.getCartProducts();


  }
  ngOnInit(): void {
    this.userinfo=sessionStorage.getItem('user');
   this.userinfo=JSON.parse(this.userinfo)
    // console.log(this.userinfo)

    this.products.forEach((element: { price: number; }) => {
      this.sum=this.sum+element.price
      console.log("total :"+this.sum)
    });

  }


   total =() =>{
    this.products.array.forEach((element: { price: number; }) => {
      this.sum=this.sum+element.price
    });
  }


  // }
}
