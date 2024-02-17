import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productdialog',
  templateUrl: './productdialog.component.html',
  styleUrl: './productdialog.component.css',

})
export class ProductdialogComponent {

  selectedColor!:String;
  user:any={};
  selectedSize: string | null = null;
  baseurl="http://localhost:8081";
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    public dialogRef: MatDialogRef<ProductdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http:HttpClient,
    private snak:MatSnackBar

  ) {}
  addToCart(product:any){
    this.user=sessionStorage.getItem('user');
    const userinfo=JSON.parse(this.user);
    console.log(product);


    const imageFile1={
      name:product.imageFile.name,
      type:product.imageFile.type,
      filePath:product.imageFile.filePath,
    }
  const cartproduct={
    productid:product.productid,
    productname:product.productname,
    category:product.category,
    price:product.price,
    description:product.description,
    cartimageFile:imageFile1,
    offer:product.offer,
    color:this.selectedColor,
    size:this.selectedSize,


  }


this.http.post<any[]>(this.baseurl+`/cart/addToCart/${userinfo.username}`,cartproduct).subscribe(
  response=>{
     console.log(response)
     setTimeout(() => {
      this.dialogRef.close();

        this.snak.open('Product Added to cart!!', 'ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition:this.verticalPosition ,
          duration: 3000
        },);

    }, 1000);


     this.selectedSize="";
     this.selectedColor="";


  },
  error=>{
    console.log(error)
  }
)


  }

  onSizeSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSize = target.value;
    console.log('Selected Size:', this.selectedSize);
  }
}
