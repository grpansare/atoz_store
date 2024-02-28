import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceComponent } from '../Services/cart-service/cart-service.component';
import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent {
  products:any=[];
  user:any={};

  sum:number=0;
  quantity: number[] = Array.from({ length: 100 }, (_, i) => i + 1);




  baseurl="http://localhost:8081"
  constructor(private http:HttpClient,private router:Router,private cartService: CartServiceService){
  this.user=localStorage.getItem('user');
  this.user=JSON.parse(this.user);

  }
  ngOnInit(): void {


    this.getCartProducts()





}


getCartProducts(){
  this.http.get<any[]>(this.baseurl+`/cart/getcartproducts/${this.user.username}`).subscribe(
response=>{
  console.log(response);

  this.products=response;
  console.log(this.products)
  this.cartService.setCartProducts(this.products);
this.calculateprice();

},
error=>{
  console.log(error);
}
  )
}
removeFromCart(product:any){

  const formdata=new FormData();
  formdata.append("username",this.user.username);
  formdata.append("cartproductid",product.cartproductId);
  this.http.post(this.baseurl+`/cart/deleteFromCart`,formdata).subscribe(
    response=>{
      console.log(response);
       // Subtract the price of the removed product from the total sum

     this.getCartProducts()
    },
    error=>{
      console.log(error);
    }
      )
}
calculateprice(){
  this.sum=0;
  this.products.forEach((element:any) => {
    console.log(element)
    this.sum=this.sum+element.price
    console.log("total :"+this.sum)
  });
}
gotoCategory(){
  this.router.navigateByUrl("home")
}
}
