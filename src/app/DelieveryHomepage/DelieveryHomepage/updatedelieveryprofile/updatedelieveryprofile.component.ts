import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updatedelieveryprofile',
  templateUrl: './updatedelieveryprofile.component.html',
  styleUrl: './updatedelieveryprofile.component.css'
})
export class UpdatedelieveryprofileComponent {

  @Output() deliveryPartnerUpdated = new EventEmitter<any>();
  user!:any;
   size:any="880px"

   constructor(private http:HttpClient,private router:Router){


   }

   private modalService = inject(NgbModal);
   closeResult = '';
    ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    size:this.size
};

   open(content: any) {

     this.user=sessionStorage.getItem('user');
     this.user=JSON.parse(this.user)
     this.modalService.open(content, this.ngbModalOptions).result.then((result) => {
       if (result === 'Save click') {
         this.saveUserInfo();
         this.deliveryPartnerUpdated.emit(this.user)

       }
       else{



       }
     },
       (reason) => {
       },
     );
   }

   private getDismissReason(reason: any): string {
     switch (reason) {
       case ModalDismissReasons.ESC:
         return 'by pressing ESC';
         case ModalDismissReasons.BACKDROP_CLICK:
           return 'by clicking on a backdrop';
           default:
             return `with: ${reason}`;
           }
         }


         saveUserInfo() {
          this.http.post("http://localhost:8081/delivery/update",this.user).subscribe(
           (response:any)=>{
             console.log(response);


           },
           (error:any)=>{
             console.log(error);

           }
          )
         }
}

