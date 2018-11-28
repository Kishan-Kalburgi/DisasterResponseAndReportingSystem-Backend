import { Component, OnInit, ViewChild } from '@angular/core';
// import { applicant } from '../common/mock-applicants'; // for mock user
import {MatTableDataSource, MatSort} from '@angular/material';
import { Applicant } from '../common/applicant';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-rejected-applicants',
  templateUrl: './rejected-applicants.component.html',
  styleUrls: ['./rejected-applicants.component.css']
})
export class RejectedApplicantsComponent implements OnInit {

  dialogResult = '';

  applicants: Applicant[];
  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  dataSource = new  MatTableDataSource<Applicant>(this.applicants);
  selection = new SelectionModel<Applicant>(true, []);
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getRejectedMembersList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
