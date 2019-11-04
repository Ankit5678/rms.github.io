(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\r\n  <app-header></app-header>\r\n  <div style=\"margin-top: 15px;\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/HRservice/alert/alert.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/HRservice/alert/alert.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/addjob/addjob.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/addjob/addjob.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span style=\"float: left;\">\r\n    <button class=\"btn btn-dark\" routerLink=\"/jobs\"><<Go Back</button>\r\n</span>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\" card col-md-12\" id=\"formdiv\" style=\"margin-top: 40px; margin-bottom: 40px;\">\r\n            <!-- <div class=\"card\"> -->\r\n                <h2 style=\"text-align: center; margin-top: 10px;\">{{ 'HR_AJ.ADDJOB01' | translate }}</h2>\r\n            <!-- </div> -->\r\n\r\n             <!--Step 3: connect form group here -->\r\n                    <form class=\"col-md-6 offset-md-3\" style=\"margin-top: 10px;\" [formGroup]=\"jobPostingForm\" (ngSubmit)=\"onAddJobHandler()\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"staticId\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB02' | translate }}</label>&nbsp;&nbsp;\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': jobPostingForm.get('jTitle').touched && jobPostingForm.get('jTitle').invalid}\"\r\n                                    placeholder=\"{{ 'HR_AJ.ADDJOB03' | translate }}\" formControlName=\"jTitle\" />\r\n                                <div class=\"invalid-feedback\">\r\n                                    <div>{{ 'HR_AJ.ADDJOB04' | translate }}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"staticId\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB05' | translate }}</label>&nbsp;&nbsp;\r\n                            <div class=\"col-sm-10\">\r\n\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': jobPostingForm.get('jDescription').touched && jobPostingForm.get('jDescription').invalid}\"\r\n                                    placeholder=\"{{ 'HR_AJ.ADDJOB06' | translate }}\" formControlName=\"jDescription\" />\r\n                                <div class=\"invalid-feedback\">\r\n                                    <div>{{ 'HR_AJ.ADDJOB07' | translate }}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                        <label for=\"staticEmail\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB08' | translate }}</label>\r\n                        <div class=\"col-sm-10\">\r\n                        <mat-form-field>\r\n                                <mat-label>{{ 'HR_AJ.ADDJOB09' | translate }}</mat-label>\r\n                                <mat-select\r\n                                [ngClass]=\"{ 'is-invalid': jobPostingForm.get('skillList').touched && jobPostingForm.get('skillList').invalid}\"\r\n                                placeholder=\"Enter Salary\" formControlName=\"skillList\" multiple>\r\n                                  <mat-option *ngFor=\"let skill of skills\" [value]=\"skill\">{{skill}}</mat-option>\r\n                                </mat-select>\r\n                        </mat-form-field>\r\n                        </div>\r\n                        </div>     \r\n\r\n                        <div class=\"form-group row\">\r\n                                <label for=\"staticEmail\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB10' | translate }}</label>&nbsp;&nbsp;\r\n                                <div class=\"col-sm-10\">\r\n                                    <input type=\"number\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': jobPostingForm.get('jSalary').touched && jobPostingForm.get('jSalary').invalid}\"\r\n                                        placeholder=\"{{ 'HR_AJ.ADDJOB11' | translate }}\" formControlName=\"jSalary\" />\r\n                                    <div class=\"invalid-feedback\">\r\n                                        <div>{{ 'HR_AJ.ADDJOB12' | translate }}</div>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                                <label for=\"staticEmail\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB13' | translate }}</label>&nbsp;&nbsp;\r\n                                <div class=\"col-sm-10\">\r\n                                    <input type=\"number\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': jobPostingForm.get('jRequiredExperience').touched && jobPostingForm.get('jRequiredExperience').invalid}\"\r\n                                        placeholder=\"{{ 'HR_AJ.ADDJOB14' | translate }}\" formControlName=\"jRequiredExperience\" />\r\n                                    <div class=\"invalid-feedback\">\r\n                                        <div>{{ 'HR_AJ.ADDJOB15' | translate }}</div>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                                <label for=\"staticEmail\" class=\"col-sm-8 col-form-label\">{{ 'HR_AJ.ADDJOB16' | translate }}</label>&nbsp;&nbsp;\r\n                                <div class=\"col-sm-10\">\r\n                                    <input type=\"date\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': jobPostingForm.get('jApplicationCloseDate').touched && jobPostingForm.get('jApplicationCloseDate').invalid}\"\r\n                                        placeholder=\"Enter Salary\" formControlName=\"jApplicationCloseDate\" />\r\n                                    <div class=\"invalid-feedback\">\r\n                                        <div>{{ 'HR_AJ.ADDJOB17' | translate }}</div>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <div class=\"alert alert-success\" *ngIf=\"isSaved\">\r\n                                {{ 'HR_AJ.ADDJOB18' | translate }}\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-sm-10\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">{{ 'HR_AJ.ADDJOB19' | translate }}</button>&nbsp;&nbsp;\r\n                                <button type=\"reset\" class=\"btn btn-warning\">{{ 'HR_AJ.ADDJOB20' | translate }}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>       \r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/job/job.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/job/job.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <button routerLink=\"/querylist\">Queries</button>\r\n      </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"jumbotron\">\r\n        <h5 class=\"display-4\">{{ 'HR_JOB.JOB01' | translate }} {{currentUser.principal.username}}.</h5>\r\n        <button class=\"btn btn-primary btn-md\" routerLink=\"/jobs/addjob\" role=\"button\">{{ 'HR_JOB.JOB02' | translate }}</button>\r\n        <button class=\"btn btn-primary btn-md\" (click)=\"onAdvancedButtonClick()\" role=\"button\">Advanced Search</button>\r\n        <!-- Search for jobs -->\r\n        <form class=\"example-form col-md-12\" #h=\"ngForm\" style=\"margin-top: 20px;\" [formGroup]=\"myExperienceSkillControl\" [hidden]=\"!search\">\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\"></div>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" style=\"margin-top: 10px;\" class=\"form-control\" name=\"skill\"\r\n                placeholder=\"Enter Skill\" formControlName=\"skill\"\r\n                [ngClass]=\"{ 'is-invalid': myExperienceSkillControl.get('skill').touched && myExperienceSkillControl.get('skill').invalid}\">\r\n                <input type=\"text\" style=\"margin-top: 10px;\" class=\"form-control\" name=\"experience\"\r\n                placeholder=\"Enter Experience\" formControlName=\"experience\"\r\n                [ngClass]=\"{ 'is-invalid': myExperienceSkillControl.get('experience').touched && myExperienceSkillControl.get('experience').invalid}\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button id=\"submit_button\" type=\"submit\" (click)=\"onSkillExperienceSearchHandler(h)\" class=\"btn btn-default\">\r\n                <span>\r\n                    {{ 'HR_JOB.JOB04' | translate }}\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <b>{{ 'HR_JOB.JOB05' | translate }}</b>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n    <!-- Card for New Job -->\r\n    <div class=\"card newjobcard col-sm-3 animated fadeIn\" style=\"background-color: rgb(148, 148, 148);\" id=\"addnewJob\"\r\n      routerLink=\"/jobs/addjob\">\r\n      <h4 class=\"title\">{{ 'HR_JOB.JOB06' | translate }}</h4>\r\n      <div class=\"bar\">\r\n        <div class=\"emptybar\"></div>\r\n      </div>\r\n      <div class=\"details\">\r\n        <p>{{ 'HR_JOB.JOB07' | translate }}</p>\r\n        <hr>\r\n      </div>\r\n      <div class=\"circlenew\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../../assets/images/addJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Card for listing all jobs -->\r\n    <div class=\"card animated fadeIn\" *ngFor=\"let job of jobList\">\r\n      <div data-toggle=\"modal\" data-target=\"#viewJobModal\" (click)=\"onEditHandler(job.jId)\">\r\n        <h4 class=\"title\">{{job.jTitle}}</h4>\r\n        <div class=\"bar\">\r\n          <div class=\"emptybar\"></div>\r\n        </div>\r\n        <div class=\"details\">\r\n          <p><b>{{ 'HR_JOB.JOB08' | translate }} </b>{{job.jDescription}}</p>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div class=\"circle\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\" data-toggle=\"modal\" data-target=\"#editJobModal\" (click)=\"onEditHandler(job.jId)\">\r\n            <img src=\"../../../../assets/images/editJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n          <!-- <div class=\"col-md-6\"></div> -->\r\n          <div class=\"col-md-4\" data-toggle=\"modal\" data-target=\"#viewCListModal\" (click)=\"ongetAppliedCandidatesList(job.jId)\">\r\n            <img src=\"../../../../assets/images/scheduleJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-md-4\" (click)=\"onDeleteHandler(job.jId)\">\r\n            <img src=\"../../../../assets/images/deleteJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- show candidates modal -->\r\n  <div class=\"modal fade\" id=\"viewCListModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'HR_JOB.JOB09' | translate }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\" *ngIf=\"duplicateJobData\">\r\n        \r\n          <div *ngIf=\"!isEmpty\">\r\n                                  <b>{{ 'HR_JOB.JOB10' | translate }}</b><hr>\r\n                              </div>\r\n                             <div *ngFor = \"let candidate of duplicateJobData.jAppliedCandidateList\"> \r\n                               <p><b>{{ 'HR_JOB.JOB11' | translate }} </b>{{candidate.cName}}&nbsp;<b>{{ 'HR_JOB.JOB12' | translate }} </b>{{candidate.cEmail}} </p>\r\n                               <hr> \r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ 'HR_JOB.JOB13' | translate }}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#setInterviewModal\" >{{ 'HR_JOB.JOB14' | translate }}</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- Schedule interview -->\r\n  <div class=\"modal fade\" id=\"setInterviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'HR_JOB.JOB15' | translate }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"row\">\r\n          \r\n          <form class=\"col-md-6 offset-md-3\" style=\"margin-top: 10px;\" [formGroup]=\"scheduleTest\" (ngSubmit)=\"onInteviewScheduler(duplicateJobData.jId)\">\r\n            <div class=\"row\">\r\n                    <label for=\"staticEmail\" class=\"col-sm-8 col-form-label\">{{ 'HR_JOB.JOB16' | translate }}</label>&nbsp;&nbsp;\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"date\" formControlName=\"date\" class=\"form-control\"/>\r\n                        <button type=\"submit\" class=\"btn btn-secondary\">{{ 'HR_JOB.JOB17' | translate }}</button>\r\n                    </div>\r\n            </div>\r\n        </form>\r\n  </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ 'HR_JOB.JOB18' | translate }}</button>\r\n          <!-- <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#setInterviewModal\" (click)=\"ongetAppliedCandidatesList(job.jId)\">Schedule Interview</button> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- View Modal -->\r\n  <div class=\"modal fade\" id=\"viewJobModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'HR_JOB.JOB19' | translate }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\" *ngIf=\"duplicateJobData\">\r\n          <h5><b>{{ 'HR_JOB.JOB20' | translate }}</b> {{duplicateJobData.jTitle}}</h5>\r\n          <hr>\r\n          <p><b>{{ 'HR_JOB.JOB21' | translate }}</b> {{duplicateJobData.jDescription}}</p>\r\n          <hr>\r\n          <p><b>{{ 'HR_JOB.JOB22' | translate }}</b>{{duplicateJobData.skillList}}</p>\r\n          <hr>\r\n          <p><b>{{ 'HR_JOB.JOB23' | translate }}</b>{{duplicateJobData.jRequiredExperience}} years</p>\r\n          <hr>\r\n          <p><b>{{ 'HR_JOB.JOB24' | translate }}</b> {{duplicateJobData.jSalary}}</p>\r\n          <div *ngIf=\"!isEmpty\">\r\n                                  <hr><hr>\r\n                                  <b>{{ 'HR_JOB.JOB25' | translate }}</b><hr>\r\n                              </div>\r\n                             <div *ngFor = \"let candidate of duplicateJobData.jAppliedCandidateList\"> \r\n                               <p><b>{{ 'HR_JOB.JOB26' | translate }} </b>{{candidate.cName}}&nbsp;<b>{{ 'HR_JOB.JOB27' | translate }} </b>{{candidate.cEmail}} </p>\r\n                               <hr> \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Edit Modal -->\r\n  <div class=\"modal fade\" id=\"editJobModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'HR_JOB.JOB28' | translate }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\" *ngIf=\"duplicateJobData\">\r\n          <form ngNativeValidate #f=\"ngForm\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"staticName\" class=\"col-sm-3 col-form-label\">{{ 'HR_JOB.JOB29' | translate }}</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"{{ 'HR_JOB.JOB30' | translate }}\"\r\n                  [(ngModel)]=\"duplicateJobData.jTitle\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"staticAge\" class=\"col-sm-3 col-form-label\">{{ 'HR_JOB.JOB31' | translate }}</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" name=\"jDescription\" placeholder=\"{{ 'HR_JOB.JOB32' | translate }}\"\r\n                  [(ngModel)]=\"duplicateJobData.jDescription\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"staticDepartment\" class=\"col-sm-3 col-form-label\">{{ 'HR_JOB.JOB33' | translate }}</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" name=\"jRequiredExperience\"\r\n                  placeholder=\"Enter Experience Required\" [(ngModel)]=\"duplicateJobData.jRequiredExperience\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"staticCountry\" class=\"col-sm-3 col-form-label\">{{ 'HR_JOB.JOB34' | translate }}</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\" name=\"jSalary\" placeholder=\"{{ 'HR_JOB.JOB35' | translate }}\"\r\n                  [(ngModel)]=\"duplicateJobData.jSalary\">\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ 'HR_JOB.JOB36' | translate }}</button>\r\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateHandler(f)\" data-dismiss=\"modal\">{{ 'HR_JOB.JOB37' | translate }}</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/jobdetail/jobdetail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/jobdetail/jobdetail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span style=\"float: left;\"><button class=\"btn btn-dark\" routerLink=\"/jobs\"><<Go Back</button></span>\r\n     <div class=\"container col-md-4\" style=\"margin-left:350px ;\">\r\n      <div class=\"row\">\r\n        <div class=\"card col-md-12\">\r\n          <div class=\"card-body\" *ngIf=\"jobData\">\r\n            <h3 class=\"card-title\">{{jobData.designation}}</h3>\r\n            <h5><b>{{ 'HR_JD.JD01' | translate }}</b> {{jobData.jobId}}</h5>\r\n            <hr>\r\n            <p><b>{{ 'HR_JD.JD02' | translate }}</b> {{jobData.jobRole}}</p>\r\n            <hr>\r\n            <p><b>{{ 'HR_JD.JD03' | translate }}</b> {{jobData.jobDescription}}</p>\r\n            <hr>\r\n            <p><b>{{ 'HR_JD.JD04' | translate }}</b> {{jobData.employmentType}}</p>\r\n            <hr>\r\n            <p><b>{{ 'HR_JD.JD05' | translate }}</b>{{jobData.salary}}</p>\r\n            <hr>\r\n            <p><b>{{ 'HR_JD.JD06' | translate }}</b>{{jobData.location}}</p>\r\n            <div class=\"alert alert-success\" *ngIf=\"isSaved\">\r\n                {{ 'HR_JD.JD07' | translate }}\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editJobModal\" (click)=\"onEditHandler()\">{{ 'HR_JD.JD08' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteHandler()\">{{ 'HR_JD.JD09' | translate }}</button>\r\n  \r\n            <!-- Modal -->\r\n            <div class=\"modal fade\" id=\"editJobModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'HR_JD.JD10' | translate }}</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\"*ngIf=\"duplicateJobData\">\r\n                    <form ngNativeValidate #f=\"ngForm\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticName\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD11' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"designation\" placeholder=\"{{ 'HR_JD.JD12' | translate }}\" [(ngModel)]=\"duplicateJobData.designation\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticAge\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD13' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"jobRole\" placeholder=\"{{ 'HR_JD.JD14' | translate }}\" [(ngModel)]=\"duplicateJobData.jobRole\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticDesignation\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD15' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"jobDescription\" placeholder=\"{{ 'HR_JD.JD16' | translate }}\" [(ngModel)]=\"duplicateJobData.jobDescription\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticDepartment\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD17' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"employmentType\" placeholder=\"{{ 'HR_JD.JD18' | translate }}\" [(ngModel)]=\"duplicateJobData.employmentType\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticCountry\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD19' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"number\" class=\"form-control\" name=\"salary\" placeholder=\"{{ 'HR_JD.JD20' | translate }}\" [(ngModel)]=\"duplicateJobData.salary\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"staticCountry\" class=\"col-sm-3 col-form-label\">{{ 'HR_JD.JD21' | translate }}</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"{{ 'HR_JD.JD22' | translate }}\" [(ngModel)]=\"duplicateJobData.location\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ 'HR_JD.JD23' | translate }}</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateHandler(f)\" data-dismiss=\"modal\">{{ 'HR_JD.JD24' | translate }}</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div id=\"formContent\" style=\"padding-bottom: 50px;\">\r\n      <!-- Tabs Titles -->\r\n      <h2 class=\"active\" routerLink=\"/hrlogin\">{{ 'HR_LOGIN.L01' | translate }}</h2>\r\n      <h2 class=\"inactive underlineHover\" routerLink=\"/register\">{{ 'HR_LOGIN.L02' | translate }}</h2>\r\n\r\n      <!-- Icon -->\r\n      <div class=\"fadeIn first\">\r\n        <img src=\"../../../../assets/images/avatar-icon.png\" style=\"width: 40px;\" id=\"icon\" alt=\"User Icon\" />\r\n        <h6>{{ 'HR_LOGIN.L03' | translate }}</h6>\r\n      </div>\r\n\r\n      <!-- Login Form -->\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\r\n        <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"{{ 'HR_LOGIN.L04' | translate }}\" formControlName=\"username\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n        <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"{{ 'HR_LOGIN.L05' | translate }}\"\r\n          formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"isFailed\" role=\"alert\">\r\n              Bad Credentials\r\n          </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\"></div>\r\n          <div class=\"col-md-8\"> \r\n            <button [disabled]=\"loading\" class=\"fadeIn fourth btn btn-primary btn-md\">\r\n              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n              {{ 'HR_LOGIN.L06' | translate }}\r\n            </button>\r\n            <button class=\"fadeIn fourth btn btn-dark btn-sm\" id=\"goBack\" routerLink=\"/login\" style=\"float: right;\"><img\r\n                src=\"../../../../assets/images/goBack.png\" style=\"width: 23px;\" alt=\"\"> {{ 'HR_LOGIN.L07' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/register/register.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/register/register.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  div.wrapper {\r\n    font-family: 'Comfortaa', cursive;\r\n  }\r\n\r\n  h2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    /* text-transform: uppercase; */\r\n    display: inline-block;\r\n    margin: 40px 8px 10px 8px;\r\n    color: #cccccc;\r\n  }\r\n\r\n  h2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\n  h2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n  .wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n  #formContent {\r\n    -webkit-border-radius: 10px 10px 10px 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n  }\r\n\r\n  input[type=button],\r\n  input[type=submit],\r\n  input[type=reset] {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\r\n    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\r\n    -webkit-border-radius: 5px 5px 5px 5px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n    -ms-transition: all 0.3s ease-in-out;\r\n    -o-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  input[type=button]:hover,\r\n  input[type=submit]:hover,\r\n  input[type=reset]:hover {\r\n    background-color: #39ace7;\r\n  }\r\n\r\n  input[type=button]:active,\r\n  input[type=submit]:active,\r\n  input[type=reset]:active {\r\n    -moz-transform: scale(0.95);\r\n    -webkit-transform: scale(0.95);\r\n    -o-transform: scale(0.95);\r\n    -ms-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  input[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -ms-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-border-radius: 5px 5px 5px 5px;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  input[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n  input[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n  input[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    -moz-transition: all 0.5s ease-in-out;\r\n    -ms-transition: all 0.5s ease-in-out;\r\n    -o-transition: all 0.5s ease-in-out;\r\n    transition: all 0.5s ease-in-out;\r\n    -webkit-border-radius: 5px 5px 5px 5px;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  input[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n  input[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n  /* ANIMATIONS */\r\n\r\n  /* Simple CSS3 Fade-in-down Animation */\r\n  .fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n  @-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n  /* Simple CSS3 Fade-in Animation */\r\n  @-webkit-keyframes fadeIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-moz-keyframes fadeIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .fadeIn {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn ease-in 1;\r\n    -moz-animation: fadeIn ease-in 1;\r\n    animation: fadeIn ease-in 1;\r\n\r\n    -webkit-animation-fill-mode: forwards;\r\n    -moz-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\r\n\r\n    -webkit-animation-duration: 1s;\r\n    -moz-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n  }\r\n\r\n  .fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    -moz-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n  .fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    -moz-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n  .fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    -moz-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n  .fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    -moz-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n  /* Simple CSS3 Fade-in Animation */\r\n  .underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n  .underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n  .underlineHover:hover:after {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n  /* OTHERS */\r\n\r\n  *:focus {\r\n    outline: none;\r\n  }\r\n\r\n  #icon {\r\n    width: 60%;\r\n  }\r\n\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n</style>\r\n\r\n<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div id=\"formContent\" style=\"padding-bottom: 50px;\">\r\n      <!-- Tabs Titles -->\r\n      <h2 class=\"inactive underlineHover\" routerLink=\"/hrlogin\">{{ 'HR_REGISTER.R01' | translate }}</h2>\r\n      <h2 class=\"active\" routerLink=\"/register\">{{ 'HR_REGISTER.R02' | translate }}</h2>\r\n\r\n      <!-- Icon -->\r\n      <div class=\"fadeIn first\">\r\n        <img src=\"../../../../assets/images/avatar-icon.png\" style=\"width: 40px;\" id=\"icon\" alt=\"User Icon\" />\r\n        <h6>{{ 'HR_REGISTER.R03' | translate }}</h6>\r\n      </div>\r\n\r\n      <!-- Login Form -->\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"text\" id=\"firstName\" class=\"fadeIn second\" formControlName=\"firstName\" name=\"firstName\"\r\n          placeholder=\"{{ 'HR_REGISTER.R04' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\r\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.firstName.errors.required\">{{ 'HR_REGISTER.R05' | translate }}</div>\r\n            </div>\r\n        <input type=\"text\" id=\"lastName\" class=\"fadeIn second\" formControlName=\"lastName\" name=\"lastName\"\r\n          placeholder=\"{{ 'HR_REGISTER.R06' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\r\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.lastName.errors.required\">{{ 'HR_REGISTER.R07' | translate }}</div>\r\n        </div>\r\n        <input type=\"text\" id=\"login\" class=\"fadeIn third\" formControlName=\"username\" name=\"login\" placeholder=\"{{ 'HR_REGISTER.R08' | translate }}\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.username.errors.required\">{{ 'HR_REGISTER.R09' | translate }}</div>\r\n        </div>\r\n        <input type=\"password\" id=\"password\" class=\"fadeIn third\" formControlName=\"password\" name=\"login\"\r\n          placeholder=\"{{ 'HR_REGISTER.R10' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.password.errors.required\">{{ 'HR_REGISTER.R11' | translate }}</div>\r\n          <div *ngIf=\"f.password.errors.minlength\">{{ 'HR_REGISTER.R12' | translate }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\"></div>\r\n          <div class=\"col-md-8\">\r\n            <button [disabled]=\"loading\" class=\"fadeIn fourth btn btn-md btn-primary\">\r\n              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n              {{ 'HR_REGISTER.R13' | translate }}\r\n            </button>\r\n            <button class=\"fadeIn fourth btn btn-dark btn-sm\" id=\"goBack\" routerLink=\"/login\" style=\"float: right;\"><img\r\n                src=\"../../../../assets/images/goBack.png\" style=\"width: 23px;\" alt=\"\">\r\n                {{ 'HR_REGISTER.R14' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"\r\n    integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\r\n<div class=\"bg-white\">\r\n    <div class=\"container py-5\">\r\n        <div class=\"row h-100 align-items-center py-5\">\r\n            <div class=\"col-lg-6\">\r\n                <h1 class=\"display-4\"><b>{{ 'ABOUT.A1' | translate }}</b></h1>\r\n                <p class=\"lead text-muted mb-0\">{{ 'ABOUT.A2' | translate }}</p>\r\n                <!-- <p class=\"lead text-muted\">Snippet by <a href=\"https://bootstrapious.com/snippets\" class=\"text-muted\">\r\n                        <u>Bootstrapious</u></a>\r\n                </p> -->\r\n            </div>\r\n            <!-- <div class=\"col-lg-6 d-none d-lg-block\"><img src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png\" alt=\"\" class=\"img-fluid\"></div> -->\r\n            <div class=\"col-lg-6 d-none d-lg-block\"><img src=\"assets/img/team1.gif\" alt=\"\" class=\"img-fluid\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"bg-light py-5\">\r\n    <div class=\"container py-5\">\r\n        <div class=\"row align-items-center mb-5\">\r\n            <div class=\"col-lg-6 order-2 order-lg-1\"><i class=\"fa fa-bar-chart fa-2x mb-3 text-primary\"></i>\r\n                <h2 class=\"font-weight-light\"><b>{{ 'ABOUT.A3' | translate }}</b></h2>\r\n                <p class=\"font-italic text-muted mb-4\">{{ 'ABOUT.A4' | translate }}\r\n\r\n                    <!-- </p><a href=\"#\"\r\n                    class=\"btn btn-light px-5 rounded-pill shadow-sm\">Learn More</a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"bg-white py-5\">\r\n    <div class=\"container py-5\">\r\n        <div class=\"row align-items-center mb-5\">\r\n            <div class=\"col-lg-6 order-2 order-lg-1\"><i class=\"fa fa-leaf fa-2x mb-3 text-primary\"></i>\r\n                <h2 class=\"font-weight-light\"><b>{{ 'ABOUT.A5' | translate }}</b></h2>\r\n                <p class=\"font-italic text-muted mb-4\">{{ 'ABOUT.A6' | translate }}\r\n                    <!-- </p><a href=\"#\"\r\n                    class=\"btn btn-light px-5 rounded-pill shadow-sm\">Learn More</a> -->\r\n            </div>\r\n            <div class=\"col-lg-5 px-5 mx-auto order-1 order-lg-2\"><img\r\n                    src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg\" alt=\"\"\r\n                    class=\"img-fluid mb-4 mb-lg-0\"></div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-5 px-5 mx-auto\"><img\r\n                    src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg\" alt=\"\"\r\n                    class=\"img-fluid mb-4 mb-lg-0\"></div>\r\n            <div class=\"col-lg-6\"><i class=\"fa fa-bar-chart fa-2x mb-3 text-primary\"></i>\r\n                <h2 class=\"font-weight-light\"><b>{{ 'ABOUT.A7' | translate }}</b></h2>\r\n                <p class=\"font-italic text-muted mb-4\">{{ 'ABOUT.A8' | translate }}\r\n\r\n                    <!-- <p class=\"font-italic text-muted mb-4\"></p><a href=\"#\"\r\n                    class=\"btn btn-light px-5 rounded-pill shadow-sm\">Learn More</a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"bg-light py-5\">\r\n    <div class=\"container py-5\">\r\n        <div class=\"row mb-4\">\r\n            <div class=\"col-lg-5\">\r\n                <h2 class=\"display-4 font-weight-light\"><b>{{ 'ABOUT.A9' | translate }}</b></h2>\r\n                <p class=\"font-italic text-muted\">{{ 'ABOUT.AA1' | translate }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row text-center\">\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\">\r\n                    <img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Hari Govind</h5><span class=\"small text-uppercase text-muted\">UI/UX/Backend</span>\r\n                    <p class=\"font-italic text-muted\"><i>\"Setting goals is the first step in turning the invisible into\r\n                            the visible\"</i></p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Nakul Gopinath</h5><span\r\n                        class=\"small text-uppercase text-muted\">UI/UX/Backend</span>\r\n                    <p class=\"font-italic text-muted\">\"It is in your moments of decision that your destiny is shaped\"\r\n                    </p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"https://www.instagram.com/narendramodi/\"\r\n                                class=\"social-link\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Rahul Singh</h5><span class=\"small text-uppercase text-muted\">UI/UX</span>\r\n                    <p class=\"font-italic text-muted\">\"You don't have to be great to start, but you have to start to be\r\n                        great\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"https://www.instagram.com/rahul_singh19/\"\r\n                                class=\"social-link\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Shreya Virmani</h5><span class=\"small text-uppercase text-muted\">UI/UX</span>\r\n                    <p class=\"font-italic text-muted\">\"The best preparation for tomorrow is doing your best today\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"https://www.instagram.com/shreyavirmani04/\"\r\n                                class=\"social-link\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Ankit Panigrahy</h5><span\r\n                        class=\"small text-uppercase text-muted\">UI/UX/Backend</span>\r\n                    <p class=\"font-italic text-muted\">\"Change your thoughts and so that you change your own world\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Himanshu Raj</h5><span class=\"small text-uppercase text-muted\">UI/UX/BACKEND</span>\r\n                    <p class=\"font-italic text-muted\">\"What would life be if we had no courage to attempt anything\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Sahithi V</h5><span class=\"small text-uppercase text-muted\">UI/UX</span>\r\n                    <p class=\"font-italic text-muted\">\"Let us sacrifice our today so that our children can have a better\r\n                        tomorrow\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"assets/img/about1.png\" alt=\"\" width=\"100\"\r\n                        class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <div class=\"inside\"></div>\r\n                    <h5 class=\"mb-0\">Priyadarshini</h5><span class=\"small text-uppercase text-muted\">UI/UX</span>\r\n                    <p class=\"font-italic text-muted\">\"If you want to shine like a sun, then you have to first burn like\r\n                        a sun\"</p>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fa fa-facebook-f\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- End-->\r\n\r\n            <!-- End-->\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-login/candidate-login.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-login/candidate-login.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n  <div id=\"formContent\" style=\"padding-bottom: 50px;\">\r\n          <!-- Tabs Titles -->\r\n          <h2 class=\"active\" routerLink=\"/candidatelogin\">{{ 'CANDIDATELOGIN.CL1' | translate }}   </h2>\r\n          <h2 class=\"inactive underlineHover\" routerLink=\"/candidateRegister\">{{ 'CANDIDATELOGIN.CL2' | translate }}  </h2>\r\n      \r\n          <!-- Icon -->\r\n          <div class=\"fadeIn first\">\r\n            <img src=\"../../../../assets/images/avatar-icon.png\" style=\"width: 40px;\" id=\"icon\" alt=\"User Icon\" />\r\n            <h6>{{ 'CANDIDATELOGIN.CL3' | translate }} </h6>\r\n          </div>\r\n      \r\n          <!-- Login Form -->\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\r\n            <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"{{ 'CANDIDATELOGIN.CL4' | translate }} \" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n            <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"{{ 'CANDIDATELOGIN.CL5' | translate }} \" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"isFailed\" role=\"alert\">\r\n              Bad Credentials\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\"></div>\r\n            <div class=\"col-md-8\"> \r\n              <button [disabled]=\"loading\" class=\"fadeIn fourth btn btn-primary btn-md\">\r\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                {{ 'CANDIDATELOGIN.CL6' | translate }}\r\n              </button>\r\n              <button class=\"fadeIn fourth btn btn-dark btn-sm\" id=\"goBack\" routerLink=\"/login\" style=\"float: right;\"><img\r\n                  src=\"../../../../assets/images/goBack.png\" style=\"width: 23px;\" alt=\"\"> {{ 'HR_LOGIN.L07' | translate }}</button>\r\n            </div>\r\n          </div>\r\n          </form>\r\n  </div>\r\n  </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Candidate Details Form -->\r\n<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div id=\"formContent\" style=\"padding-bottom: 50px;\">\r\n\r\n      <!-- Tabs Titles -->\r\n      <h2 class=\"active\"> {{ 'CANDREGDETAIL.CRD1' | translate }}</h2>\r\n\r\n      <!-- Form Begins Here -->\r\n      <form [formGroup]=\"candidateDetailsForm\" (ngSubmit)=\"onAddCandidateDetails()\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"cName\" class=\"fadeIn first form-control\"\r\n              [ngClass]=\"{ 'is-invalid': candidateDetailsForm.get('cName').touched && candidateDetailsForm.get('cName').invalid}\"\r\n              placeholder=\"{{ 'CANDREGDETAIL.CRD2' | translate }}\" formControlName=\"cName\" required>\r\n            <div class=\"invalid-feedback\">\r\n              <div>{{ 'CANDREGDETAIL.CRD3' | translate }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"email\" id=\"cEmail\" class=\"fadeIn second form-control\"\r\n              [ngClass]=\"{ 'is-invalid': candidateDetailsForm.get('cEmail').touched && candidateDetailsForm.get('cEmail').invalid}\"\r\n              placeholder=\"{{ 'CANDREGDETAIL.CRD4' | translate }}\" formControlName=\"cEmail\" required>\r\n            <div class=\"invalid-feedback\">\r\n              <div>{{ 'CANDREGDETAIL.CRD5' | translate }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"cPhone\" class=\"fadeIn second form-control\"\r\n              [ngClass]=\"{ 'is-invalid': candidateDetailsForm.get('cPhone').touched && candidateDetailsForm.get('cPhone').invalid}\"\r\n              placeholder=\"{{ 'CANDREGDETAIL.CRD6' | translate }}\" formControlName=\"cPhone\" required>\r\n            <div class=\"invalid-feedback\">\r\n              <div>{{ 'CANDREGDETAIL.CRD7' | translate }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <mat-form-field class=\"fadeIn third\">\r\n          <mat-label>{{ 'CANDREGDETAIL.CRD8' | translate }}</mat-label>\r\n          <mat-select\r\n            [ngClass]=\"{ 'is-invalid': candidateDetailsForm.get('skillList').touched && candidateDetailsForm.get('skillList').invalid}\"\r\n            placeholder=\"{{ 'CANDREGDETAIL.CRD9' | translate }}\" formControlName=\"skillList\" multiple>\r\n            <mat-option *ngFor=\"let skill of skills\" [value]=\"skill\">{{skill}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"cExperience\" class=\"fadeIn third form-control\"\r\n              [ngClass]=\"{ 'is-invalid': candidateDetailsForm.get('cExperience').touched && candidateDetailsForm.get('cExperience').invalid}\"\r\n              placeholder=\"{{ 'CANDREGDETAIL.CRDA' | translate }}\" formControlName=\"cExperience\" required>\r\n            <div class=\"invalid-feedback\">\r\n              <div>{{ 'CANDREGDETAIL.CRDB' | translate }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"form-group row \">\r\n              <div class=\"col-sm-1\"></div>\r\n              <div class=\"col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">{{ 'CANDREGDETAIL.CRDC' | translate }}</button>&nbsp;&nbsp;\r\n                <button type=\"reset\" class=\"btn btn-warning\">{{ 'CANDREGDETAIL.CRDD' | translate }}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n  <div id=\"formContent\" style=\"padding-bottom: 50px;\">\r\n          <!-- Tabs Titles -->\r\n          <h2 class=\"inactive underlineHover\" routerLink=\"/candidatelogin\">{{ 'CANDREGISTER.CR1' | translate }} </h2>\r\n          <h2 class=\"active\" routerLink=\"/candidateRegister\">{{ 'CANDREGISTER.CR2' | translate }} </h2>\r\n      \r\n          <!-- Icon -->\r\n          <div class=\"fadeIn first\">\r\n            <img src=\"../../../../assets/images/avatar-icon.png\" style=\"width: 40px;\" id=\"icon\" alt=\"User Icon\" />\r\n            <h6>{{ 'CANDREGISTER.CR3' | translate }}</h6>\r\n          </div>\r\n      \r\n          <!-- Login Form -->\r\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <input type=\"text\" id=\"firstName\" class=\"fadeIn second\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"{{ 'CANDREGISTER.CR4' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.firstName.errors.required\">{{ 'CANDREGISTER.CR5' | translate }}</div>\r\n              </div>\r\n            <input type=\"text\" id=\"lastName\" class=\"fadeIn second\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"{{ 'CANDREGISTER.CR6' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.lastName.errors.required\">{{ 'CANDREGISTER.CR7' | translate }}</div>\r\n              </div>\r\n            <input type=\"text\" id=\"login\" class=\"fadeIn third\" formControlName=\"username\" name=\"login\" placeholder=\"{{ 'CANDREGISTER.CR8' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.username.errors.required\">{{ 'CANDREGISTER.CR9' | translate }}</div>\r\n              </div>\r\n            <input type=\"password\" id=\"password\" class=\"fadeIn third\" formControlName=\"password\" name=\"login\" placeholder=\"{{ 'CANDREGISTER.CRA' | translate }}\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.password.errors.required\">{{ 'CANDREGISTER.CRB' | translate }}</div>\r\n                  <div *ngIf=\"f.password.errors.minlength\">{{ 'CANDREGISTER.CRC' | translate }}</div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                  <button [disabled]=\"loading\" class=\"fadeIn fourth btn btn-md btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    {{ 'CANDREGISTER.CRD' | translate }}\r\n                  </button>\r\n                  <button class=\"fadeIn fourth btn btn-dark btn-sm\" id=\"goBack\" routerLink=\"/login\" style=\"float: right;\"><img\r\n                      src=\"../../../../assets/images/goBack.png\" style=\"width: 23px;\" alt=\"\">\r\n                      {{ 'HR_REGISTER.R14' | translate }}</button>\r\n                </div>\r\n              </div>\r\n          </form>\r\n  </div>\r\n  </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/landing/landing.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/landing/landing.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"jumbotron\">\r\n        <h5 class=\"display-4\">{{ 'LANDINGCOMP.LC1' | translate }} {{currentUser.principal.username}}.</h5>\r\n        <button class=\"btn btn-primary btn-md\" (click)=\"onViewAllJob()\" role=\"button\">{{ 'LANDINGCOMP.LC2' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <b>{{ 'LANDINGCOMP.LC3' | translate }}</b>\r\n  <hr>\r\n  <div class=\"row\">\r\n      \r\n    <!-- Card for Filter the Job List -->\r\n    <div class=\"card newjobcard col-sm-3 animated fadeIn\" style=\"background-color: rgb(148, 148, 148);\" id=\"addnewJob\"\r\n      (click)=\"showJobByPreference(currentUser.principal.username)\">\r\n      <h4 class=\"title\">{{ 'LANDINGCOMP.LC4' | translate }}</h4>\r\n      <div class=\"bar\">\r\n        <div class=\"emptybar\"></div>\r\n      </div>\r\n      <div class=\"details\">\r\n        <p>{{ 'LANDINGCOMP.LC5' | translate }}</p>\r\n        <hr>\r\n      </div>\r\n      <div class=\"circlenew\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../../assets/images/addJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Card for listing all jobs -->\r\n    <div class=\"card animated fadeIn\" *ngFor=\"let job of jobList\">\r\n      <div data-toggle=\"modal\" data-target=\"#viewJobModal\" (click)=\"onViewJobHandler(job.jId)\">\r\n        <h4 class=\"title\" data-toggle=\"modal\" data-target=\"#viewJobModal\" (click)=\"onViewJobHandler(job.jId)\">{{job.jTitle}}</h4>\r\n        <div class=\"bar\" data-toggle=\"modal\" data-target=\"#viewJobModal\" (click)=\"onViewJobHandler(job.jId)\">\r\n          <div class=\"emptybar\"></div>\r\n        </div>\r\n        <div class=\"details\" data-toggle=\"modal\" data-target=\"#viewJobModal\" (click)=\"onViewJobHandler(job.jId)\">\r\n          <p><b>{{ 'LANDINGCOMP.LC6' | translate }} </b>{{job.jDescription}}</p>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div class=\"circlenew\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n          </div>\r\n          <div class=\"col-md-6\" (click)=\"onApplyHandler(job.jId)\">\r\n            <img src=\"../../../../assets/images/addJob.png\" style=\"width: 40px;\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- View Modal -->\r\n  <div class=\"modal fade\" id=\"viewJobModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ 'LANDINGCOMP.LC7' | translate }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\" *ngIf=\"cJob\">\r\n          <h5><b>{{ 'LANDINGCOMP.LC8' | translate }}</b> {{cJob.jTitle}}</h5>\r\n          <hr>\r\n          <p><b>{{ 'LANDINGCOMP.LC9' | translate }}</b> {{cJob.jDescription}}</p>\r\n          <hr>\r\n          <p><b>{{ 'LANDINGCOMP.LCA' | translate }}</b>{{cJob.skillList}}</p>\r\n          <hr>\r\n          <p><b>{{ 'LANDINGCOMP.LCB' | translate }}</b>{{cJob.jRequiredExperience}} years</p>\r\n          <hr>\r\n          <p><b>{{ 'LANDINGCOMP.LCC' | translate }}</b> {{cJob.jSalary}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- OLD OLD OLD OLD OLD OLD OLD -->\r\n  <!-- OLD OLD OLD OLD OLD OLD OLD -->\r\n  <!-- OLD OLD OLD OLD OLD OLD OLD -->\r\n  <!-- OLD OLD OLD OLD OLD OLD OLD -->\r\n  <!-- <div class=\"row\">\r\n   \r\n           <div class=\"card col-sm-3 aqua-gradient animated fadeIn slower\" id=\"applyForJob\" (click)=\"onViewAllJob()\">\r\n                       <div class=\"upperContainerNewJob aqua-gradient\">\r\n                           <h1>+</h1>\r\n                           <h2>Apply For Job</h2>\r\n                       </div>\r\n           </div>\r\n\r\n           <div class=\"card col-sm-3 blue-gradient animated fadeIn\"  *ngFor = \"let job of jobList\">\r\n               <div class=\"card-body blue-gradient bwaves-light\">\r\n                   <div class=\"upperContainer\" data-toggle=\"modal\" data-target=\"#viewJobModal\">\r\n                   <h5 class=\"card-title\">{{job.jTitle}}</h5>\r\n                   <p>Last Date:{{job.jApplicationCloseDate}}</p>\r\n                   </div>\r\n                   <hr>\r\n                   <div>\r\n                           <button type=\"button\" class=\"btn btn-primary btn-md col-md-6\" data-toggle=\"modal\" data-target=\"#applyJobModal\" (click)=\"onApplyHandler(currentUser.principal.cId,job.jId)\"><img src=\"../../../../assets/images/editJob.png\" style=\"width: 20px;height: 20px;\" alt=\"editButton\"><br>Apply</button> \r\n                       \r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n       <button type=\"button\" class=\"btn btn-primary btn-md col-md-6\"  (click)=\"showJobByPreference(currentUser.principal.cId)\"><img src=\"../../../../assets/images/editJob.png\" style=\"width: 20px;height: 20px;\" alt=\"editButton\"><br>Show Jobs By preference</button>\r\n       <hr>\r\n       \r\n       <div class=\"modal fade\" id=\"applyJobModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n           <div class=\"modal-dialog\" role=\"document\">\r\n                   <div class=\"modal-content\">\r\n                       <div class=\"modal-header\">\r\n                       <h5 class=\"modal-title\" id=\"exampleModalLabel\">Apply to Job</h5>\r\n                       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                         <span aria-hidden=\"true\">&times;</span>\r\n                       </button>\r\n                       </div>\r\n                   <div class=\"modal-body\">\r\n                       <h4>Applied Successfully</h4>\r\n                           \r\n                   </div>\r\n                   </div>\r\n           </div>\r\n   </div>\r\n   </div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/profile/profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/profile/profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span style=\"float: left; margin-left:-180px;\">\r\n    <button class=\"btn btn-dark\" routerLink=\"/landing\"><<{{ 'CANDPROFILE.CP1' | translate }}</button>\r\n</span>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\" card col-md-12\" id=\"formdiv\" style=\"margin-left: -150px; margin-top: 40px;\">\r\n            <h1>{{ 'CANDPROFILE.CP2' | translate }}</h1>\r\n        <!--Step 3: connect form group here -->\r\n        <form class=\"col-md-6 offset-md-3\" [formGroup]=\"profile\" (ngSubmit)=\"onSave()\">\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticName\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CP3' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': profile.get('name').touched && profile.get('name').invalid}\"\r\n                        placeholder=\"{{ 'CANDPROFILE.CP4' | translate }}\" formControlName=\"name\" />\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CP5' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticId\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CP6' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"email\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': profile.get('email').touched && profile.get('email').invalid}\"\r\n                        placeholder=\"{{ 'CANDPROFILE.CP7' | translate }}\" formControlName=\"email\" />\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CP8' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticAge\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CP9' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"number\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': profile.get('phone').touched && profile.get('phone').invalid}\"\r\n                        placeholder=\"{{ 'CANDPROFILE.CPA' | translate }}\" formControlName=\"phone\" />\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CPB' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticAge\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CPC' | translate }}</label>\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"row\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': profile.get('street').touched && profile.get('street').invalid}\"\r\n                            placeholder=\"{{ 'CANDPROFILE.CPD' | translate }}\" formControlName=\"street\" />\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>{{ 'CANDPROFILE.CPE' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': profile.get('town').touched && profile.get('town').invalid}\"\r\n                            placeholder=\"{{ 'CANDPROFILE.CPF' | translate }}\" formControlName=\"town\" />\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>{{ 'CANDPROFILE.CPG' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': profile.get('state').touched && profile.get('state').invalid}\"\r\n                            placeholder=\"{{ 'CANDPROFILE.CPH' | translate }}\" formControlName=\"state\" />\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>{{ 'CANDPROFILE.CPI' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': profile.get('country').touched && profile.get('country').invalid}\"\r\n                            placeholder=\"{{ 'CANDPROFILE.CPJ' | translate }}\" formControlName=\"country\" />\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>{{ 'CANDPROFILE.CPK' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <input type=\"number\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': profile.get('pincode').touched && profile.get('country').invalid}\"\r\n                            placeholder=\"{{ 'CANDPROFILE.CPL' | translate }}\" formControlName=\"pincode\" />\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>{{ 'CANDPROFILE.CPM' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticId\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CPN' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n\r\n                    <div class=\"form-check-inline\">\r\n                        <label class=\"form-check-label\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" value=\"\">{{ 'CANDPROFILE.CPO' | translate }}\r\n\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-check-inline\">\r\n                        <label class=\"form-check-label\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" value=\"\">{{ 'CANDPROFILE.CPP' | translate }}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-check-inline\">\r\n                        <label class=\"form-check-label\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" value=\"\">{{ 'CANDPROFILE.CPQ' | translate }}\r\n                        </label>\r\n                    </div>\r\n\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CPR' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CPS' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"file\">\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CPT' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">{{ 'CANDPROFILE.CPU' | translate }}</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': profile.get('experience').touched && profile.get('experience').invalid}\"\r\n                        placeholder=\"{{ 'CANDPROFILE.CPV' | translate }}\" formControlName=\"experience\" />\r\n                    <div class=\"invalid-feedback\">\r\n                        <div>{{ 'CANDPROFILE.CPW' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-success\" *ngIf=\"isSaved\">\r\n                {{ 'CANDPROFILE.CPX' | translate }} \r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-10 offset-sm-2\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">{{ 'CANDPROFILE.CPY' | translate }}</button>\r\n                    <a routerLink=\"/listjobs\" class=\"btn btn-link\">{{ 'CANDPROFILE.CPZ' | translate }}</a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/viewjobs/viewjobs.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/viewjobs/viewjobs.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\r\n    <div class=\"card col-sm-3\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Full Stack Developer</h5>\r\n            <p class=\"card-text\">4 years of experience </p>\r\n            <a routerLink=\"/jobdetails\" class=\"link\">View Details</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-sm-3\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Hr</h5>\r\n            <p class=\"card-text\">15 years of experience </p>\r\n            <a routerLink=\"/jobdetails\" class=\"link\">View Details</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-sm-3\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Associate Software Engineer</h5>\r\n            <p class=\"card-text\">1 year of experience </p>\r\n            <a routerLink=\"/jobdetails\" class=\"link\">View Details</a>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"card col-sm-3 blue-gradient animated fadeIn\"  *ngFor = \"let job of jobList\" routerLink=\"/jobs/{{job.jobId}}\">\r\n    <div class=\"card-body blue-gradient\">\r\n        <div class=\"upperContainer\">\r\n        <h5 class=\"card-title\">{{job.designation}}</h5>\r\n        <p>{{ 'VIEWJOB.VJ1' | translate }}{{job.jobRole}}</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/contact/contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/contact/contact.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container padding-top:20px\">\r\n    <h2 class=\"text-center font-weight-bold \">{{ 'CONTACT.C1' | translate }} </h2>\r\n    <!-- Grid row -->\r\n    <br><br>\r\n    <div class=\"row\">\r\n        <!-- Grid column -->\r\n        <div class=\"col-lg-5 mb-lg-0 mb-4\">\r\n            <!-- Form with header -->\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <!-- Header -->\r\n                    <div class=\"form-header accent-1\">\r\n                        <h3 class=\"mt-3 text-black text-center \"><i\r\n                                class=\"fas fa-envelope\"></i>{{ 'CONTACT.C2' | translate }} </h3>\r\n                    </div>\r\n                    <!-- <p class=\"dark-grey-text\">{{ 'CONTACT.C3' | translate }}</p> -->\r\n                    <!-- Body -->\r\n                    <form [formGroup]=\"contactForm\">\r\n                        <div class=\"md-form\">\r\n                            <i class=\"fas fa-user prefix grey-text\"></i>\r\n                            <input type=\"text\" formControlName=\"name\" placeholder=\"{{ 'CONTACT.C4' | translate }}\"\r\n                                id=\"name\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': contactForm.get('name').touched && contactForm.get('name').invalid && submitted && f.name.errors }\" />\r\n                            <div class=\"invalid-feedback\">\r\n                                <div>{{ 'CONTACT.C5' | translate }}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"md-form\">\r\n                            <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n                            <input type=\"text\" formControlName=\"email\" placeholder=\"{{ 'CONTACT.C6' | translate }}\"\r\n                                id=\"email\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid':contactForm.get('email').touched && contactForm.get('email').invalid && submitted && f.email.errors }\" />\r\n                            <div class=\"invalid-feedback\">\r\n                                <div>{{ 'CONTACT.C7' | translate }}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"md-form\">\r\n                            <i class=\"fas fa-tag prefix grey-text\"></i>\r\n                            <input type=\"text\" id=\"subject\" class=\"form-control\"\r\n                                placeholder=\"{{ 'CONTACT.C8' | translate }}\" formControlName=\"subject\"\r\n                                [ngClass]=\"{ 'is-invalid':contactForm.get('subject').touched && contactForm.get('subject').invalid && submitted && f.subject.errors }\">\r\n                            <div class=\"invalid-feedback\">\r\n                                <div>{{ 'CONTACT.C9' | translate }}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"md-form\">\r\n                            <i class=\"fas fa-pencil-alt prefix grey-text\"></i>\r\n                            <textarea id=\"message\" formControlName=\"message\"\r\n                                placeholder=\"{{ 'CONTACT.CA' | translate }}\" class=\"form-control md-textarea\" rows=\"3\"\r\n                                [ngClass]=\"{ 'is-invalid': contactForm.get('message').touched && contactForm.get('message').invalid && submitted && f.message.errors }\"></textarea>\r\n                            <div class=\"invalid-feedback\">\r\n                                <div>{{ 'CONTACT.CB' | translate }}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-center\">\r\n                            <button type=\"button\" class=\"btn btn-primary\"\r\n                                (click)=\"onSubmit()\">{{ 'CONTACT.CC' | translate }}</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- Form with header -->\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <div class=\"col-lg-7\">\r\n\r\n            <!--Google map-->\r\n            <div id=\"map-container-section\" class=\"z-depth-1-half map-container-section mb-4\" style=\"height: 400px\">\r\n                <iframe src=\"https://maps.google.com/maps?q=ibm%20manyata&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                    frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n            </div>\r\n            <!-- Buttons-->\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"btn-floating card-panel\">\r\n                        <!-- class=\"btn-floating blue accent-1\" -->\r\n                        <i class=\"fas fa-map-marker-alt\"></i>\r\n                    </a>\r\n                    <p>{{ 'CONTACT.CD' | translate }}</p>\r\n                    <p class=\"mb-md-0\">{{ 'CONTACT.CE' | translate }}</p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"btn-floating card-panel\">\r\n                        <i class=\"fas fa-phone\"></i>\r\n                    </a>\r\n                    <p>+ 01 234 567 89</p>\r\n                    <p class=\"mb-md-0\">{{ 'CONTACT.CF' | translate }}, 8:00-19:00</p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"btn-floating card-panel\">\r\n                        <i class=\"fas fa-envelope\"></i>\r\n                    </a>\r\n                    <p>rms@gmail.com</p>\r\n                    <p class=\"mb-0\">vvs@gmail.com</p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/query-list/query-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/query-list/query-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card col-md-12\">\r\n        <h2>Queries</h2>\r\n        <div class=\"card-body\" *ngFor=\"let contactData of contactList\">\r\n                    <h5><b>Id:</b> {{contactData.id}}</h5>\r\n          <h3 class=\"card-title\">{{contactData.name}}</h3>\r\n          <h5><b>Email:</b> {{contactData.email}}</h5>\r\n          <hr>\r\n          <p><b>Subject:</b> {{contactData.subject}}</p>\r\n          <hr>\r\n          <p><b>Message:</b> {{contactData.message}}</p>\r\n          \r\n          <div class=\"alert alert-success\" *ngIf=\"isSaved\">\r\n                  Updated successfully!\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editJobModal\" routerLink=\"/reply\">Reply</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteHandler(contactData.id)\">Delete</button>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/reply/reply.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/reply/reply.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Form with header -->\r\n<div class=\"container\"  style=\"padding-bottom: 15px;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"card col-md-6\">\r\n            <div>\r\n               <h3 class=\"text-center\">Reply to Query</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"replyForm\">\r\n                    <div class=\"md-form\">\r\n                        To:\r\n                        <input type=\"text\" formControlName=\"email\" placeholder=\"Your Email\" id=\"email\"\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid':replyForm.get('email').touched && replyForm.get('email').invalid && submitted && f.email.errors }\">\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>Email is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"md-form\">\r\n                        Subject:\r\n                        <input type=\"text\" id=\"subject\" class=\"form-control\" placeholder=\"Your Subject\"\r\n                            formControlName=\"subject\"\r\n                            [ngClass]=\"{ 'is-invalid':replyForm.get('subject').touched && replyForm.get('subject').invalid && submitted && f.subject.errors }\">\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>Subject is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"md-form\">\r\n                        Message:\r\n                        <textarea id=\"message\" formControlName=\"message\" placeholder=\"Your Message\"\r\n                            class=\"form-control md-textarea\" rows=\"3\"\r\n                            [ngClass]=\"{ 'is-invalid': replyForm.get('message').touched && replyForm.get('message').invalid && submitted && f.message.errors }\"></textarea>\r\n                        <div class=\"invalid-feedback\">\r\n                            <div>Message is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Send</button>&nbsp;&nbsp;\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Form with header -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\r\n<footer class=\"page-footer font-small mdb-color pt-4\">\r\n\r\n  <!-- Footer Links -->\r\n  <div class=\"container text-center text-md-left\">\r\n\r\n    <!-- Footer links -->\r\n    <div class=\"row text-center text-md-left mt-3 pb-3\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\r\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">{{ 'FOOTER.FO1' | translate }}</h6>\r\n        <p>\r\n          {{ 'FOOTER.FO2' | translate }}  \r\n\r\n            \r\n        </p>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <hr class=\"w-100 clearfix d-md-none\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\r\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">{{ 'FOOTER.FO3' | translate }}</h6>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FO4' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FO5' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FO6' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FO7' | translate }}</a>\r\n        </p>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <hr class=\"w-100 clearfix d-md-none\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\r\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">{{ 'FOOTER.FO8' | translate }}</h6>\r\n        <p>\r\n          <a routerLink=\"/login\">{{ 'FOOTER.FO9' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FOA' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FOB' | translate }}</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"#!\">{{ 'FOOTER.FOC' | translate }}</a>\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Grid column -->\r\n      <hr class=\"w-100 clearfix d-md-none\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\r\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">{{ 'FOOTER.FOD' | translate }}</h6>\r\n        <p>\r\n          <mdb-icon fas icon=\"home\" class=\"mr-3\"></mdb-icon>{{ 'FOOTER.FOE' | translate }}\r\n        </p>\r\n        <p>\r\n          <mdb-icon fas icon=\"envelope\" class=\"mr-3\"></mdb-icon>{{ 'FOOTER.FOF' | translate }} \r\n        </p>\r\n        <p>\r\n          <mdb-icon fas icon=\"phone\" class=\"mr-3\"></mdb-icon> + 01 234 567 88\r\n        </p>\r\n        <p>\r\n          <mdb-icon fas icon=\"print\" class=\"mr-3\"></mdb-icon> + 01 234 567 88\r\n        </p>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Footer links -->\r\n\r\n    <hr>\r\n\r\n    <!-- Grid row -->\r\n    <div class=\"row d-flex align-items-center\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-6 col-lg-8\">\r\n\r\n        <!--Copyright-->\r\n        <p class=\"text-center text-md-left\">{{ 'FOOTER.FOG' | translate }}\r\n          <a href=\"www.ibm.com\">\r\n            <strong>www.ibm.com</strong>\r\n          </a>\r\n        </p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n      \r\n      <!-- Grid column -->\r\n      <div class=\"col-md-6 col-lg-4 ml-lg-0\">\r\n          <style>.heart{color:#f00808;}</style>\r\n          <strong>Made with <span class=\"heart\">❤</span> in India</strong>\r\n        <!-- Social buttons -->\r\n        <!-- <div class=\"text-center text-md-right\">\r\n          <ul class=\"list-unstyled list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\r\n                <mdb-icon fab icon=\"facebook\"></mdb-icon>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\r\n                <mdb-icon fab icon=\"twitter\"></mdb-icon>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\r\n                <mdb-icon fab fab icon=\"google-plus\"></mdb-icon>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\r\n                <mdb-icon fab icon=\"linkedin\"></mdb-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div> -->\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n  </div>\r\n  <!-- Footer Links -->\r\n\r\n</footer>\r\n<!-- Footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav>\r\n<ng-content></ng-content>\r\n</app-nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/card-view/card-view.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/card-view/card-view.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n.testimonial-card{\r\n    transition: box-shadow .5s;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n.testimonial-card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n</style>\r\n<!--Grid row-->\r\n<div class=\"row\">\r\n\r\n  <!--Grid column-->\r\n  <div class=\"col-md-4\">\r\n\r\n    <mdb-card class=\"testimonial-card\">\r\n      <!--Bacground color-->\r\n      <div class=\"card-up indigo lighten-1\">\r\n      </div>\r\n\r\n      <!--Avatar-->\r\n      <div class=\"avatar mx-auto\">\r\n        <img src=\"../../../../assets/images/avatar-icon-1.png\" style=\"width: 200px; padding-top: 20px;\" class=\"rounded-circle\">\r\n      </div>\r\n\r\n      <mdb-card-body>\r\n        <!--Name-->\r\n        <mdb-card-title>\r\n          <h4 style=\"text-align: center;\">Mr. XYZ</h4>\r\n        </mdb-card-title>\r\n        <hr>\r\n        <!--Quotation-->\r\n        <p style=\"text-align: center;\">\r\n          <mdb-icon fas icon=\"quote-left\"></mdb-icon> CEO <mdb-icon fas icon=\"quote-right\"></mdb-icon> \r\n          </p>\r\n      </mdb-card-body>\r\n    </mdb-card>\r\n\r\n  </div>\r\n  <!--Grid column-->\r\n\r\n  <!--Grid column-->\r\n  <div class=\"col-md-4\">\r\n\r\n    <!--Card-->\r\n    <mdb-card class=\"testimonial-card\">\r\n      <!--Bacground color-->\r\n      <div class=\"card-up aqua-gradient\">\r\n      </div>\r\n\r\n      <!--Avatar-->\r\n      <div class=\"avatar mx-auto\">\r\n        <img src=\"../../../../assets/images/avatar-icon-4.png\" style=\"width: 200px; padding-top: 20px;\" class=\"rounded-circle\">\r\n      </div>\r\n\r\n      <mdb-card-body>\r\n        <!--Name-->\r\n        <mdb-card-title>\r\n          <h4 style=\"text-align: center;\">Mrs. ABC</h4>\r\n        </mdb-card-title>\r\n        <hr>\r\n        <!--Quotation-->\r\n        <p style=\"text-align: center;\">\r\n          <mdb-icon fas icon=\"quote-left\"></mdb-icon> Lead, Recruitment Department <mdb-icon fas icon=\"quote-right\"></mdb-icon> \r\n        </p>\r\n      </mdb-card-body>\r\n    </mdb-card>\r\n    <!--/.Card-->\r\n\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n\r\n        <!--Card-->\r\n        <mdb-card class=\"testimonial-card\">\r\n          <!--Bacground color-->\r\n          <div class=\"card-up aqua-gradient\">\r\n          </div>\r\n    \r\n          <!--Avatar-->\r\n          <div class=\"avatar mx-auto\">\r\n            <img src=\"../../../../assets/images/avatar-icon-3.png\" style=\"width: 200px; padding-top: 20px;\" class=\"rounded-circle\">\r\n          </div>\r\n    \r\n          <mdb-card-body>\r\n            <!--Name-->\r\n            <mdb-card-title>\r\n              <h4 style=\"text-align: center;\">MR. LMN</h4>\r\n            </mdb-card-title>\r\n            <hr>\r\n            <!--Quotation-->\r\n            <p style=\"text-align: center;\">\r\n              <mdb-icon fas icon=\"quote-left\"></mdb-icon> Managing Director <mdb-icon fas icon=\"quote-right\"></mdb-icon>\r\n            </p>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n        <!--/.Card-->\r\n    \r\n      </div>\r\n  <!--Grid column-->\r\n\r\n</div>\r\n<!--Grid row-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/home-image/home-image.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/home-image/home-image.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" style=\" margin-bottom: 20px;\">\r\n<mdb-carousel [animation]=\"'slide'\" style=\"height: 800px; padding: -20px 0 0 0;\">\r\n    <mdb-carousel-item>\r\n      <div class=\"row\">\r\n          <img class=\"d-block w-100\" src=\"/assets/images/banner-1.jpg\" alt=\"First slide\">\r\n            <div class=\"col-md-5\"></div>\r\n            <div class=\"col-md-4\" style=\"margin: -145px 0 0 40px;\">\r\n              <button mdbBtn type=\"button\" color=\"elegant\" mdbWavesEffect routerLink=\"/login\">Login Now</button>\r\n              </div>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n        <div class=\"row\">\r\n            <img class=\"d-block w-100\" src=\"/assets/images/banner-2.jpg\" alt=\"First slide\">\r\n            <div class=\"col-md-5\"></div>\r\n            <div class=\"col-md-4\" style=\"margin: -145px 0 0 40px;\">\r\n              <button mdbBtn type=\"button\" color=\"elegant\" mdbWavesEffect routerLink=\"/login\">Login Now</button>\r\n              </div>\r\n        </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n        <div class=\"row\">\r\n            <img class=\"d-block w-100\" src=\"/assets/images/banner-3.jpg\" alt=\"First slide\">\r\n            <div class=\"col-md-5\"></div>\r\n            <div class=\"col-md-4\" style=\"margin: -145px 0 0 40px;\">\r\n              <button mdbBtn type=\"button\" color=\"elegant\" mdbWavesEffect routerLink=\"/login\">Login Now</button>\r\n              </div>\r\n        </div>\r\n    </mdb-carousel-item>\r\n  </mdb-carousel>\r\n  <hr/>\r\n  <app-card-view style=\"position: relative;\"></app-card-view>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/login-landing/login-landing.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/login-landing/login-landing.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <mat-card class=\"card cardlayout\" routerLink=\"/hrlogin\">\r\n      <mat-card-content routerLink=\"/hrlogin\">\r\n        <mat-card-title class=\"title\">{{ 'LOGINLANDING.LL4' | translate }}</mat-card-title>\r\n        <mat-card-subtitle class=\"title\">{{ 'LOGINLANDING.LL3' | translate }} </mat-card-subtitle>\r\n        <img src=\"/assets/images/hr-avatar.png\" alt=\"HR Image\">\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card class=\"card cardlayout\" routerLink=\"/candidatelogin\">\r\n      <mat-card-content routerLink=\"/candidatelogin\">\r\n        <mat-card-title class=\"title\">{{ 'LOGINLANDING.LL2' | translate }}</mat-card-title>\r\n        <mat-card-subtitle class=\"title\">{{ 'LOGINLANDING.LL5' | translate }}  </mat-card-subtitle>\r\n        <img src=\"/assets/images/candidate-avatar.png\" alt=\"Candidate Image\">\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/sidenav/sidenav.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/sidenav/sidenav.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\r\n    <mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\r\n      <mat-toolbar color=\"primary\">\r\n        <!-- future svg to go here -->\r\n        <span class=\"toolbar-filler\"></span>\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\r\n          <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\r\n        </button>\r\n      </mat-toolbar>\r\n      <mat-nav-list>\r\n        <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/login']\" (click)=\"sidenav.toggle()\">\r\n          <mat-icon mat-list-icon>input</mat-icon>\r\n          <span class=\"title\" mat-line>Login</span>\r\n          <span mat-line class=\"secondary\">test</span>\r\n        </a>\r\n        <!-- <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/comp2']\" (click)=\"sidenav.toggle()\">\r\n          <mat-icon mat-list-icon>android</mat-icon>\r\n          <span class=\"title\" mat-line>comp2</span>\r\n          <span mat-line class=\"secondary\">test</span>\r\n        </a>\r\n        <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/fullscreen1']\" (click)=\"sidenav.toggle()\">\r\n          <mat-icon mat-list-icon><i class=\"material-icons\">panorama_wide_angle</i></mat-icon>\r\n          <span class=\"title\" mat-line>fullscreen1</span>\r\n          <span mat-line class=\"secondary\">fullscreen1</span>\r\n        </a> -->\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-toolbar id=\"appToolbar\" [ngClass]=\"{'toolbar-fullscreen': (fullscreen$ | async)}\" color=\"primary\">\r\n      <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"sidenav.opened\">\r\n              <mat-icon aria-label=\"Menu\" class=\"material-icons\">menu</mat-icon>\r\n      </button>\r\n      <h1 class=\"component-title\">\r\n        <a class=\"title-link\">{{title}}</a>\r\n      </h1>\r\n      <span class=\"toolbar-filler\"></span>\r\n      <!--<button id=\"button-login\" mat-button [routerLink]=\"['/signupin']\" *ngIf=\"!(user | async)\">Log In</button>-->\r\n    \r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n\r\n  .dropbtn {\r\n    /* background-color: rgb(255, 255, 255); */\r\n    color:black;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* The container <div> - needed to position the dropdown content */\r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Dropdown Content (Hidden by Default) */\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: #f1f1f1}\r\n  \r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n  \r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  .dropdown:hover .dropbtn {\r\n    background-color: #bbbbbb;\r\n  }\r\n  .avatar-hr{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  .navbar-brand{\r\n      font-family: 'Alfa Slab One', cursive;\r\n    }\r\n  .navbar{\r\n    font-family: 'Comfortaa', cursive;\r\n  }\r\n  .navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 22px;\r\n  height: 2px;\r\n  background-color: #cccccc;\r\n  border-radius: 1px;\r\n}\r\n  </style>\r\n  <nav class=\"navbar navbar-expand-lg\" id=\"persistentNav\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">R M S</a>\r\n        </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <div class=\"col-md-10\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink=\"/jobs\">{{ 'NAV.N1' | translate }}<span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink=\"/about\">{{ 'NAV.N2' | translate }}</a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">{{ 'NAV.N3' | translate }}</a>\r\n              </li>\r\n            </ul>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n            <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                <div class=\"btn-group\" mdbDropdown>\r\n                    <button mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"btn dropdown-toggle waves-light\" mdbWavesEffect style=\"height: auto;\">{{ 'NAV.N5' | translate }}</button>\r\n                        <div class=\"dropdown-menu dropdown-primary col-md-1\">\r\n                            <option class=\"dropdown-item col-md-1\" #langselect (click)=\"translate.use(langselect.value)\" *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\r\n                        </div>\r\n                </div>\r\n              </li>\r\n              <li *ngIf=\"nav.visible\" class=\"nav-item avatar dropdown col-md-1\">\r\n              <div class=\"btn-group\" mdbDropdown>\r\n                  <a mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"dropdown-toggle waves-light\" mdbWavesEffect style=\"height: auto; width: 40px\">\r\n                    <img src=\"../../../assets/images/avatar-icon.png\" alt=\"\" class=\"img-fluid rounded-circle z-depth-0\" >\r\n                  </a>\r\n                      <div class=\"dropdown-menu dropdown-primary col-md-1\">\r\n                        <a class=\"dropdown-item col-md-1\" (click)=\"logout()\">{{ 'NAV.N6' | translate }}</a>\r\n                      </div>\r\n              </div>\r\n              </li>\r\n              <li *ngIf=\"!nav.visible\" class=\"nav-item\" id=\"loginbutton\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <a class=\"nav-link\" routerLink=\"/login\">{{ 'NAV.N4' | translate }}</a>\r\n                </li>\r\n              <!-- </div> -->\r\n            </ul>\r\n      </div>\r\n      </div>\r\n      </div>\r\n    </nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_HR_job_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/HR/job/job.component */ "./src/app/component/HR/job/job.component.ts");
/* harmony import */ var _component_HR_addjob_addjob_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/HR/addjob/addjob.component */ "./src/app/component/HR/addjob/addjob.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_HR_jobdetail_jobdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/HR/jobdetail/jobdetail.component */ "./src/app/component/HR/jobdetail/jobdetail.component.ts");
/* harmony import */ var _component_HR_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/HR/login/login.component */ "./src/app/component/HR/login/login.component.ts");
/* harmony import */ var _component_HR_register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/HR/register */ "./src/app/component/HR/register/index.ts");
/* harmony import */ var _component_landingPage_home_image_home_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/landingPage/home-image/home-image.component */ "./src/app/component/landingPage/home-image/home-image.component.ts");
/* harmony import */ var _component_landingPage_login_landing_login_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/landingPage/login-landing/login-landing.component */ "./src/app/component/landingPage/login-landing/login-landing.component.ts");
/* harmony import */ var _component_candidate_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/candidate/landing/landing.component */ "./src/app/component/candidate/landing/landing.component.ts");
/* harmony import */ var _component_candidate_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/candidate/profile/profile.component */ "./src/app/component/candidate/profile/profile.component.ts");
/* harmony import */ var _component_candidate_viewjobs_viewjobs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/candidate/viewjobs/viewjobs.component */ "./src/app/component/candidate/viewjobs/viewjobs.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _component_candidate_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/candidate/candidate-login/candidate-login.component */ "./src/app/component/candidate/candidate-login/candidate-login.component.ts");
/* harmony import */ var _component_candidate_candidate_register_candidate_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/candidate/candidate-register/candidate-register.component */ "./src/app/component/candidate/candidate-register/candidate-register.component.ts");
/* harmony import */ var _component_candidate_candidate_register_candidate_register_details_candidate_register_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/candidate/candidate-register/candidate-register-details/candidate-register-details.component */ "./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.ts");
/* harmony import */ var _component_candidate_CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/candidate/CandidateService/candidate.service */ "./src/app/component/candidate/CandidateService/candidate.service.ts");
/* harmony import */ var _component_HR_HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/HR/HRservice/job-service.service */ "./src/app/component/HR/HRservice/job-service.service.ts");
/* harmony import */ var _component_contactus_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/contactus/contact/contact.component */ "./src/app/component/contactus/contact/contact.component.ts");
/* harmony import */ var _component_contactus_reply_reply_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/contactus/reply/reply.component */ "./src/app/component/contactus/reply/reply.component.ts");
/* harmony import */ var _component_contactus_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/contactus/query-list/query-list.component */ "./src/app/component/contactus/query-list/query-list.component.ts");






















