import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrl: './cart-service.component.css'
})
export class CartServiceComponent {
  cartproducts: any[] = []; // You can replace 'any' with a more specific type for your products

  constructor() {}

  setCartProducts(products: any) {
 this.cartproducts=products;
  }

  getCartProducts() {
    return this.cartproducts;
  }
}
