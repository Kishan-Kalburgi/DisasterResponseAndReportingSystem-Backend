import { Component, OnInit } from '@angular/core';
import {Report} from '../common/report';
import { DataService } from '../common/dataService';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.css']
})
export class COPComponent implements OnInit {
  lat:Number;
  lng:Number;
  reports: Report[];
  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {  
    this.dataService.getReportsList()
      .subscribe((data) => {
        console.log(data)
        this.reports = data['data'];

        this.lat=this.reports[0].location.lat;
        this.lng=this.reports[0].location.lng;        
      });
      
  }
  onLogout() {
    this.authService.logout();
  }
}