const routes = [
    { path: '', component: _component_landingPage_home_image_home_image_component__WEBPACK_IMPORTED_MODULE_8__["HomeImageComponent"] },
    { path: 'login', component: _component_landingPage_login_landing_login_landing_component__WEBPACK_IMPORTED_MODULE_9__["LoginLandingComponent"] },
    { path: 'hrlogin', component: _component_HR_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'jobs', component: _component_HR_job_job_component__WEBPACK_IMPORTED_MODULE_1__["JobComponent"], canActivate: [_component_HR_HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_18__["JobServiceService"]] },
    { path: 'jobs/addjob', component: _component_HR_addjob_addjob_component__WEBPACK_IMPORTED_MODULE_2__["AddjobComponent"] },
    { path: 'jobs/:id', component: _component_HR_jobdetail_jobdetail_component__WEBPACK_IMPORTED_MODULE_5__["JobdetailComponent"] },
    { path: 'register', component: _component_HR_register__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'landing', component: _component_candidate_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"], canActivate: [_component_candidate_CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_17__["CandidateService"]] },
    { path: 'profile', component: _component_candidate_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: 'listjobs', component: _component_candidate_viewjobs_viewjobs_component__WEBPACK_IMPORTED_MODULE_12__["ViewjobsComponent"] },
    { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'contact', component: _component_contactus_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"] },
    { path: 'reply', component: _component_contactus_reply_reply_component__WEBPACK_IMPORTED_MODULE_20__["ReplyComponent"] },
    { path: 'querylist', component: _component_contactus_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_21__["QuerylistComponent"] },
    { path: 'candidatelogin', component: _component_candidate_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_14__["CandidateLoginComponent"] },
    { path: 'candidateRegister', component: _component_candidate_candidate_register_candidate_register_component__WEBPACK_IMPORTED_MODULE_15__["CandidateRegisterComponent"] },
    { path: 'registerdetails', component: _component_candidate_candidate_register_candidate_register_details_candidate_register_details_component__WEBPACK_IMPORTED_MODULE_16__["CandidateRegisterDetailsComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.body{\r\n    background-color: rgb(245, 245, 245);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_HR_HRservice_loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/HR/HRservice/loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");




let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'rms-ui';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _component_HR_HRservice_loginservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/component/nav/nav.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _component_HR_addjob_addjob_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/HR/addjob/addjob.component */ "./src/app/component/HR/addjob/addjob.component.ts");
/* harmony import */ var _component_HR_job_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/HR/job/job.component */ "./src/app/component/HR/job/job.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _component_HR_jobdetail_jobdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/HR/jobdetail/jobdetail.component */ "./src/app/component/HR/jobdetail/jobdetail.component.ts");
/* harmony import */ var _component_HR_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/HR/login/login.component */ "./src/app/component/HR/login/login.component.ts");
/* harmony import */ var _component_HR_register__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/HR/register */ "./src/app/component/HR/register/index.ts");
/* harmony import */ var _component_HR_HRservice_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/HR/HRservice/alert */ "./src/app/component/HR/HRservice/alert/index.ts");
/* harmony import */ var _component_HR_HRservice_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/HR/HRservice/helper */ "./src/app/component/HR/HRservice/helper/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _component_landingPage_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/landingPage/sidenav/sidenav.component */ "./src/app/component/landingPage/sidenav/sidenav.component.ts");
/* harmony import */ var _component_landingPage_card_view_card_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/landingPage/card-view/card-view.component */ "./src/app/component/landingPage/card-view/card-view.component.ts");
/* harmony import */ var _component_landingPage_home_image_home_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/landingPage/home-image/home-image.component */ "./src/app/component/landingPage/home-image/home-image.component.ts");
/* harmony import */ var _component_landingPage_card_view_material_material_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/landingPage/card-view/material/material.module */ "./src/app/component/landingPage/card-view/material/material.module.ts");
/* harmony import */ var _component_landingPage_login_landing_login_landing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/landingPage/login-landing/login-landing.component */ "./src/app/component/landingPage/login-landing/login-landing.component.ts");
/* harmony import */ var _component_nav_nav_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/nav/nav.service */ "./src/app/component/nav/nav.service.ts");
/* harmony import */ var _component_candidate_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/candidate/landing/landing.component */ "./src/app/component/candidate/landing/landing.component.ts");
/* harmony import */ var _component_candidate_profile_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/candidate/profile/profile.component */ "./src/app/component/candidate/profile/profile.component.ts");
/* harmony import */ var _component_candidate_viewjobs_viewjobs_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/candidate/viewjobs/viewjobs.component */ "./src/app/component/candidate/viewjobs/viewjobs.component.ts");
/* harmony import */ var _component_candidate_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/candidate/candidate-login/candidate-login.component */ "./src/app/component/candidate/candidate-login/candidate-login.component.ts");
/* harmony import */ var _component_candidate_candidate_register_candidate_register_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/candidate/candidate-register/candidate-register.component */ "./src/app/component/candidate/candidate-register/candidate-register.component.ts");
/* harmony import */ var _component_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _component_candidate_candidate_register_candidate_register_details_candidate_register_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/candidate/candidate-register/candidate-register-details/candidate-register-details.component */ "./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.ts");
/* harmony import */ var _component_contactus_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./component/contactus/query-list/query-list.component */ "./src/app/component/contactus/query-list/query-list.component.ts");
/* harmony import */ var _component_contactus_reply_reply_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./component/contactus/reply/reply.component */ "./src/app/component/contactus/reply/reply.component.ts");
/* harmony import */ var _component_contactus_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./component/contactus/contact/contact.component */ "./src/app/component/contactus/contact/contact.component.ts");









































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
            _component_HR_addjob_addjob_component__WEBPACK_IMPORTED_MODULE_10__["AddjobComponent"],
            _component_HR_job_job_component__WEBPACK_IMPORTED_MODULE_11__["JobComponent"],
            _component_HR_jobdetail_jobdetail_component__WEBPACK_IMPORTED_MODULE_13__["JobdetailComponent"],
            _component_HR_register__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _component_candidate_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_32__["CandidateLoginComponent"],
            _component_candidate_candidate_register_candidate_register_component__WEBPACK_IMPORTED_MODULE_33__["CandidateRegisterComponent"],
            _component_HR_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _component_HR_HRservice_alert__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
            _component_candidate_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"],
            _component_candidate_profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"],
            _component_HR_addjob_addjob_component__WEBPACK_IMPORTED_MODULE_10__["AddjobComponent"],
            _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
            _component_candidate_viewjobs_viewjobs_component__WEBPACK_IMPORTED_MODULE_31__["ViewjobsComponent"],
            _component_landingPage_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__["SidenavComponent"],
            _component_landingPage_home_image_home_image_component__WEBPACK_IMPORTED_MODULE_25__["HomeImageComponent"],
            _component_landingPage_card_view_card_view_component__WEBPACK_IMPORTED_MODULE_24__["CardViewComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerInput"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerToggle"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepicker"],
            // MatSelectTrigger,
            _component_landingPage_login_landing_login_landing_component__WEBPACK_IMPORTED_MODULE_27__["LoginLandingComponent"],
            _component_contactus_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__["ContactComponent"],
            _component_candidate_candidate_register_candidate_register_details_candidate_register_details_component__WEBPACK_IMPORTED_MODULE_37__["CandidateRegisterDetailsComponent"],
            _component_contactus_query_list_query_list_component__WEBPACK_IMPORTED_MODULE_38__["QuerylistComponent"],
            _component_contactus_reply_reply_component__WEBPACK_IMPORTED_MODULE_39__["ReplyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__["SlickCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _component_landingPage_card_view_material_material_module__WEBPACK_IMPORTED_MODULE_26__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__["MDBBootstrapModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _component_HR_HRservice_helper__WEBPACK_IMPORTED_MODULE_17__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _component_HR_HRservice_helper__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true },
            // provider used to create fake backend
            _component_HR_HRservice_helper__WEBPACK_IMPORTED_MODULE_17__["fakeBackendProvider"],
            // provider for the selective navigation elements feature
            _component_nav_nav_service__WEBPACK_IMPORTED_MODULE_28__["NavService"],
            _component_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_34__["AuthenticationService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/HR/HRservice/alert/alert.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/HR/HRservice/alert/alert.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _loginservice__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/HRservice/alert/alert.component.html")).default })
], AlertComponent);



