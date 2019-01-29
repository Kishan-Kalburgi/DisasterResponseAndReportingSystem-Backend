import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Incident } from '../common/incident';
import { MatDialog } from '@angular/material';
import { ArchivedialogComponent } from '../archivedialog/archivedialog.component';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // isLoggedIn$: Observable<boolean>;
  incidents: Incident[];
  isLoading = false;
  id = { _id: String };
  constructor(private router: Router, private dataService: DataService, public dialogref: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    this.dataService.getIncidentsList()
      .subscribe((data) => {
        this.incidents = data['data'];
        this.isLoading = false;
      });
  }

  onArchive(item) {
    this.id = { _id: item._id };
    // console.log(this.id);
    this.dataService.archiveIncident(this.id)
      .subscribe((data) => {
        console.log(data);
        this.dataService.getIncidentsList()
        .subscribe((dataInci) => {
        this.incidents = dataInci['data'];
        this.isLoading = false;
      });
        item.isActive = false;
        console.log('success');
      },
        error => {
          console.log('Error Occured');
        });
  }

  dialog(item)
  {
    this.dialogref.open(ArchivedialogComponent, {
      width:'600px',
      data:item
  });
  }

  report(incident_id)
  {
    console.log("entered from dasboard report method "+incident_id)
    // this.router.navigate(['/report', {
      this.router.navigate(['/reportById', {      
      data:incident_id }]
    );

    
 
  //   this.dialogref.open(ArchivedialogComponent, {
  //     width:'600px',
  //     data:incident_id
  // });
  }

  teams(incident_id)
    {
      console.log("entered from dasboard teams method "+incident_id)
      // this.router.navigate(['/report', {
        this.router.navigate(['/TeamsById', {      
        data:incident_id }]
      );
}

onLogout() {
  this.authService.logout();
}

}