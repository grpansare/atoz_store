import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrl: './orderhistory.component.css'
})
export class OrderhistoryComponent implements OnInit {

  orderss: any[] = [];
  userinfo: any = {};

  private baseUrl: any = "http://localhost:8081";

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.userinfo = JSON.parse(userData);
    }

    // Initialize a demo order object with placeholder values
    this.http.get(`${this.baseUrl}/order/getOrdersByUsername/${this.userinfo?.username}`).subscribe(
      (response) => {
        console.log("response", response);
        this.orderss = response as any[];
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
