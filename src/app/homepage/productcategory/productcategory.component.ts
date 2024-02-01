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
  category:any="";
  constructor(private route: ActivatedRoute,private http:HttpClient) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      this.category = params.get('category');
    console.log(this.category)

  }

    )
}
handleClick(){
  this.showfilters=!this.showfilters;
}
}
