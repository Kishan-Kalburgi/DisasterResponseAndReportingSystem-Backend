import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../common/incident';
import { DataService } from '../common/dataService';
import { MatDialog } from '@angular/material';
import { IncidentsuccessfulComponent } from '../incidentsuccessful/incidentsuccessful.component';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  incident: Incident;
  date = new Date;
  constructor(private router: Router, private dataService: DataService, public dialogref: MatDialog) {
    this.incident = new Incident({
      incidentID: '',
      incidentName: '',
      location: '',
      date: this.date,
      time: this.date,
      description: '',
      isActive: false
    });
  }

  ngOnInit() {
  }


  onCreate({ value, valid }: { value: Incident, valid: boolean }) {
    // alert("Incident module created successfully");
    // this.router.navigate(['/dashboard']);
    value.incidentID = value.incidentName + '_' + this.convert(this.date);
    value.isActive = true;
    // console.log(value.incidentName+this.convert(this.date));
    this.incident = value;
    console.log(this.incident);
    // make http req. only if form is valid
    if (valid) {
      this.dataService.saveIncident(this.incident)
        .subscribe((data) => {
          console.log(data);
          console.log('success');
          this.router.navigate(['/dashboard']);
        },
          error => {
            console.log('Error Occured');
          });
    }
  }

  convert(str) {
    // tslint:disable-next-line:prefer-const
    let date = new Date(str),
      // tslint:disable-next-line:prefer-const
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      // tslint:disable-next-line:prefer-const
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('');
  }
  dialog()
  {
    this.dialogref.open(IncidentsuccessfulComponent, {
      width:'600px',
      // data:item
  });
  }
}
