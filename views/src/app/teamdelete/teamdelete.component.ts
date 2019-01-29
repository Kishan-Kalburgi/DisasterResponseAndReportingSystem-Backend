import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../common/team';
import { DataService } from '../common/dataService';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-teamdelete',
  templateUrl: './teamdelete.component.html',
  styleUrls: ['./teamdelete.component.css']
})
export class TeamdeleteComponent implements OnInit {
  id = { _id: String };
  teams: Team[];
  incidentID:string;
  isLoading = false;
  team:Team;
  // constructor(private dataService: DataService, public ref: MatDialog,@Inject(MAT_DIALOG_DATA) public data: Team, public thisMatDialogRef: MatDialogRef<TeamdeleteComponent>) {}

  constructor(private dataService: DataService, public ref: MatDialog,@Inject(MAT_DIALOG_DATA)  public data:Team, public thisMatDialogRef: MatDialogRef<TeamdeleteComponent>) { }

  ngOnInit() {
    
    
    this.team=this.data;
    this.teams = this.data['data'];
        this.isLoading = false;
    
  }

  yes(item)
  {
    this.thisMatDialogRef.close();
      this.id = { _id: item._id };
      console.log(this.id);
      this.dataService.deleteTeam(this.id)
        .subscribe((data) => {
          console.log(data);
          this.dataService.getTeamsById(this.incidentID)
          .subscribe((dataInci) => {
          this.teams = dataInci['data'];
          this.isLoading = false;
        });
          item.isActive = false;
          console.log('success');
        },
          error => {
            console.log('Error Occured');
          });
    }
  

  

  no()
  {
     this.ref.closeAll();

  }

}
