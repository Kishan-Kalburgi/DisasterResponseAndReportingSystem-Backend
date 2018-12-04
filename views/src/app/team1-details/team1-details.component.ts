import { Component, OnInit } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Members } from '../create-teams/create-teams.component';
import { Applicant } from '../common/applicant';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-team1-details',
  templateUrl: './team1-details.component.html',
  styleUrls: ['./team1-details.component.css']
})
export class Team1DetailsComponent implements OnInit {

  team: Team;
  newTeamID: string;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'county'];
  dataSource: Applicant[];

  constructor(public route: ActivatedRoute, private dataService: DataService,
    private authService: AuthService ) { }


  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.newTeamID = paramMap.get('item._id');
      // console.log(this.newTeamID);
    })
    
    this.dataService.getTeamById(this.newTeamID)
      .subscribe((data) => {
        this.team = data['data'];
        console.log(this.team);
        this.dataSource = this.team.members;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  }
