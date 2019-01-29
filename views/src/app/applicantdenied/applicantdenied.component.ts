import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';
import { Router } from '@angular/router';
import { DataService } from '../common/dataService';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';

@Component({
  selector: 'app-applicantdenied',
  templateUrl: './applicantdenied.component.html',
  styleUrls: ['./applicantdenied.component.css']
})
export class ApplicantdeniedComponent implements OnInit {
  applicant: User;
  constructor(private router: Router,private dataService: DataService,public ref: MatDialog,public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.applicant = this.data;
    this.applicant.role="RejectedApplicant"
    this.dataService.saveApplicantDecision(this.applicant)
      .subscribe((data) => {

      });

  }
  onClick()
  {
    this.ref.closeAll();
    window.location.reload(true);
  }

}
