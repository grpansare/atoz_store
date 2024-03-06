import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrl: './vendorprofile.component.css'
})
export class VendorprofileComponent {
  userid:any="";
  userinfo:any={};
constructor(private http:HttpClient){
  console.log(this.userid)
  this.getUser();
  console.log(this.userinfo)

}
ngOnInit(): void {
  this.userid=sessionStorage.getItem('username');
   this.getUser();
}
getUser(){

  this.userid=sessionStorage.getItem('username');


  this.http.get(`http://localhost:8081/vendor/getuser/${this.userid}`).subscribe(
    (response:any)=>{

      console.log(response)
      this.userinfo=response;
    },
  (error:any)=>{
    console.log(error)
  }
  )
}
updateVendor(user: any) {
  this.userinfo = user;
  sessionStorage.setItem('user', JSON.stringify(this.userinfo));
}
}
