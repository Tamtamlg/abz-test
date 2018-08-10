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
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-page/service-page.component */ "./src/app/service-page/service-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        children: [
            { path: 'contact', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"] }
        ]
    },
    {
        path: '',
        component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutComponent"],
        children: [
            { path: 'service', component: _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_5__["ServicePageComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var potentialToken = localStorage.getItem('auth-token');
        if (potentialToken) {
            this.authService.setToken(potentialToken);
        }
        this.router.navigate(['/contact']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-page/service-page.component */ "./src/app/service-page/service-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _shared_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/helpers/token.interceptor */ "./src/app/shared/helpers/token.interceptor.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"],
                _service_page_service_page_component__WEBPACK_IMPORTED_MODULE_8__["ServicePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    multi: true,
                    useClass: _shared_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"contact-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"contact-form__bg\">\n\n    <p class=\"contact-form__title\">Fields marked “*” are required</p>\n\n    <div class=\"form-group\">\n      <label for=\"enquiryType\">Enquiry Type *</label>\n      <select id=\"enquiryType\" class=\"form-control form-control-lg\" [formControlName]=\"'enquiryType'\" (change)=\"changeSelect()\"\n        [ngClass]=\"{'is-invalid': form.get('enquiryType').invalid && form.get('enquiryType').touched}\">\n        <option *ngFor=\"let prop of types\" [ngValue]=\"prop\">{{prop.name}}</option>\n      </select>\n      <div class=\"invalid-feedback\" *ngIf=\"form.get('enquiryType').invalid && form.get('enquiryType').touched\">\n        This field is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"other\">\n      <input type=\"text\" class=\"form-control form-control-lg\" id=\"otherType\" [formControlName]=\"'other'\" placeholder=\"Other\">\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6 form-group--left\">\n        <label for=\"userName\">Name *</label>\n        <input type=\"text\" class=\"form-control form-control-lg\" id=\"userName\" placeholder=\"Dentist\" [formControlName]=\"'userName'\"\n          [ngClass]=\"{'is-invalid': form.get('userName').invalid && form.get('userName').touched}\">\n        <div class=\"invalid-feedback\" *ngIf=\"form.get('userName').invalid && form.get('userName').touched\">\n          This field is required.\n        </div>\n      </div>\n      <div class=\"form-group col-md-6 form-group--right\">\n        <label for=\"userEmail\">Email *</label>\n        <input type=\"email\" class=\"form-control form-control-lg\" id=\"userEmail\" placeholder=\"rachelm@gmail.com\" [formControlName]=\"'userEmail'\"\n          [ngClass]=\"{'is-invalid': form.get('userEmail').invalid && form.get('userEmail').touched}\">\n        <div class=\"invalid-feedback\" *ngIf=\"form.get('userEmail').invalid && form.get('userEmail').touched\">\n          Email is incorrect.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"subject\">Subject *</label>\n      <input type=\"text\" class=\"form-control form-control-lg\" id=\"subject\" placeholder=\"\" [formControlName]=\"'subject'\" [ngClass]=\"{'is-invalid': form.get('subject').invalid && form.get('subject').touched}\">\n      <div class=\"invalid-feedback\" *ngIf=\"form.get('subject').invalid && form.get('subject').touched\">\n        This field is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\" class=\"d-flex justify-content-between\">\n        <span>Description *</span>\n        <span>({{textareaLength}}/{{textareaMaxLength}})</span>\n      </label>\n      <textarea class=\"form-control form-control-lg\" id=\"description\" rows=\"3\" [formControlName]=\"'description'\" [maxlength]=\"textareaMaxLength\" [ngClass]=\"{'is-invalid': form.get('description').invalid && form.get('description').touched}\" (input)=\"calcLength()\"></textarea>\n      <div class=\"invalid-feedback\" *ngIf=\"form.get('description').invalid && form.get('description').touched\">\n        This field is required.\n      </div>\n    </div>\n\n    <div class=\"custom-input-group\">\n      <input type=\"file\" class=\"custom-input\" id=\"fileImg\" accept='image/*' (change)=\"openFile($event, preview)\">\n      <label class=\"custom-label\" for=\"fileImg\">\n        <div *ngIf=\"!isUploadImg\">\n          <strong>Add photo</strong>\n          <span>Maximum size of 300x300 jpeg jpg png 5 MB</span>\n        </div>\n        <img src=\"\" alt=\"\" #preview>\n      </label>\n      <div class=\"invalid-feedback d-block\">\n        {{uploadError}}\n      </div>\n    </div>\n\n  </div>\n  <button type=\"submit\" class=\"btn btn-submit\" [disabled]=\"!form.valid\">Submit</button>\n</form>\n\n<div class=\"alert alert-green alert-dismissible error-msg\" role=\"alert\" *ngIf=\"message\">\n  {{ message }}\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"message = null; form.enable()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  max-width: 760px;\n  margin: 0 auto;\n  position: relative;\n  top: -100px;\n  color: #010101;\n  font-size: 16px;\n  font-weight: 400; }\n  .contact-form label {\n    color: #1c2534;\n    font-size: 16px;\n    font-weight: 400; }\n  .contact-form textarea {\n    height: 150px; }\n  .contact-form ::-webkit-input-placeholder {\n    color: #7c8695; }\n  .contact-form ::-moz-placeholder {\n    color: #7c8695; }\n  .contact-form :-moz-placeholder {\n    color: #7c8695; }\n  .contact-form :-ms-input-placeholder {\n    color: #7c8695; }\n  .contact-form__bg {\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  border: 1px solid #e0e2e6;\n  background: #fff; }\n  .btn-submit {\n  width: 100%;\n  background: #87b448;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 38px; }\n  .btn-submit:hover {\n    background: #73993d;\n    cursor: pointer; }\n  .btn-submit:disabled:hover {\n    background: #87b448;\n    cursor: default; }\n  .contact-form__title {\n  color: #c1c1c1;\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 10px; }\n  .form-control-lg {\n  height: 52px;\n  font-size: 16px; }\n  .form-group {\n  margin-bottom: 19px; }\n  .form-group--left {\n  padding-right: 15px; }\n  .form-group--right {\n  padding-left: 15px; }\n  .custom-input {\n  display: none; }\n  .custom-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 130px;\n  height: 130px;\n  border-radius: 4px;\n  border: 1px solid #c8cdd5;\n  background-color: #f7f7f7;\n  margin-bottom: 0;\n  cursor: pointer;\n  text-align: center;\n  -o-object-fit: contain;\n     object-fit: contain; }\n  .custom-label:hover {\n    border: 1px solid #87b448; }\n  .custom-label strong {\n    color: #7c8695;\n    font-size: 16px;\n    font-weight: 400;\n    margin-bottom: 5px; }\n  .custom-label span {\n    color: #c2c2c4;\n    font-size: 12px;\n    font-weight: 400; }\n  .custom-label img {\n    display: block;\n    max-width: 100%;\n    max-height: 100%; }\n  .custom-label div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 15px; }\n  .invalid-feedback {\n  position: absolute;\n  margin-top: 3px; }\n  .custom-input-group {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/contact.service */ "./src/app/shared/services/contact.service.ts");
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



var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(contactService) {
        this.contactService = contactService;
        this.textareaLength = 0;
        this.textareaMaxLength = 1000;
        this.isUploadImg = false;
        this.uploadError = '';
        this.message = null;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typesSub = this.contactService.getTypes().subscribe(function (response) {
            if (response.success) {
                _this.types = response.data;
            }
        }, function (error) {
            console.log(error);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            enquiryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            other: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fileImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.calcLength();
    };
    ContactPageComponent.prototype.ngOnDestroy = function () {
        if (this.typesSub) {
            this.typesSub.unsubscribe();
        }
    };
    ContactPageComponent.prototype.changeSelect = function () {
        this.selectValue = this.form.value.enquiryType;
        this.other = this.selectValue.name === 'Other' ? true : false;
    };
    ContactPageComponent.prototype.calcLength = function () {
        if (this.form.get('description').value) {
            this.textareaLength = this.form.get('description').value.length;
        }
        else {
            this.textareaLength = 0;
        }
    };
    ContactPageComponent.prototype.openFile = function (e, preview) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () {
            var img = new Image();
            img.src = reader.result;
            if (e.target.files[0].type.indexOf('image') === -1) {
                e.target.value = '';
                _this.isUploadImg = false;
                preview.src = '';
                _this.uploadError = 'This is not a picture';
                console.log(_this.uploadError);
            }
            else {
                img.onload = function () {
                    if (e.target.files[0].size > 5242880) {
                        e.target.value = '';
                        _this.isUploadImg = false;
                        preview.src = '';
                        _this.uploadError = 'Maximum size of the uploaded image should not exceed 5MB';
                    }
                    else if (img.width > 300 || img.height > 300) {
                        e.target.value = '';
                        _this.isUploadImg = false;
                        preview.src = '';
                        _this.uploadError = 'Uploaded image should not exceed 300x300 pixels';
                    }
                    else {
                        _this.uploadError = '';
                        preview.src = reader.result;
                        _this.isUploadImg = true;
                        _this.form.patchValue({
                            // fileImg: reader.result
                            fileImg: e.target.files[0]
                        });
                    }
                };
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    ContactPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = this.form.controls;
        var otherValue = formData.other.value ? formData.other.value : 'Other';
        var contact = {
            description: formData.description.value,
            email: formData.userEmail.value,
            enquiry_type: this.other ? otherValue : formData.enquiryType.value.name,
            file: formData.fileImg.value,
            subject: formData.subject.value,
            user_name: formData.userName.value
        };
        this.form.disable();
        this.contactService.send(contact).subscribe(function (response) {
            if (response.success) {
                _this.showMsg(response.data.message);
            }
            else {
                _this.showMsg(response.success);
            }
        }, function (error) {
            _this.showMsg(error.error.error.description);
        });
    };
    ContactPageComponent.prototype.showMsg = function (msg) {
        var _this = this;
        this.message = msg;
        setTimeout(function () {
            _this.message = null;
            _this.form.enable();
        }, 10000);
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/contact-page/contact-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/service-page/service-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/service-page/service-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"showLoader\"></div>\n\n<div class=\"center-content\" *ngIf=\"categories\">\n  <div class=\"row no-gutters text-center\">\n\n    <div class=\"category-col col-5\" *ngFor=\"let category of categories\">\n      <div class=\"category-item\">\n        <a href=\"#\" class=\"category-item__link\">\n          <img class=\"img-fluid\" [src]=\"category.icon\">\n        </a>\n        <h6 class=\"category-title\">\n          <a href=\"#\">{{category.title}}</a>\n        </h6>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"alert alert-green alert-dismissible error-msg\" role=\"alert\" *ngIf=\"errorMessage\" type=\"danger\">\n  {{ errorMessage }}\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"errorMessage = null\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/service-page/service-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/service-page/service-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-item {\n  width: 140px;\n  margin: 0 auto; }\n  .category-item .category-item__link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 35px;\n    border: 1px solid #e0e2e6; }\n  .category-item .category-item__link img {\n      width: 100%; }\n  .category-item:hover .category-item__link {\n  background: #f4f7fb; }\n  .category-item:hover .category-title a {\n  color: #71973c; }\n  .category-title {\n  color: #1c2534;\n  font-size: 14px;\n  margin: 14px 0; }\n  .category-title a {\n    color: #1c2534;\n    font-size: 14px;\n    display: block; }\n  .category-title a:hover {\n      color: #71973c;\n      text-decoration: none; }\n  .category-col {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n  .center-content {\n  border: 1px solid #e0e2e6;\n  border-radius: 5px;\n  padding: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px; }\n  @media (min-width: 1400px) {\n  .category-col {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; } }\n  @media (min-width: 1150px) and (max-width: 1399px) {\n  .category-col {\n    flex: 0 0 25%;\n    max-width: 25%; } }\n"

/***/ }),

/***/ "./src/app/service-page/service-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service-page/service-page.component.ts ***!
  \********************************************************/
/*! exports provided: ServicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageComponent", function() { return ServicePageComponent; });
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicePageComponent = /** @class */ (function () {
    function ServicePageComponent(authService, categoriesService) {
        this.authService = authService;
        this.categoriesService = categoriesService;
        this.showLoader = true;
        this.errorMessage = null;
        /**
         * Т.к. страницы авторизации нет, эмулируем запрос авторизации для получение токена
         */
        this.user = {
            email: 'test@abz.agency',
            password: '123456'
        };
    }
    ServicePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSub = this.authService.login(this.user).subscribe(function (response) {
            if (response.success && response.data.token) {
                _this.categoriesSub = _this.categoriesService
                    .getCategories()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.showLoader = true;
                        _this.categories = res.data;
                        _this.showLoader = false;
                    }
                }, function (error) {
                    _this.showLoader = false;
                    _this.showErrorMsg(error.error.error.description);
                });
            }
        }, function (error) {
            _this.showLoader = false;
            _this.showErrorMsg(error.error.error.description);
        });
    };
    ServicePageComponent.prototype.ngOnDestroy = function () {
        if (this.categoriesSub) {
            this.categoriesSub.unsubscribe();
        }
        if (this.authSub) {
            this.authSub.unsubscribe();
        }
    };
    ServicePageComponent.prototype.showErrorMsg = function (msg) {
        var _this = this;
        this.errorMessage = msg;
        setTimeout(function () {
            _this.errorMessage = null;
        }, 10000);
    };
    ServicePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-page',
            template: __webpack_require__(/*! ./service-page.component.html */ "./src/app/service-page/service-page.component.html"),
            styles: [__webpack_require__(/*! ./service-page.component.scss */ "./src/app/service-page/service-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"]])
    ], ServicePageComponent);
    return ServicePageComponent;
}());



/***/ }),

