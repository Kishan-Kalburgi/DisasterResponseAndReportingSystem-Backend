import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Applicant } from '../common/applicant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { TeamdialogComponent } from '../teamdialog/teamdialog.component';
import { TouchSequence } from 'selenium-webdriver';

export interface Members {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})

export class CreateTeamsComponent implements OnInit {
  inciID : string;
  @ViewChild('createTeam') signupForm: NgForm;
  a = Math.floor((Math.random() * 10000) + 1);
  team: Team;
  saveTeam=false;
  applicants: Applicant[];
 
  displayedColumns = ['select', 'firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
  dataSource = new MatTableDataSource<Applicant>(this.applicants)
  selection = new SelectionModel<Applicant>(true, []);

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => {
          this.selection.select(row); 
         // console.log(row);
        });
        // console.log(this.selection);
        
  }

  constructor(public route: ActivatedRoute,
    private router: Router, 
    private dataService: DataService, 
    public dialogref: MatDialog) {
    this.team = new Team({
      teamID: '',
      members: [],
      leader: '',
      asstLeader: '',
      isActive: false,
      teamName: ''
    });
  }

  ngOnInit() {
    this.dataService.getApplicantsList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.inciID = paramMap.get('incidentID');
        console.log("value of incidentID is "+this.inciID);
      })
  }

  onCreate() {    // alert("Incident module created successfully");
    // this.router.navigate(['/dashboard']);
  // if(this.saveTeam){
    this.team.teamID = "Team"+this.a;
    this.team.members = this.selection.selected;
    this.team.isActive = true;
    this.team.incidentID = this.inciID;
    this.team.leader = this.signupForm.value.leader;
    this.team.asstLeader = this.signupForm.value.asstLeader;
    this.team.teamName = this.signupForm.value.teamName;
    console.log(this.signupForm.value.teamName);
    console.log(this.team);
    //make http req. only if form is valid
    this.dialogref.open(TeamdialogComponent, {
      width:'600px',
      data:this.team
  });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // dialogue()
  // {
  //   this.dialogref.open(TeamdialogComponent, {
  //     width:'600px'
  //     // data:item
  // });
  // // this.onCreate(createTeam)

  // }

}
