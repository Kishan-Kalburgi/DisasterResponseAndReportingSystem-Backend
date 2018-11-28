(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-incident/create-incident.component */ "./src/app/create-incident/create-incident.component.ts");
/* harmony import */ var _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-teams/create-teams.component */ "./src/app/create-teams/create-teams.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-application/review-application.component */ "./src/app/review-application/review-application.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team1-details/team1-details.component */ "./src/app/team1-details/team1-details.component.ts");
/* harmony import */ var _update_team_update_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-team/update-team.component */ "./src/app/update-team/update-team.component.ts");
/* harmony import */ var _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./archived-incidents/archived-incidents.component */ "./src/app/archived-incidents/archived-incidents.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _cop_cop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cop/cop.component */ "./src/app/cop/cop.component.ts");
// Assigned to Kishan
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'createIncident', component: _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_2__["CreateIncidentComponent"] },
    { path: 'createTeams/:incidentID', component: _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_3__["CreateTeamsComponent"] },
    // { path: 'createTeamsByID/incidentID', component: CreateTeamsComponent},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'reviewApplication', component: _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_6__["ReviewApplicationComponent"] },
    //{ path: 'teams', component: TeamsComponent },
    { path: 'teamsById/:item.incidentID', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"] },
    { path: 'team1Details/:item._id', component: _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_8__["Team1DetailsComponent"] },
    { path: 'updateTeam/:item._id', component: _update_team_update_team_component__WEBPACK_IMPORTED_MODULE_9__["UpdateTeamComponent"] },
    { path: 'archivedIncidents', component: _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_10__["ArchivedIncidentsComponent"] },
    // { path: 'report', component: ReportComponent },
    { path: 'reportById/:item.incidentID', component: _report_report_component__WEBPACK_IMPORTED_MODULE_11__["ReportComponent"] },
    { path: 'cop', component: _cop_cop_component__WEBPACK_IMPORTED_MODULE_12__["COPComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n    Assinged to Kishan\r\n -->\r\n<div>\r\n    <app-nav-bar></app-nav-bar>\r\n    <router-outlet></router-outlet>\r\n    <p></p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.ts":
/*!*********************************!*\
  !*** ./src/app/app.material.ts ***!
  \*********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Material = /** @class */ (function () {
    function Material() {
    }
    Material = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
        })
    ], Material);
    return Material;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-incident/create-incident.component */ "./src/app/create-incident/create-incident.component.ts");
/* harmony import */ var _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review-application/review-application.component */ "./src/app/review-application/review-application.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-teams/create-teams.component */ "./src/app/create-teams/create-teams.component.ts");
/* harmony import */ var _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team1-details/team1-details.component */ "./src/app/team1-details/team1-details.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./archived-incidents/archived-incidents.component */ "./src/app/archived-incidents/archived-incidents.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _cop_cop_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cop/cop.component */ "./src/app/cop/cop.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _my_dialog_component_my_dialog_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-dialog-component/my-dialog-component.component */ "./src/app/my-dialog-component/my-dialog-component.component.ts");
/* harmony import */ var _applicantaccepted_applicantaccepted_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./applicantaccepted/applicantaccepted.component */ "./src/app/applicantaccepted/applicantaccepted.component.ts");
/* harmony import */ var _applicantdenied_applicantdenied_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./applicantdenied/applicantdenied.component */ "./src/app/applicantdenied/applicantdenied.component.ts");
/* harmony import */ var _app_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.material */ "./src/app/app.material.ts");
/* harmony import */ var _report_dialog_report_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./report-dialog/report-dialog.component */ "./src/app/report-dialog/report-dialog.component.ts");
/* harmony import */ var _archivedialog_archivedialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./archivedialog/archivedialog.component */ "./src/app/archivedialog/archivedialog.component.ts");
/* harmony import */ var _teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./teamdialog/teamdialog.component */ "./src/app/teamdialog/teamdialog.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _update_team_update_team_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./update-team/update-team.component */ "./src/app/update-team/update-team.component.ts");
/* harmony import */ var _teamdelete_teamdelete_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teamdelete/teamdelete.component */ "./src/app/teamdelete/teamdelete.component.ts");
/* harmony import */ var _logindialog_logindialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./logindialog/logindialog.component */ "./src/app/logindialog/logindialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_8__["CreateIncidentComponent"],
                _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_9__["ReviewApplicationComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_10__["TeamsComponent"],
                _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_11__["CreateTeamsComponent"],
                _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_12__["Team1DetailsComponent"],
                _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_15__["ArchivedIncidentsComponent"],
                _cop_cop_component__WEBPACK_IMPORTED_MODULE_17__["COPComponent"],
                _my_dialog_component_my_dialog_component_component__WEBPACK_IMPORTED_MODULE_19__["MyDialogComponentComponent"],
                _applicantaccepted_applicantaccepted_component__WEBPACK_IMPORTED_MODULE_20__["ApplicantacceptedComponent"],
                _applicantdenied_applicantdenied_component__WEBPACK_IMPORTED_MODULE_21__["ApplicantdeniedComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"],
                _report_dialog_report_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ReportDialogComponent"],
                _archivedialog_archivedialog_component__WEBPACK_IMPORTED_MODULE_24__["ArchivedialogComponent"],
                _teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_25__["TeamdialogComponent"],
                _update_team_update_team_component__WEBPACK_IMPORTED_MODULE_28__["UpdateTeamComponent"],
                _teamdelete_teamdelete_component__WEBPACK_IMPORTED_MODULE_29__["TeamdeleteComponent"],
                _logindialog_logindialog_component__WEBPACK_IMPORTED_MODULE_30__["LogindialogComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_material__WEBPACK_IMPORTED_MODULE_22__["Material"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB954EX24ldvc9K55mjhdei_wg8Ly5shKQ'
                }),
            ],
            entryComponents: [
                _my_dialog_component_my_dialog_component_component__WEBPACK_IMPORTED_MODULE_19__["MyDialogComponentComponent"],
                _applicantaccepted_applicantaccepted_component__WEBPACK_IMPORTED_MODULE_20__["ApplicantacceptedComponent"],
                _applicantdenied_applicantdenied_component__WEBPACK_IMPORTED_MODULE_21__["ApplicantdeniedComponent"],
                _report_dialog_report_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ReportDialogComponent"],
                _archivedialog_archivedialog_component__WEBPACK_IMPORTED_MODULE_24__["ArchivedialogComponent"],
                _teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_25__["TeamdialogComponent"],
                _teamdelete_teamdelete_component__WEBPACK_IMPORTED_MODULE_29__["TeamdeleteComponent"],
                _logindialog_logindialog_component__WEBPACK_IMPORTED_MODULE_30__["LogindialogComponent"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applicantaccepted/applicantaccepted.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/applicantaccepted/applicantaccepted.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button\r\n{\r\n  /* width: 150px; */\r\n  text-align: center;\r\n  size: 100px;\r\n  \r\n  /* margin-:0 auto; */\r\n  margin-left: 220px;\r\n  margin-top: 50px;\r\n\r\n}\r\n\r\n.text\r\n{\r\n  font-size: 50px;\r\n}"

/***/ }),

/***/ "./src/app/applicantaccepted/applicantaccepted.component.html":
/*!********************************************************************!*\
  !*** ./src/app/applicantaccepted/applicantaccepted.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          Applicant Accepted!\r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button\" mat-mini-fab color=\"primary\" (click)=\"onClick()\">Ok</button>\r\n   <!-- <a mat-button routerLink=\"/reviewApplication\" routerLinkActive=\"mat-stroked-button\">Review Application</a>    -->\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/applicantaccepted/applicantaccepted.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/applicantaccepted/applicantaccepted.component.ts ***!
  \******************************************************************/
/*! exports provided: ApplicantacceptedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantacceptedComponent", function() { return ApplicantacceptedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/user */ "./src/app/common/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ApplicantacceptedComponent = /** @class */ (function () {
    function ApplicantacceptedComponent(router, dataService, ref, thisDialogRef, data) {
        this.router = router;
        this.dataService = dataService;
        this.ref = ref;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    ApplicantacceptedComponent.prototype.ngOnInit = function () {
        this.applicant = this.data;
        this.applicant.role = "AcceptedApplicant";
        this.dataService.saveApplicantDecision(this.applicant)
            .subscribe(function (data) {
        });
    };
    ApplicantacceptedComponent.prototype.onClick = function () {
        this.ref.closeAll();
        // this.router.navigate(['/reviewApplication']);
        window.location.reload(true);
    };
    ApplicantacceptedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicantaccepted',
            template: __webpack_require__(/*! ./applicantaccepted.component.html */ "./src/app/applicantaccepted/applicantaccepted.component.html"),
            styles: [__webpack_require__(/*! ./applicantaccepted.component.css */ "./src/app/applicantaccepted/applicantaccepted.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _common_user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], ApplicantacceptedComponent);
    return ApplicantacceptedComponent;
}());



/***/ }),

/***/ "./src/app/applicantdenied/applicantdenied.component.css":
/*!***************************************************************!*\
  !*** ./src/app/applicantdenied/applicantdenied.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button\r\n{\r\n  /* width: 150px; */\r\n  text-align: center;\r\n  size: 100px;\r\n  \r\n  /* margin-:0 auto; */\r\n  margin-left: 220px;\r\n  margin-top: 50px;\r\n\r\n}\r\n\r\n.text\r\n{\r\n  font-size: 50px;\r\n}"

/***/ }),

/***/ "./src/app/applicantdenied/applicantdenied.component.html":
/*!****************************************************************!*\
  !*** ./src/app/applicantdenied/applicantdenied.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          Applicant Denied!\r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button\" mat-mini-fab color=\"primary\" (click)=\"onClick()\">Ok</button>\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/applicantdenied/applicantdenied.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/applicantdenied/applicantdenied.component.ts ***!
  \**************************************************************/