/***/ }),

/***/ "./src/app/component/HR/HRservice/alert/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/HR/HRservice/alert/index.ts ***!
  \*******************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/component/HR/HRservice/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });





/***/ }),

/***/ "./src/app/component/HR/HRservice/helper/auth.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/HR/HRservice/helper/auth.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/component/HR/HRservice/helper/error.interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/HR/HRservice/helper/error.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _loginservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/component/HR/HRservice/helper/fake-backend.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/HR/HRservice/helper/fake-backend.ts ***!
  \***************************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function register() {
            const user = body;
            console.log("Entered the db");
            if (users.find(x => x.username === user.username)) {
                console.log("Entered the duplicate name caller function");
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/component/HR/HRservice/helper/index.ts":
/*!********************************************************!*\
  !*** ./src/app/component/HR/HRservice/helper/index.ts ***!
  \********************************************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/component/HR/HRservice/helper/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/component/HR/HRservice/helper/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/component/HR/HRservice/helper/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fake-backend */ "./src/app/component/HR/HRservice/helper/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]; });








/***/ }),

/***/ "./src/app/component/HR/HRservice/helper/jwt.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/HR/HRservice/helper/jwt.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _loginservice__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/component/HR/HRservice/job-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/HR/HRservice/job-service.service.ts ***!
  \***************************************************************/
