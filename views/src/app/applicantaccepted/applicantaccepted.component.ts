import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../common/dataService';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicantaccepted',
  templateUrl: './applicantaccepted.component.html',
  styleUrls: ['./applicantaccepted.component.css']
})
export class ApplicantacceptedComponent implements OnInit {
  applicant: User;
  applicant_name:String;
  constructor(private router: Router,private dataService: DataService,public ref: MatDialog,public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.applicant = this.data;
    this.applicant.role="AcceptedApplicant"
    this.dataService.saveApplicantDecision(this.applicant)
      .subscribe((data) => {

      });
  }

  onClick()
  {
    this.ref.closeAll();
    // this.router.navigate(['/reviewApplication']);
    window.location.reload(true);
  }

}