/*! exports provided: ApplicantdeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantdeniedComponent", function() { return ApplicantdeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/user */ "./src/app/common/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ApplicantdeniedComponent = /** @class */ (function () {
    function ApplicantdeniedComponent(router, dataService, ref, thisDialogRef, data) {
        this.router = router;
        this.dataService = dataService;
        this.ref = ref;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    ApplicantdeniedComponent.prototype.ngOnInit = function () {
        this.applicant = this.data;
        this.applicant.role = "RejectedApplicant";
        this.dataService.saveApplicantDecision(this.applicant)
            .subscribe(function (data) {
        });
    };
    ApplicantdeniedComponent.prototype.onClick = function () {
        this.ref.closeAll();
        window.location.reload(true);
    };
    ApplicantdeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicantdenied',
            template: __webpack_require__(/*! ./applicantdenied.component.html */ "./src/app/applicantdenied/applicantdenied.component.html"),
            styles: [__webpack_require__(/*! ./applicantdenied.component.css */ "./src/app/applicantdenied/applicantdenied.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _common_user__WEBPACK_IMPORTED_MODULE_2__["User"]])
    ], ApplicantdeniedComponent);
    return ApplicantdeniedComponent;
}());



/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to kishan */\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 1110px;\r\n  }\r\n\r\n.pageHeading {\r\n    margin: 13px auto;\r\n  }\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n  min-width: 400px;\r\n}\r\n\r\n.table-header{\r\n  font-size: 25px;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.table-cell {\r\n  font-size: 15px;\r\n}\r\n\r\n/* for buttons - download */\r\n\r\n.buttons {\r\n    font-size: 1em;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  This page is to show past incidents\r\n  Assigned to Kishan\r\n-->\r\n<div class=\"container\">\r\n  <!-- Header for the Archived Incidents page -->\r\n  <!-- <h1>Archived Incidents</h1> -->\r\n  <h1 class=\"pageHeading mat-display-1\">Archived Incidents</h1>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"example-header\">\r\n      <mat-form-field>\r\n        <!-- <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"> -->\r\n        <!-- Picker is added to select the date from calendar -->\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a start date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"example-container mat-elevation-z8\">\r\n\r\n        <!-- Table contains details of the archived incidents -->\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n          <!-- Incident Name Column -->\r\n          <ng-container matColumnDef=\"incidentName\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Incident Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.incidentName }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Location Name Column -->\r\n          <ng-container matColumnDef=\"location\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Location </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.location }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Date Column -->\r\n          <ng-container matColumnDef=\"date\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.date | date }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Time Column -->\r\n          <!-- <ng-container matColumnDef=\"time\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Time </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.time }} </mat-cell>\r\n          </ng-container> -->\r\n\r\n          <!-- Description Column -->\r\n          <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Description </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.description }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- When clicked on any row a popup is displayed showing the details of incident -->\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"rowClicked(row)\"></mat-row>\r\n        </mat-table>\r\n\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <!-- Button is provided to download the archived incidents to excel sheet -->\r\n      <a mat-raised-button color=\"primary\" class=\"buttons\" href=\"http://drrs.herokuapp.com/incidentReport\">Download</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.ts ***!
  \********************************************************************/
/*! exports provided: ArchivedIncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedIncidentsComponent", function() { return ArchivedIncidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchivedIncidentsComponent = /** @class */ (function () {
    function ArchivedIncidentsComponent(dataService) {
        this.dataService = dataService;
        this.events = []; // for date filter
        this.displayedColumns = ['incidentName', 'location', 'date', 'description'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ArchivedIncidentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getArciveIncident()
            .subscribe(function (data) {
            _this.incidents = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.incidents);
            // console.log(this.incidents);
        });
    };
    ArchivedIncidentsComponent.prototype.addEvent = function (type, event) {
        console.log(type + ' ' + event.value);
    };
    ArchivedIncidentsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ArchivedIncidentsComponent.prototype, "sort", void 0);
    ArchivedIncidentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archived-incidents',
            template: __webpack_require__(/*! ./archived-incidents.component.html */ "./src/app/archived-incidents/archived-incidents.component.html"),
            styles: [__webpack_require__(/*! ./archived-incidents.component.css */ "./src/app/archived-incidents/archived-incidents.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ArchivedIncidentsComponent);
    return ArchivedIncidentsComponent;
}());



/***/ }),

/***/ "./src/app/archivedialog/archivedialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/archivedialog/archivedialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1{\r\n    margin-left: 200px;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n/* .button2{\r\n    margin-left: 380px;\r\n    \r\n} */\r\n\r\n.text\r\n{\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/archivedialog/archivedialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/archivedialog/archivedialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          <b>Do you want to archive the incident?</b> \r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button1\" mat-mini-fab color=\"primary\" (click)=\"yes(data)\">Yes</button>\r\n        <button class=\"button2\" mat-mini-fab color=\"warn\" (click)=\"no()\">No</button>\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/archivedialog/archivedialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/archivedialog/archivedialog.component.ts ***!
  \**********************************************************/
/*! exports provided: ArchivedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedialogComponent", function() { return ArchivedialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_incident__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/incident */ "./src/app/common/incident.ts");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ArchivedialogComponent = /** @class */ (function () {
    function ArchivedialogComponent(dataService, ref, data, thisMatDialogRef) {
        this.dataService = dataService;
        this.ref = ref;
        this.data = data;
        this.thisMatDialogRef = thisMatDialogRef;
        this.isLoading = false;
        this.id = { _id: String };
    }
    ArchivedialogComponent.prototype.ngOnInit = function () {
        this.incident = this.data;
        this.incidents = this.data['data'];
        this.isLoading = false;
    };
    ArchivedialogComponent.prototype.yes = function (item) {
        var _this = this;
        this.thisMatDialogRef.close();
        this.id = { _id: item._id };
        console.log(this.id);
        this.dataService.archiveIncident(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.dataService.getIncidentsList()
                .subscribe(function (dataInci) {
                _this.incidents = dataInci['data'];
                _this.isLoading = false;
            });
            item.isActive = false;
            console.log('success');
        }, function (error) {
            console.log('Error Occured');
        });
    };
    ArchivedialogComponent.prototype.no = function () {
        this.ref.closeAll();
    };
    ArchivedialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archivedialog',
            template: __webpack_require__(/*! ./archivedialog.component.html */ "./src/app/archivedialog/archivedialog.component.html"),
            styles: [__webpack_require__(/*! ./archivedialog.component.css */ "./src/app/archivedialog/archivedialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _common_incident__WEBPACK_IMPORTED_MODULE_2__["Incident"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ArchivedialogComponent);
    return ArchivedialogComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _logindialog_logindialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logindialog/logindialog.component */ "./src/app/logindialog/logindialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router, ref, dialogref) {
        this.router = router;
        this.ref = ref;
        this.dialogref = dialogref;
        this.message = "Incorrect Usename or Passsword";
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false); // {1}
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        if (user.userName === 'Admin' && user.password === 'Admin') {
            this.loggedIn.next(true);
            this.dialogref.open(_logindialog_logindialog_component__WEBPACK_IMPORTED_MODULE_3__["LogindialogComponent"], {
                width: '600px',
            });
            // this.router.navigate(['/dashboard']);
            // console.log("Sucessfully logged in");
            // alert("Sucessfully logged in")
        }
        else {
            console.log("Incorrect Usename or Passsword");
            alert(this.message);
        }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/dataService.ts":
/*!***************************************!*\
  !*** ./src/app/common/dataService.ts ***!
  \***************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    // login(loginData){
    //   return this.http.post("https://drrs.herokuapp.com/signin", loginData);
    // }
    DataService.prototype.getApplicantsList = function () {
        //   http call
        //  return this.http.get('https://drrs.herokuapp.com/getApplicantsList');
        return this.http.get('http://localhost:3000/getApplicantsList');
    };
    DataService.prototype.getMembersList = function () {
        //   http call
        //  return this.http.get('https://drrs.herokuapp.com/getMembersList');
        return this.http.get('http://localhost:3000/getMembersList');
    };
    DataService.prototype.saveApplicantDecision = function (data) {
        // http call  
        // return this.http.put('https://drrs.herokuapp.com/saveApplicationDecision', data);
        return this.http.put('http://localhost:3000/saveApplicationDecision', data);
    };
    DataService.prototype.getIncidentsList = function () {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getIncidentsList');
        // return this.http.get('http://localhost:3000/getIncidentsList');
    };
    DataService.prototype.getArciveIncident = function () {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getArchiveIncidents');
        // return this.http.get('http://localhost:3000/getArchiveIncidents');
    };
    DataService.prototype.archiveIncident = function (data) {
        //   http call
        return this.http.put('https://drrs.herokuapp.com/archiveIncident', data);
        // return this.http.put('http://localhost:3000/archiveIncident', data);
    };
    DataService.prototype.deleteTeam = function (data) {
        //   http call
        return this.http.put('https://drrs.herokuapp.com/deleteTeam', data);
        // return this.http.put('http://localhost:3000/deleteTeam', data);
    };
    DataService.prototype.getReportsList = function () {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getReportsList');
        // return this.http.get('http://localhost:3000/getReportsList');
    };
    DataService.prototype.getTeamList = function () {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getTeamList');
        // return this.http.get('http://localhost:3000/getTeamList');
    };
    DataService.prototype.saveIncident = function (data) {
        // http call
        return this.http.post('https://drrs.herokuapp.com/saveIncident', data);
        // return this.http.post('http://localhost:3000/saveIncident', data);
    };
    DataService.prototype.saveTeam = function (data) {
        // http call
        return this.http.post('https://drrs.herokuapp.com/saveTeam', data);
        //  return this.http.post('http://localhost:3000/saveTeam', data);
    };
    DataService.prototype.getTeamById = function (data) {
        // return this.http.get('http://localhost:3000/getTeam/' + data);
        return this.http.get('https://drrs.herokuapp.com/getTeam/' + data);
    };
    DataService.prototype.getFileById = function () {
        return this.http.get('http://localhost:3000/certification/');
        // return this.http.get('https://drrs.herokuapp.com/certification/' + data);
    };
    DataService.prototype.getReportById = function (data) {
        // return this.http.get('http://localhost:3000/getReportById/'+ data);
        return this.http.get('https://drrs.herokuapp.com/getReportById/' + data);
    };
    DataService.prototype.getTeamsById = function (data) {
        //  return this.http.get('http://localhost:3000/getTeamsById/'+ data);
        return this.http.get('https://drrs.herokuapp.com/getTeamsById/' + data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/common/incident.ts":
/*!************************************!*\
  !*** ./src/app/common/incident.ts ***!
  \************************************/
/*! exports provided: Incident */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Incident", function() { return Incident; });
// Assigned to Kishan
var Incident = /** @class */ (function () {
    function Incident(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return Incident;
}());



/***/ }),

/***/ "./src/app/common/report.ts":
/*!**********************************!*\
  !*** ./src/app/common/report.ts ***!
  \**********************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
// Assigned to Vineeth
var Report = /** @class */ (function () {
    function Report(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return Report;
}());



/***/ }),

