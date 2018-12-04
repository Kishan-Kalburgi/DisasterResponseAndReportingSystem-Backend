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
  icon:String;
  reports: Report[];
  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {  
    this.dataService.getReportsList()
      .subscribe((data) => {
        console.log(data)
        let counter="";
        this.reports = data['data'];
        for(let i=0;i<this.reports.length;i++){
          counter=(i%2==0)?"fireicon":"medical"
            this.reports[i].icon="http://localhost:3000/icon/"+counter+".jpg"
        }
        this.icon="http://localhost:3000/icon/fireicon1.jpg"
        this.reports[1].icon=""
        this.lat=this.reports[0].location.lat;
        this.lng=this.reports[0].location.lng;        
      });
      
  }
  onLogout() {
    this.authService.logout();
  }
}

