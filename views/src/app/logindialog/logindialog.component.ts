import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {

  constructor(public ref: MatDialog, private router: Router,) { }

  ngOnInit() {
  }
  yes()
  {
    this.ref.closeAll();
    this.router.navigate(['/dashboard']);
      console.log("Sucessfully logged in");
  }
  no()
  {
    this.ref.closeAll();
  }

}