/*! exports provided: JobServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobServiceService", function() { return JobServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let JobServiceService = class JobServiceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.REST_API_URL = "http://localhost:80/jobs";
    }
    createJob(jobData) {
        // 1. get the data from the component
        console.log(jobData);
        //2.Send the above data t rest API
        //2.1identify the rest api url
        //2.2 send the data using POST method via REST API Client
        let promise = new Promise((resolve, reject) => {
            this.http.post(this.REST_API_URL, jobData)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends");
            });
        });
        return promise;
        //4: Return response from server
    }
    getJobs() {
        return this.http.get(this.REST_API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res; //Send it back to component
        }));
    }
    getJobById(id) {
        console.log("id is " + id);
        return this.http.get(this.REST_API_URL + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    getJobBySkill(skill) {
        console.log("id is " + skill);
        return this.http.get(this.REST_API_URL + "/filterbyskill?skill=" + skill)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    searchJobsByExperience(experience) {
        console.log("id is " + experience);
        return this.http.get(this.REST_API_URL + "/filterbyexperience?experience=" + experience)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    searchJobsBySkillExperience(skill, experience) {
        console.log("id is " + skill);
        console.log("id is " + experience);
        return this.http.get(this.REST_API_URL + "/filterbyskillandexperience?skill=" + skill + "&experience=" + experience)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    scheduleInterview(job) {
        return this.http.put(this.REST_API_URL + "/" + job.jId + "/schedule", job)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    updateJob(jobData) {
        let _url = this.REST_API_URL + "/" + jobData.jId;
        console.log(jobData.jobId);
        let promise = new Promise((resolve, reject) => {
            this.http.put(_url, jobData)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends...");
            });
        });
        return promise;
    }
    deleteJob(jobId) {
        let _url = this.REST_API_URL + "/" + jobId;
        let promise = new Promise((resolve, reject) => {
            this.http.delete(_url)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends...");
            });
        });
        return promise;
    }
    canActivate(route, state) {
        // const currentUser = this.authenticationService.currentUserValue;
        console.log("Inside job component");
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.authorities[0].authority);
        console.log(currentUser.role);
        if (currentUser.authorities[0].authority == "ROLE_HR") {
            // authorised so return true
            return true;
        }
        else {
            alert("You are already logged in as Candidate");
            this.router.navigate(['/login']);
            return false;
        }
    }
};
JobServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
JobServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JobServiceService);



/***/ }),

