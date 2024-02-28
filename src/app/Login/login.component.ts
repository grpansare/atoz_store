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

  user:any={};


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


this.http.post("http://localhost:8081/user/loginuser",this.login.value).subscribe(
  (response:any) =>{
    if(response!=null){
      
      sessionStorage.setItem('username',response.username)
      const user=JSON.stringify(response);
      sessionStorage.setItem('user',user);
      console.log(  sessionStorage.getItem('user'))


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
