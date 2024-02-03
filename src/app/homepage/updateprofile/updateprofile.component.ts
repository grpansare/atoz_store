import { HttpClient } from '@angular/common/http';
import { Component, Input, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrl: './updateprofile.component.css'
})
export class UpdateprofileComponent {
  @Input() user:any={};

  constructor(private http:HttpClient){

  }

  private modalService = inject(NgbModal);
	closeResult = '';

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result === 'Save click') {
        this.saveUserInfo();
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

