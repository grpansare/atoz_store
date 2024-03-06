import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceComponent } from '../Services/cart-service/cart-service.component';
import { CartServiceService } from '../Services/cart-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

declare var Razorpay: any;


@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrl: './productsummary.component.css'
})
export class ProductsummaryComponent implements OnInit {

  products: any[] = [];
  userinfo: any = {};
  payment:any = {};
  sum: number = 0;


   baseUrl: any = "http://localhost:8081";
  addressForm!: FormGroup;
  selectedAddressOption:any="";

  constructor(private http: HttpClient,private router: Router, private cartService: CartServiceService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.userinfo = JSON.parse(userData);
    } else {
      this.userinfo = { address: {} };
    }

    console.log("user info : ", this.userinfo);

    this.getCartProducts();



    // Initialize addressForm here after userinfo is populated
    this.addressForm = new FormGroup({
      street: new FormControl(this.userinfo.address?.street || '', Validators.required),
      city: new FormControl(this.userinfo.address?.city || '', Validators.required),
      state: new FormControl(this.userinfo.address?.state || '', Validators.required),
      landMark: new FormControl(this.userinfo.address?.landMark || '', Validators.required),
      country: new FormControl(this.userinfo.address?.country || '', Validators.required),
      pincode: new FormControl(this.userinfo.address?.pincode || '', Validators.required)
    });
  }

  // total = () => {
  //   this.products.forEach((element: { price: number; }) => {
  //     this.sum = this.sum + element.price;
  //   });
  // }

  get street(): any {
    return this.addressForm.get('street');
  }

  get city(): any {
    return this.addressForm.get('city');
  }

  get state(): any {
    return this.addressForm.get('state');
  }

  get landMark(): any {
    return this.addressForm.get('landMark');
  }

  get country(): any {
    return this.addressForm.get('country');
  }

  get pincode(): any {
    return this.addressForm.get('pincode');
  }

  getCartProducts(){
    this.http.get<any[]>(`${this.baseUrl}/cart/getcartproducts/${this.userinfo?.username}`).subscribe(
  response=>{
    console.log(response);

    this.products=response;
    console.log(this.products)
   this.calculateprice()


  },
  error=>{
    console.log(error);
  }
    )
  }
  addAddress() {
    if (this.addressForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error in Address',
        text: 'Please make sure to fill in all required address fields correctly.',
      });

      return;
    }

    console.log("Total Price :", this.sum);
    const addressData = this.addressForm.value;
    console.log(addressData);
    /*
      const address={
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        landMark: addressData.landMark,
        country: addressData.country,
        pincode: addressData.pincode
      }*/

    this.http.post(`${this.baseUrl}/order/createTransaction/${this.userinfo?.username}/${this.sum}`, addressData).subscribe(
      (response) => {
        console.log("response", response);
        this.openTransactionModal(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openTransactionModal(response: any) {
    console.log(response.key);
    console.log(response.orderId);

    var options = {
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: "AtoZStore",
      description: "AtoZStore Order Payment Page",
      image: "https://www.shutterstock.com/image-vector/indian-republic-day-celebrations-26th-260nw-1898161372.jpg",
      handler: (response: any) => {
        this.processResponse(response);
      },
      prefill: {
        name: "AtoZStore Order Payment",
        email: "arkhambatman08@gmail.com",
        contact: "+ 91 8762718271"
      },
      notes: {
        address: "E-Commerce Purchase Order"
      },

      theme: {
        color: "#000000"
      }
    };
    console.log(options);
    // this.payment=options;
    //sessionStorage.setItem('options',JSON.stringify(options));
    var razorpayObject = new Razorpay(options);
    razorpayObject.open();

  }
/*
  processResponse(resp:any){
    sessionStorage.setItem('resp', resp);
    console.log(resp);
    this.router.navigateByUrl('/home/profile');
  }
*/

processResponse(resp: any) {
  console.log(resp)


  // Extract date and time separately
  const currentDate = new Date();
const date = currentDate.toISOString().split('T')[0];
const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
const time = currentDate.toLocaleTimeString(undefined, { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Get local time in 24-hour format without milliseconds
console.log(date + " == " + time);



    const details ={
      razorpay_order_id: resp.razorpay_order_id,
      razorpay_payment_id: resp.razorpay_payment_id,
      razorpay_signature: resp.razorpay_signature,
      date: date,
      time: time
    }

    const url = `${this.baseUrl}/order/generateOrder/${this.userinfo?.username}/${this.sum}`;
  // Include query parameters in the URL
  const queryParams = `?razorpay_order_id=${details.razorpay_order_id}&razorpay_payment_id=${details.razorpay_payment_id}&razorpay_signature=${details.razorpay_signature}&date=${details.date}&time=${details.time}`;

  this.http.post(url + queryParams, {}).subscribe(
    (response: any) => {
        console.log("Response:", response); // Log the entire response to inspect it
         if(response){
        // Assuming response is a string containing the success message
        Swal.fire({
            icon: 'success',
            title: 'Order Successful',
            text: "Order has been placed successfully!", // Use the response directly
        });

        // Optionally, navigate to the order history page
        this.router.navigateByUrl('/home/orderHistory');
      }
    },
    (error) => {
        console.log("Error:", error); // Log any errors
        // Handle errors if needed
    }
);
  }
  calculateprice(){
    this.sum=0;
    this.products.forEach((element:any) => {
      console.log(element)
      if(element.offer!=='null' && element.offer!==null){

      this.sum=this.sum+this.calculateDiscountedPrice(element)*element.quantity;
      }
      else{
      this.sum=this.sum+element.price*element.quantity
      }
      console.log("total :"+this.sum)
    });
  }
  gotoCategory(){
    this.router.navigateByUrl("home")
  }

  calculateDiscountedPrice(element:any):number{
    const discountPercentage = parseFloat(element.offer.replace('%', ''));



    const finalPrice = element.price - (element.price * discountPercentage / 100);

    return finalPrice;
  }



}
