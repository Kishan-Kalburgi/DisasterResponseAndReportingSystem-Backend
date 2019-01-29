// Assigned to Kishan

import { Component, OnInit, ViewChild } from '@angular/core';
// import { applicant } from '../common/mock-applicants'; // for mock user
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Applicant } from '../common/applicant';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';
import { MatDialog} from '@angular/material';
import {  MyDialogComponentComponent} from '../my-dialog-component/my-dialog-component.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {
  dialogResult = '';

  applicants: Applicant[];
  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  dataSource = new  MatTableDataSource<Applicant>(this.applicants);
  selection = new SelectionModel<Applicant>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dataService: DataService, public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataService.getApplicantsList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });

  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rowClicked(row: any): void {
    console.log(row);
    const dialogRef = this.dialog.open(MyDialogComponentComponent, {
        width: '950px',
        height: '600px',
        data: row
    });
    dialogRef.afterClosed().subscribe(result  => {
        console.log("result");
        this.dialogResult = result;
    });
  }

  onLogout() {
    this.authService.logout();
  }
  
}
