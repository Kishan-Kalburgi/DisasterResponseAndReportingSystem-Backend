import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Report } from '../common/report';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css']
})
export class CreatereportComponent implements OnInit {
  incidentID:string;
  location:{lat,lng}
  casualties:{red,yellow,green,black}
  lat=0
  lng=0
  counter=0
  reports: Report=new Report();
  constructor(    public route: ActivatedRoute,private router: Router,private dataService: DataService) { }
  address:any

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.incidentID = paramMap.get('item.incidentID');
      console.log("value of incidentID is "+this.incidentID);
    })

  }
  
  fetch(){
    console.log("add is "+ this.address)
    this.dataService.getLocation(this.address)
      .subscribe((data) => {
        console.log(data)
        this.location = data['data'];
        this.lat=this.location.lat
        this.lng=this.location.lng
        // this.address=this.location
        console.log("location"+this.location.lat)
      });

  }

  onSubmit(report){
    // while(this.counter==0){
      console.log(" initial report is ",report.value)
      let input = new FormData();      
      // this.reports.reportedBy=report.value.reportedBy
      // this.reports.incidentName=report.value.incidentName
      this.reports.files=""
      this.reports.casualties={red:report.value.red,black:report.value.black,
        yellow:report.value.yellow,green:report.value.green}
      this.reports.structuralDamage=report.value.structuralDamage
      this.reports.fire=report.value.fire
      this.reports.utilities=report.value.utilities
      this.reports.hazmat=report.value.hazmat
      this.reports.rescueteam=report.value.rescueTeam
      this.reports.others=report.value.others
      this.reports.incidentName=report.value.incidentName


    if(this.lat==0 && this.lng==0 ){
      this.dataService.getLocation(this.address)
      .subscribe((data) => {
        console.log(data)
        report.value.address=data['data']
        console.log(" new report is "+report.value)
        // this.reports=report.value
        this.reports.location=this.location           
        input.append('formData', JSON.stringify(this.reports));  
        this.dataService.saveReport(input)
        .subscribe((data) => {
          console.log(data)
        });     
        console.log("final report is ",this.reports)

        this.router.navigate(['/reportById', {      
          data:this.incidentID }]
        );
    
      });

    }

    else {
      // this.counter=1
      this.reports.location=this.location                
      input.append('formData', JSON.stringify(this.reports));  
      this.dataService.saveReport(input)
      .subscribe((data) => {
        console.log(data)
      });

    }
    // }

    // report.address=this.location
    // console.log("new ADDRESS is "+report.value.address.lat)
    // console.log("new report is "+report.value)
  }

}
