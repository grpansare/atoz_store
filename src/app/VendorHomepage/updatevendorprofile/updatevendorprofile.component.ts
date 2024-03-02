import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updatevendorprofile',
  templateUrl: './updatevendorprofile.component.html',
  styleUrl: './updatevendorprofile.component.css'
})
export class UpdatevendorprofileComponent {
  @Output() vendorUpdated = new EventEmitter<any>();
  user!:any;

   constructor(private http:HttpClient,private router:Router){


   }

   private modalService = inject(NgbModal);
   closeResult = '';

   open(content: any) {

     this.user=localStorage.getItem('user');
     this.user=JSON.parse(this.user)
     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
       if (result === 'Save click') {
         this.saveUserInfo();
         this.vendorUpdated.emit(this.user)

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
          this.http.post("http://localhost:8081/user/update",this.user).subscribe(
           (response:any)=>{
             console.log(response);


           },
           (error:any)=>{
             console.log(error);

           }
          )
         }
}
