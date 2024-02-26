import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    currentPath:any="";
   showdropdown:boolean=false;
   suggestionArr:string[]=[ "boat airdopes","shirts","saree","jackets","hoodies","laptop","bed","phone"]
   suggestions:string[]=[];
   baseurl="http://localhost:8081";
   searchResults:any[]=[];
   showSuggestions: boolean = false;
   noProductFound:boolean=false;
   constructor(private router:Router,private http:HttpClient){
    this.getProducts()
   }
   changeDropDown(){
    this.showdropdown=!this.showdropdown;
   }
   searchForm = new FormGroup({
    searchinput: new FormControl(null),

  });
  get searchinput(): any {
    return this.searchForm.get('searchinput');
  }

  getProducts(){
    this.searchinput.valueChanges.subscribe((searchinput: any) => {
       this.searchProd(searchinput)


    });
  }

   searchProd(searchpro:any){


    if(searchpro==''){
      this.suggestions=[];
        this.router.navigateByUrl('home')

    }
    else{
      this.suggestions=[];
      this.suggestions=this.suggestionArr.filter((suggestion)=> suggestion.includes(searchpro))
      if(this.suggestions.length==0 && searchpro.length>2){
            this.getSearchSuggestions(searchpro)
      }
      this.showSuggestions=true;



    }

  }
  getSearchSuggestions(searchpro:any){
    this.http.get<any[]>(this.baseurl+`/product/searchproducts/${searchpro}`).subscribe(
      success=>{

        this.suggestions=[];
        success.forEach((product)=>{
          this.suggestions.push(product.productname)


        })
        this.searchResults=success;

      },
      error=>{
        console.log(error)
      }
    )
  }
  clearSearchInput(){
    this.searchinput.setValue("");
    this.router.navigateByUrl('home')
    this.showSuggestions=false
  }
  onClickSearch(){
    const product=this.searchinput.value
     this.router.navigate(['home/searchproduct', product]);

   }
   showProduct(product:any) {

    this.router.navigate(['home/searchproduct', product]);
  }
   goToHome(){
    this.router.navigateByUrl('home')
   }

}
