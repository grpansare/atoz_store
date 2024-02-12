import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent {
  showfilters:boolean=false;
  products:any=[];
  category:any="";
  constructor(private route: ActivatedRoute,private http:HttpClient) {

  }
 baseUrl:any="http://localhost:8081/product";
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      this.category = params.get('category');
      this.getProducts();
    console.log(this.category)


  }

    )
}
handleClick(){
  this.showfilters=!this.showfilters;
}
getProducts(){

  this.http.get<any[]>(`http://localhost:8081/product/getProductByCategory/${this.category}`).subscribe(
    response=>{
      console.log(response)
  this.products=response;
    },
    error=>{
      console.log(error)
    }
  )
}
}