/***/ "./src/app/component/HR/HRservice/loginservice/alert.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/HR/HRservice/loginservice/alert.service.ts ***!
  \**********************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/component/HR/HRservice/loginservice/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/HR/HRservice/loginservice/index.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticationService, AlertService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/component/HR/HRservice/loginservice/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/component/HR/HRservice/loginservice/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });







/***/ }),

/***/ "./src/app/component/HR/HRservice/loginservice/user.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/HR/HRservice/loginservice/user.service.ts ***!
  \*********************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`/users`);
    }
    register(user) {
        user.role = "HR";
        console.log("Inside the register()");
        return this.http.post("http://localhost:80/register", user);
    }
    delete(id) {
        return this.http.delete(`/users/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/component/HR/addjob/addjob.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/HR/addjob/addjob.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.btn{\r\n    align-self: right;\r\n    float: right;\r\n}\r\ndiv.card{\r\n    transition: box-shadow .3s;\r\n}\r\n.card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\ninput{\r\n    transition: box-shadow .3s;\r\n}\r\ninput:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.example-additional-selection {\r\n    opacity: 0.75;\r\n    font-size: 0.75em;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hSL2FkZGpvYi9hZGRqb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRFQUE0RTtBQUNoRjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvSFIvYWRkam9iL2FkZGpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJ0bntcclxuICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmRpdi5jYXJke1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcbmlucHV0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4uZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/component/HR/addjob/addjob.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/HR/addjob/addjob.component.ts ***!
  \*********************************************************/
/*! exports provided: AddjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddjobComponent", function() { return AddjobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HRservice/job-service.service */ "./src/app/component/HR/HRservice/job-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddjobComponent = class AddjobComponent {
    constructor(rmsService, router) {
        this.rmsService = rmsService;
        this.router = router;
        this.isSaved = false;
        this.skills = ['Java', 'HTML/CSS', 'JavaScript', 'Spring', 'Angular', 'SQL', 'Networking', 'ML', 'C++', 'C'];
        this.jobPostingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            jTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            skillList: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            jDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            jSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            jRequiredExperience: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            jApplicationCloseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            // jOrganisation:new FormControl('',Validators.required),
        });
    }
    onAddJobHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.jobPostingForm.value);
            let res = yield this.rmsService.createJob(this.jobPostingForm.value);
            console.log(res);
            if (res) {
                this.isSaved = true;
                this.router.navigate(['/jobs']);
            }
        });
    }
    ngOnInit() {
    }
};
AddjobComponent.ctorParameters = () => [
    { type: _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_1__["JobServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddjobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-addjob',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addjob.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/addjob/addjob.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addjob.component.css */ "./src/app/component/HR/addjob/addjob.component.css")).default]
    })
], AddjobComponent);



/***/ }),

/***/ "./src/app/component/HR/job/job.component.css":
/*!****************************************************!*\
  !*** ./src/app/component/HR/job/job.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.jumbotron{\r\n    /* width:75%; */\r\n    align-self: center;\r\n    /* margin-left: 3%; */\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\nbutton{\r\n    border-radius: 30px;\r\n}\r\n#addnewJob{\r\n    /* background-color: rgb(96, 79, 255); */\r\n    color: white;\r\n    font-size: 50px;\r\n    /* border: solid 2px rgb(41, 21, 212); */\r\n}\r\n#submit_button{\r\n  margin-top: 32px;\r\n}\r\n#jobList{\r\n    height: 150px;\r\n}\r\ndiv.container{\r\n    /* position: relative; */\r\n    min-height: 100%;\r\n    margin-bottom:100px;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\nmdbPopover{\r\n    width: 400px;\r\n}\r\n.card {\r\n    display: flex;\r\n    height: 280px;\r\n    width: 300px;\r\n    background-color: #e9e9e9;\r\n    border-radius: 10px;\r\n    /* box-shadow: -1rem 0 1rem #000; */\r\n  /*   margin-left: -50px; */\r\n    transition: 0.4s ease-out;\r\n    position: relative;\r\n    left: 0px;\r\n  }\r\n.card:not(:first-child) {\r\n      margin-left: -50px;\r\n  }\r\n.card:hover {\r\n    transform: translateY(-20px);\r\n    transition: 0.4s ease-out;\r\n  }\r\n.card:hover ~ .card {\r\n    position: relative;\r\n    left: 50px;\r\n    transition: 0.4s ease-out;\r\n  }\r\n.details {\r\n    position: absolute;\r\n    top: 120px;\r\n    left: calc(30% - 70px);\r\n    color: black;\r\n    font-size: 20px;\r\n  }\r\n.circle {\r\n    position: absolute;\r\n    top: 220px;\r\n    left: calc(40% - 60px);\r\n  }\r\n.circlenew {\r\n    position: absolute;\r\n    top: 200px;\r\n    left: calc(50% - 60px);\r\n  }\r\n.title {\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 300;\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 15px;\r\n  }\r\n.bar {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 20px;\r\n    height: 5px;\r\n    width: 150px;\r\n  }\r\n.emptybar {\r\n    background-color: #c3c3c3;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.filledbar {\r\n    position: absolute;\r\n    top: 0px;\r\n    z-index: 3;\r\n    width: 0px;\r\n    height: 100%;\r\n    background: rgb(0,154,217);\r\n    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);\r\n    transition: 0.6s ease-out;\r\n  }\r\n.card:hover .filledbar {\r\n    width: 120px;\r\n    transition: 0.4s ease-out;\r\n  }\r\n.stroke {\r\n    stroke: white;\r\n    stroke-dasharray: 360;\r\n    stroke-dashoffset: 360;\r\n    transition: 0.6s ease-out;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hSL2pvYi9qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckMsMEJBQTBCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7QUFFQTtJQUNFLDRCQUE0QjtJQUM1Qix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztFQUNYO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsdUdBQXVHO0lBQ3ZHLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L0hSL2pvYi9qb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5qdW1ib3Ryb257XHJcbiAgICAvKiB3aWR0aDo3NSU7ICovXHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMyU7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuI2FkZG5ld0pvYntcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNzksIDI1NSk7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDEsIDIxLCAyMTIpOyAqL1xyXG59XHJcbiNzdWJtaXRfYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbiNqb2JMaXN0e1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5kaXYuY29udGFpbmVye1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxubWRiUG9wb3ZlcntcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBib3gtc2hhZG93OiAtMXJlbSAwIDFyZW0gIzAwMDsgKi9cclxuICAvKiAgIG1hcmdpbi1sZWZ0OiAtNTBweDsgKi9cclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQ6aG92ZXIgfiAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDMwJSAtIDcwcHgpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIyMHB4O1xyXG4gICAgbGVmdDogY2FsYyg0MCUgLSA2MHB4KTtcclxuICB9XHJcblxyXG4gIC5jaXJjbGVuZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgLmVtcHR5YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGxlZGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMTU0LDIxNyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxNTQsMjE3LDEpIDAlLCByZ2JhKDIxNywxNDcsMCwxKSA2NSUsIHJnYmEoMjU1LDE4NiwwLDEpIDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQ6aG92ZXIgLmZpbGxlZGJhciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuc3Ryb2tlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzNjA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzYwO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/component/HR/job/job.component.ts":
/*!***************************************************!*\
  !*** ./src/app/component/HR/job/job.component.ts ***!
  \***************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HRservice/job-service.service */ "./src/app/component/HR/HRservice/job-service.service.ts");
/* harmony import */ var _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HRservice/loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let JobComponent = class JobComponent {
    constructor(jobService, authenticationService, userService, nav, router, route) {
        this.jobService = jobService;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.nav = nav;
        this.router = router;
        this.route = route;
        const _jobId = this.route.snapshot.params.id;
        this.search = false;
        this.count = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            skill: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.myExperienceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.myExperienceSkillControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            skill: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
        this.scheduleTest = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.nav.show();
        console.log("inside ngOnInit");
        this.isLoggedIn$ = this.authenticationService.loggedIn;
        console.log(this.isLoggedIn$);
        // Calls all the jobs in the db
        this.jobSubscription = this.jobService.getJobs()
            .subscribe((res) => {
            console.log(res);
            this.jobList = res;
        });
        const _jobId = this.route.snapshot.params.id;
        console.log(_jobId);
    }
    onAdvancedButtonClick() {
        this.count = this.count + 1;
        if (this.count % 2 != 0) {
            this.search = true;
        }
        else {
            this.search = false;
            this.jobSubscription = this.jobService.getJobs()
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
    }
    onEditHandler(id) {
        this.jobSubscription = this.jobService.getJobById(id)
            .subscribe((res) => {
            console.log(res);
            this.duplicateJobData = res;
            console.log(this.duplicateJobData.jAppliedCandidateList);
            if (this.duplicateJobData.jAppliedCandidateList == "") {
                this.isEmpty = true;
            }
            else {
                this.isEmpty = false;
            }
        });
    }
    onInteviewScheduler(jId) {
        this.jobSubscription = this.jobService.getJobById(jId)
            .subscribe((res) => {
            console.log(res);
            this.scheduledJob = res;
            let temp = JSON.parse(JSON.stringify(res));
            temp.jInterviewDate = this.scheduleTest.value.date;
            console.log(temp);
            this.jobSubscription = this.jobService.scheduleInterview(temp)
                .subscribe((res) => {
                console.log(res);
                this.scheduledJob = res;
            });
        });
    }
    ongetAppliedCandidatesList(id) {
        this.jobSubscription = this.jobService.getJobById(id)
            .subscribe((res) => {
            console.log(res);
            this.duplicateJobData = res;
            console.log(this.duplicateJobData.jAppliedCandidateList);
            if (this.duplicateJobData.jAppliedCandidateList == "") {
                console.log("inside if");
                this.isEmpty = true;
            }
            else {
                console.log("inside else");
                this.isEmpty = false;
            }
        });
    }
    onSearchHandler(searchForm) {
        console.log(searchForm.value.skill.toLowerCase());
        this.skill = searchForm.value.skill;
        if (this.skill == "") {
            this.jobSubscription = this.jobService.getJobs()
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
        else {
            this.jobSubscription = this.jobService.getJobBySkill(this.skill)
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
    }
    onSkillExperienceSearchHandler(searchForm) {
        console.log(searchForm.value.experience);
        console.log(searchForm.value.skill);
        this.experience = searchForm.value.experience;
        this.skill = searchForm.value.skill;
        if (this.experience == "" && this.skill == "") {
            this.jobSubscription = this.jobService.getJobs()
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
        else {
            if (this.experience == "") {
                this.jobSubscription = this.jobService.getJobBySkill(this.skill)
                    .subscribe((res) => {
                    console.log(res);
                    this.jobList = res;
                });
            }
            else {
                if (this.experience == "") {
                    this.jobSubscription = this.jobService.searchJobsByExperience(this.experience)
                        .subscribe((res) => {
                        console.log(res);
                        this.jobList = res;
                    });
                }
                else {
                    this.jobSubscription = this.jobService.searchJobsBySkillExperience(this.skill, this.experience)
                        .subscribe((res) => {
                        console.log(res);
                        this.jobList = res;
                    });
                }
            }
        }
    }
    onExperienceSearchHandler(searchForm) {
        console.log(searchForm.value.experience);
        this.experience = searchForm.value.experience;
        if (this.experience == "") {
            this.jobSubscription = this.jobService.getJobs()
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
        else {
            this.jobSubscription = this.jobService.searchJobsByExperience(this.experience)
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        }
    }
    onUpdateHandler(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(formData);
            console.log(formData.value);
            var obj = formData.value;
            obj.jId = this.jobId;
            //use promise based submission
            let res = yield this.jobService.updateJob(this.duplicateJobData);
            const _jobId = this.route.snapshot.params.id;
            console.log("The id is:" + _jobId);
            if (res) {
                this.isSaved = true;
                console.log(res);
                this.jobSubscription = this.jobService.getJobs()
                    .subscribe((res) => {
                    console.log(res);
                    this.jobList = res;
                });
            }
        });
    }
    onDeleteHandler(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(id);
            let res = yield this.jobService.deleteJob(id);
            if (res) {
                this.isDeleted = true;
                this.jobSubscription = this.jobService.getJobs()
                    .subscribe((res) => {
                    console.log(res);
                    this.jobList = res;
                });
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
        this.isLoggedIn$ = this.authenticationService.loggedIn;
        console.log(this.isLoggedIn$);
    }
};
JobComponent.ctorParameters = () => [
    { type: _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_2__["JobServiceService"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/job/job.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job.component.css */ "./src/app/component/HR/job/job.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        exportAs: '{{job.jobId}}'
    })
], JobComponent);



/***/ }),

/***/ "./src/app/component/HR/jobdetail/jobdetail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/HR/jobdetail/jobdetail.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.container{\r\n    position: relative;\r\n    min-height: 100%;\r\n    margin-bottom:100px;\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hSL2pvYmRldGFpbC9qb2JkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9IUi9qb2JkZXRhaWwvam9iZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/HR/jobdetail/jobdetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/HR/jobdetail/jobdetail.component.ts ***!
  \***************************************************************/
/*! exports provided: JobdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailComponent", function() { return JobdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HRservice/job-service.service */ "./src/app/component/HR/HRservice/job-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let JobdetailComponent = class JobdetailComponent {
    constructor(jobService, route, router) {
        this.jobService = jobService;
        this.route = route;
        this.router = router;
        this.isSaved = false;
        this.isDeleted = false;
    }
    ngOnInit() {
        const _jobId = this.route.snapshot.params.id;
        this.jobSubscription = this.jobService.getJobById(_jobId)
            .subscribe((res) => {
            console.log(res);
            this.jobData = res;
        });
    }
    onEditHandler() {
        //duplicating object
        this.duplicateJobData = JSON.parse(JSON.stringify(this.jobData));
        console.log(this.duplicateJobData);
    }
    onUpdateHandler(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(formData);
            console.log(formData.value);
            var obj = formData.value;
            obj.id = this.jobId;
            //use promise based submission
            let res = yield this.jobService.updateJob(this.duplicateJobData);
            const _jobId = this.route.snapshot.params.id;
            console.log("The id is:" + _jobId);
            if (res) {
                this.isSaved = true;
                console.log(res);
                this.router.navigate(['/jobs']);
            }
        });
    }
    onDeleteHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const _jobId = this.route.snapshot.params.id;
            console.log(_jobId);
            let res = yield this.jobService.deleteJob(_jobId);
            if (res) {
                this.isDeleted = true;
                this.router.navigate(['/jobs']);
            }
        });
    }
    ngOnDestroy() {
        console.log("Inside JobById destroy");
        this.jobSubscription.unsubscribe();
    }
};
JobdetailComponent.ctorParameters = () => [
    { type: _HRservice_job_service_service__WEBPACK_IMPORTED_MODULE_2__["JobServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
JobdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/jobdetail/jobdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobdetail.component.css */ "./src/app/component/HR/jobdetail/jobdetail.component.css")).default]
    })
], JobdetailComponent);



/***/ }),

/***/ "./src/app/component/HR/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/component/HR/login/login.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.wrapper{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\ndiv.alert{\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  padding: 15px 32px;\r\n}\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    /* text-transform: uppercase; */\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    transform: scale(0.95);\r\n  }\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\ninput[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\ninput[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\ninput[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n/* ANIMATIONS */\r\n/* Simple CSS3 Fade-in-down Animation */\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n/* Simple CSS3 Fade-in Animation */\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n/* Simple CSS3 Fade-in Animation */\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n/* OTHERS */\r\n*:focus {\r\n      outline: none;\r\n  }\r\n#icon {\r\n    width:60%;\r\n  }\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hSL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0FBRUY7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZiw4Q0FBOEM7SUFFOUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUsxQixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBS0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQztBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBLGVBQWU7QUFFakIsdUNBQXVDO0FBQ3ZDO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUVWLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUVWLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGO0FBRUEsa0NBQWtDO0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSwyQkFBMkI7SUFFM0IsbUJBQW1CO0VBQ3JCO0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBSUEsV0FBVztBQUVYO01BQ0ksYUFBYTtFQUNqQjtBQUVBO0lBQ0UsU0FBUztFQUNYO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvSFIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi53cmFwcGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcbmRpdi5hbGVydHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcblxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9ybUNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuICAvKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIFxyXG4gIC5mYWRlSW4ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uc2Vjb25kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4udGhpcmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5mb3VydGgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE9USEVSUyAqL1xyXG4gIFxyXG4gICo6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAgI2ljb24ge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/component/HR/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/HR/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HRservice/loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService, nav) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.nav = nav;
        this.loading = false;
        this.submitted = false;
        this.isFailed = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/jobs']);
        }
    }
    ngOnInit() {
        this.nav.hide();
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobs';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onLogin() {
        this.submitted = true;
        console.log("Inside onLogin UI");
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.Hrlogin(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            let userObj = JSON.parse(JSON.stringify(data));
            console.log(userObj);
            this.isFailed = false;
            if (userObj.authorities[0].authority === "ROLE_HR") {
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.alertService.error("Login Failed");
                this.loading = false;
            }
        }, error => {
            console.log("Inside error");
            this.loading = false;
            this.isFailed = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/component/HR/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/component/HR/register/index.ts":
/*!************************************************!*\
  !*** ./src/app/component/HR/register/index.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/component/HR/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]; });





/***/ }),

/***/ "./src/app/component/HR/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/HR/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HRservice/loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");






let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/jobs']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        console.log("Called the Submit");
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("invalid");
            return;
        }
        console.log(this.registerForm.value);
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            console.log("entered the subscribe");
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/hrlogin']);
        }, error => {
            this.alertService.error('Registration Failed', error);
            this.loading = false;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _HRservice_loginservice__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/HR/register/register.component.html")).default })
], RegisterComponent);



/***/ }),

/***/ "./src/app/component/about/about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/about/about.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: 'Comfortaa', cursive;\r\n}\r\n.font-italic.text-muted{\r\n  font-size: 0.8em;\r\n}\r\n.bg-white.rounded.shadow-sm.py-5.px-4:hover .inside{\r\n  transform: rotate(360deg);\r\n}\r\n.inside {\r\n  height: 100px;\r\n  width: 100px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  box-sizing: border-box;\r\n  border-color: #353535  #FEC007 #FEC007 #353535;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  transition: transform .5s;\r\n  align-items: center;\r\n  top: 48px;\r\n  left: 92px;\r\n }\r\n.social-link {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid #ddd;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #666;\r\n    border-radius: 50%;\r\n    transition: all 0.3s;\r\n    font-size: 0.9rem;\r\n  }\r\n.social-link:hover,\r\n  .social-link:focus {\r\n    background: #ddd;\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuLmZvbnQtaXRhbGljLnRleHQtbXV0ZWR7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmJnLXdoaXRlLnJvdW5kZWQuc2hhZG93LXNtLnB5LTUucHgtNDpob3ZlciAuaW5zaWRle1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn1cclxuLmluc2lkZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1jb2xvcjogIzM1MzUzNSAgI0ZFQzAwNyAjRkVDMDA3ICMzNTM1MzU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiA0OHB4O1xyXG4gIGxlZnQ6IDkycHg7XHJcbiB9XHJcbi5zb2NpYWwtbGluayB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbms6aG92ZXIsXHJcbiAgLnNvY2lhbC1saW5rOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/component/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/component/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/component/authentication/authentication.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/authentication/authentication.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    Candidatelogin(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        let credentials = btoa(username + ':' + password);
        return this.http.post(`http://localhost:80/authenticate`, { username, password }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                let userObj = JSON.parse(JSON.stringify(user));
                console.log(userObj);
                if (userObj.authorities[0].authority === "ROLE_CANDIDATE") {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    let temp = JSON.parse(localStorage.getItem('currentUser'));
                    console.log("Making localstorage...");
                    this.currentUserSubject.next(user);
                    this.loggedIn.next(true);
                }
            }
            return user;
        }));
    }
    Hrlogin(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.post(`http://localhost:80/authenticate`, { username, password }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                let userObj = JSON.parse(JSON.stringify(user));
                console.log(userObj);
                if (userObj.authorities[0].authority === "ROLE_HR") {
                    console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log("Making localstorage...");
                    this.currentUserSubject.next(user);
                    this.loggedIn.next(true);
                }
                else {
                }
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn.next(false);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/component/candidate/CandidateService/candidate.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/candidate/CandidateService/candidate.service.ts ***!
  \***************************************************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginservice */ "./src/app/component/candidate/CandidateService/loginservice/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CandidateService = class CandidateService {
    constructor(http, authenticationService, router) {
        //   this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        //     this.currentUser = user;
        // });  
        this.http = http;
        this.authenticationService = authenticationService;
        this.router = router;
        this.REST_API_URL_DETAILS = "http://localhost:80/candidates/detail";
        this.REST_API_URL = "http://localhost:80/candidates";
    }
    createCandidate(candidateData) {
        // 1. get the data from the component
        console.log(candidateData);
        //2.Send the above data t rest API
        //2.1identify the rest api url
        //2.2 send the data using POST method via REST API Client
        let promise = new Promise((resolve, reject) => {
            this.http.post(this.REST_API_URL, candidateData)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends");
            });
        });
        return promise;
        //4: Return response from server
    }
    getAllJobsCandidate() {
        return this.http.get(this.REST_API_URL + "/applynewjob")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res; //Send it back to component
        }));
    }
    getJobsAppliedByCandidate(id) {
        console.log("id is " + id);
        return this.http.get(this.REST_API_URL + "/" + id + "/appliedjobs")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    getJobsBySkillCandidate(id) {
        console.log("id is " + id);
        return this.http.get(this.REST_API_URL + "/" + id + "/applynewjobbypreference")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    getCandidate(username) {
        console.log("inside getcandidate");
        console.log(username);
        let name = username;
        let promise = new Promise((resolve, reject) => {
            let temp = this.http.post(this.REST_API_URL_DETAILS, name)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends");
            });
        });
        return promise;
    }
    applyForJobCandidate(id, jid) {
        console.log("id is " + id);
        console.log("jid is " + jid);
        return this.http.get(this.REST_API_URL + "/" + id + "/applyjob?jid=" + jid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    canActivate(route, state) {
        // const currentUser = this.authenticationService.currentUserValue;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.authorities[0].authority);
        console.log(currentUser.role);
        if (currentUser.authorities[0].authority == "ROLE_CANDIDATE") {
            // authorised so return true
            return true;
        }
        else {
            alert("You are already logged in as HR");
            this.router.navigate(['/login']);
            return false;
        }
    }
};
CandidateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _loginservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CandidateService);



