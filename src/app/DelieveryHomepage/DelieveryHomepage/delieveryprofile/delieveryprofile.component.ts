import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delieveryprofile',
  templateUrl: './delieveryprofile.component.html',
  styleUrl: './delieveryprofile.component.css'
})
export class DelieveryprofileComponent {

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


  this.http.get(`http://localhost:8081/delivery/getuser/${this.userid}`).subscribe(
    (response:any)=>{

      console.log(response)
      this.userinfo=response;
    },
  (error:any)=>{
    console.log(error)
  }
  )
}
updateUser(user: any) {
  this.userinfo = user;
  sessionStorage.setItem('user', JSON.stringify(this.userinfo));
}
}
