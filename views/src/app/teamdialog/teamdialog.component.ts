import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CreateTeamsComponent } from '../create-teams/create-teams.component';
import { Team } from '../common/team';
import { Router } from '@angular/router';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-teamdialog',
  templateUrl: './teamdialog.component.html',
  styleUrls: ['./teamdialog.component.css']
})
export class TeamdialogComponent implements OnInit {

  team: Team;
  constructor(private router: Router, private dataService: DataService, public dialog: MatDialog, public ref: MatDialog,@Inject(MAT_DIALOG_DATA) public thisMatDialogRef: MatDialogRef<TeamdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Team) { }

  ngOnInit() {
  }

  yes()
  {
    this.team = this.data;
    console.log(this.team);
    // this.team.incidentID =
    this.ref.closeAll();
    // if (valid) {
      this.dataService.saveTeam(this.team)
        .subscribe((data) => {
          console.log(data);
          console.log(this.team);
          console.log('success');
           this.router.navigate(['/teamsById', this.team.incidentID]);
        },
          error => {
            console.log('Error Occured');
          });
    // }
  // }
    // this.ref.open('CreateTeamsComponent');
    
   
  // let dialogReff=this.dialog.open(CreateTeamsComponent,{
    // width:'600px',
    // data:this.user

  // });
  // dialogReff.afterClosed().subscribe(result=>{
    // console.log('Dialog closed: ${result}');
    // this.dialogResult=result;
  // })
}



  no()
  {
    this.ref.closeAll();
  }

}
