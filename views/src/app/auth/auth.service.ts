import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { LogindialogComponent } from '../logindialog/logindialog.component';
import { MatDialog } from '@angular/material';


@Injectable()
export class AuthService {
  public message = "Incorrect Usename or Passsword";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router,
    public ref: MatDialog,
    public dialogref: MatDialog
  ) {}


  login(user: User){
    if ((user.userName === 'admin@drrs.com'||user.userName === 'Admin@drrs.com')&& (user.password === 'Drrs@1234' || user.password === 'Admin@1234') ) { // {3}
      this.loggedIn.next(true);
      this.dialogref.open(LogindialogComponent, {
        width:'600px',
        // data:item
    });
      // this.router.navigate(['/dashboard']);
      // console.log("Sucessfully logged in");
      // alert("Sucessfully logged in")
    }
    else{
    console.log("Incorrect Usename or Passsword");
     alert(this.message);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