/***/ "./src/app/shared/helpers/token.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authService) {
        this.authService = authService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.authService.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.authService.getToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <!-- header -->\r\n  <header class=\"header\">\r\n    <div class=\"container-fixed header__container\">\r\n      <div class=\"row no-gutters header__row\">\r\n        <a href=\"#\" class=\"logo\">\r\n          <img src=\"../../../../assets/img/logo.svg\" alt=\"logo\">\r\n        </a>\r\n        <button class=\"btn btn--green\" [routerLink]=\"['/service']\">Log In Now</button>\r\n      </div>\r\n      <div class=\"header__jumbotron header-jumbotron\">\r\n        <h1 class=\"header-jumbotron__heading\">Home of Dentistry</h1>\r\n        <p class=\"header-jumbotron__subheading mb-0\">Denteez was created by dentists for dentistry in order to make the life of everyone involved in dentistry easier.</p>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <!-- /header -->\r\n  <!-- content -->\r\n  <div class=\"content\">\r\n\r\n    <!-- main -->\r\n    <main class=\"main\">\r\n      <div class=\"container-fixed\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n      </div>\r\n    </main>\r\n    <!-- /main -->\r\n\r\n    <section class=\"about\">\r\n      <div class=\"container-fixed auth-container\">\r\n        <h2 class=\"about__heading\">About Denteez</h2>\r\n        <div class=\"row no-gutters about__row\">\r\n          <div class=\"col-6 about__col\">\r\n            <p>Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement\r\n              in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding\r\n              someone to just fix your broken equipment or simply hiring new staff or looking for that new job?</p>\r\n          </div>\r\n          <div class=\"col-6 about__col\">\r\n            <p>Our mission is to give every dental professional the possibility to discuss and share all aspects of their profession,\r\n              their practice and their business. We aim to make the world of dentistry easy and accessible, so every dental\r\n              professional can find what they are looking for quickly and easily all in one place.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <!-- /content -->\r\n</div>\r\n<!-- /wrapper -->\r\n\r\n<footer class=\"footer\">\r\n  <div class=\"container-fixed auth-container\">\r\n    <div class=\"row no-gutters footer-row\">\r\n      <p class=\"footer__copy\">\r\n        Denteez Copyright 2015\r\n      </p>\r\n      <ul class=\"footer__nav footer-nav\">\r\n        <li class=\"footer-nav__item\">\r\n          <a href=\"#\" class=\"footer-nav__link\">Support</a>\r\n        </li>\r\n        <li class=\"footer-nav__item\">\r\n          <a href=\"#\" class=\"footer-nav__link\">Privacy Policy</a>\r\n        </li>\r\n        <li class=\"footer-nav__item\">\r\n          <a href=\"#\" class=\"footer-nav__link\">Terms of use</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-container {\n  max-width: 1380px;\n  margin: 0 auto; }\n\n.header {\n  height: 510px;\n  background: #1c2534 url('header-bg.jpg') center top no-repeat;\n  background-size: cover;\n  padding-top: 40px; }\n\n.logo {\n  display: block;\n  width: 130px; }\n\n.logo img {\n    display: block;\n    max-width: 100%;\n    height: auto; }\n\n.header__row {\n  justify-content: space-between;\n  align-items: center; }\n\n.header-jumbotron {\n  color: #f3f4f6;\n  text-align: center;\n  max-width: 500px;\n  margin: 100px auto 0; }\n\n.header-jumbotron__heading {\n  font-size: 48px;\n  font-weight: 300; }\n\n.header-jumbotron__subheading {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 30px; }\n\n.main {\n  background: #f3f4f6 url('bg.jpg'); }\n\n.about__heading {\n  color: #1c2534;\n  font-size: 30px;\n  font-weight: 300;\n  line-height: 30px;\n  text-align: center;\n  margin-bottom: 40px; }\n\n.about {\n  padding: 90px 0; }\n\n.about p {\n    color: #7c8695;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 24px; }\n\n.about__col:nth-child(2n) {\n  padding-left: 40px; }\n\n.about__col:nth-child(2n+1) {\n  padding-right: 40px; }\n\n.about__col:nth-child(1) {\n  padding-right: 40px; }\n\n.footer {\n  border-top: 1px solid #e0e2e6; }\n\n.footer-row {\n  height: 73px;\n  justify-content: space-between;\n  align-items: center; }\n\n.footer__copy {\n  margin: 0;\n  color: #b7bfcd;\n  font-size: 12px; }\n\n.footer-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex; }\n\n.footer-nav__item {\n  margin-right: 20px; }\n\n.footer-nav__item:last-child {\n    margin-right: 0; }\n\n.footer-nav__link {\n  color: #b7bfcd;\n  font-size: 12px;\n  text-decoration: none; }\n\n.footer-nav__link:hover {\n    color: #87b448;\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/shared/layouts/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <!-- header -->\r\n  <header class=\"header\">\r\n    <div class=\"container-fixed header__container\">\r\n      <a href=\"#\" class=\"logo\">\r\n        <img src=\"../../../../assets/img/logo.svg\" alt=\"logo\">\r\n      </a>\r\n      <div class=\"search-input\">\r\n        <input type=\"text\" placeholder=\"Company name\">\r\n      </div>\r\n      <div class=\"user-block\">\r\n        <a href=\"#\" class=\"chat\">\r\n          <svg class=\"svg\" width=\"22px\" height=\"22px\">\r\n            <use xlink:href=\"../../../../assets/img/sprite.svg#chat\"></use>\r\n          </svg>\r\n        </a>\r\n        <a href=\"#\" class=\"mag\">\r\n          <svg class=\"svg\" width=\"22px\" height=\"22px\">\r\n            <use xlink:href=\"../../../../assets/img/sprite.svg#message\"></use>\r\n          </svg>\r\n        </a>\r\n        <a href=\"#\" class=\"user-info\">\r\n          <div class=\"user-info__img\">\r\n            <img src=\"../../../../assets/img/user-icon.png\" alt=\"\">\r\n          </div>\r\n          <span class=\"user-name\">Maximillian Beekeeper</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <!-- /header -->\r\n  <!-- content -->\r\n  <div class=\"content\">\r\n\r\n    <!-- main -->\r\n    <main class=\"main\">\r\n      <div class=\"container-fixed clearfix\">\r\n        <!--left column-->\r\n        <div class=\"col1\">\r\n          <ul class=\"left-menu\">\r\n            <li class=\"left-menu__item\">\r\n              <a href=\"#\" class=\"left-menu__link\">\r\n                <svg class=\"svg\" width=\"24px\" height=\"24px\">\r\n                  <use xlink:href=\"../../../../assets/img/sprite.svg#house\"></use>\r\n                </svg>\r\n                Feed</a>\r\n            </li>\r\n            <li class=\"left-menu__item\">\r\n              <a href=\"#\" class=\"left-menu__link\">\r\n                <svg class=\"svg\" width=\"24px\" height=\"24px\">\r\n                  <use xlink:href=\"../../../../assets/img/sprite.svg#question\"></use>\r\n                </svg>Ask a Colleague</a>\r\n            </li>\r\n            <li class=\"left-menu__item\">\r\n              <a href=\"#\" class=\"left-menu__link\">\r\n                <svg class=\"svg\" width=\"24px\" height=\"24px\">\r\n                  <use xlink:href=\"../../../../assets/img/sprite.svg#companies\"></use>\r\n                </svg>Companies</a>\r\n            </li>\r\n            <li class=\"left-menu__item\">\r\n              <a href=\"#\" class=\"left-menu__link\">\r\n                <svg class=\"svg\" width=\"24px\" height=\"24px\">\r\n                  <use xlink:href=\"../../../../assets/img/sprite.svg#list\"></use>\r\n                </svg>Service Directory</a>\r\n            </li>\r\n          </ul>\r\n\r\n          <h4>Advertisement</h4>\r\n\r\n          <a href=\"#\" class=\"banner-wrap\">\r\n            <img src=\"../../../../assets/img/banner1.jpg\" alt=\"banner1\" class=\"banner\">\r\n          </a>\r\n          <p class=\"img-title\">Ads By Denteez.com</p>\r\n\r\n          <div class=\"company\">\r\n            <div class=\"heading-wrap\">\r\n              <h4>Featured Companies</h4>\r\n              <a href=\"#\" class=\"see-all\">See All</a>\r\n            </div>\r\n\r\n            <div class=\"company__item clearfix\">\r\n              <a href=\"#\" class=\"company__img\">\r\n                <img src=\"../../../../assets/img/company1.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"company__text\">\r\n                <h3 class=\"company__name\">\r\n                  <a href=\"#\">Company Name</a>\r\n                </h3>\r\n                <p class=\"company__activity\">Manufacturer</p>\r\n                <p class=\"company__adress\">Belgrade, Serbia</p>\r\n                <p class=\"company__follow\">\r\n                  <a href=\"#\">Follow Now</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"company__item clearfix\">\r\n              <a href=\"#\" class=\"company__img\">\r\n                <img src=\"../../../../assets/img/company2.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"company__text\">\r\n                <h3 class=\"company__name\">\r\n                  <a href=\"#\">Company Name</a>\r\n                </h3>\r\n                <p class=\"company__activity\">Service Provider</p>\r\n                <p class=\"company__adress\">New York, USA</p>\r\n                <p class=\"company__follow\">\r\n                  <a href=\"#\">Follow Now</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"company__item clearfix\">\r\n              <a href=\"#\" class=\"company__img\">\r\n                <img src=\"../../../../assets/img/company3.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"company__text\">\r\n                <h3 class=\"company__name\">\r\n                  <a href=\"#\">Company Name</a>\r\n                </h3>\r\n                <p class=\"company__activity\">Supplier</p>\r\n                <p class=\"company__adress\">London, England</p>\r\n                <p class=\"company__follow\">\r\n                  <a href=\"#\">Follow Now</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"copyright\">Denteez Copyright 2015</p>\r\n          <p class=\"copyright\">\r\n            <a href=\"#\">Terms of use</a>\r\n            <a href=\"#\">Privacy Policy</a>\r\n          </p>\r\n        </div>\r\n        <!--/left column-->\r\n\r\n        <!--right columh-->\r\n        <div class=\"col3\">\r\n          <div class=\"people\">\r\n            <div class=\"heading-wrap\">\r\n              <h4>People you may know</h4>\r\n              <a href=\"#\" class=\"see-all\">See All</a>\r\n            </div>\r\n            <div class=\"people__item clearfix\">\r\n              <h3 class=\"people__name\">\r\n                <a href=\"#\"> Dennis Adams</a>\r\n              </h3>\r\n              <a href=\"#\" class=\"people__img\">\r\n                <img src=\"../../../../assets/img/dentist1.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"people__text\">\r\n                <p class=\"people__activity\">Dentist (Practice Owner)</p>\r\n                <p class=\"people__adress\">London, England</p>\r\n                <p class=\"people__follow\">\r\n                  <a href=\"#\">Add Friend</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"people__item clearfix\">\r\n              <h3 class=\"people__name\">\r\n                <a href=\"#\">Mary Carpenter</a>\r\n              </h3>\r\n              <a href=\"#\" class=\"people__img\">\r\n                <img src=\"../../../../assets/img/dentist2.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"people__text\">\r\n                <p class=\"people__activity\">Dentist (Practice Owner)</p>\r\n                <p class=\"people__adress\">Belgrade, Serbia</p>\r\n                <p class=\"people__follow\">\r\n                  <a href=\"#\">Add Friend</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"people__item clearfix\">\r\n              <h3 class=\"people__name\">\r\n                <a href=\"#\">Danielle Salazar</a>\r\n              </h3>\r\n              <a href=\"#\" class=\"people__img\">\r\n                <img src=\"../../../../assets/img/dentist3.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"people__text\">\r\n                <p class=\"people__activity\">Dentist (Practice Owner)</p>\r\n                <p class=\"people__adress\">Paris, France</p>\r\n                <p class=\"people__follow\">\r\n                  <a href=\"#\">Add Friend</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"product\">\r\n            <div class=\"heading-wrap\">\r\n              <h4>Featured Products</h4>\r\n              <a href=\"#\" class=\"see-all\">See All</a>\r\n            </div>\r\n            <div class=\"product__item clearfix\">\r\n              <h3 class=\"product__name\">\r\n                <a href=\"#\">Product Name</a>\r\n              </h3>\r\n              <a href=\"#\" class=\"product__img\">\r\n                <img src=\"../../../../assets/img/product1.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"product__text\">\r\n                <p class=\"product__info\">Product Short Description. The quick brown fox jumps over the lazy dog.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product__item clearfix\">\r\n              <h3 class=\"product__name\">\r\n                <a href=\"#\">Product Name</a>\r\n              </h3>\r\n              <a href=\"#\" class=\"product__img\">\r\n                <img src=\"../../../../assets/img/product2.jpg\" alt=\"\">\r\n              </a>\r\n              <div class=\"product__text\">\r\n                <p class=\"product__info\">Product Short Description. The quick brown fox jumps over the lazy dog.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <h4>Advertisement</h4>\r\n\r\n          <a href=\"#\" class=\"banner-wrap\">\r\n            <img src=\"../../../../assets/img/banner2.jpg\" alt=\"banner2\" class=\"banner\">\r\n          </a>\r\n          <p class=\"img-title\">Ads By Denteez.com</p>\r\n        </div>\r\n        <!--/right columh-->\r\n\r\n        <!--    center-->\r\n        <div class=\"col2\">\r\n          <div class=\"center-heading\">\r\n            <button class=\"btn btn--green\">Add New Service</button>\r\n            <h2>Service Directory</h2>\r\n          </div>\r\n\r\n          <router-outlet></router-outlet>\r\n\r\n        </div>\r\n      </div>\r\n      <!--    /center-->\r\n    </main>\r\n    <!-- /main -->\r\n\r\n  </div>\r\n  <!-- /content -->\r\n</div>\r\n<!-- /wrapper -->\r\n"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* header */\n.header {\n  position: relative;\n  background: #87b448;\n  border-bottom: 2px solid #71973c; }\n.header a {\n    line-height: 66px;\n    display: inline-block; }\n.header .logo {\n    display: block;\n    width: 130px;\n    min-width: 130px;\n    height: 40px; }\n.header .logo img {\n      display: block;\n      max-width: 100%;\n      height: auto; }\n.header .user-block {\n    position: relative;\n    width: 330px;\n    padding-left: 100px; }\n.header .user-block a:hover {\n      text-decoration: none;\n      color: #ececec; }\n.header .user-block a:hover img {\n        opacity: 0.9; }\n.header .user-block .user-info {\n      width: 240px;\n      min-width: 240px;\n      color: #fefefe;\n      font-size: 16px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.header .chat {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    top: 25px;\n    left: 0;\n    width: 26px;\n    height: 22px; }\n.header .chat .svg {\n      fill: #fff; }\n.header .chat:hover .svg {\n      fill: #ececec; }\n.header .mag {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    top: 23px;\n    left: 45px;\n    width: 24px;\n    height: 24px; }\n.header .mag .svg {\n      fill: #fff; }\n.header .mag:hover .svg {\n      fill: #ececec; }\n.header .search-input {\n    position: relative;\n    width: 70%;\n    margin-left: 30px;\n    margin-right: 30px; }\n.header .search-input input {\n      width: 100%;\n      line-height: 32px;\n      height: 32px;\n      border: none;\n      border-radius: 5px;\n      outline: none;\n      background: #73993d;\n      color: #fff;\n      padding-left: 40px;\n      padding-right: 10px; }\n.header .search-input ::-webkit-input-placeholder {\n      color: #fff; }\n.header .search-input ::-moz-placeholder {\n      color: #fff; }\n.header .search-input :-moz-placeholder {\n      color: #fff; }\n.header .search-input :-ms-input-placeholder {\n      color: #fff; }\n.header .search-input:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 10px;\n    background: url(\"data:image/svg+xml,%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2215.97px%22 height%3D%2215.99px%22 viewBox%3D%220 0 15.97 15.99%22 enable-background%3D%22new 0 0 15.97 15.99%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 fill%3D%22%238FBC4C%22 d%3D%22M15.802%2C15.004l-3.909-3.878c0.997-1.178%2C1.6-2.7%2C1.6-4.366%09c0-3.733-3.02-6.76-6.746-6.76C3.021%2C0%2C0%2C3.026%2C0%2C6.76c0%2C3.733%2C3.021%2C6.76%2C6.747%2C6.76c1.648%2C0%2C3.157-0.594%2C4.329-1.578l3.911%2C3.88%09c0.225%2C0.225%2C0.59%2C0.225%2C0.815%2C0C16.027%2C15.595%2C16.027%2C15.229%2C15.802%2C15.004z M6.763%2C12.338c-3.063%2C0-5.547-2.491-5.547-5.564%09s2.484-5.564%2C5.547-5.564c3.064%2C0%2C5.547%2C2.491%2C5.547%2C5.564S9.826%2C12.338%2C6.763%2C12.338z%22%2F%3E%3C%2Fsvg%3E\");\n    width: 16px;\n    height: 16px;\n    background-position: center; }\n.header__container {\n  display: flex;\n  align-items: center;\n  height: 66px; }\n.user-info__img {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border-radius: 3px;\n  margin-right: 10px;\n  line-height: 66px; }\n.user-info__img img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n/* /header */\n.main a:hover {\n  color: #87b448;\n  text-decoration: none; }\n.main a:hover img {\n    opacity: 0.9; }\n.main a img {\n  opacity: 1; }\n.heading-wrap {\n  display: flex;\n  justify-content: space-between; }\n/* left column */\n.col1 {\n  float: left;\n  width: 225px;\n  padding-right: 15px; }\n.col1 h4 {\n    font-size: 14px;\n    color: #7c8695;\n    margin-top: 0;\n    margin-bottom: 15px; }\n.left-menu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 20px; }\n.left-menu li {\n    position: relative;\n    border-bottom: 1px solid #e0e2e6; }\n.left-menu__link {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #59606b;\n  font-size: 16px;\n  line-height: 50px; }\n.left-menu__link:hover {\n    color: #87b448;\n    text-decoration: none; }\n.left-menu__link:hover .svg {\n      fill: #87b448; }\n.left-menu__link .svg {\n    margin-right: 27px;\n    fill: #c7cdd9; }\n.banner {\n  width: 100%;\n  height: auto; }\n.img-title {\n  font-size: 11px;\n  color: #d3d3d3; }\n.banner-wrap {\n  display: block;\n  margin-bottom: 5px; }\n.company {\n  padding-top: 15px;\n  border-top: 1px solid #e0e2e6;\n  border-bottom: 1px solid #e0e2e6;\n  margin-bottom: 15px; }\n.company p,\n  .company h3 {\n    margin: 0 0 3px 0; }\n.see-all {\n  color: #1c2534;\n  font-size: 14px;\n  float: right; }\n.see-all:hover {\n    color: #87b448;\n    text-decoration: none; }\n.company__item {\n  margin-bottom: 20px; }\n.company__img {\n  float: left;\n  display: block;\n  margin-right: 10px;\n  width: 80px;\n  height: 80px; }\n.company__img img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 5px; }\n.company__name {\n  font-size: 16px;\n  color: #1c2534;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.company__name a {\n    font-size: 16px;\n    color: #1c2534; }\n.company__activity {\n  font-size: 14px;\n  color: #7c8695; }\n.company__adress {\n  font-size: 14px;\n  color: #7c8695; }\n.company__follow a {\n  font-size: 12px;\n  color: #1c2534; }\n.company__follow a:hover {\n  text-decoration: none; }\n.copyright,\n.copyright a {\n  font-size: 12px;\n  color: #b7bfcd;\n  margin-bottom: 10px; }\n.copyright a:first-child {\n  margin-right: 20px; }\n.copyright a:hover {\n  text-decoration: none; }\n/* /left column */\n/* center */\n.col2 {\n  margin: 0 245px 0 225px;\n  padding-top: 12px; }\n.col2 h2 {\n    margin-top: 0;\n    font-size: 30px;\n    line-height: 36px; }\n.center-heading {\n  margin-bottom: 15px; }\n.btn--green {\n  float: right; }\n/* /center */\n/* right column */\n.col3 {\n  width: 245px;\n  float: right;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 20px; }\n.col3 h4 {\n    font-size: 14px;\n    color: #7c8695;\n    margin-top: 0; }\n.people {\n  border-bottom: 1px solid #e0e2e6;\n  margin-bottom: 10px; }\n.people p,\n  .people h3 {\n    margin: 0 0 4px 0; }\n.people__item {\n  margin-bottom: 20px; }\n.people__img {\n  float: left;\n  margin-right: 10px;\n  width: 80px;\n  height: 80px; }\n.people__img img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 5px; }\n.people__name {\n  font-size: 16px;\n  color: #1c2534;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.people__name a {\n    font-size: 16px;\n    color: #1c2534; }\n.people__activity {\n  font-size: 14px;\n  color: #7c8695; }\n.people__adress {\n  font-size: 14px;\n  color: #7c8695; }\n.people__follow a {\n  font-size: 12px;\n  color: #1c2534; }\n.people__follow a:hover {\n  text-decoration: none; }\n.product {\n  padding-top: 10px;\n  border-bottom: 1px solid #e0e2e6;\n  margin-bottom: 20px; }\n.product p,\n  .product h3 {\n    margin: 0 0 3px 0; }\n.product__item {\n  margin-bottom: 20px; }\n.product__img {\n  float: left;\n  margin-right: 10px;\n  width: 80px;\n  height: 80px; }\n.product__img img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 5px; }\n.product__name {\n  font-size: 16px;\n  color: #1c2534;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.product__name a {\n    font-size: 16px;\n    color: #1c2534; }\n.product__info {\n  font-size: 14px;\n  color: #7c8695; }\n/* /right column */\n"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/shared/layouts/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.scss */ "./src/app/shared/layouts/site-layout/site-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function AuthService(http) {
        this.http = http;
        this.token = null;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('http://504080.com/api/v1/account/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            localStorage.setItem('auth-token', response.data.token);
            _this.setToken(response.data.token);
        }));
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
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


var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get('http://504080.com/api/v1/services/categories');
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/shared/services/contact.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/contact.service.ts ***!
  \****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
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


var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getTypes = function () {
        return this.http.get('http://504080.com/api/v1/directories/enquiry-types');
    };
    ContactService.prototype.send = function (contact) {
        return this.http.post('http://504080.com/api/v1/support', contact);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
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

module.exports = __webpack_require__(/*! D:\projects\abz-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map