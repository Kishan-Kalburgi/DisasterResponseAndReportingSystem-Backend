import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DataService } from '../common/dataService';
import { Report } from '../common/report';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { AuthService } from '../auth/auth.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  incidentID:string;
  incidentReportClicked:string;
  reports: Report[];
  // displayedColumns: string[] = ['incidentName', 'reportedBy', 'structuralDamage', 'fire', 'utilities'];
  displayedColumns: string[] = [ 'reportedBy', 'structuralDamage', 'fire', 'utilities'];
  dataSource = new MatTableDataSource<Report>(this.reports);
  dialogResult: '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(
    public route: ActivatedRoute,
    private router: Router, 
    private dataService: DataService,
    public dialog: MatDialog,
    private authService: AuthService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<Report>(this.reports);
  }

  ngOnInit() {
    // this.incidentReportClicked=this.r.get("data")
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.incidentID = paramMap.get('item.incidentID');
      console.log("value of incidentID is "+this.incidentID);
    })
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // this.dataService.getReportsList()
    this.dataService.getReportById(this.incidentID)
      .subscribe((data) => {
        this.reports = data['data'];
        this.dataSource = new MatTableDataSource<Report>(this.reports);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rowClicked(row) {
    // console.log(row);
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '950px',
      height: '600px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result");
      this.dialogResult = result;
    });
  }

  onLogout() {
    this.authService.logout();
  }
  report()
  {
    this.router.navigate(['/createreport', {      
      data:this.incidentID }]
    );

    // this.router.navigate(['/report', {
      this.router.navigate(['/createreport']
    );
    console.log("entered create report ")

}
}
