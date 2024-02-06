import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  selectedFile!: any;
  imagepreview:any="";
  productinfo:any={};
  colors!:any;
  size!:any;
  addproduct=new FormGroup({

    category:new FormControl("",),
    color1:new FormControl("",),
    color2:new FormControl("",),
    color3: new FormControl("",),
    description:new FormControl("",),
    offer:new FormControl(""),
    price:new FormControl("",),
    productname:new FormControl("",),
    quantity:new FormControl(""),
  size1:new FormControl("",),
  size2:new FormControl("",),
  size3: new FormControl("",),


  });
  constructor(private http:HttpClient){

  }
  getImage(event: any) {

    this.selectedFile=event.target.files[0];
    this.imagepreview=URL.createObjectURL(this.selectedFile);
  }

  //
  handleSubmit() {
  this.productinfo=this.addproduct.value;
  console.log(this.productinfo)

    this.productinfo.price = parseInt( this.productinfo.price);


    if (this.selectedFile) {

      const formData=new FormData();
      formData.append('category',this.productinfo.category);
      formData.append('color1',this.productinfo.color1);
      formData.append('color2',this.productinfo.color2);
      formData.append('color3',this.productinfo.color3);
      formData.append('description',this.productinfo.description);
      formData.append('image',this.selectedFile);
      formData.append('offer',this.productinfo.offer);
      formData.append('price',this.productinfo.price);
      formData.append('productname',this.productinfo.productname);
      formData.append('quantity',this.productinfo.quantity);
      formData.append('size1',this.productinfo.size1);
      formData.append('size2',this.productinfo.size2);
      formData.append('size3',this.productinfo.size3);
    console.log(formData)






      this.http.post('http://localhost:8081/product/addproduct', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully!', response);
          // Handle any additional logic after successful image upload
        },
        (error) => {
          console.error('Error uploading image', error);
          // Handle error
        }
      );
    } else {
      console.warn('No image selected');
      // Handle case where no image is selected
    }
  }

}