/***/ }),

/***/ "./src/app/component/candidate/CandidateService/loginservice/alert.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/candidate/CandidateService/loginservice/alert.service.ts ***!
  \************************************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/component/candidate/CandidateService/loginservice/index.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/candidate/CandidateService/loginservice/index.ts ***!
  \****************************************************************************/
/*! exports provided: AuthenticationService, AlertService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/component/candidate/CandidateService/loginservice/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/component/candidate/CandidateService/loginservice/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });







/***/ }),

/***/ "./src/app/component/candidate/CandidateService/loginservice/user.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/component/candidate/CandidateService/loginservice/user.service.ts ***!
  \***********************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`/users`);
    }
    register(user) {
        console.log("Inside the register()");
        console.log(user);
        user.role = "CANDIDATE";
        return this.http.post("http://localhost:80/register", user);
    }
    delete(id) {
        return this.http.delete(`/users/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/component/candidate/candidate-login/candidate-login.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-login/candidate-login.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.wrapper{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\ndiv.alert{\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  padding: 15px 32px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    /* text-transform: uppercase; */\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\ninput[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon {\r\n    width:60%;\r\n  }\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9jYW5kaWRhdGUtbG9naW4vY2FuZGlkYXRlLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFLMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQSxlQUFlOztBQUVqQix1Q0FBdUM7O0FBQ3ZDO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsMkJBQTJCO0lBRTNCLG1CQUFtQjtFQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBSUEsV0FBVzs7QUFFWDtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2FuZGlkYXRlL2NhbmRpZGF0ZS1sb2dpbi9jYW5kaWRhdGUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi53cmFwcGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5kaXYuYWxlcnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4uZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5maXJzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnNlY29uZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnRoaXJkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZm91cnRoIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBPVEhFUlMgKi9cclxuICBcclxuICAqOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9IFxyXG4gIFxyXG4gICNpY29uIHtcclxuICAgIHdpZHRoOjYwJTtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/component/candidate/candidate-login/candidate-login.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-login/candidate-login.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CandidateLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLoginComponent", function() { return CandidateLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony import */ var _CandidateService_loginservice_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CandidateService/loginservice/alert.service */ "./src/app/component/candidate/CandidateService/loginservice/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CandidateService/candidate.service */ "./src/app/component/candidate/CandidateService/candidate.service.ts");









let CandidateLoginComponent = class CandidateLoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService, nav, candidateService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.nav = nav;
        this.candidateService = candidateService;
        this.loading = false;
        this.submitted = false;
        this.isFailed = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/landing']);
        }
    }
    ngOnInit() {
        this.nav.hide();
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/landing';
        console.log(this.route.snapshot.queryParams['returnUrl']);
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onLogin() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.Candidatelogin(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userObj = JSON.parse(JSON.stringify(data));
            console.log(userObj);
            if (userObj.authorities[0].authority == "ROLE_CANDIDATE") {
                console.log(data);
                console.log("Inside candidate login data");
                // this.router.navigate([this.returnUrl]);
                // console.log(userObj.principal.username);
                let res = yield this.candidateService.getCandidate(userObj.principal.username);
                this.candidate = res;
                console.log(this.candidate);
                if (this.candidate == null)
                    this.router.navigate(['/registerdetails']);
                else
                    this.router.navigate(['/landing']);
            }
            else
                this.alertService.error("Login Failed");
            this.loading = false;
        }), error => {
            console.log("error");
            this.loading = false;
            this.isFailed = true;
        });
    }
};
CandidateLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _CandidateService_loginservice_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] },
    { type: _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_8__["CandidateService"] }
];
CandidateLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candidate-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidate-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-login/candidate-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candidate-login.component.css */ "./src/app/component/candidate/candidate-login/candidate-login.component.css")).default]
    })
], CandidateLoginComponent);



/***/ }),

/***/ "./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.wrapper{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\nbutton{\r\n    border-radius: 30px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    /* width: 85%; */\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\ninput[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    /* width: 85%; */\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\ninput[type=email] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    /* width: 85%; */\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=email]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=email]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon {\r\n    width:60%;\r\n  }\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9jYW5kaWRhdGUtcmVnaXN0ZXIvY2FuZGlkYXRlLXJlZ2lzdGVyLWRldGFpbHMvY2FuZGlkYXRlLXJlZ2lzdGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZiw4Q0FBOEM7SUFFOUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUsxQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFLRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUEsZUFBZTs7QUFFakIsdUNBQXVDOztBQUN2QztJQUNJLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7SUFDRSxTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUlBLFdBQVc7O0FBRVg7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9jYW5kaWRhdGUtcmVnaXN0ZXIvY2FuZGlkYXRlLXJlZ2lzdGVyLWRldGFpbHMvY2FuZGlkYXRlLXJlZ2lzdGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi53cmFwcGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgaDIuaW5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtQ29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAvKiB3aWR0aDogODUlOyAqL1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgLyogd2lkdGg6IDg1JTsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgLyogd2lkdGg6IDg1JTsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWVtYWlsXTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcblxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CandidateRegisterDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegisterDetailsComponent", function() { return CandidateRegisterDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CandidateService/candidate.service */ "./src/app/component/candidate/CandidateService/candidate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CandidateRegisterDetailsComponent = class CandidateRegisterDetailsComponent {
    constructor(candidateService, router) {
        this.candidateService = candidateService;
        this.router = router;
        this.skills = ['Java', 'HTML/CSS', 'JavaScript', 'Spring', 'Angular', 'SQL', 'Networking', 'ML', 'C++', 'C'];
        this.candidateDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            skillList: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cExperience: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onAddCandidateDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.candidateDetailsForm.value);
            let res = yield this.candidateService.createCandidate(this.candidateDetailsForm.value);
            console.log(res);
            if (res) {
                this.isSaved = true;
                this.router.navigate(['/landing']);
            }
        });
    }
    ngOnInit() {
    }
};
CandidateRegisterDetailsComponent.ctorParameters = () => [
    { type: _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CandidateRegisterDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candidate-register-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidate-register-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candidate-register-details.component.css */ "./src/app/component/candidate/candidate-register/candidate-register-details/candidate-register-details.component.css")).default]
    })
], CandidateRegisterDetailsComponent);



/***/ }),

/***/ "./src/app/component/candidate/candidate-register/candidate-register.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-register/candidate-register.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.wrapper{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    /* text-transform: uppercase; */\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    transform: scale(0.95);\r\n  }\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\ninput[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\ninput[type=password]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\ninput[type=password]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n/* ANIMATIONS */\r\n/* Simple CSS3 Fade-in-down Animation */\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n/* Simple CSS3 Fade-in Animation */\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n/* Simple CSS3 Fade-in Animation */\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n/* OTHERS */\r\n*:focus {\r\n      outline: none;\r\n  }\r\n#icon {\r\n    width:60%;\r\n  }\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9jYW5kaWRhdGUtcmVnaXN0ZXIvY2FuZGlkYXRlLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFLRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQztBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsZUFBZTtBQUVqQix1Q0FBdUM7QUFDdkM7SUFDSSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7QUFFQSxrQ0FBa0M7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBRTFEO0lBQ0UsU0FBUztJQUNULGtDQUFrQztJQUVsQywwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUVwQyw0QkFBNEI7O0lBRTVCLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDRSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFJQSxXQUFXO0FBRVg7TUFDSSxhQUFhO0VBQ2pCO0FBRUE7SUFDRSxTQUFTO0VBQ1g7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW5kaWRhdGUvY2FuZGlkYXRlLXJlZ2lzdGVyL2NhbmRpZGF0ZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LndyYXBwZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4uZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5maXJzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnNlY29uZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnRoaXJkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZm91cnRoIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBPVEhFUlMgKi9cclxuICBcclxuICAqOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9IFxyXG4gIFxyXG4gICNpY29uIHtcclxuICAgIHdpZHRoOjYwJTtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/component/candidate/candidate-register/candidate-register.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/candidate/candidate-register/candidate-register.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CandidateRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegisterComponent", function() { return CandidateRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _CandidateService_loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CandidateService/loginservice */ "./src/app/component/candidate/CandidateService/loginservice/index.ts");
/* harmony import */ var _HR_HRservice_loginservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../HR/HRservice/loginservice */ "./src/app/component/HR/HRservice/loginservice/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let CandidateRegisterComponent = class CandidateRegisterComponent {
    constructor(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/jobs']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        console.log("Called the Submit");
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("invalid");
            return;
        }
        console.log(this.registerForm.value);
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            console.log("entered the subscribe");
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/candidatelogin']);
        }, error => {
            this.alertService.error('Registration Failed', error);
            this.loading = false;
        });
    }
};
CandidateRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _CandidateService_loginservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _CandidateService_loginservice__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _HR_HRservice_loginservice__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
CandidateRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candidate-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidate-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/candidate-register/candidate-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candidate-register.component.css */ "./src/app/component/candidate/candidate-register/candidate-register.component.css")).default]
    })
], CandidateRegisterComponent);



/***/ }),

/***/ "./src/app/component/candidate/landing/landing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/candidate/landing/landing.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.jumbotron{\r\n    /* width:75%; */\r\n    align-self: center;\r\n    /* margin-left: 3%; */\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\nbutton{\r\n    border-radius: 30px;\r\n}\r\n#addnewJob{\r\n    /* background-color: rgb(96, 79, 255); */\r\n    color: white;\r\n    font-size: 50px;\r\n    /* border: solid 2px rgb(41, 21, 212); */\r\n}\r\n#jobList{\r\n    height: 150px;\r\n}\r\ndiv.container{\r\n    /* position: relative; */\r\n    min-height: 100%;\r\n    margin-bottom:100px;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\nmdbPopover{\r\n    width: 400px;\r\n}\r\n.card {\r\n    display: flex;\r\n    height: 280px;\r\n    width: 300px;\r\n    background-color: #e9e9e9;\r\n    border-radius: 10px;\r\n    /* box-shadow: -1rem 0 1rem #000; */\r\n  /*   margin-left: -50px; */\r\n    transition: 0.4s ease-out;\r\n    position: relative;\r\n    left: 0px;\r\n  }\r\n.card:not(:first-child) {\r\n      margin-left: -50px;\r\n  }\r\n.card:hover {\r\n    transform: translateY(-20px);\r\n    transition: 0.4s ease-out;\r\n  }\r\n.card:hover ~ .card {\r\n    position: relative;\r\n    left: 50px;\r\n    transition: 0.4s ease-out;\r\n  }\r\n.details {\r\n    position: absolute;\r\n    top: 120px;\r\n    left: calc(30% - 70px);\r\n    color: black;\r\n    font-size: 20px;\r\n  }\r\n.circle {\r\n    position: absolute;\r\n    top: 220px;\r\n    left: calc(40% - 60px);\r\n  }\r\n.circlenew {\r\n    position: absolute;\r\n    top: 200px;\r\n    left: calc(50% - 60px);\r\n  }\r\n.title {\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 300;\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 15px;\r\n  }\r\n.bar {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 20px;\r\n    height: 5px;\r\n    width: 150px;\r\n  }\r\n.emptybar {\r\n    background-color: #c3c3c3;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.filledbar {\r\n    position: absolute;\r\n    top: 0px;\r\n    z-index: 3;\r\n    width: 0px;\r\n    height: 100%;\r\n    background: rgb(0,154,217);\r\n    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);\r\n    transition: 0.6s ease-out;\r\n  }\r\n.card:hover .filledbar {\r\n    width: 120px;\r\n    transition: 0.4s ease-out;\r\n  }\r\n.stroke {\r\n    stroke: white;\r\n    stroke-dasharray: 360;\r\n    stroke-dashoffset: 360;\r\n    transition: 0.6s ease-out;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUNBQW1DO0VBQ3JDLDBCQUEwQjtJQUN4Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCO0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHVHQUF1RztJQUN2Ryx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW5kaWRhdGUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuanVtYm90cm9ue1xyXG4gICAgLyogd2lkdGg6NzUlOyAqL1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMlOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbiNhZGRuZXdKb2J7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDc5LCAyNTUpOyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCAycHggcmdiKDQxLCAyMSwgMjEyKTsgKi9cclxufVxyXG5cclxuI2pvYkxpc3R7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxufVxyXG5tZGJQb3BvdmVye1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IC0xcmVtIDAgMXJlbSAjMDAwOyAqL1xyXG4gIC8qICAgbWFyZ2luLWxlZnQ6IC01MHB4OyAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB+IC5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIGxlZnQ6IGNhbGMoMzAlIC0gNzBweCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjIwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDQwJSAtIDYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZW5ldyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA2MHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuZW1wdHliYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZmlsbGVkYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwxNTQsMjE3KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDE1NCwyMTcsMSkgMCUsIHJnYmEoMjE3LDE0NywwLDEpIDY1JSwgcmdiYSgyNTUsMTg2LDAsMSkgMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciAuZmlsbGVkYmFyIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5zdHJva2Uge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDM2MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzNjA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/component/candidate/landing/landing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/candidate/landing/landing.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CandidateService/candidate.service */ "./src/app/component/candidate/CandidateService/candidate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







// import { Candidate } from '../CandidateService/models/candidate';
let LandingComponent = class LandingComponent {
    constructor(authenticationService, nav, router, route, candidateService, http) {
        this.authenticationService = authenticationService;
        this.nav = nav;
        this.router = router;
        this.route = route;
        this.candidateService = candidateService;
        this.http = http;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
            console.log(this.currentUser);
        });
    }
    ngOnInit() {
        this.nav.show();
        // this.dataList=localStorage.getItem(currentUser);
        // console.log(this.dataList);
    }
    onViewAllJob() {
        this.candidateSubscription = this.candidateService.getAllJobsCandidate()
            .subscribe((res) => {
            console.log(res);
            this.jobList = res;
        });
    }
    onViewJobHandler(jId) {
        this.jobList.forEach(job => {
            if (job.jId == jId) {
                this.cJob = job;
            }
        });
    }
    onApplyHandler(jId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("inside applyhandler");
            let name = this.currentUser.principal.username;
            console.log(name);
            let res = yield this.candidateService.getCandidate(name);
            this.candidate = res;
            console.log(this.candidate);
            // this.getCandidate();
            this.candidateSubscription = this.candidateService.applyForJobCandidate(this.candidate.cId, jId)
                .subscribe((res) => {
                console.log(res);
                // if(res){
                //   this.appliedJobList=res;
                // }
            });
        });
    }
    showJobByPreference(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let res = yield this.candidateService.getCandidate(name);
            this.candidate = res;
            this.jobList = null;
            this.candidateSubscription = this.candidateService.getJobsBySkillCandidate(this.candidate.cId)
                .subscribe((res) => {
                console.log(res);
                this.jobList = res;
            });
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
};
LandingComponent.ctorParameters = () => [
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _CandidateService_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/component/candidate/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/component/candidate/profile/profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/candidate/profile/profile.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.btn{\r\n    align-self: right;\r\n    float: right;\r\n}\r\ndiv.card{\r\n    transition: box-shadow .3s;\r\n}\r\n.card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\ninput{\r\n    transition: box-shadow .3s;\r\n}\r\ninput:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhbmRpZGF0ZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRFQUE0RTtBQUNoRjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2FuZGlkYXRlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJ0bntcclxuICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmRpdi5jYXJke1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcbmlucHV0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/candidate/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/candidate/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.profile = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            town: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.profile.controls; }
    onSave() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.profile.invalid) {
            return;
        }
        this.loading = true;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/component/candidate/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/component/candidate/viewjobs/viewjobs.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/candidate/viewjobs/viewjobs.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW5kaWRhdGUvdmlld2pvYnMvdmlld2pvYnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/candidate/viewjobs/viewjobs.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/candidate/viewjobs/viewjobs.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewjobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewjobsComponent", function() { return ViewjobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewjobsComponent = class ViewjobsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewjobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewjobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewjobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/candidate/viewjobs/viewjobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewjobs.component.css */ "./src/app/component/candidate/viewjobs/viewjobs.component.css")).default]
    })
], ViewjobsComponent);



/***/ }),

/***/ "./src/app/component/contactus/contact-reply.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/contactus/contact-reply.service.ts ***!
  \**************************************************************/
/*! exports provided: contactReplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactReplyService", function() { return contactReplyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let contactReplyService = class contactReplyService {
    constructor(http) {
        this.http = http;
        this.REST_API_URL = "http://localhost:80/contactReply";
    }
    contactReplyCreate(replyForm) {
        // 1. get the data from the component
        console.log(replyForm);
        //2.Send the above data t rest API
        //2.1identify the rest api url
        //2.2 send the data using POST method via REST API Client
        let promise = new Promise((resolve, reject) => {
            this.http.post(this.REST_API_URL, replyForm)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends");
            });
        });
        return promise;
        //4: Return response from server
    }
    getContacts() {
        return this.http.get(this.REST_API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            //console.log(res);
            return res; //Send it back to component
        }));
    }
};
contactReplyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
contactReplyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], contactReplyService);



/***/ }),

/***/ "./src/app/component/contactus/contact-service.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/contactus/contact-service.service.ts ***!
  \****************************************************************/
/*! exports provided: contactServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactServiceService", function() { return contactServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let contactServiceService = class contactServiceService {
    constructor(http) {
        this.http = http;
        this.REST_API_URL = "http://localhost:80/contacts";
    }
    createContact(contactData) {
        // 1. get the data from the component
        console.log(contactData);
        //2.Send the above data t rest API
        //2.1identify the rest api url
        //2.2 send the data using POST method via REST API Client
        let promise = new Promise((resolve, reject) => {
            this.http.post(this.REST_API_URL, contactData)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends");
            });
        });
        return promise;
        //4: Return response from server
    }
    getContacts() {
        return this.http.get(this.REST_API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            //console.log(res);
            return res; //Send it back to component
        }));
    }
    deleteContact(id) {
        console.log(id);
        let _url = this.REST_API_URL + "/" + id;
        let promise = new Promise((resolve, reject) => {
            this.http.delete(_url)
                .toPromise()
                .then((res) => {
                console.log(res);
                resolve(res);
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            })
                .finally(() => {
                console.log("Ends...");
            });
        });
        return promise;
    }
};
contactServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
contactServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], contactServiceService);



/***/ }),

/***/ "./src/app/component/contactus/contact/contact.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/contactus/contact/contact.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-container-section {\r\n    overflow:hidden;\r\n    margin-top:10px;\r\n    padding-bottom:56.25%;\r\n    position:relative;\r\n    height:0;\r\n    width:700px;\r\n  }\r\n  .map-container-section iframe {\r\n    left:0px;\r\n    top:0;\r\n\r\n    height:800px;\r\n    width:800px;\r\n    position:absolute;\r\n  }\r\n  h2{\r\n    font-size: 40px;\r\n    text-align: justify;\r\n    color:black;\r\n}\r\n  div.container{\r\n  font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbnRhY3R1cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsS0FBSzs7SUFFTCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7RUFDQTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb250YWN0dXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lci1zZWN0aW9uIHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjU2LjI1JTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjA7XHJcbiAgICB3aWR0aDo3MDBweDtcclxuICB9XHJcbiAgLm1hcC1jb250YWluZXItc2VjdGlvbiBpZnJhbWUge1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MDtcclxuXHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICB3aWR0aDo4MDBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIH1cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuZGl2LmNvbnRhaW5lcntcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/component/contactus/contact/contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/contactus/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-service.service */ "./src/app/component/contactus/contact-service.service.ts");




let ContactComponent = class ContactComponent {
    constructor(contactServiceService) {
        this.contactServiceService = contactServiceService;
        // loading = false;
        this.submitted = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    // get f() { return this.contactForm.controls; }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            console.log("Called the Submit");
            if (this.contactForm.invalid) {
                console.log("invalid");
                return;
            }
            else {
                //1. send the data to service
                let res = yield this.contactServiceService.createContact(this.contactForm.value);
                console.log(res);
                //2. get the resp from service
                if (res) {
                    this.isSaved = true;
                    alert("Message sent Successfully");
                }
            }
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _contact_service_service__WEBPACK_IMPORTED_MODULE_3__["contactServiceService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/component/contactus/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/component/contactus/query-list/query-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/contactus/query-list/query-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb250YWN0dXMvcXVlcnktbGlzdC9xdWVyeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/contactus/query-list/query-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/contactus/query-list/query-list.component.ts ***!
  \************************************************************************/
/*! exports provided: QuerylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerylistComponent", function() { return QuerylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-service.service */ "./src/app/component/contactus/contact-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuerylistComponent = class QuerylistComponent {
    constructor(contactServiceService, route, router) {
        this.contactServiceService = contactServiceService;
        this.route = route;
        this.router = router;
        this.isSaved = false;
        this.isDeleted = false;
    }
    ngOnInit() {
        // const _contactId = this.route.snapshot.params.id;
        this.contactSubscription = this.contactServiceService.getContacts()
            .subscribe((res) => {
            console.log(res);
            this.contactList = res;
        });
    }
    onDeleteHandler(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const id = this.route.snapshot.params.id;
            console.log(id);
            let res = yield this.contactServiceService.deleteContact(id);
            if (res) {
                this.isDeleted = true;
                this.ngOnInit();
            }
        });
    }
    ngOnDestroy() {
        console.log("Inside ContactById destroy");
        this.contactSubscription.unsubscribe();
    }
};
QuerylistComponent.ctorParameters = () => [
    { type: _contact_service_service__WEBPACK_IMPORTED_MODULE_2__["contactServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuerylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/query-list/query-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-list.component.css */ "./src/app/component/contactus/query-list/query-list.component.css")).default]
    })
], QuerylistComponent);



/***/ }),

/***/ "./src/app/component/contactus/reply/reply.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/contactus/reply/reply.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb250YWN0dXMvcmVwbHkvcmVwbHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/contactus/reply/reply.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/contactus/reply/reply.component.ts ***!
  \**************************************************************/
/*! exports provided: ReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyComponent", function() { return ReplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_reply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-reply.service */ "./src/app/component/contactus/contact-reply.service.ts");




let ReplyComponent = class ReplyComponent {
    constructor(contactReplyService) {
        this.contactReplyService = contactReplyService;
        this.submitted = false;
        this.replyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //Step2: Create Form Controls 
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            // console.log(this.replyForm);
            // console.log(this.replyForm.value);
            console.log("click on submit");
            if (this.replyForm.invalid) {
                console.log("invalid");
                return;
            }
            else {
                //1. send the data to service
                let res = yield this.contactReplyService.contactReplyCreate(this.replyForm.value);
                console.log(res + "hii");
                //2. get the resp from service
                if (res) {
                    this.isSaved = true;
                    alert("Message sent Successfully");
                }
            }
        });
    }
};
ReplyComponent.ctorParameters = () => [
    { type: _contact_reply_service__WEBPACK_IMPORTED_MODULE_3__["contactReplyService"] }
];
ReplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reply.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contactus/reply/reply.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reply.component.css */ "./src/app/component/contactus/reply/reply.component.css")).default]
    })
], ReplyComponent);



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n    position: relative;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 100px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    margin-top: 20px;\r\n}\r\np{\r\n    color: rgb(246, 244, 242);\r\n}\r\nfooter{\r\n        font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7UUFDUSxpQ0FBaUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5we1xyXG4gICAgY29sb3I6IHJnYigyNDYsIDI0NCwgMjQyKTtcclxufVxyXG5mb290ZXJ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div{\r\n    background: #000;\r\n}\r\n.div{\r\n    transition: box-shadow .3s;\r\n}\r\n.div:hover {\r\n    box-shadow: 0 0 11px rgba(33,33,33,.2); \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdntcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuLmRpdntcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcbi5kaXY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiYSgzMywzMywzMywuMik7IFxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/landingPage/card-view/card-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/landingPage/card-view/card-view.component.ts ***!
  \************************************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardViewComponent = class CardViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/card-view/card-view.component.html")).default
    })
], CardViewComponent);



/***/ }),

/***/ "./src/app/component/landingPage/card-view/material/material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/landingPage/card-view/material/material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/component/landingPage/home-image/home-image.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/landingPage/home-image/home-image.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.card{\r\n    transition: box-shadow .3s;\r\n}\r\n.card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nbutton{\r\n    border-radius: 40px;\r\n    border: 2px solid rgb(255, 255, 255);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmdQYWdlL2hvbWUtaW1hZ2UvaG9tZS1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGFuZGluZ1BhZ2UvaG9tZS1pbWFnZS9ob21lLWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FyZHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/component/landingPage/home-image/home-image.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/landingPage/home-image/home-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImageComponent", function() { return HomeImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");



let HomeImageComponent = class HomeImageComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
        this.nav.hide();
    }
};
HomeImageComponent.ctorParameters = () => [
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"] }
];
HomeImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/home-image/home-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-image.component.css */ "./src/app/component/landingPage/home-image/home-image.component.css")).default]
    })
], HomeImageComponent);



/***/ }),

/***/ "./src/app/component/landingPage/login-landing/login-landing.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/landingPage/login-landing/login-landing.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#binding-card{\r\n    width: 100%;\r\n    height: 100%;\r\n    /* background-image: url(/assets/images/image3.png); */\r\n    background-size: cover;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    background-color: rgb(255, 238, 217);\r\n}\r\ndiv.container{\r\n    margin-bottom: 20px;\r\n}\r\n.cardlayout{\r\n    width: 500px;\r\n    height: 600px;\r\n    opacity: .9;\r\n    margin-left: 45px;\r\n    text-align: center;\r\n}\r\n.display-4{\r\n    color: rgb(0, 0, 0);\r\n}\r\n.title{\r\n    color: rgb(2, 2, 2);\r\n    opacity: 10;\r\n}\r\ndiv.card{\r\n    transition: box-shadow .3s;\r\n}\r\n.card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nimg{\r\n    margin-left: -25px;\r\n    transition: box-shadow .3s;\r\n}\r\nmat-card{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmdQYWdlL2xvZ2luLWxhbmRpbmcvbG9naW4tbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sYW5kaW5nUGFnZS9sb2dpbi1sYW5kaW5nL2xvZ2luLWxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiaW5kaW5nLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pbWFnZTMucG5nKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM4LCAyMTcpO1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jYXJkbGF5b3V0e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpc3BsYXktNHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICAgIG9wYWNpdHk6IDEwO1xyXG59XHJcbmRpdi5jYXJke1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbmltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/landingPage/login-landing/login-landing.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/landingPage/login-landing/login-landing.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoginLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLandingComponent", function() { return LoginLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/nav.service */ "./src/app/component/nav/nav.service.ts");



let LoginLandingComponent = class LoginLandingComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
        this.nav.hide();
    }
};
LoginLandingComponent.ctorParameters = () => [
    { type: _nav_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"] }
];
LoginLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/login-landing/login-landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-landing.component.css */ "./src/app/component/landingPage/login-landing/login-landing.component.css")).default]
    })
], LoginLandingComponent);



/***/ }),

/***/ "./src/app/component/landingPage/sidenav/sidenav.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/landingPage/sidenav/sidenav.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-fullscreen {\r\n    display: none;\r\n}\r\n\r\n.toolbar-filler {\r\n    flex: 1 1 auto\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmdQYWdlL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGFuZGluZ1BhZ2Uvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1mdWxsc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyLWZpbGxlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0b1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/component/landingPage/sidenav/sidenav.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/landingPage/sidenav/sidenav.component.ts ***!
  \********************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/landingPage/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.css */ "./src/app/component/landingPage/sidenav/sidenav.component.css")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/component/nav/nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/nav/nav.component.ts ***!
  \************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/component/authentication/authentication.service.ts");
/* harmony import */ var _nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav.service */ "./src/app/component/nav/nav.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



// import { AuthenticationService } from '../HR/HRservice/loginservice';



let NavComponent = class NavComponent {
    constructor(translate, router, nav, authenticationService) {
        this.translate = translate;
        this.router = router;
        this.nav = nav;
        this.authenticationService = authenticationService;
        translate.addLangs(['en', 'fr', 'de', 'es']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
};
NavComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html")).default,
        styles: ["./nav.component.css"]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/component/nav/nav.service.ts":
/*!**********************************************!*\
  !*** ./src/app/component/nav/nav.service.ts ***!
  \**********************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavService = class NavService {
    constructor() { this.visible = false; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
    doSomethingElseUseful() { }
};
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AnkitPanigrahy\Music\project-sprint-5\RMS\source\rms-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map