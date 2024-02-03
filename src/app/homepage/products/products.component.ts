import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   products:any=[];
   category:any="";

   baseurl="http://localhost:8081"
   constructor(private http:HttpClient){
       this.category=localStorage.getItem("category");
       this.getProducts()
       this.products=[
{name:"phone",description:"kdjflsdkzjlfkjsl",price:23,
   image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"laptop",description:"kdjflsdkzjlfkjsl",price:30,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"tv",description:"kdjflsdkzjlfkjsl",price:40,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"cycle",description:"kdjflsdkzjlfkjsl",price:50,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
}

       ]
   }
   getProducts(){
    this.http.get(`baseurl/getproducts/${this.category}`).subscribe(
      (result:any)=>{
        console.log(result);
        this.products=result;
      },
      (error:any)=>{
        console.log(error)
      }
      )


   }
}