/***/ "./src/app/common/team.ts":
/*!********************************!*\
  !*** ./src/app/common/team.ts ***!
  \********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/common/user.ts":
/*!********************************!*\
  !*** ./src/app/common/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/cop/cop.component.css":
/*!***************************************!*\
  !*** ./src/app/cop/cop.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 460px;\r\n    /* width:  1000px; */\r\n    align-self: flex-end;\r\n}\r\n\r\n th, td {\r\n    border: 1px solid black;\r\n}\r\n\r\n #black_row{\r\n    background-color:black; \r\n    color: white\r\n}\r\n\r\n #red_row{\r\n    background-color:#ff0000; \r\n    color: white\r\n}\r\n\r\n #yellow_row{\r\n    background-color:yellow; \r\n}\r\n\r\n #green_row{\r\n    background-color:green; \r\n}\r\n"

/***/ }),

/***/ "./src/app/cop/cop.component.html":
/*!****************************************!*\
  !*** ./src/app/cop/cop.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\"> -->\r\n\r\n<!-- \r\n        [latitude] is an agm-map object taking values of lat metioned in component.ts.\r\n        [Zoom] is a auto zoom functionality while loading the map taking value from component.ts\r\n        (mapClick) is a functionality that takes whenever clicked on map, this.coords object will give\r\n         the lat and long results which we can set to lat and lng in component.ts to change runtime\r\n         [markerDraggable] is used to drag the marker on the map.\r\n         (dragEnd) is used to do something when the marker dragging stopped by user by calling the method \r\n         we might write in markerDragEnd()\r\n         (markerClick) will do something we write when a marker is clicked.\r\n\r\n     -->\r\n\r\n<!-- <agm-map  [latitude]=40.349841283655195 [longitude]=-94.8827696546299 [zoomControl]=\"true\"> -->\r\n<agm-map  [latitude]=lat [longitude]=lng [zoomControl]=\"true\">\r\n\r\n    <agm-marker *ngFor=\"let m of reports; let i=index\" [latitude]=m.location.lat [longitude]=m.location.lng>\r\n        <agm-info-window>\r\n            <strong>\r\n                <table style=\"width:30%\">\r\n                    <tr>\r\n                        <th>\r\n                            {{m.reportID}}\r\n                        </th>\r\n                    </tr>\r\n                    <tr id=\"black_row\">\r\n                        <td align=\"center\">\r\n                            {{m.casualties.black}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr id=\"red_row\">\r\n                        <td align=\"center\">\r\n                            {{m.casualties.red}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr id=\"yellow_row\">\r\n                        <td align=\"center\">\r\n                            {{m.casualties.yellow}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr id=\"green_row\">\r\n                        <td align=\"center\">\r\n                            {{m.casualties.green}}\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </strong>\r\n        </agm-info-window>\r\n\r\n    </agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "./src/app/cop/cop.component.ts":
/*!**************************************!*\
  !*** ./src/app/cop/cop.component.ts ***!
  \**************************************/
/*! exports provided: COPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPComponent", function() { return COPComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var COPComponent = /** @class */ (function () {
    function COPComponent(dataService) {
        this.dataService = dataService;
    }
    COPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getReportsList()
            .subscribe(function (data) {
            console.log(data);
            _this.reports = data['data'];
            _this.lat = _this.reports[0].location.lat;
            _this.lng = _this.reports[0].location.lng;
        });
    };
    COPComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cop',
            template: __webpack_require__(/*! ./cop.component.html */ "./src/app/cop/cop.component.html"),
            styles: [__webpack_require__(/*! ./cop.component.css */ "./src/app/cop/cop.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], COPComponent);
    return COPComponent;
}());



/***/ }),

/***/ "./src/app/create-incident/create-incident.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n\r\n.createContainer {\r\n    padding-left: 30em;\r\n    padding-right: 29em;\r\n}\r\n\r\n/* .primary{\r\n    background: #673ab7;\r\n    color: white;\r\n    font-size: 1em;\r\n} */\r\n\r\n.button-row button {\r\n  margin-right: 8px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/create-incident/create-incident.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Hemanth\r\n -->\r\n<div class=\"container\">\r\n  <!-- Header for the Create Incident page -->\r\n  <h1 class=\"pageHeading mat-display-1\">Create Incident</h1>\r\n  <hr>\r\n</div>\r\n\r\n<div class=\"createContainer\">\r\n\r\n  <!-- Form provided to input details for incident details -->\r\n  <form novalidate (submit)=\"onCreate(createInc)\" #createInc=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"incidentName\">\r\n        <b>Incident Name</b>\r\n      </label>\r\n      <!-- Input for incident name -->\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"incident.incidentName\" name=\"incidentName\" #incidentName=\"ngModel\"\r\n        id=\"inputincidentName\" placeholder=\"Enter incident\" required>\r\n      <!--\r\n      incident name error block\r\n      by Kishan\r\n    -->\r\n      <!-- Input validation for incident name-->\r\n      <div *ngIf=\"(incidentName.invalid && ( incidentName.touched || incidentName.dirty)) || isSubmitted\" class=\"col-sm-7 text-danger\">\r\n        <div *ngIf=\"incidentName.errors?.required\" class=\"mat-body-1\">\r\n          Please enter the incident Name\r\n        </div>\r\n      </div>\r\n\r\n      <label for=\"location\">\r\n        <b>Location</b>\r\n      </label>\r\n      <!-- Input field for location name -->\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"incident.location\" name=\"location\" location #location=\"ngModel\"\r\n        id=\"inputlocation\" placeholder=\"Enter location\" required>\r\n      <!--\r\n      location error block\r\n      by Kishan\r\n    -->\r\n      <!-- Input validation for location -->\r\n      <div *ngIf=\"(location.invalid && ( location.touched || location.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n        <div *ngIf=\"location.errors?.required\" class=\"mat-body-1\">\r\n          Please enter the location\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Select date block -->\r\n      <label for=\"date\">\r\n        <b>Date</b>\r\n      </label>\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"incident.date\" name=\"date\" #date=\"ngModel\" id=\"inputdate\"\r\n        value=\"incident.date\" disabled>\r\n      <!--\r\n      date error block\r\n      by Kishan\r\n    -->\r\n      <!-- Validtion for date block -->\r\n      <!-- <div *ngIf=\"(date.invalid && ( date.touched || date.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"date.errors?.required\">\r\n        Please enter the date\r\n      </div>\r\n    </div> -->\r\n\r\n      <!-- Select time block -->\r\n      <label for=\"time\">\r\n        <b>Time</b>\r\n      </label>\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"incident.time\" name=\"time\" #time=\"ngModel\" id=\"inputtime\"\r\n        value=\"incident.date\" disabled>\r\n      <!--\r\n      time error block\r\n      by Kishan\r\n    -->\r\n      <!-- Validation for time block -->\r\n      <!-- <div *ngIf=\"(time.invalid && ( time.touched || time.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"time.errors?.required\">\r\n        Please enter the time\r\n      </div>\r\n    </div> -->\r\n\r\n      <label for=\"description\">\r\n        <b>Description</b>\r\n      </label>\r\n      <!-- Input field for description name -->\r\n      <textarea type=\"text\" class=\"form-control\" [ngModel]=\"incident.description\" name=\"description\" description\r\n        #description=\"ngModel\" id=\"inputdescription\" placeholder=\"Enter description\" required></textarea>\r\n      <!--\r\n        description error block\r\n        by Kishan\r\n      -->\r\n      <!-- Input validation for description -->\r\n      <div *ngIf=\"(description.invalid && ( description.touched || description.dirty)) || isSubmitted\" class=\"col-sm-7 text-danger\">\r\n        <div *ngIf=\"description.errors?.required\" class=\"mat-body-1\">\r\n          Please enter the description\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Button provided to Create Incident -->\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" type=\"submit\"> Create </button>\r\n      <button mat-raised-button color=\"warn\" routerLink=\"/dashboard\"> Cancel </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-incident/create-incident.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateIncidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentComponent", function() { return CreateIncidentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_incident__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/incident */ "./src/app/common/incident.ts");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateIncidentComponent = /** @class */ (function () {
    function CreateIncidentComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.date = new Date;
        this.incident = new _common_incident__WEBPACK_IMPORTED_MODULE_2__["Incident"]({
            incidentID: '',
            incidentName: '',
            location: '',
            date: this.date,
            time: this.date,
            description: '',
            isActive: false
        });
    }
    CreateIncidentComponent.prototype.ngOnInit = function () {
    };
    CreateIncidentComponent.prototype.onCreate = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
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
                .subscribe(function (data) {
                console.log(data);
                console.log('success');
                _this.router.navigate(['/dashboard']);
            }, function (error) {
                console.log('Error Occured');
            });
        }
    };
    CreateIncidentComponent.prototype.convert = function (str) {
        // tslint:disable-next-line:prefer-const
        var date = new Date(str), 
        // tslint:disable-next-line:prefer-const
        mnth = ('0' + (date.getMonth() + 1)).slice(-2), 
        // tslint:disable-next-line:prefer-const
        day = ('0' + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join('');
    };
    CreateIncidentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-incident',
            template: __webpack_require__(/*! ./create-incident.component.html */ "./src/app/create-incident/create-incident.component.html"),
            styles: [__webpack_require__(/*! ./create-incident.component.css */ "./src/app/create-incident/create-incident.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CreateIncidentComponent);
    return CreateIncidentComponent;
}());



/***/ }),

