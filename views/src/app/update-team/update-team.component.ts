import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Members } from '../create-teams/create-teams.component';
import { Applicant } from '../common/applicant';
import { TeamdialogComponent } from '../teamdialog/teamdialog.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  selection = null;
  membersEmails = [];
  inciID: string;
  @ViewChild('updateTeam') updateTeam: NgForm;
  a = Math.floor((Math.random() * 10000) + 1);
  team: Team;
  saveTeam = false;
  applicants: Applicant[];
  newTeamID: string;


  displayedColumns = ['select', 'firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
  dataSource = new MatTableDataSource<Applicant>(this.applicants)




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
    public dialogref: MatDialog,
    private authService: AuthService) {
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
    this.selection = new SelectionModel<Applicant>(true, []);
    this.dataService.getMembersList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.newTeamID = paramMap.get('item._id');
          // console.log(this.newTeamID);
        })
        this.dataService.getTeamById(this.newTeamID)
          .subscribe((data) => {
            this.team = data['data'];
            console.log(this.team);
            for (var i = 0; i < this.team.members.length; i++) {
              // console.log(this.team.members[i].email);
              this.membersEmails.push(this.team.members[i].email);
              // console.log(this.membersEmails)
            }
            console.log(this.membersEmails)

            let temp = this.applicants.filter(data => {
              return this.membersEmails.indexOf(data.email) !== -1
            })
            console.log(temp)
            this.selection = new SelectionModel<Applicant>(true, temp);
            // this.dataSource = this.team.members;
          });
      });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.inciID = paramMap.get('incidentID');
      console.log("value of incidentID is " + this.inciID);
    })

  }

  onUpdate() {    // alert("Incident module created successfully");
    // this.router.navigate(['/dashboard']);
    // if(this.saveTeam){
    // this.team.teamID = "Team" + this.a;
    this.team.members = this.selection.selected;
    // this.team.isActive = true;
    // this.team.incidentID = this.inciID;
    // this.team.leader = this.updateTeam.value.leader;
    // this.team.asstLeader = this.updateTeam.value.asstLeader;
    // this.team.teamName = this.updateTeam.value.teamName;
    console.log(this.updateTeam.value.teamName);
    console.log(this.team);
    this.dataService.updateTeam(this.team)
      .subscribe((data) => {
        console.log(data);
        console.log(this.team);
        console.log('success');
        this.router.navigate(['/teamsById', this.team.incidentID]);
      },
        error => {
          console.log('Error Occured');
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

  onLogout() {
    this.authService.logout();
  }
  
}