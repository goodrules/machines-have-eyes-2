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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analyze-photo.service.ts":
/*!******************************************!*\
  !*** ./src/app/analyze-photo.service.ts ***!
  \******************************************/
/*! exports provided: AnalyzePhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzePhotoService", function() { return AnalyzePhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyzePhotoService = /** @class */ (function () {
    function AnalyzePhotoService(http) {
        this.http = http;
        this.results = undefined;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Headers', '*');
        this.headers.append('Access-Control-Expose-Headers', '*');
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', '*');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    AnalyzePhotoService.prototype.doPOST = function (imageString) {
        var _this = this;
        console.log("POST");
        var promise = new Promise(function (resolve, reject) {
            //TODO
            var url = 'https://pjlj7pfxgf.execute-api.us-east-1.amazonaws.com/prod/';
            _this.http.post(url, { image: imageString }, _this.options).toPromise()
                .then(function (res) {
                // console.log(JSON.parse(res.json().body).message.FaceDetails[0]);
                var temp = JSON.parse(res.json().body).message.FaceDetails[0];
                var thing = new Array();
                thing.push(temp.Gender);
                thing.push(temp.AgeRange);
                thing.push(temp.Smile);
                thing.push(temp.Emotions);
                thing.push(temp.Mustache);
                thing.push(temp.Eyeglasses);
                _this.results = thing;
                resolve();
            });
        });
        return promise;
    };
    AnalyzePhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AnalyzePhotoService);
    return AnalyzePhotoService;
}());



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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _attract_attract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attract/attract.component */ "./src/app/attract/attract.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], data: { state: 'welcome' } },
    { path: 'attract', component: _attract_attract_component__WEBPACK_IMPORTED_MODULE_3__["AttractComponent"], data: { state: 'attract' } },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], data: { state: 'experience' } },
    { path: 'thank-you/:drink', component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["ThankYouComponent"], data: { state: 'thank-you' } },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-title {\n    display: inline-flex;\n}\n\n.mat-toolbar{\n\n    background-color:  #CE472F;\n}\n\n.spacer{\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7O0lBRUksMkJBQTJCO0NBQzlCOztBQUVEO0lBR0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5tYXQtdG9vbGJhcntcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjQ0U0NzJGO1xufVxuXG4uc3BhY2Vye1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <mat-toolbar color=\"primary\">\n\n      \n\n      <span>\n          \n      </span>\n      <span class=\"spacer\"></span>\n      <app-kiosk-nav></app-kiosk-nav>\n  </mat-toolbar> \n\n</header>\n\n<main [@routerTransition]=\"getState(o)\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-animations */ "./src/app/router-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Computers have eyes';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _attract_attract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attract/attract.component */ "./src/app/attract/attract.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//materials.module */ "./src/app/materials.module.ts");
/* harmony import */ var _kiosk_nav_kiosk_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kiosk-nav/kiosk-nav.component */ "./src/app/kiosk-nav/kiosk-nav.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var _analyze_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analyze-photo.service */ "./src/app/analyze-photo.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _attract_attract_component__WEBPACK_IMPORTED_MODULE_6__["AttractComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__["ThankYouComponent"],
                _kiosk_nav_kiosk_nav_component__WEBPACK_IMPORTED_MODULE_10__["KioskNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _materials_module__WEBPACK_IMPORTED_MODULE_9__["MaterialsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_11__["WebcamModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"]
            ],
            providers: [_analyze_photo_service__WEBPACK_IMPORTED_MODULE_12__["AnalyzePhotoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attract/attract.component.css":
/*!***********************************************!*\
  !*** ./src/app/attract/attract.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dHJhY3QvYXR0cmFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/attract/attract.component.html":
/*!************************************************!*\
  !*** ./src/app/attract/attract.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  attract works!\n</p>\n"

/***/ }),

/***/ "./src/app/attract/attract.component.ts":
/*!**********************************************!*\
  !*** ./src/app/attract/attract.component.ts ***!
  \**********************************************/
/*! exports provided: AttractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractComponent", function() { return AttractComponent; });
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

var AttractComponent = /** @class */ (function () {
    function AttractComponent() {
    }
    AttractComponent.prototype.ngOnInit = function () {
    };
    AttractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attract',
            template: __webpack_require__(/*! ./attract.component.html */ "./src/app/attract/attract.component.html"),
            styles: [__webpack_require__(/*! ./attract.component.css */ "./src/app/attract/attract.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttractComponent);
    return AttractComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n    background: #fff;\n    float: left;\n    width: 800px;\n    height: 800px;\n  \n    margin: 5px;\n    \n  }\n\n.snapshot {\ntext-align: center;\n}\n\n.snapshot img {\n    max-width: 800px;\n    max-height: 800px;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n}\n\n.attributeTitle{\n    \n}\n\n.attributeContainer{\n    clear: right;\n}\n\n.webcam-tile{\n    padding: 0px;\n    margin-top: -350px;\n}\n\n#fjordlogo{\n    background-image: url('fjordlogo.png');\n    background-repeat:no-repeat;\n    background-size:100%;\n    width: 500px;\n    height: 200px;\n    margin-bottom: 0px;\n}\n\n.captured-image {\n    position: fixed;\n    right: 0;\n    bottom: -250px;\n    min-width: 100%;\n    min-height: 153%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n\n.picture-button-container{\n    position:absolute;\n    width:156px;\n    height:100px;\n    bottom:0px;\n    right:25%;\n    left:50%;\n    margin-left:-78px;\n}\n\n.countdown{\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  height: 500px;\n  padding-left:50px;\n  text-align: center;\n}\n\n.countdown span{\n    font-family: \"Oswald-Light\";\n    font-size: 300px;\n    color: white;\n}\n\n.console{\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 600px;\n  height: 300px;\n  padding-left:50px;\n  text-align: center;\n  color: white;\n}\n\n.console span{\n    font-family: \"Lucida Console\", Monaco, monospace;\n    font-size: 42px;\n    color: white;\n}\n\n.snapbutton{\n    \n}\n\ni{\n    font-style: unset;\n    font-size: 1em;\n    -webkit-animation: blink 1100ms linear infinite;\n            animation: blink 1100ms linear infinite;\n}\n\n@-webkit-keyframes blink {\n    49% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    89% {\n        opacity: 0;\n    }\n    90% {\n        opacity: 1;\n    }\n}\n\n@keyframes blink {\n    49% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    89% {\n        opacity: 0;\n    }\n    90% {\n        opacity: 1;\n    }\n}\n\n.fingerprint {\n    width: 100%;\n    height: 100%;\n    /*border: solid 3px #AAB8BE;*/\n  }\n\n.fingerprint.scanning::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    background-image: linear-gradient(to bottom,\n      rgba(206, 71, 47, 0),\n      rgba(206, 71, 47, .8));\n    -webkit-animation: scanning .8s linear infinite;\n            animation: scanning .8s linear infinite;\n  }\n\n@-webkit-keyframes scanning {\n      100% { -webkit-transform: translate(0, 652px); transform: translate(0, 652px); }\n  }\n\n@keyframes scanning {\n      100% { -webkit-transform: translate(0, 652px); transform: translate(0, 652px); }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjOztJQUVkLFlBQVk7O0dBRWI7O0FBRUg7QUFDQSxtQkFBbUI7Q0FDbEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdDQUF3QjtZQUF4Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7O0NBRUM7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHVDQUEyRDtJQUMzRCw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCOztBQUdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBaUI7T0FBakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQzs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0RBQXdDO1lBQXhDLHdDQUF3QztDQUMzQzs7QUFFRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztLQUNkO0NBQ0o7O0FBYkQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7S0FDZDtDQUNKOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7R0FDL0I7O0FBRUQ7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2Q7OzZCQUV5QjtJQUN6QixnREFBd0M7WUFBeEMsd0NBQXdDO0dBQ3pDOztBQUVEO01BQ0ksT0FBTyx1Q0FBK0IsQ0FBL0IsK0JBQStCLEVBQUU7R0FDM0M7O0FBRkQ7TUFDSSxPQUFPLHVDQUErQixDQUEvQiwrQkFBK0IsRUFBRTtHQUMzQyIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICBcbiAgICBtYXJnaW46IDVweDtcbiAgICBcbiAgfVxuXG4uc25hcHNob3Qge1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNuYXBzaG90IGltZyB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLmF0dHJpYnV0ZVRpdGxle1xuICAgIFxufVxuXG4uYXR0cmlidXRlQ29udGFpbmVye1xuICAgIGNsZWFyOiByaWdodDtcbn1cblxuLndlYmNhbS10aWxle1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzUwcHg7XG59XG5cbiNmam9yZGxvZ297XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zqb3JkbG9nby5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5cbi5jYXB0dXJlZC1pbWFnZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTI1MHB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxNTMlO1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5waWN0dXJlLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTU2cHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIGJvdHRvbTowcHg7XG4gICAgcmlnaHQ6MjUlO1xuICAgIGxlZnQ6NTAlO1xuICAgIG1hcmdpbi1sZWZ0Oi03OHB4O1xufVxuXG4uY291bnRkb3due1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmctbGVmdDo1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudGRvd24gc3BhbntcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGQtTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDMwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnNvbGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uc29sZSBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbmFwYnV0dG9ue1xuICAgIFxufVxuXG5pe1xuICAgIGZvbnQtc3R5bGU6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMTEwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgNDklIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgODklIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5maW5nZXJwcmludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qYm9yZGVyOiBzb2xpZCAzcHggI0FBQjhCRTsqL1xuICB9XG4gIFxuICAuZmluZ2VycHJpbnQuc2Nhbm5pbmc6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLFxuICAgICAgcmdiYSgyMDYsIDcxLCA0NywgMCksXG4gICAgICByZ2JhKDIwNiwgNzEsIDQ3LCAuOCkpO1xuICAgIGFuaW1hdGlvbjogc2Nhbm5pbmcgLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzY2FubmluZyB7XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNjUycHgpOyB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n               \n                    <webcam \n                    [trigger]=\"triggerObservable\"\n                    [height]=\"480\" \n                    [width]=\"640\" \n                    (imageCapture)=\"handleImage($event)\" \n                    *ngIf=\"showWebcam\"></webcam>\n                    <div class=\"snapshot\" *ngIf=\"webcamImage\">\n                        <h2>Nice one!</h2>\n                        <img class=\"captured-image\" [src]=\"webcamImage.imageAsDataUrl\"/>\n                    </div>\n                    <div class=\"center picture-button-container\" style=\"width:70px;\">\n                        <button mat-raised-button  (click)=\"handleTakePictureButton();\" *ngIf=\"!webcamImage\">TAKE PICTURE</button>\n                        <!--<button mat-raised-button (click)=\"triggerReset();\" *ngIf=\"webcamImage\">CONTINUE</button>-->\n                    </div>\n\n                    <div class=\"countdown\" *ngIf=\"showCountdown\">\n                        <span>{{counter}}</span>\n                    </div>\n               \n          \n        <div *ngIf=\"loading\" class=\"fingerprint scanning\">\n            \n        </div>\n        <div id=\"text\" class=\"console\">\n                <span class=\"element\" ></span>\n        </div>\n        <!--\n        <mat-list class=\"webcam-tile\" *ngIf=\"aps !== undefined\">\n            <mat-list-item  *ngIf=\"aps.results[0] !== undefined\">\n                <span class=\"attributeTitle\"><strong>Gender:</strong>  {{ aps.results[0].Value}} ({{aps.results[0].Confidence | number:'1.0-0'}}%)</span> \n            </mat-list-item>\n            <mat-list-item *ngIf=\"aps.results[1] !== undefined\">\n                 <span class=\"attributeTitle\"><strong>Age Range:</strong>  {{ aps.results[1].Low}}  - {{ aps.results[1].High}} years old</span> \n            </mat-list-item>\n            <mat-list-item *ngIf=\"aps.results[2] !== undefined\">\n                <span class=\"attributeTitle\"><strong>Smile:</strong>  {{ aps.results[2].Value }} ({{aps.results[2].Confidence | number:'1.0-0'}}%)</span> \n            </mat-list-item>\n            <mat-list-item *ngIf=\"aps.results[3] !== undefined\">\n                <span class=\"attributeTitle\"><strong>Emotions:</strong>  \n                \n                <span *ngFor=\"let result of aps.results[3]\" >\n                  {{ result.Type }} ({{result.Confidence | number:'1.0-0'}}%), \n                </span>\n            </span> \n            </mat-list-item>\n            <mat-list-item *ngIf=\"aps.results[4] !== undefined\">\n                <span class=\"attributeTitle\"><strong>Mustache:</strong>  {{ aps.results[4].Value }} ({{aps.results[4].Confidence | number:'1.0-0'}}%)</span> \n            </mat-list-item>\n            <mat-list-item *ngIf=\"aps.results[5] !== undefined\">\n                <span class=\"attributeTitle\"><strong>Eyeglasses:</strong>  {{ aps.results[5].Value }} ({{aps.results[5].Confidence | number:'1.0-0'}}%)</span> \n            </mat-list-item>\n        </mat-list>\n        -->\n\n\n\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _analyze_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../analyze-photo.service */ "./src/app/analyze-photo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(aps, router) {
        this.aps = aps;
        this.router = router;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.webcamImage = null;
        this.showWebcam = true;
        this.loading = false;
        this.counter = 3;
        this.showCountdown = false;
        aps.results = {};
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.hack = function (val) {
        return Array.from(val);
    };
    ExperienceComponent.prototype.handleTakePictureButton = function () {
        this.startCountdown();
    };
    ExperienceComponent.prototype.triggerSnapshot = function () {
        var _this = this;
        this.loading = true;
        this.trigger.next();
        this.toggleWebcam();
        this.aps.doPOST(this.webcamImage.imageAsBase64).then(function () {
            console.log('got some data boooooy');
            console.log(_this.aps.results);
            _this.loading = false;
            // show analyzing screen
            _this.getPersonality();
        });
    };
    ExperienceComponent.prototype.getPersonality = function () {
        var _this = this;
        var drink = "Beer";
        var res = this.aps.results;
        var sex = res[0].Value;
        var age = res[1].Low;
        var smile = false;
        if (res[2].Value == true && res[2].Confidence > 70) {
            smile = true;
        }
        var emotion = res[3][0].Type + "(" + Math.round(res[3][0].Confidence) + "%)";
        var facialHair = false;
        if (res[4].Value == true && res[4].Confidence > 70) {
            facialHair = true;
        }
        var eyeglasses = false;
        if (res[5].Value == true && res[5].Confidence > 70) {
            eyeglasses = true;
        }
        if (sex == "Male") {
            // male track
            drink = "Old Fashioned";
            if (smile) {
                if (eyeglasses) {
                    drink = "The Prototype";
                }
                if (facialHair) {
                    drink = "Machine Learning";
                }
            }
            else {
                drink = "Mindset";
            }
        }
        else {
            // female track
            drink = "Cosmo";
            if (smile) {
                if (eyeglasses) {
                    drink = "The Journey";
                }
                else {
                    drink = "Disruption";
                }
            }
            else {
                if (eyeglasses) {
                    drink = "Innovation";
                }
                else {
                    drink = "Mindset";
                }
            }
        }
        console.log("Sex = " + sex + " | age: " + age + " | smile: " + smile + " | emotion: " + emotion + " | facial hair: " + facialHair + " | glasses: " + eyeglasses);
        console.log("DRINK = " + drink);
        // show the info
        var options = {
            strings: ["Sex: " + sex, "Estimated age: " + age, "Smiling: " + smile, "Emotion: " + emotion, "Beard / Mustache: " + facialHair, "Glasses: " + eyeglasses, "Mapping data to drink menu...", ".......... .......... ........... .........."],
            typeSpeed: 30
        };
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_5___default.a(".element", options);
        setTimeout(function () {
            _this.router.navigate(['thank-you', drink]);
        }, 15000);
        //
    };
    ExperienceComponent.prototype.startCountdown = function () {
        var _this = this;
        this.showCountdown = true;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        //after 5 seconds, emit value
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(4000);
        //when timer emits after 5s, complete source
        var example = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(timer$));
        //output: 0,1,2,3
        var subscribe = example.subscribe(function (val) {
            _this.counter--;
            console.log("counting down");
            if (_this.counter <= 0) {
                subscribe.unsubscribe();
                _this.triggerSnapshot();
                _this.counter = 3;
                _this.showCountdown = false;
            }
        });
    };
    ExperienceComponent.prototype.triggerReset = function () {
        this.webcamImage = null;
        this.aps.results = {};
        this.showWebcam = true;
    };
    ExperienceComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    ExperienceComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        //console.log(webcamImage.imageAsBase64);
    };
    Object.defineProperty(ExperienceComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [_analyze_photo_service__WEBPACK_IMPORTED_MODULE_3__["AnalyzePhotoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/kiosk-nav/kiosk-nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/kiosk-nav/kiosk-nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpb3NrLW5hdi9raW9zay1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/kiosk-nav/kiosk-nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/kiosk-nav/kiosk-nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/attract\">Attract</button>\n  <button mat-menu-item routerLink=\"/welcome\">Welcome</button>\n  <button mat-menu-item routerLink=\"/experience\">Experience</button>\n  <button mat-menu-item routerLink=\"/thank-you\">Thank You</button>\n</mat-menu>\n\n<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n  <mat-icon class=\"white-icon\">more_vert</mat-icon>\n</button>\n\n"

/***/ }),

/***/ "./src/app/kiosk-nav/kiosk-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kiosk-nav/kiosk-nav.component.ts ***!
  \**************************************************/
/*! exports provided: KioskNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KioskNavComponent", function() { return KioskNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KioskNavComponent = /** @class */ (function () {
    function KioskNavComponent(router) {
        this.router = router;
    }
    KioskNavComponent.prototype.ngOnInit = function () {
    };
    KioskNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kiosk-nav',
            template: __webpack_require__(/*! ./kiosk-nav.component.html */ "./src/app/kiosk-nav/kiosk-nav.component.html"),
            styles: [__webpack_require__(/*! ./kiosk-nav.component.css */ "./src/app/kiosk-nav/kiosk-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KioskNavComponent);
    return KioskNavComponent;
}());



/***/ }),

/***/ "./src/app/materials.module.ts":
/*!*************************************!*\
  !*** ./src/app/materials.module.ts ***!
  \*************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialsModule = /** @class */ (function () {
    function MaterialsModule() {
    }
    MaterialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]]
        })
    ], MaterialsModule);
    return MaterialsModule;
}());



