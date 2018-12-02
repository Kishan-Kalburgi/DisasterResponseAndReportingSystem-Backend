import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-incidentsuccessful',
  templateUrl: './incidentsuccessful.component.html',
  styleUrls: ['./incidentsuccessful.component.css']
})
export class IncidentsuccessfulComponent implements OnInit {

  constructor(public ref: MatDialog) { }

  ngOnInit() {
  }
  onClick()
  {
    this.ref.closeAll();
  }

}
