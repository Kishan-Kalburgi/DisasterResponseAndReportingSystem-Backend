import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Incident } from '../common/incident';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-archivedialog',
  templateUrl: './archivedialog.component.html',
  styleUrls: ['./archivedialog.component.css']
})
export class ArchivedialogComponent implements OnInit {
  incidents: Incident[];
  isLoading = false;
  id = { _id: String };
  incident: Incident; 

  constructor(private dataService: DataService, public ref: MatDialog,@Inject(MAT_DIALOG_DATA) public data: Incident, public thisMatDialogRef: MatDialogRef<ArchivedialogComponent>) { }

  ngOnInit() {
    this.incident=this.data;
    this.incidents = this.data['data'];
        this.isLoading = false;
  }
  yes(item) {
    this.thisMatDialogRef.close();
    this.id = { _id: item._id };
     console.log(this.id);
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

  
  no()
  {
    this.ref.closeAll();
  }

}
