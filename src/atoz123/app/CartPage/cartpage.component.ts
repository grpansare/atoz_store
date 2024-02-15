import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent {
  products:any=[];

  sum:number=0;
  quantity: number[] = Array.from({ length: 100 }, (_, i) => i + 1);




  baseurl="http://localhost:8081"
  constructor(private http:HttpClient){
    //  this.getProducts()

  }
  ngOnInit(): void {

      this.products=[
{name:"phone",price:47130,quantity:9,
  image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
 colors:"Red",
},
{name:"laptop",price:12130,quantity:3,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
 colors:"White",
},
{name:"tv",price: 27130,quantity:5,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
 colors:"blue",
},
{name:"cycle",price:17130,quantity:1,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
 colors:"Orange",
}

      ]

      this.products.forEach((element: { price: number; }) => {
        this.sum=this.sum+element.price
        console.log("total :"+this.sum)
      });
  // getProducts(){
  //  this.http.get(`baseurl/getproducts/${this.category}`).subscribe(
  //    (result:any)=>{
  //      console.log(result);
  //      this.products=result;
  //    },
  //    (error:any)=>{
  //      console.log(error)
  //    }
  //    )


  // }
}

total =() =>{
  this.products.array.forEach((element: { price: number; }) => {
    this.sum=this.sum+element.price
  });
}
}