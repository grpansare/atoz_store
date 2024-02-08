import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   products:any=[];
   category:any="";
   pageSize = 4;
  currentPage = 1;

   baseurl="http://localhost:8081"
   constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute){
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
},
{name:"tv",description:"kdjflsdkzjlfkjsl",price:40,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"tv",description:"kdjflsdkzjlfkjsl",price:40,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"tv",description:"kdjflsdkzjlfkjsl",price:40,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},
{name:"tv",description:"kdjflsdkzjlfkjsl",price:40,
image:"https://www.reliancedigital.in/medias/Vivo-Y56-Mobile-Phone-493665033-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjI4N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGZiLzk5NjQxODY1MDExNTAuanBnfDIxZjUyNjQ1OTUzMzgyZTdlNTdlZDcxODdmYTkxNTI2NzI3YzFmNGM2Yjg5ZjAwOWE2ZjJmZjQ2YzJjMDg1ZTk",
  colors:["red","blue","White"],
},

       ]

   }


   get displayedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.products.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.scrollToTop();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
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
   private scrollToTop(): void {
    // Using JavaScript to scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
