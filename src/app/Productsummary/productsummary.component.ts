import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http:HttpClient){
    //  this.getProducts()
   /* this.userinfo=localStorage.getItem('user')

      this.products=[
{name:"phone",price:"Rs 47,130",quantity:"1",
 colors:["red","blue","White"],
},
{name:"laptop",price:"Rs 1,130",quantity:"1",
 colors:["red","blue","White"],
},
{name:"tv",price:"Rs 12,130",quantity:"2",
 colors:["red","blue","White"],
},
{name:"cycle",price:"Rs 10,130",quantity:"3",
 colors:["red","blue","White"],
}

      ]

      this.products.array.forEach((element: { price: number; }) => {
        this.sum=this.sum+element.price
      });
*/
  }
  ngOnInit(): void {
    this.userinfo=localStorage.getItem('user');
   this.userinfo=JSON.parse(this.userinfo)
    // console.log(this.userinfo)
    this.products=[
{name:"phone",price:47130,quantity:"1",
colors:["red","blue","White"],
},
{name:"laptop",price:1130,quantity:"1",
colors:["red","blue","White"],
},
{name:"tv",price:12130,quantity:"2",
colors:["red","blue","White"],
},
{name:"cycle",price:10130,quantity:"3",
colors:["red","blue","White"],
}

    ]

    this.products.forEach((element: { price: number; }) => {
      this.sum=this.sum+element.price
      console.log("total :"+this.sum)
    });

  }
  // getProducts(){
  //  this.http.get(baseurl/getproducts/${this.category}).subscribe(
  //    (result:any)=>{
  //      console.log(result);
  //      this.products=result;
  //    },
  //    (error:any)=>{
  //      console.log(error)
  //    }
  //    )

   total =() =>{
    this.products.array.forEach((element: { price: number; }) => {
      this.sum=this.sum+element.price
    });
  }


  // }
}
