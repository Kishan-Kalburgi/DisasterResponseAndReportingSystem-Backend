import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Report } from '../common/report';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {
  filename=""
  temp=""
  report: Report;
  constructor(
    public thisDialogRef: MatDialogRef<ReportDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Report,
    public ref: MatDialog) { }

  ngOnInit() {
    this.report = this.data;
    console.log(this.report);

     var file=this.report.files;
      var filearr=file.split("\\")
      console.log(filearr)
     this.filename=filearr[filearr.length-1]  
    // console.log("file is "+this.user.files)
    this.temp="http://localhost:3000/certification/"+this.filename

  }

  onOk() {
    this.ref.closeAll();
  }

}