/***/ "./src/app/create-teams/create-teams.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary{\r\n  background: #673ab7;\r\n  color: white;\r\n  font-size: 1em;\r\n}\r\n\r\n.container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n\r\n.table-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.filter-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field-filter {\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.button-row button {\r\n  margin-right: 8px;\r\n}\r\n\r\n.mat-header-cell {\r\n  font-size: 22px;\r\n  color: black;\r\n  font-weight: bold;\r\n  padding: 12px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  padding: 12px;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/create-teams/create-teams.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Chandra mouli\r\n -->\r\n<!-- @Author Chandra Mouli Kantipudi -->\r\n<!-- Page not yet completed -->\r\n<div class=\"container\">\r\n  <!-- Header for the page -->\r\n  <h1><b>Create Team</b></h1>\r\n  <hr>\r\n\r\n  <!-- Form to input the team details -->\r\n  <form novalidate (ngSubmit)=\"onCreate(createTeam)\" #createTeam=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"team\">\r\n          <h3><b>Team Name</b></h3>\r\n        </label>\r\n      <!--Input for team name -->\r\n      <input type=\"text\" class=\"form-control\" \r\n      id = \"teamName\" name =\"teamName\"\r\n      ngModel\r\n      [value]=\"teamName\"\r\n      required\r\n          placeholder=\"Enter Team Name\" required>\r\n        <br>\r\n\r\n      <!-- TeamID should autogenerate -->\r\n      <!-- <label for=\"teamID\">\r\n        <b>Team ID :</b>\r\n      </label>\r\n      {{a}} -->\r\n    </div>\r\n\r\n    <div class=\"table-container mat-elevation-z8\">\r\n      <div class=\"filter-header\">\r\n        <mat-form-field class=\"mat-form-field-filter\">\r\n          <!-- Filter provided to filter the table data -->\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- Table -->\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n        <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- First Name Column\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> First Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.firstName }} </mat-cell>\r\n      </ng-container> -->\r\n\r\n        <!-- First Name Column -->\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Last Name Column-->\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"email\">\r\n          <th mat-header-cell *matHeaderCellDef> Email </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dob\">\r\n          <th mat-header-cell *matHeaderCellDef> Date of Birth </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.dob | date }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"county\">\r\n          <th mat-header-cell *matHeaderCellDef> County </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.county}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"skills\">\r\n          <th mat-header-cell *matHeaderCellDef> Skills </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.skills}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\">\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <br>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select Leader\" id=\"leader\" name=\"leader\" ngModel [value]=\"leader\" required>\r\n        <mat-option *ngFor=\"let leader of selection.selected\" [value]=\"leader.firstName + leader.lastName\">\r\n          {{leader.firstName}} {{leader.lastName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <br>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select Assistant Leader\" id=\"asstLeader\" name=\"asstLeader\" ngModel [value]=\"asstLeader\"\r\n        required>\r\n        <mat-option *ngFor=\"let asstLeader of selection.selected\" [value]=\"asstLeader.firstName + asstLeader.lastName\">\r\n          {{asstLeader.firstName}} {{asstLeader.lastName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <br>\r\n\r\n    <!-- Button provided to create team -->\r\n    <!-- <button class=\"btn primary\"> Create Team</button> -->\r\n    <div class=\"button-row\">\r\n      <!-- <button  mat-raised-button color = \"primary\" (click)=\"dialogue()\">Create Team</button> -->\r\n      <button mat-raised-button color=\"primary\"> Create </button>\r\n      <button mat-raised-button color=\"warn\" [routerLink]=\"['/teamsById', inciID]\"> Cancel </button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/create-teams/create-teams.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.ts ***!
  \********************************************************/
