import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private router:Router){
    // this.logout();
    this.LogoutConfirmation();
     }
    //  logout(){
    //   localStorage.removeItem("username");
    //   this.router.navigateByUrl('/');
    //  }
     LogoutConfirmation(): void {
     this. openLogoutConfirmation().then((confirmed) => {
        if (confirmed) {
          localStorage.removeItem("username");
          localStorage.removeItem("user");
            this.router.navigateByUrl('/');
        }
        else{
          this.router.navigateByUrl('/home');

<<<<<<< HEAD
        }
      });
=======
        }      });
>>>>>>> 7d1e2f650040d801ad590cf0ffb361e13b5026da
    }
    openLogoutConfirmation(): Promise<boolean> {
      return Swal.fire({
        title: 'Logout Confirmation',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        return result.isConfirmed;
      });
    }
<<<<<<< HEAD

}
=======
    
}
>>>>>>> 7d1e2f650040d801ad590cf0ffb361e13b5026da
