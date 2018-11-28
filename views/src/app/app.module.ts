import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { TeamsComponent } from './teams/teams.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';


import { Team1DetailsComponent } from './team1-details/team1-details.component';

import { ReportComponent } from './report/report.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArchivedIncidentsComponent } from './archived-incidents/archived-incidents.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { COPComponent } from './cop/cop.component';
import { AgmCoreModule } from '@agm/core';
import { MyDialogComponentComponent } from './my-dialog-component/my-dialog-component.component';
import { ApplicantacceptedComponent } from './applicantaccepted/applicantaccepted.component';
import { ApplicantdeniedComponent } from './applicantdenied/applicantdenied.component';
import { Material } from './app.material';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ArchivedialogComponent } from './archivedialog/archivedialog.component';
import { TeamdialogComponent } from './teamdialog/teamdialog.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { TeamdeleteComponent } from './teamdelete/teamdelete.component';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { AcceptedApplicantsComponent } from './accepted-applicants/accepted-applicants.component';
import { RejectedApplicantsComponent } from './rejected-applicants/rejected-applicants.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    CreateIncidentComponent,
    ReviewApplicationComponent,
    TeamsComponent,
    CreateTeamsComponent,
    Team1DetailsComponent,
    ArchivedIncidentsComponent,
    COPComponent,
    MyDialogComponentComponent,
    ApplicantacceptedComponent,
    ApplicantdeniedComponent,
    ReportComponent,
    ReportDialogComponent,
    ArchivedialogComponent,
    TeamdialogComponent,
    UpdateTeamComponent,
    TeamdeleteComponent,
    LogindialogComponent,
    AcceptedApplicantsComponent,
    RejectedApplicantsComponent
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Material,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB954EX24ldvc9K55mjhdei_wg8Ly5shKQ'
    }),
  ],

  entryComponents: [
    MyDialogComponentComponent,
    ApplicantacceptedComponent,
    ApplicantdeniedComponent,
    ReportDialogComponent,
    ArchivedialogComponent,
    TeamdialogComponent,
    TeamdeleteComponent,
    LogindialogComponent
  ],
  
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],

  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