/*! exports provided: CreateTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamsComponent", function() { return CreateTeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _common_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/team */ "./src/app/common/team.ts");
/* harmony import */ var _teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../teamdialog/teamdialog.component */ "./src/app/teamdialog/teamdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTeamsComponent = /** @class */ (function () {
    function CreateTeamsComponent(route, router, dataService, dialogref) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.dialogref = dialogref;
        this.a = Math.floor((Math.random() * 10000) + 1);
        this.saveTeam = false;
        this.displayedColumns = ['select', 'firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.applicants);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.team = new _common_team__WEBPACK_IMPORTED_MODULE_6__["Team"]({
            teamID: '',
            members: [],
            leader: '',
            asstLeader: '',
            isActive: false,
            teamName: ''
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    CreateTeamsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CreateTeamsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) {
                _this.selection.select(row);
                // console.log(row);
            });
        // console.log(this.selection);
    };
    CreateTeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getMembersList()
            .subscribe(function (data) {
            _this.applicants = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.applicants);
        });
        this.route.paramMap.subscribe(function (paramMap) {
            _this.inciID = paramMap.get('incidentID');
            console.log("value of incidentID is " + _this.inciID);
        });
    };
    CreateTeamsComponent.prototype.onCreate = function () {
        // this.router.navigate(['/dashboard']);
        // if(this.saveTeam){
        this.team.teamID = "Team" + this.a;
        this.team.members = this.selection.selected;
        this.team.isActive = true;
        this.team.incidentID = this.inciID;
        this.team.leader = this.signupForm.value.leader;
        this.team.asstLeader = this.signupForm.value.asstLeader;
        this.team.teamName = this.signupForm.value.teamName;
        console.log(this.signupForm.value.teamName);
        console.log(this.team);
        //make http req. only if form is valid
        this.dialogref.open(_teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_7__["TeamdialogComponent"], {
            width: '600px',
            data: this.team
        });
    };
    CreateTeamsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createTeam'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CreateTeamsComponent.prototype, "signupForm", void 0);
    CreateTeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-teams',
            template: __webpack_require__(/*! ./create-teams.component.html */ "./src/app/create-teams/create-teams.component.html"),
            styles: [__webpack_require__(/*! ./create-teams.component.css */ "./src/app/create-teams/create-teams.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CreateTeamsComponent);
    return CreateTeamsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to Mouli and Kishan*/\r\n.container {\r\n  margin-top: 1em;\r\n}\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n/* cards */\r\n.incident-card {\r\n    /* max-width: 235px; */\r\n    width: 255px;\r\n    height: 500px;\r\n    margin-top: 2em;\r\n}\r\n.mat-card-image{\r\n    width: 255px;\r\n    height: 165px;\r\n}\r\n/* for buttons - Create incident and Archived Incidents */\r\n.buttons {\r\n    font-size: 1em;\r\n}\r\n/* Describtion height */\r\n.p-height{\r\n    height: 6em;\r\n}\r\n.mt-archive{\r\n    margin-top: 0.4em;\r\n}\r\nmat-grid-tile {\r\n    background: lightblue;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Chandra mouli\r\n -->\r\n<!-- @Author Chandra Mouli Kantipudi -->\r\n\r\n<div class=\"container\">\r\n  <!-- Header for the dashboard page -->\r\n  <h1 class=\"pageHeading mat-display-1\">Dashboard</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <!-- Create incident button provided to route to create incident page -->\r\n      <button routerLink=\"/createIncident\" mat-raised-button color=\"primary\" class=\"buttons\">Create Incident</button>\r\n    </div>\r\n\r\n    <div class=\"col text-right\">\r\n      <!-- Archived Incidents button provided to route to Archived Incidents page -->\r\n      <button routerLink=\"/archivedIncidents\" mat-raised-button color=\"primary\" class=\"buttons\">Archived Incidents</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\r\n    <div *ngFor=\"let item of incidents\">\r\n      <div class=\"col-4 text-center\" *ngIf=\"item.isActive\">\r\n        <!-- The incident modules are shown using cards. Card has image of incident,\r\n        brief description and two buttons edit and archive -->\r\n        <mat-card *ngIf=\"incidents.length > 0 && !isLoading\" class=\"incident-card mat-elevation-z5\">\r\n          <div [ngSwitch]=\"item.incidentName\">\r\n            <a *ngSwitchCase=\"'Earthquake'\" routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.1.jpg\" alt=\"Earthquake\">\r\n            </a>\r\n            <a *ngSwitchCase=\"'Floods'\" routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.4.jpg\" alt=\"Floods\">\r\n            </a>\r\n            <a *ngSwitchCase=\"'Hurricane'\" routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.5.jpg\" alt=\"Hurricane\">\r\n            </a>\r\n            <a *ngSwitchCase=\"'Wildfire'\" routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.2.jpg\" alt=\"Wildfire\">\r\n            </a>\r\n            <a *ngSwitchCase=\"'Tornado'\" routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.3.jpg\" alt=\"Tornado\">\r\n            </a>\r\n            <a *ngSwitchDefault routerLink=\"/dashboard\">\r\n              <!-- Image of incident -->\r\n              <img mat-card-image src=\"assets/images/incidents/img.6.jpg\" alt=\"Others\">\r\n            </a>\r\n          </div>\r\n          <mat-card-content>\r\n            <!-- Name of incident -->\r\n            <h2>{{ item.incidentName }}</h2>\r\n            <p>\r\n              <!-- Brief description of incident -->\r\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{ item.location }}\r\n            </p>\r\n            <p class=\"p-height\">\r\n              <!-- Brief description of incident -->\r\n              {{ item.description }}\r\n            </p>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <!-- Report button is provided to retrive report of the incident module-->\r\n            <!-- <button mat-raised-button color=\"primary\" (click)=\"report(item.incidentID)\">Report</button> -->\r\n            <button mat-raised-button color=\"primary\" [routerLink] = \"['/reportById', item.incidentID]\">Reports</button>\r\n            <!-- Team button is provided to view team and its members in the incident module -->\r\n            <button mat-raised-button color=\"primary\" [routerLink] = \"['/teamsById', item.incidentID]\">Teams</button>\r\n            <!-- <button mat-raised-button color=\"primary\" routerLink=\"/teams\">Team</button> -->\r\n            <!-- Archive button is provided to archive the incident module -->\r\n            <div class=\"mt-archive\">\r\n\r\n            <!-- <button mat-raised-button color=\"warn\"  >Archive</button> -->\r\n              <button mat-raised-button color=\"warn\" (click)=\"dialog(item)\">Archive</button>\r\n              <!-- onArchive(item) -->\r\n            </div>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <p class=\"mat-title\" *ngIf=\"!incidents?.length\">No incident to show!</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _archivedialog_archivedialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../archivedialog/archivedialog.component */ "./src/app/archivedialog/archivedialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dataService, dialogref) {
        this.router = router;
        this.dataService = dataService;
        this.dialogref = dialogref;
        this.isLoading = false;
        this.id = { _id: String };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getIncidentsList()
            .subscribe(function (data) {
            _this.incidents = data['data'];
            _this.isLoading = false;
        });
    };
    DashboardComponent.prototype.onArchive = function (item) {
        var _this = this;
        this.id = { _id: item._id };
        // console.log(this.id);
        this.dataService.archiveIncident(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.dataService.getIncidentsList()
                .subscribe(function (dataInci) {
                _this.incidents = dataInci['data'];
                _this.isLoading = false;
            });
            item.isActive = false;
            console.log('success');
        }, function (error) {
            console.log('Error Occured');
        });
    };
    DashboardComponent.prototype.dialog = function (item) {
        this.dialogref.open(_archivedialog_archivedialog_component__WEBPACK_IMPORTED_MODULE_3__["ArchivedialogComponent"], {
            width: '600px',
            data: item
        });
    };
    DashboardComponent.prototype.report = function (incident_id) {
        console.log("entered from dasboard report method " + incident_id);
        // this.router.navigate(['/report', {
        this.router.navigate(['/reportById', {
                data: incident_id
            }]);
        //   this.dialogref.open(ArchivedialogComponent, {
        //     width:'600px',
        //     data:incident_id
        // });
    };
    DashboardComponent.prototype.teams = function (incident_id) {
        console.log("entered from dasboard teams method " + incident_id);
        // this.router.navigate(['/report', {
        this.router.navigate(['/TeamsById', {
                data: incident_id
            }]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  max-width: 400px;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n  margin-top: 3em;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}\r\n\r\n.logo {\r\n    width: 30%;\r\n    margin: 1em auto;\r\n    text-align: center;\r\n  }\r\n\r\nimg {\r\n    width: 30%;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Hemanth\r\n -->\r\n <div class=\"center\">\r\n   <h1>Disaster Response & Reporting System</h1>\r\n </div>\r\n <div class=\"logo\">\r\n    <img src=\"assets/images/EOC_logo.gif\" alt=\"EOC_logo\">\r\n </div>\r\n\r\n <div>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n          <p>Please login to continue</p>\r\n          <mat-form-field class=\"full-width-input\">\r\n            <input matInput placeholder=\"User\" formControlName=\"userName\" required>\r\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\r\n              Please inform your user name\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width-input\">\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\r\n              Please inform your password\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.authService.login(this.form.value);
        }
        this.formSubmitAttempt = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logindialog/logindialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/logindialog/logindialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1{\r\n    margin-left: 245px;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n/* .button2{\r\n    margin-left: 380px;\r\n    \r\n} */\r\n\r\n.text\r\n{\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/logindialog/logindialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/logindialog/logindialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          <b>Login Successful!</b> \r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button1\" mat-mini-fab color=\"primary\" (click)=\"yes()\">OK</button>\r\n        <!-- <button class=\"button2\" mat-mini-fab color=\"warn\" (click)=\"no()\">No</button> -->\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/logindialog/logindialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/logindialog/logindialog.component.ts ***!
  \******************************************************/
/*! exports provided: LogindialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogindialogComponent", function() { return LogindialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogindialogComponent = /** @class */ (function () {
    function LogindialogComponent(ref, router) {
        this.ref = ref;
        this.router = router;
    }
    LogindialogComponent.prototype.ngOnInit = function () {
    };
    LogindialogComponent.prototype.yes = function () {
        this.ref.closeAll();
        this.router.navigate(['/dashboard']);
        console.log("Sucessfully logged in");
    };
    LogindialogComponent.prototype.no = function () {
        this.ref.closeAll();
    };
    LogindialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logindialog',
            template: __webpack_require__(/*! ./logindialog.component.html */ "./src/app/logindialog/logindialog.component.html"),
            styles: [__webpack_require__(/*! ./logindialog.component.css */ "./src/app/logindialog/logindialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogindialogComponent);
    return LogindialogComponent;
}());



/***/ }),

/***/ "./src/app/my-dialog-component/my-dialog-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/my-dialog-component/my-dialog-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageHeading {\r\n  margin: auto;\r\n}\r\n\r\n.text-style {\r\n  font-size: 20px;\r\n}\r\n\r\n.files {\r\n  color:blue;\r\n  cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/my-dialog-component/my-dialog-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/my-dialog-component/my-dialog-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"pageHeading mat-display-1\">Applicant Details:</h1>\r\n    <!-- mat-dialog-title -->\r\n    <hr>\r\n    <mat-dialog-content>\r\n      <!-- <div class=\"container\"> -->\r\n  <div class=\"row text-style\">\r\n    <div class=\"col\">\r\n      <h3><u>Personal Details:</u></h3>\r\n      <p><b>First Name: </b>{{ user.firstName }}</p>\r\n      <p><b>Second Name: </b>{{ user.lastName }}</p>\r\n      <p><b>Email Id: </b>{{ user.email }}</p>\r\n      <p><b>Date of Birth: </b>{{ user.dob | date: 'dd/MM/yyyy' }}</p>\r\n      <p><b>Mobile Number: </b> {{ user.mobileNumber }}</p>\r\n      <h3><u>Address: </u></h3>\r\n      {{ user.address1 }},<br>\r\n      {{ user.address2 }}, {{ user.county }},<br>\r\n      {{ user.city }}, {{ user.state }}, {{ user.country }}\r\n    </div>\r\n    <div class=\"col\">\r\n      <h3><u>Additional Details:</u></h3>\r\n      <p><b>Skills: </b> {{ user.skills }} </p>\r\n      <p><b>Lisence Number: </b> {{ user.licenseNumber }} </p>\r\n      <p><b>Limitations: </b>{{ user.limitations }}</p>\r\n      <!-- <p *ngIf='user.files'><b>Certification: </b><a id=\"file\" href=\"http://localhost:3000/certification\">{{ user.files }}</a></p> -->\r\n      <p *ngIf='user.files'><b>Certification: </b>\r\n        <a id=\"file\" href=\"{{temp}}\" >{{ filename }}</a>\r\n      </p>\r\n      <p *ngIf='!user.files'><b>Certification: </b>No files uploaded</p>\r\n    </div>\r\n  </div>\r\n  <!-- </div> -->\r\n    <!-- <strong>{{data}}</strong> -->\r\n  </mat-dialog-content>\r\n  <hr>\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button color=\"primary\" (click)=\"accept()\">Accept</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"deny()\">Deny</button>\r\n  </mat-dialog-actions>\r\n  </div>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>"

/***/ }),

/***/ "./src/app/my-dialog-component/my-dialog-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/my-dialog-component/my-dialog-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyDialogComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponentComponent", function() { return MyDialogComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/user */ "./src/app/common/user.ts");
/* harmony import */ var _applicantaccepted_applicantaccepted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../applicantaccepted/applicantaccepted.component */ "./src/app/applicantaccepted/applicantaccepted.component.ts");
/* harmony import */ var _applicantdenied_applicantdenied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../applicantdenied/applicantdenied.component */ "./src/app/applicantdenied/applicantdenied.component.ts");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';






