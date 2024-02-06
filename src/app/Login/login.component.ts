import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private baseUrl:any = "http://localhost:8081/user"; 
  loginimg:string="https://i.pinimg.com/1200x/f5/6b/6f/f56b6fa94babecfbe8dd467e8df0af96.jpg";

  constructor(private http: HttpClient,private router: Router) { 

  }

  login=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.pattern(/^\S*$/)]),
    password:new FormControl("",[Validators.required ]),
    
  });
  
  

  get username():any{
    return this.login.get('username');
  }

  get password():any{
    return this.login.get('password')
  }

  myForm:any;
 data:any={};
 handleSubmit(){

  console.log(this.data)
  
  console.log(this.login.value);
  
this.http.post(this.baseUrl+"/loginuser",this.login.value).subscribe(
  response =>{
    if(response!=null){

    alert("ram ram bhai sarane")
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Welcome back!',
    });
    
    this.router.navigateByUrl("/home");
  }
  else{
    // alert("Wrong Credentials")
    // console.log('Wrong User', response);

    Swal.fire({
      icon: 'error',
      title: 'Wrong Credentials',
      text: 'Please check your username and password.',
    });
  }       
},
error => {

  // console.error('Login failed', error);

  Swal.fire({
    icon: 'error',
    title: 'Login Failed',
    text: 'Invalid username or password. Please try again.',
  });

}
);

}
}