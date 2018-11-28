import { Component, OnInit } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Members } from '../create-teams/create-teams.component';
import { Applicant } from '../common/applicant';


@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  team: Team;
  newTeamID: string;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'county', 'dob', 'skills'];
  dataSource: Applicant[];

  constructor(public route: ActivatedRoute, private dataService: DataService) { }


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
  }