var MyDialogComponentComponent = /** @class */ (function () {
    function MyDialogComponentComponent(dataService, dialog, thisDialogRef, data) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.dialogResult = "";
        this.temp = "";
        this.filename = "";
    }
    MyDialogComponentComponent.prototype.ngOnInit = function () {
        this.user = this.data;
        var file = this.user.files;
        // var file="disasters.jpg";
        var filearr = file.split("\\");
        console.log(filearr);
        this.filename = filearr[filearr.length - 1];
        console.log("file is " + this.user.files);
        this.temp = "http://localhost:3000/certification/" + this.filename;
        // document.getElementById("file").setAttribute('href', "http://localhost:3000/certifications");
        // $("#file").href=
        // $("#file").attr("href", "https://www.w3schools.com/jquery/");
    };
    MyDialogComponentComponent.prototype.accept = function () {
        var _this = this;
        var dialogReff = this.dialog.open(_applicantaccepted_applicantaccepted_component__WEBPACK_IMPORTED_MODULE_3__["ApplicantacceptedComponent"], {
            width: '600px',
            data: this.user
        });
        dialogReff.afterClosed().subscribe(function (result) {
            // console.log('Dialog closed: ${result}');
            _this.dialogResult = result;
        });
    };
    MyDialogComponentComponent.prototype.downloadFile = function () {
        this.dataService.getFileById()
            .subscribe(function (data) {
            console.log(data);
            console.log('success');
        }, function (error) {
            console.log('Error Occured');
        });
    };
    MyDialogComponentComponent.prototype.deny = function () {
        var _this = this;
        var dialogReff = this.dialog.open(_applicantdenied_applicantdenied_component__WEBPACK_IMPORTED_MODULE_4__["ApplicantdeniedComponent"], {
            width: '600px',
            data: this.user
        });
        dialogReff.afterClosed().subscribe(function (result) {
            // console.log('Dialog closed: ${result}');
            _this.dialogResult = result;
        });
    };
    MyDialogComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dialog-component',
            template: __webpack_require__(/*! ./my-dialog-component.component.html */ "./src/app/my-dialog-component/my-dialog-component.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog-component.component.css */ "./src/app/my-dialog-component/my-dialog-component.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _common_user__WEBPACK_IMPORTED_MODULE_2__["User"]])
    ], MyDialogComponentComponent);
    return MyDialogComponentComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  margin: auto;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na.mat-button{\r\n  font-size: 17px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z10\" *ngIf=\"isLoggedIn$ \">\r\n<!-- <mat-toolbar color=\"primary\" class=\"mat-elevation-z10\"> -->\r\n  <span class=\"title mat-title\">\r\n    <a routerLink=\"/dashboard\">DRRS</a>\r\n  </span>\r\n  <span class=\"spacer\"></span>\r\n  <a mat-button routerLink=\"/dashboard\" routerLinkActive=\"mat-stroked-button\">Dashboard</a>\r\n  <a mat-button routerLink=\"/reviewApplication\" routerLinkActive=\"mat-stroked-button\">Review Application</a>\r\n  <a mat-button routerLink=\"/cop\" routerLinkActive=\"mat-stroked-button\">Common Operating Picture</a>\r\n  <!-- <a mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout</a> -->\r\n  <a mat-button (click)=\"onLogout()\">Logout</a>\r\n</mat-toolbar>\r\n<ng-template #loading>\r\n    Loading stuff...\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    NavBarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/report-dialog/report-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/report-dialog/report-dialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageHeading {\r\n    margin: auto;\r\n  }\r\n  \r\n  .text-style {\r\n    font-size: 20px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/report-dialog/report-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/report-dialog/report-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 class=\"pageHeading mat-display-1\">Report Details:</h1>\r\n  <!-- mat-dialog-title -->\r\n  <hr>\r\n  <mat-dialog-content>\r\n    <!-- <div class=\"container\"> -->\r\n<div class=\"row text-style\">\r\n  <div class=\"col\">\r\n    <p><b>Reported By: </b>{{ report.reportedBy }}</p>\r\n    <p><b>Incident Name: </b>{{ report.incidentName }}</p>\r\n    <p><b>location: </b>{{ report.location.lat + \" \" + report.location.lng }}</p>\r\n    <h3><u>Casualties: </u></h3>\r\n    <p class=\"text-danger font-weight-bold\">Red: {{ report.casualties.red }}</p> \r\n    <p class=\"text-warning font-weight-bold\">Yellow: {{ report.casualties.yellow }}</p> \r\n    <p class=\"text-success font-weight-bold\">Green: {{ report.casualties.green }}</p> \r\n    <p class=\"text-dark font-weight-bold\">Black: {{ report.casualties.black }}</p> \r\n  </div>\r\n  <div class=\"col\">\r\n    <p><b>Structural Damage: </b> {{ report.structuralDamage }} </p>\r\n    <p><b>Fire: </b> {{ report.fire }} </p>\r\n    <p><b>Utilities: </b>{{ report.utilities }}</p>\r\n    <p><b>Hazmat: </b>{{ report.hazmat }}</p>\r\n    <p><b>Others: </b>{{ report.others }}</p>    \r\n    <p *ngIf='report.files'><b>Certification: </b><a href={{temp}}>{{ filename }}</a></p>\r\n    <p *ngIf='!report.files'><b>Certification: </b>No files uploaded</p>\r\n  </div>\r\n</div>\r\n\r\n</mat-dialog-content>\r\n<hr>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onOk()\">Ok</button>\r\n</mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/report-dialog/report-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/report-dialog/report-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDialogComponent", function() { return ReportDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/report */ "./src/app/common/report.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ReportDialogComponent = /** @class */ (function () {
    function ReportDialogComponent(thisDialogRef, data, ref) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.ref = ref;
        this.filename = "";
        this.temp = "";
    }
    ReportDialogComponent.prototype.ngOnInit = function () {
        this.report = this.data;
        console.log(this.report);
        var file = this.report.files;
        var filearr = file.split("\\");
        console.log(filearr);
        this.filename = filearr[filearr.length - 1];
        // console.log("file is "+this.user.files)
        this.temp = "http://localhost:3000/certification/" + this.filename;
    };
    ReportDialogComponent.prototype.onOk = function () {
        this.ref.closeAll();
    };
    ReportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-dialog',
            template: __webpack_require__(/*! ./report-dialog.component.html */ "./src/app/report-dialog/report-dialog.component.html"),
            styles: [__webpack_require__(/*! ./report-dialog.component.css */ "./src/app/report-dialog/report-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _common_report__WEBPACK_IMPORTED_MODULE_2__["Report"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ReportDialogComponent);
    return ReportDialogComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.table-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n\r\n.filter-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.table-header{\r\n  font-size: 22px;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.table-cell {\r\n  font-size: 15px;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}"

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Header for the page -->\r\n  <h1>Incident: {{incidentID}}  Reports</h1>\r\n  <hr>\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n      <!-- Incident Name Column\r\n      <ng-container matColumnDef=\"incidentName\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Incident Name </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.incidentName}} </td>\r\n      </ng-container> -->\r\n\r\n      <!-- Reported By Column -->\r\n      <ng-container matColumnDef=\"reportedBy\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Reported By </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.reportedBy}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Structural Damage Column -->\r\n      <ng-container matColumnDef=\"structuralDamage\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Structural Damage </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.structuralDamage}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Fire Column -->\r\n      <ng-container matColumnDef=\"fire\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Fire </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.fire}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Utilities Column -->\r\n      <ng-container matColumnDef=\"utilities\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Utilities </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.utilities}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click) = \"rowClicked(row)\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_dialog_report_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report-dialog/report-dialog.component */ "./src/app/report-dialog/report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Constants used to fill up our data base. */
var ReportComponent = /** @class */ (function () {
    function ReportComponent(route, router, dataService, dialog) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.dialog = dialog;
        // displayedColumns: string[] = ['incidentName', 'reportedBy', 'structuralDamage', 'fire', 'utilities'];
        this.displayedColumns = ['reportedBy', 'structuralDamage', 'fire', 'utilities'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reports);
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reports);
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.incidentReportClicked=this.r.get("data")
        this.route.paramMap.subscribe(function (paramMap) {
            _this.incidentID = paramMap.get('item.incidentID');
            console.log("value of incidentID is " + _this.incidentID);
        });
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // this.dataService.getReportsList()
        this.dataService.getReportById(this.incidentID)
            .subscribe(function (data) {
            _this.reports = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.reports);
        });
    };
    ReportComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReportComponent.prototype.rowClicked = function (row) {
        var _this = this;
        // console.log(row);
        var dialogRef = this.dialog.open(_report_dialog_report_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ReportDialogComponent"], {
            width: '950px',
            height: '600px',
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("result");
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReportComponent.prototype, "sort", void 0);
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/review-application/review-application.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to kishan */\r\n.container {\r\n  margin-top: 1em;\r\n}\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n.table-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.filter-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n.mat-form-field {\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.table-header{\r\n  font-size: 22px;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n.table-cell {\r\n  font-size: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/review-application/review-application.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Sreevani and kishan\r\n -->\r\n\r\n<div class=\"container\">\r\n  <!-- Header for Review Applications -->\r\n<h1 class=\"pageHeading mat-display-1\">Review Applications</h1>\r\n<hr>\r\n\r\n<div class=\"table-container mat-elevation-z8\">\r\n  <div class=\"filter-header\">\r\n    <mat-form-field>\r\n      <!-- Filter provided to filter the table data -->\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- First Name Column -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> First Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.firstName }} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Last Name Column -->\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Last Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.lastName }} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container matColumnDef=\"email\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Email </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.email}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Date of Birth Column -->\r\n    <ng-container matColumnDef=\"dob\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Date of Birth </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.dob}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- County Column -->\r\n    <ng-container matColumnDef=\"county\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> County </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.county}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Skills Column -->\r\n    <ng-container matColumnDef=\"skills\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Skills </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class=\"table-cell\"> {{element.skills}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click) = \"rowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n  <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/review-application/review-application.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.ts ***!
  \********************************************************************/
/*! exports provided: ReviewApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewApplicationComponent", function() { return ReviewApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _my_dialog_component_my_dialog_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-dialog-component/my-dialog-component.component */ "./src/app/my-dialog-component/my-dialog-component.component.ts");
// Assigned to Kishan
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { applicant } from '../common/mock-applicants'; // for mock user





var ReviewApplicationComponent = /** @class */ (function () {
    function ReviewApplicationComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.dialogResult = '';
        this.displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.applicants);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ReviewApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataService.getApplicantsList()
            .subscribe(function (data) {
            _this.applicants = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.applicants);
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ReviewApplicationComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ReviewApplicationComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReviewApplicationComponent.prototype.rowClicked = function (row) {
        var _this = this;
        console.log(row);
        var dialogRef = this.dialog.open(_my_dialog_component_my_dialog_component_component__WEBPACK_IMPORTED_MODULE_4__["MyDialogComponentComponent"], {
            width: '950px',
            height: '600px',
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("result");
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReviewApplicationComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReviewApplicationComponent.prototype, "sort", void 0);
    ReviewApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-application',
            template: __webpack_require__(/*! ./review-application.component.html */ "./src/app/review-application/review-application.component.html"),
            styles: [__webpack_require__(/*! ./review-application.component.css */ "./src/app/review-application/review-application.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ReviewApplicationComponent);
    return ReviewApplicationComponent;
}());



/***/ }),

/***/ "./src/app/team1-details/team1-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .container {\r\n    margin-top: 1em;\r\n  }\r\n\r\n  .pageHeading {\r\n    margin: auto;\r\n  }\r\n\r\n  .example-container {\r\n      margin-top: 1em;\r\n      display: flex;\r\n      flex-direction: column;\r\n      min-width: 300px;\r\n    }\r\n\r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n\r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n  .mat-header-cell{\r\n    font-size: 22px;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/team1-details/team1-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Chandra Mouli\r\n -->\r\n <!-- @Author Chandra Mouli Kantipudi -->\r\n <!-- Header for team details page -->\r\n <div class=\"container\">\r\n <h1 class=\"pageHeading mat-display-1\"><b>{{ team.teamName }}</b></h1> \r\n <hr>\r\n <b>Leader:</b> {{ team.leader }}\r\n <br>\r\n <b>Assistant Leader:</b> {{ team.asstLeader }}\r\n <div class=\"example-container mat-elevation-z8\">\r\n <!-- Table is provide with the team members details -->\r\n <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- firstName Column -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- lastName Column -->\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef> Email </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n\r\n    <!-- County Column -->\r\n    <ng-container matColumnDef=\"county\">\r\n      <th mat-header-cell *matHeaderCellDef> County </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.county}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Skills Column -->\r\n    <!-- <ng-container matColumnDef=\"skills\">\r\n        <th mat-header-cell *matHeaderCellDef> Skills </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.skills}} </td>\r\n      </ng-container> -->\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n </div>\r\n <br>\r\n <button mat-raised-button color=\"warn\" [routerLink]=\"['/teamsById', team.incidentID]\"> Cancel </button>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/team1-details/team1-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.ts ***!
  \**********************************************************/
/*! exports provided: Team1DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team1DetailsComponent", function() { return Team1DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Team1DetailsComponent = /** @class */ (function () {
    function Team1DetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'county'];
    }
    Team1DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.newTeamID = paramMap.get('item._id');
            // console.log(this.newTeamID);
        });
        this.dataService.getTeamById(this.newTeamID)
            .subscribe(function (data) {
            _this.team = data['data'];
            console.log(_this.team);
            _this.dataSource = _this.team.members;
        });
    };
    Team1DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team1-details',
            template: __webpack_require__(/*! ./team1-details.component.html */ "./src/app/team1-details/team1-details.component.html"),
            styles: [__webpack_require__(/*! ./team1-details.component.css */ "./src/app/team1-details/team1-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], Team1DetailsComponent);
    return Team1DetailsComponent;
}());



/***/ }),

/***/ "./src/app/teamdelete/teamdelete.component.css":
/*!*****************************************************!*\
  !*** ./src/app/teamdelete/teamdelete.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1{\r\n    margin-left: 200px;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n/* .button2{\r\n    margin-left: 380px;\r\n    \r\n} */\r\n\r\n.text\r\n{\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/teamdelete/teamdelete.component.html":
/*!******************************************************!*\
  !*** ./src/app/teamdelete/teamdelete.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          <b>Do you want to delete the team?</b> \r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button1\" mat-mini-fab color=\"primary\" (click)=\"yes(data)\">Yes</button>\r\n        <button class=\"button2\" mat-mini-fab color=\"warn\" (click)=\"no()\">No</button>\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/teamdelete/teamdelete.component.ts":
/*!****************************************************!*\
  !*** ./src/app/teamdelete/teamdelete.component.ts ***!
  \****************************************************/
/*! exports provided: TeamdeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdeleteComponent", function() { return TeamdeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/team */ "./src/app/common/team.ts");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TeamdeleteComponent = /** @class */ (function () {
    // constructor(private dataService: DataService, public ref: MatDialog,@Inject(MAT_DIALOG_DATA) public data: Team, public thisMatDialogRef: MatDialogRef<TeamdeleteComponent>) {}
    function TeamdeleteComponent(dataService, ref, data, thisMatDialogRef) {
        this.dataService = dataService;
        this.ref = ref;
        this.data = data;
        this.thisMatDialogRef = thisMatDialogRef;
        this.id = { _id: String };
        this.isLoading = false;
    }
    TeamdeleteComponent.prototype.ngOnInit = function () {
        this.team = this.data;
        this.teams = this.data['data'];
        this.isLoading = false;
    };
    TeamdeleteComponent.prototype.yes = function (item) {
        var _this = this;
        this.thisMatDialogRef.close();
        this.id = { _id: item._id };
        console.log(this.id);
        this.dataService.deleteTeam(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.dataService.getTeamsById(_this.incidentID)
                .subscribe(function (dataInci) {
                _this.teams = dataInci['data'];
                _this.isLoading = false;
            });
            item.isActive = false;
            console.log('success');
        }, function (error) {
            console.log('Error Occured');
        });
    };
    TeamdeleteComponent.prototype.no = function () {
        this.ref.closeAll();
    };
    TeamdeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teamdelete',
            template: __webpack_require__(/*! ./teamdelete.component.html */ "./src/app/teamdelete/teamdelete.component.html"),
            styles: [__webpack_require__(/*! ./teamdelete.component.css */ "./src/app/teamdelete/teamdelete.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _common_team__WEBPACK_IMPORTED_MODULE_1__["Team"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], TeamdeleteComponent);
    return TeamdeleteComponent;
}());



/***/ }),

/***/ "./src/app/teamdialog/teamdialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/teamdialog/teamdialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1{\r\n    margin-left: 200px;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n/* .button2{\r\n    margin-left: 380px;\r\n    \r\n} */\r\n\r\n.text\r\n{\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/teamdialog/teamdialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/teamdialog/teamdialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card>\r\n  \r\n\r\n  <mat-card-content>\r\n      <div class=\"text\" style=\"text-align:center\">\r\n          <b>Do you want to create a team?</b> \r\n          <br>\r\n          \r\n        </div>\r\n        \r\n        <button class=\"button1\" mat-mini-fab color=\"primary\" (click)=\"yes()\">Yes</button>\r\n        <button class=\"button2\" mat-mini-fab color=\"warn\" (click)=\"no()\">No</button>\r\n    \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/teamdialog/teamdialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/teamdialog/teamdialog.component.ts ***!
  \****************************************************/
/*! exports provided: TeamdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdialogComponent", function() { return TeamdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/team */ "./src/app/common/team.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TeamdialogComponent = /** @class */ (function () {
    function TeamdialogComponent(router, dataService, dialog, ref, thisMatDialogRef, data) {
        this.router = router;
        this.dataService = dataService;
        this.dialog = dialog;
        this.ref = ref;
        this.thisMatDialogRef = thisMatDialogRef;
        this.data = data;
    }
    TeamdialogComponent.prototype.ngOnInit = function () {
    };
    TeamdialogComponent.prototype.yes = function () {
        var _this = this;
        this.team = this.data;
        console.log(this.team);
        // this.team.incidentID =
        this.ref.closeAll();
        // if (valid) {
        this.dataService.saveTeam(this.team)
            .subscribe(function (data) {
            console.log(data);
            console.log(_this.team);
            console.log('success');
            _this.router.navigate(['/teamsById', _this.team.incidentID]);
        }, function (error) {
            console.log('Error Occured');
        });
        // }
        // }
        // this.ref.open('CreateTeamsComponent');
        // let dialogReff=this.dialog.open(CreateTeamsComponent,{
        // width:'600px',
        // data:this.user
        // });
        // dialogReff.afterClosed().subscribe(result=>{
        // console.log('Dialog closed: ${result}');
        // this.dialogResult=result;
        // })
    };
    TeamdialogComponent.prototype.no = function () {
        this.ref.closeAll();
    };
    TeamdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teamdialog',
            template: __webpack_require__(/*! ./teamdialog.component.html */ "./src/app/teamdialog/teamdialog.component.html"),
            styles: [__webpack_require__(/*! ./teamdialog.component.css */ "./src/app/teamdialog/teamdialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _common_team__WEBPACK_IMPORTED_MODULE_2__["Team"]])
    ], TeamdialogComponent);
    return TeamdialogComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.pageHeading {\r\n  margin: auto;\r\n}\r\n\r\n/* cards */\r\n\r\n.incident-card {\r\n    /* max-width: 235px; */\r\n    width: 255px;\r\n    min-height: 236px;\r\n    max-height: 236x;\r\n    margin-top: 2em;\r\n}\r\n\r\n/* for buttons - Create incident and Archived Incidents */\r\n\r\n.buttons {\r\n    font-size: 1em;\r\n}\r\n\r\n/* Describtion height */\r\n\r\n.p-height{\r\n    height: 6em;\r\n}\r\n\r\n.mt-archive{\r\n    margin-top: 0.4em;\r\n}\r\n\r\nmat-grid-tile {\r\n    background: lightblue;\r\n  }\r\n\r\n  \r\n  "

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Chandra Mouli\r\n -->\r\n <!-- @Author Chandra Mouli Kantipudi -->\r\n <div class=\"container\">\r\n    <!-- Header for the dashboard page -->\r\n <h1 class=\"pageHeading mat-display-1\">Teams of {{incidentID}}</h1>\r\n <hr>\r\n <div class=\"row\">\r\n    <div class=\"col\">\r\n <!-- Create team button provided to route to create team page -->\r\n <!-- <button [routerLink] = \"['createTeamsByID/', incidentID]\" mat-raised-button color = \"primary\" >Create Team</button> -->\r\n <button  mat-raised-button color = \"primary\" [routerLink] = \"['/createTeams', incidentID]\">Create Team</button>\r\n    </div>\r\n </div>\r\n\r\n <br>\r\n\r\n <div class =\"row\">\r\n   <!-- <mat-spinner *ngIf = \"item.isActive\"></mat-spinner> -->\r\n   <div *ngFor=\"let item of teams; let i = index\">\r\n     <div class=\"col-4 text-center\" *ngIf = \"item.isActive\">\r\n <!-- The team modules are shown using cards. Card has image of team and team name -->\r\n <mat-card *ngIf =\"teams.length > 0 && !isLoading\" class=\"incident-card mat-elevation-z5\" >\r\n    <!-- Image for team is provided when clicked on image it redirects to the team page -->\r\n   <!-- <a [routerLink] = \"['/team1Details', item._id]\">\r\n   <img mat-card-image [src]=\"'assets/images/teams/'+ (i%5) +'.jpg'\" alt=\"Team1\">\r\n   </a> -->\r\n   <mat-card-content >\r\n     <!-- Team name -->\r\n     <a [routerLink] = \"['/team1Details', item._id]\">\r\n     <h2><b>{{ item.teamName }}</b></h2>\r\n     </a>\r\n     <p><b>Leader: {{ item.leader }}</b><br>\r\n     <b>AsstLeader: {{ item.asstLeader }}</b></p>\r\n   </mat-card-content>\r\n   <mat-card-actions>\r\n      <!-- Report button is provided to retrive report of the incident module-->\r\n      <button mat-raised-button color=\"primary\" [routerLink] = \"['/updateTeam', item._id]\">Update</button>\r\n      <!-- Team button is provided to view team and its members in the incident module -->\r\n      <button mat-raised-button color=\"primary\" color=\"warn\" (click)=\"delette(item)\">Delete</button>\r\n      </mat-card-actions>\r\n </mat-card>\r\n     </div>\r\n   </div>\r\n   <p class=\"mat-title\" *ngIf=\"!teams?.length\">No Teams are Created for this Incident!</p>\r\n </div>\r\n </div>"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teamdialog/teamdialog.component */ "./src/app/teamdialog/teamdialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _teamdelete_teamdelete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamdelete/teamdelete.component */ "./src/app/teamdelete/teamdelete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(route, router, dataService, dialogref) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.dialogref = dialogref;
        this.id = { _id: String };
        this.isLoading = false;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataService.getTeamList()
        //   .subscribe((data) => {
        //     this.teams = data['data'];
        //     this.isLoading = false;
        //   });
        this.route.paramMap.subscribe(function (paramMap) {
            _this.incidentID = paramMap.get('item.incidentID');
            console.log("value of incidentID is " + _this.incidentID);
        });
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // this.dataService.getReportsList()
        this.dataService.getTeamsById(this.incidentID)
            .subscribe(function (data) {
            _this.teams = data['data'];
            _this.isLoading = false;
            console.log(_this.teams);
        });
    };
    TeamsComponent.prototype.onClick = function (item) {
        console.log(item._id);
    };
    TeamsComponent.prototype.delete = function (item) {
        var _this = this;
        this.id = { _id: item._id };
        console.log(this.id);
        this.dataService.deleteTeam(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.dataService.getTeamsById(_this.incidentID)
                .subscribe(function (dataInci) {
                _this.teams = dataInci['data'];
                _this.isLoading = false;
            });
            item.isActive = false;
            console.log('success');
        }, function (error) {
            console.log('Error Occured');
        });
    };
    TeamsComponent.prototype.dialogue = function () {
        this.dialogref.open(_teamdialog_teamdialog_component__WEBPACK_IMPORTED_MODULE_3__["TeamdialogComponent"], {
            width: '600px'
            // data:item
        });
    };
    TeamsComponent.prototype.delette = function (item) {
        this.dialogref.open(_teamdelete_teamdelete_component__WEBPACK_IMPORTED_MODULE_5__["TeamdeleteComponent"], {
            width: '600px',
            data: item
        });
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/update-team/update-team.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-team/update-team.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .container {\r\n    margin-top: 1em;\r\n  }\r\n\r\n  .pageHeading {\r\n    margin: auto;\r\n  }\r\n\r\n  .example-container {\r\n      margin-top: 1em;\r\n      display: flex;\r\n      flex-direction: column;\r\n      min-width: 300px;\r\n    }\r\n\r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n\r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n  .table-header{\r\n    font-size: 18px;\r\n    color: black;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/update-team/update-team.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-team/update-team.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  Assigned to Chandra mouli\r\n -->\r\n<!-- @Author Chandra Mouli Kantipudi -->\r\n<!-- Page not yet completed -->\r\n<div class=\"container\">\r\n  <!-- Header for the page -->\r\n  <h1>Update Team</h1>\r\n  <hr>\r\n\r\n  <!-- Form to input the team details -->\r\n  <form novalidate (ngSubmit)=\"onCreate(createTeam)\" #createTeam=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"team\">\r\n          <b>Team Name</b>\r\n        </label>\r\n      <!--Input for team name -->\r\n      <input type=\"text\" class=\"form-control\" \r\n      id = \"teamName\" name =\"teamName\"\r\n      ngModel\r\n      [value]=\"teamName\"\r\n      required\r\n      placeholder={{team.teamName}} required>\r\n        <br>\r\n\r\n      <!-- TeamID should autogenerate -->\r\n      <!-- <label for=\"teamID\">\r\n        <b>Team ID :</b>\r\n      </label>\r\n      {{a}} -->\r\n    </div>\r\n\r\n    <!-- Table -->\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n      <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n      <!-- Checkbox Column -->\r\n      <ng-container matColumnDef=\"select\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- First Name Column\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> First Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.firstName }} </mat-cell>\r\n      </ng-container> -->\r\n\r\n      <!-- First Name Column -->\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Last Name Column-->\r\n      <ng-container matColumnDef=\"lastName\">\r\n        <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"dob\">\r\n        <th mat-header-cell *matHeaderCellDef> Date of Birth </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.dob}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"county\">\r\n        <th mat-header-cell *matHeaderCellDef> County </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.county}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"skills\">\r\n        <th mat-header-cell *matHeaderCellDef> Skills </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.skills}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\">\r\n      </tr>\r\n    </table>\r\n    <br>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select Leader\" id=\"leader\" name=\"leader\" \r\n      ngModel\r\n      [value]=\"leader\"\r\n      required>\r\n        <mat-option *ngFor=\"let leader of selection.selected\" [value]=\"leader.firstName + leader.lastName\">\r\n          {{leader.firstName}} {{leader.lastName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <br>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select Assistant Leader\" id=\"asstLeader\" name=\"asstLeader\"\r\n      ngModel\r\n      [value]=\"asstLeader\"\r\n      required>\r\n        <mat-option *ngFor=\"let asstLeader of selection.selected\" [value]=\"asstLeader.firstName + asstLeader.lastName\">\r\n          {{asstLeader.firstName}} {{asstLeader.lastName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <br>\r\n\r\n    <!-- Button provided to create team -->\r\n    <!-- <button class=\"btn primary\"> Create Team</button> -->\r\n    <div class=\"button-row\">\r\n       <!-- <button  mat-raised-button color = \"primary\" (click)=\"dialogue()\">Create Team</button> -->\r\n      <button mat-raised-button color=\"primary\"> Create </button>\r\n      <button mat-raised-button color=\"warn\" [routerLink]=\"['/teamsById', inciID]\"> Cancel </button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/update-team/update-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-team/update-team.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTeamComponent", function() { return UpdateTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateTeamComponent = /** @class */ (function () {
    function UpdateTeamComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'county', 'dob', 'skills'];
    }
    UpdateTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.newTeamID = paramMap.get('item._id');
            // console.log(this.newTeamID);
        });
        this.dataService.getTeamById(this.newTeamID)
            .subscribe(function (data) {
            _this.team = data['data'];
            console.log(_this.team);
            _this.dataSource = _this.team.members;
        });
    };
    UpdateTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-team',
            template: __webpack_require__(/*! ./update-team.component.html */ "./src/app/update-team/update-team.component.html"),
            styles: [__webpack_require__(/*! ./update-team.component.css */ "./src/app/update-team/update-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UpdateTeamComponent);
    return UpdateTeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\s530671\Desktop\Fall 2018\GDP-II\DisasterResponseAndReportingSystem-Backend\views\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map