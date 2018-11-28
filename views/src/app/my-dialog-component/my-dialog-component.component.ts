import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';
import { MatDialog} from '@angular/material';
import { ApplicantacceptedComponent } from '../applicantaccepted/applicantaccepted.component';
import { ApplicantdeniedComponent } from '../applicantdenied/applicantdenied.component';
import { DataService } from '../common/dataService';


@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {
  dialogResult="";
  temp="";
  filename=""
  // dataService:DataService;
  user: User;
  constructor(private dataService: DataService, public dialog: MatDialog, public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.user = this.data;
        var file=this.user.files;
    // var file="disasters.jpg";
    var filearr=file.split("\\")
    console.log(filearr)
     this.filename=filearr[filearr.length-1]  
    console.log("file is "+this.user.files)
    // this.temp="http://localhost:3000/certification/"+this.filename
    this.temp="https://drrs.herokuapp.com/certification/"+this.filename
    
    // document.getElementById("file").setAttribute('href', "http://localhost:3000/certifications");
    // $("#file").href=
    // $("#file").attr("href", "https://www.w3schools.com/jquery/");


  }

  accept() {
    let dialogReff=this.dialog.open(ApplicantacceptedComponent,{
      width:'600px',
      data:this.user
  
    });
    dialogReff.afterClosed().subscribe(result=>{
      // console.log('Dialog closed: ${result}');
      this.dialogResult=result;
    })
  }


  downloadFile(){
    this.dataService.getFileById()
    .subscribe((data) => {
      console.log(data);
      console.log('success');
    },
      error => {
        console.log('Error Occured');
      });
  }

  deny() {
    let dialogReff=this.dialog.open(ApplicantdeniedComponent,{
      width:'600px',
      data:this.user
  
    });
    dialogReff.afterClosed().subscribe(result=>{
      // console.log('Dialog closed: ${result}');
      this.dialogResult=result;
    })
  }
  
}
