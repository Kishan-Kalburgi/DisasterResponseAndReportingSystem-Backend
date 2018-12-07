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
        let icon="";
        this.reports = data['data'];
        for(let i=0;i<this.reports.length;i++){
          if(this.reports[i].rescueteam=="Ambulance")
          icon="medical"
          else if(this.reports[i].rescueteam=="Fire Truck")
          icon="fire"
          else if(this.reports[i].rescueteam=="Police/Law")
          icon="police"
          else if(this.reports[i].rescueteam=="All")
          icon="all"
          else
          icon ="none"
          // icon=(this.reports[i].rescueteam==)?"fire":"medical"
            this.reports[i].rescueteam="http://localhost:3000/icon/"+icon+".png"
        }
        this.icon="http://localhost:3000/icon/fire.png"
        // this.reports[1].icon=""
        this.lat=this.reports[0].location.lat;
        this.lng=this.reports[0].location.lng;        
      });
      
  }
  onLogout() {
    this.authService.logout();
  }
}