/***/ }),

/***/ "./src/app/router-animations.ts":
/*!**************************************!*\
  !*** ./src/app/router-animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(s, a, o);
};
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            query(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                query(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
                ]),
                query(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                ]),
            ]),
            query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/thank-you/thank-you.component.css":
/*!***************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-title h1{\n    font-size: 40px;\n}\n\n.slide-title h2{\n    font-size: 22px;\n    font-family: \"Oswald-Light\";\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXRpdGxlIGgxe1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnNsaWRlLXRpdGxlIGgye1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGQtTGlnaHRcIjtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.html":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"center\" style=\"width:277px;\">\n        <img [src]=\"image\" />\n    </div>\n    <div class=\"slide-title\">\n            <h1>{{ drinkName }}</h1>\n            <h2>{{ ingredients }}</h2>\n        </div>\n    <div class=\"center\" style=\"width: 535px; text-align: center; font-family: 'Oswald-light';\">\n        <p>{{ description }}</p>\n        <button mat-raised-button routerLink=\"/welcome\">Done</button>\n    </div>\n"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.ts ***!
  \**************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.drinkName = "";
        this.ingredients = "";
        this.description = "";
        this.image = "";
        this.route.params.subscribe(function (params) {
            console.log(params.drink);
            switch (params.drink) {
                case "Machine Learning":
                    _this.drinkName = "MACHINE LEARNING";
                    _this.ingredients = "Gin | Lime | Chartreuse | Luxardo";
                    _this.description = "Keep smiling because this machine's learned a thing or two and it's suggesting a special combination of gin, lime, Chartreuse, and Luxardo.";
                    _this.image = "../../assets/images/machine-learning.svg";
                    break;
                case "The Journey":
                    _this.drinkName = "THE JOURNEY";
                    _this.ingredients = "St. George Vodka | Raspberry Cordial | Zucca | Tuaca | Prosecco topper";
                    _this.description = "We see that smile. Enjoy the journey not just the destination with this seasonal cocktail topped with some bubbly.";
                    _this.image = "../../assets/images/the-journey.svg";
                    break;
                case "Mindset":
                    _this.drinkName = "MINDSET";
                    _this.ingredients = "Cognac | Lemon | Champagne";
                    _this.description = "Even though you're not smiling, we can tell you've got the right mindset. This drink will keep you there with cognac and champagne.";
                    _this.image = "../../assets/images/mindset.svg";
                    break;
                case "The Prototype":
                    _this.drinkName = "THE PROTOTYPE";
                    _this.ingredients = "Bourbon | Cynar | Pomegranate | Lemon | Salt";
                    _this.description = "With those specs, you look like someone who's ready to prototype. This bourbon cocktail with pomegranate and lemon, however, requires no further prototyping.";
                    _this.image = "../../assets/images/the-prototype.svg";
                    break;
                case "Disruption":
                    _this.drinkName = "DISRUPTION";
                    _this.ingredients = "Reposado tequila | Pineapple | Lime | Jalapeño | Chartreuse | Chareau | Salt";
                    _this.description = "We can tell you're the kind of person that's disrupting your industry. This drink disrupts the typical drink menu with a kick of jalapeno and a splash of pineapple.";
                    _this.image = "../../assets/images/disruption.svg";
                    break;
                case "Innovation":
                    _this.drinkName = "INNOVATION";
                    _this.ingredients = "Pomegranate | Verjus | Ginger beer";
                    _this.description = "Have you been innovating lately? Looks like it. Try this innovative non-alcoholic drink combo of pomegranate, verjus, and ginger beer. ";
                    _this.image = "../../assets/images/innovation.svg";
                    break;
                case "Old Fashioned":
                    _this.drinkName = "OLD FASHIONED";
                    _this.ingredients = "Bourbon | Angostura Bitters | Sugar | Club Soda";
                    _this.description = "For the man that likes to keep things simple. Did you know the Old Fashioned is one of the world’s oldest cocktails? Of course you did.";
                    _this.image = "../../assets/images/old-fashioned.svg";
                    break;
                case "Cosmo":
                    _this.drinkName = "COSMOPOLITAN";
                    _this.ingredients = "Citrus Vodka | Cointreau | Lime | Cranberry Juice";
                    _this.description = "This cocktail is classic for a reason. Make Carrie Bradshaw proud and throw things back to the 90’s tonight.";
                    _this.image = "../../assets/images/cosmo.svg";
                    break;
            }
        });
    }
    ThankYouComponent.prototype.ngOnInit = function () {
        /*var thing = setTimeout(() => {
          this.router.navigate(['welcome']);
          thing = null;
          console.log("resseting to front bitch");
        }, 20000);
        */
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/thank-you/thank-you.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  \n}\n\n.block {\n  \n    float: left;\n    width: 80px;\n    height: 80px;\n  \n    margin: 5px;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhOztJQUViLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgXG59XG5cbi5ibG9jayB7XG4gIFxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgXG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slide-title\">\n    <h1>EVERYBODY'S A REGULAR</h1>\n</div>\n<div class=\"center\" style=\"width:277px;\">\n    <img src=\"./assets/images/robo-butler.svg\" />\n</div>\n<div class=\"center\" style=\"width: 535px; text-align: center;\">\n    <p>Unsure of what to order? Our robo-mixologist is here to help! Simply snap a photo using this tablet and our totally magical machine learning algorithms will devise something we think you’ll love.</p>\n    <button mat-raised-button routerLink=\"/experience\">Get Started</button>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: welcomeTransition, WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcomeTransition", function() { return welcomeTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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



var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(s, a, o);
};
var welcomeTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('welcomeTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    //data:image/jpeg;base64,
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            animations: [welcomeTransition],
            host: {
                '[@welcomeTransition]': ''
            },
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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

module.exports = __webpack_require__(/*! /Users/michael.goodman/Documents/Development/bitbucket_apps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map