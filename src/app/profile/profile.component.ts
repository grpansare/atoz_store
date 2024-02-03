import { Component } from '@angular/core';
import { UpdateprofileComponent } from '../homepage/updateprofile/updateprofile.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userid:any="";
  userinfo:any={};
constructor(private http:HttpClient){
  this.userid=localStorage.getItem('username');
  console.log(this.userid)
  this.getUser();
}
getUser(){

  this.http.get(`http://localhost:8081/user/getuser/${this.userid}`).subscribe(
    (response:any)=>{
      console.log(response)
      this.userinfo=response;
    },
  (error:any)=>{
    console.log(error)
  }
  )
}
}
