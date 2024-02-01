import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  backendUrl = 'http://localhost:8881';
  products: any[] = [];
  category: string = '';
  genFinal = ["Men", "Women","Kids",""];
  catFinal = ["Electronics", "Footwear", "Cloths", "Grocery", "Cosmetics & Beauty", "Medicine", "Furniture", "Books"];
  sizeFinal = ["S", "M", "L", "XL", "XXL"];
  colours = ["Red", "Blue", "Black", "White", "Yellow", "Green", "Gray", "Purple"];
  minPrice: any='';
  maxPrice: any='';
prodArr:any[]=[];

  ngOnInit() {
    // You can perform any initialization logic here
    // For example, you might want to load initial data
    this.searchCategory();
  }


  constructor(private http: HttpClient) { 
      this.show();
  }
  private baseUrl:any = 'http://localhost:8188/product'; 

  show(){
    this.http.get(this.baseUrl).subscribe(
      (Sussess:any)=>{       
        console.error('Product get successfully:', Sussess);
         this.prodArr=Sussess;   
      },
      (error:any)=>{
        alert("Error adding product:"+error);
        console.error('Error adding product:', error);
      }
      
    );


}

  searchCategory() {
    // Make an HTTP request to fetch products based on the category
    /*
    this.http.get<any[]>(`${this.backendUrl}/byCategory/${this.category}`).subscribe(
      (success) => {
        this.products = success.data;
        console.log(this.products);
      },
      (error) => {
        console.error(error);
      }
    );*/
  }

  handleChange(event: any) {
    // Handle changes when a filter option is selected
    this.category = event.target.value;
    this.searchCategory();
  }

  handlePriceFilterSubmit(){

  }

}
