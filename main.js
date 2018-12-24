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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, componentArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentArray", function() { return componentArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: "support", component: _support_support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"] },
    { path: "details/:id", component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"] },
    { path: "**", component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] }
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

var componentArray = [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
    _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"],
    _support_support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"],
    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid bg-light\">\n  <app-navbar></app-navbar>\n</div>\n<div class=\"container-fluid page_intro\">\n<router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'movies';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _homeslider_homeslider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeslider/homeslider.component */ "./src/app/homeslider/homeslider.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _popular_popular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popular/popular.component */ "./src/app/popular/popular.component.ts");
/* harmony import */ var _news_boxffice_news_boxffice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-boxffice/news-boxffice.component */ "./src/app/news-boxffice/news-boxffice.component.ts");
/* harmony import */ var _coming_movies_coming_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coming-movies/coming-movies.component */ "./src/app/coming-movies/coming-movies.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["componentArray"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _homeslider_homeslider_component__WEBPACK_IMPORTED_MODULE_6__["HomesliderComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_7__["SupportComponent"],
                _popular_popular_component__WEBPACK_IMPORTED_MODULE_8__["PopularComponent"],
                _news_boxffice_news_boxffice_component__WEBPACK_IMPORTED_MODULE_9__["NewsBoxfficeComponent"],
                _coming_movies_coming_movies_component__WEBPACK_IMPORTED_MODULE_10__["ComingMoviesComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cat_title {\r\n    margin: 0px;\r\n    padding: 16px 0px;\r\n}\r\n.cat_content {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    padding-bottom: 16px;\r\n\r\n}\r\n.box {\r\n    width: 17%;\r\n    height: 70px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    border: 1px solid #4c4c4c;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.line {\r\n    height: 3px;\r\n    background-color: tomato;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n.info {\r\n    position: absolute;\r\n    height: 0%;\r\n    width: 100%;\r\n    top: 3px;\r\n    background-color: tomato;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.3s ease-in-out;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n.box:hover .info {\r\n    height: calc(100% - 3px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLHFCQUFxQjs7Q0FFeEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdF90aXRsZSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG59XHJcbi5jYXRfY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcblxyXG59XHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM0YzRjO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saW5lIHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ib3g6aG92ZXIgLmluZm8ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\" id=\"myPlace\">\n  <div class=\"container\">\n    <div class=\"cat_container\">\n      <h5 class=\"cat_title\">Category List</h5>\n      <div class=\"cat_content\">\n        <div class=\"box\" *ngFor=\"let cat of myCat\">\n          <span>{{cat.catName}}</span>\n          <div class=\"line\"></div>\n          <div class=\"info\">\n            <span>View Movies</span>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(data) {
        this.data = data;
        this.myCat = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var x = assistArray.filter(function (item) { return item.onlyCat == "same"; });
            _this.myCat = x;
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/coming-movies/coming-movies.component.css":
/*!***********************************************************!*\
  !*** ./src/app/coming-movies/coming-movies.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coming-title {\r\n    margin: 0px;\r\n    padding: 16px 0px;\r\n    \r\n}\r\n.coming_swiper {\r\n    height: 370px;\r\n}\r\n.swiper-wrapper {\r\n    margin-top: 16px;\r\n}\r\n.swiper-slide {\r\n    height: 180px;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    transition: 0.3s;\r\n    \r\n}\r\n.swiper-slide-active {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n    z-index: 999;\r\n}\r\n.coming_movie {\r\n    position: relative;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.info {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.3s ease-in-out;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    font-size: 14px;\r\n    font-weight: 800;\r\n}\r\n.coming_movie:hover .info {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nLW1vdmllcy9jb21pbmctbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztDQUVyQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7O0NBRXBCO0FBQ0Q7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbWluZy1tb3ZpZXMvY29taW5nLW1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWluZy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG4gICAgXHJcbn1cclxuLmNvbWluZ19zd2lwZXIge1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxufVxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBcclxufVxyXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuLmNvbWluZ19tb3ZpZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uY29taW5nX21vdmllOmhvdmVyIC5pbmZvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/coming-movies/coming-movies.component.html":
/*!************************************************************!*\
  !*** ./src/app/coming-movies/coming-movies.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    \n    <div class=\"coming_swiper\">\n      <div class=\"swiper-container\">\n        <h5 class=\"coming-title\">Upcoming Movies</h5>\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide coming_movie\" *ngFor=\"let movie of myMovies\" [style.background-image]=\"'url('+movie.moviePhoto+')'\">\n            <div class=\"info\">\n             {{movie.movieName}}\n            </div>\n          </div>\n          \n        </div>\n        <!-- Add Pagination -->\n       \n      </div>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/coming-movies/coming-movies.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/coming-movies/coming-movies.component.ts ***!
  \**********************************************************/
/*! exports provided: ComingMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingMoviesComponent", function() { return ComingMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComingMoviesComponent = /** @class */ (function () {
    function ComingMoviesComponent(elementRef, data) {
        this.elementRef = elementRef;
        this.data = data;
        this.myMovies = [];
    }
    ComingMoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var x = assistArray.find(function (item) { return item.catId == 9; });
            var z = x.moviesList;
            _this.myMovies = z;
            setTimeout(function () {
                _this.swiper = new Swiper(_this.elementRef.nativeElement.querySelector('.swiper-container'), {
                    slidesPerView: 5,
                    spaceBetween: 0,
                    centeredSlides: true,
                });
            }, 0);
        });
    };
    ComingMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-movies',
            template: __webpack_require__(/*! ./coming-movies.component.html */ "./src/app/coming-movies/coming-movies.component.html"),
            styles: [__webpack_require__(/*! ./coming-movies.component.css */ "./src/app/coming-movies/coming-movies.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"]])
    ], ComingMoviesComponent);
    return ComingMoviesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer_container {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 32px;\r\n}\r\n.footer_container div:nth-child(2) {\r\n    margin: 0px 64px;\r\n}\r\n.footer_container div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #4c4c4c;\r\n}\r\n.footer_container div img:nth-child(2) {\r\n    margin: 0px 8px;\r\n}\r\n.flexyy {\r\n    flex-direction: column;\r\n}\r\n.flexyy h5 {\r\n    color: #4c4c4c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxufVxyXG4uZm9vdGVyX2NvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogMHB4IDY0cHg7XHJcbn1cclxuLmZvb3Rlcl9jb250YWluZXIgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzRjNGM0YztcclxufVxyXG4uZm9vdGVyX2NvbnRhaW5lciBkaXYgaW1nOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLmZsZXh5eSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5mbGV4eXkgaDUge1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    <div class=\"footer_container\">\n      <div>Mouhab &copy;2018</div>\n      <div class=\"flexyy\">\n        <img src=\"assets/images/logo.png\"> \n        <h5>MoviesNight</h5>\n       \n      </div>\n      <div>\n        <img src=\"assets/images/facebook.png\">\n        <img src=\"assets/images/twitter.png\">\n        <img src=\"assets/images/instagram.png\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home_container\">\n  <app-homeslider></app-homeslider>\n  <app-category></app-category>\n  <app-popular></app-popular>\n  \n  <app-news-boxffice></app-news-boxffice>\n  <app-coming-movies></app-coming-movies>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homeslider/homeslider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/homeslider/homeslider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .swiper-slide {\r\n    /* text-align: center; */\r\n    font-size: 18px;\r\n    color: white;\r\n    \r\n  \r\n  }\r\n  .banner_info {\r\n      position: absolute;\r\n      width: 280px;\r\n      z-index: 3;\r\n      left: 64px;\r\n      bottom: calc(50% - 127px);\r\n  }\r\n  .banner_title {\r\n    position: relative;\r\n    height: 90px;\r\n    width: 250px;\r\n    z-index: 2;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n      \r\n  }\r\n  .playbtn {\r\n      margin: 0px 8px;\r\n  }\r\n  .bg_container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  p, span {\r\n    font-size: 14px;\r\n  }\r\n  span {\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXNsaWRlci9ob21lc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkO0VBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7OztHQUdkO0VBS0Q7TUFDSSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFdBQVc7TUFDWCxXQUFXO01BQ1gsMEJBQTBCO0dBQzdCO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9COztHQUVyQjtFQUNEO01BQ0ksZ0JBQWdCO0dBQ25CO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3Qix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVzbGlkZXIvaG9tZXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5iYW5uZXJfaW5mbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBsZWZ0OiA2NHB4O1xyXG4gICAgICBib3R0b206IGNhbGMoNTAlIC0gMTI3cHgpO1xyXG4gIH1cclxuICAuYmFubmVyX3RpdGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICB9XHJcbiAgLnBsYXlidG4ge1xyXG4gICAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgfVxyXG4gIC5iZ19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIHAsIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/homeslider/homeslider.component.html":
/*!******************************************************!*\
  !*** ./src/app/homeslider/homeslider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro_swiper\">\n<div class=\"swiper-container\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\" *ngFor=\"let movie of slideMovies\">\n    <div class=\"bg_container\" [style.background-image]=\"'url('+movie.bgImage+')'\">\n        \n        <div class=\"banner_title\" (click)=\"goDetail(movie)\">\n          <span>Watch</span>\n          <span class=\"playbtn\">\n            <img src=\"assets/images/playbtn.png\">\n          </span>\n          <span>Now</span>\n        </div>\n        <div class=\"banner_info\">\n          <h3>{{movie.movieName}}</h3>\n          <p>{{movie.movieTime}}</p>\n          <p [ngStyle]=\"twoLine\">{{movie.movieDisc}}</p>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"swiper-pagination\"></div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/homeslider/homeslider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/homeslider/homeslider.component.ts ***!
  \****************************************************/
/*! exports provided: HomesliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesliderComponent", function() { return HomesliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
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



var HomesliderComponent = /** @class */ (function () {
    function HomesliderComponent(elementRef, myData, router) {
        this.elementRef = elementRef;
        this.myData = myData;
        this.router = router;
        this.slideMovies = [];
        this.twoLine = {
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            OellipsisLastline: 2,
            webkitLineClamp: 2,
            mozBineBlamp: 2,
            webkitBoxOrient: "vertical",
            mozBoxOrient: "vertical",
            msBoxOrient: "vertical",
            boxOrient: "vertical",
        };
    }
    HomesliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myData.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var arrayByCatName = assistArray.find(function (item) { return item.catName == 'SlideMovies'; });
            var arrayId = arrayByCatName.catId;
            var arraylist = arrayByCatName.moviesList;
            _this.slideMovies = arraylist;
            _this.catId = arrayId;
            setTimeout(function () {
                _this.swiper = new Swiper(_this.elementRef.nativeElement.querySelector('.swiper-container'), {
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    },
                });
            }, 0);
        });
    };
    HomesliderComponent.prototype.goDetail = function (movie) {
        var movieId = movie.movieId;
        this.router.navigate(["/details", movieId, { "CategoryId": this.catId }]);
    };
    HomesliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homeslider',
            template: __webpack_require__(/*! ./homeslider.component.html */ "./src/app/homeslider/homeslider.component.html"),
            styles: [__webpack_require__(/*! ./homeslider.component.css */ "./src/app/homeslider/homeslider.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomesliderComponent);
    return HomesliderComponent;
}());



/***/ }),

/***/ "./src/app/movie-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/movie-data.service.ts ***!
  \***************************************/
/*! exports provided: MovieDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDataService", function() { return MovieDataService; });
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


var MovieDataService = /** @class */ (function () {
    function MovieDataService(http) {
        this.http = http;
        this.url = "./assets/data/movies.json";
    }
    MovieDataService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    MovieDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieDataService);
    return MovieDataService;
}());



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail_container {\r\n    padding: 0px !important;\r\n}\r\n.bg_image {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.bg_shadow {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 1, 0, 0.5);\r\n}\r\n.intro_heading {\r\n    padding: 0px 16px;\r\n    position: relative;\r\n}\r\n.movie_photo {\r\n    position: absolute;\r\n    width: auto;\r\n    top: 225px;\r\n}\r\n.movie_photo img {\r\n    width: 200px;\r\n    height: 300px;\r\n}\r\n.movie_data {\r\n    padding: 0px;\r\n}\r\n/* .movie_data .container {\r\n} */\r\n.mydata {\r\n    width: calc(100% - 200px);\r\n    margin-left: 202px;\r\n    padding: 16px;\r\n    color: white;\r\n    margin-top: 11px;\r\n}\r\n.mydata p {\r\n    margin: 0px;\r\n    color: #dbdbdb;\r\n    margin-bottom: 4px;\r\n    font-size: 15px;\r\n    \r\n}\r\n.title {\r\n    border: 1px solid #4c4c4c;\r\n    padding: 16px;\r\n    margin-bottom: 16px;\r\n}\r\n.title h5 {\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n}\r\n.time {\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    color: tomato;\r\n}\r\n.time span {\r\n    margin-right: 8px;\r\n}\r\n.title .fa {\r\n    color: tomato;\r\n    font-size: 13px;\r\n}\r\n.details {\r\n    padding: 16px;\r\n}\r\n.details span {\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    width: 130px;\r\n    font-size: 15px;\r\n    \r\n}\r\n.rate span {\r\n    font-weight: bold;\r\n    \r\n}\r\n.discription {\r\n    padding: 16px;\r\n}\r\n.discription p {\r\n    width: 560px;\r\n    text-align: justify;\r\n}\r\n.trailer {\r\n    padding: 16px;\r\n    position: relative;\r\n}\r\n.trailer h5 {\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\niframe {\r\n    height: 460px !important;\r\n    width: 560px;\r\n}\r\n.black {\r\n    height: 60px;\r\n    width: 100%;\r\n    background-color: black;\r\n    position: absolute;\r\n\r\n}\r\n.related_movies {\r\n    margin-bottom: 32px;\r\n    padding: 0px 32px;\r\n}\r\n.swiper-slide {\r\n    background-color: #555;\r\n    color: white;\r\n}\r\n.other_title {\r\n    margin: 0px;\r\n    margin-bottom: 16px;\r\n}\r\n.other_swiper {\r\n    height: 180px;\r\n}\r\n.other_box {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.other_box img {\r\n    width: 100%;\r\n    height: 180px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n.other_box:hover .info {\r\n    right: 0px;\r\n}\r\n.info {\r\n    background-color: rgba(0, 1, 0, 0.9);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.3s ease-in-out;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: 20;\r\n    right: 100%;\r\n    \r\n}\r\n.info h6 {\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0NBQ3hDO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFLRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJO0FBQ0o7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0NBRW5CO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLGtCQUFrQjs7Q0FFckI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1COztDQUV0QjtBQU1EO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZOztDQUVmO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsX2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYmdfaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJnX3NoYWRvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMSwgMCwgMC41KTtcclxufVxyXG4uaW50cm9faGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubW92aWVfcGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0b3A6IDIyNXB4O1xyXG59XHJcbi5tb3ZpZV9waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLm1vdmllX2RhdGEge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi8qIC5tb3ZpZV9kYXRhIC5jb250YWluZXIge1xyXG59ICovXHJcbi5teWRhdGEge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDJweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59XHJcblxyXG4ubXlkYXRhIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2RiZGJkYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG59XHJcbi50aXRsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM0YzRjO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLnRpdGxlIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi50aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHRvbWF0bztcclxufVxyXG4udGltZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi50aXRsZSAuZmEge1xyXG4gICAgY29sb3I6IHRvbWF0bztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscyBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLnJhdGUgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcbi5kaXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5kaXNjcmlwdGlvbiBwIHtcclxuICAgIHdpZHRoOiA1NjBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLnRyYWlsZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udHJhaWxlciBoNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuaWZyYW1lIHtcclxuICAgIGhlaWdodDogNDYwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1NjBweDtcclxufVxyXG4uYmxhY2sge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucmVsYXRlZF9tb3ZpZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ub3RoZXJfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5vdGhlcl9zd2lwZXIge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxufVxyXG4ub3RoZXJfYm94IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ub3RoZXJfYm94IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ub3RoZXJfYm94OmhvdmVyIC5pbmZvIHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxLCAwLCAwLjkpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5pbmZvIGg2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid detail_container\">\r\n    <div class=\"bg_image\" [style.background-image]=\"'url('+movie.bgImage+')'\">\r\n        <div class=\"bg_shadow\">\r\n            <div class=\"container intro_heading\">\r\n                <div class=\"movie_photo\">\r\n                    <img [src]=\"movie.bgPoster || ''\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"movie_data\">\r\n        <div class=\"container\">\r\n            <div class=\"mydata\">\r\n              <div class=\"title\">\r\n                <h5>{{movie.movieName}}</h5>\r\n                <p class=\"time\"><span><i class=\"fa fa-clock\"></i></span>{{movie.movieTime}}</p>\r\n                <div class=\"rate\">\r\n                <span>Rate: </span>\r\n                <span><i class=\"fa fa-star\"></i></span>\r\n                <span><i class=\"fa fa-star\"></i></span>\r\n                <span><i class=\"fa fa-star\"></i></span>\r\n                <span><i class=\"fa fa-star\"></i></span>\r\n                <span><i class=\"fa fa-star-half-alt\"></i></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"details\">\r\n                <p><span>Release date:</span>{{movie.release}}</p>\r\n                <p><span>Director:</span>{{movie.director}}</p>\r\n                <p><span>Box office:</span>{{movie.boxOffice}}</p>\r\n                <p><span>Story by:</span>{{movie.story}}</p>\r\n                <p><span>Producers:</span>{{movie.producers}}</p>\r\n              </div>\r\n              <div class=\"discription\">\r\n                <p> \r\n                   {{movie.movieDisc}}\r\n                </p>\r\n              </div> \r\n              <div class=\"trailer\">\r\n                  <h5>{{movie.movieName}} Trailer</h5>\r\n                  <!-- <div class=\"black\"></div> -->\r\n                  <!-- <video width=\"560px\" height=\"460px\" controls>\r\n                    <source [src]=\"movie.trailer\" type=\"video/mp4\">\r\n                  </video> -->\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   <div class=\"related_movies container\">\r\n        <h5 class=\"other_title\">You May Also Like..</h5>\r\n        <div class=\"swiper-container other_swiper\">\r\n            <div class=\"swiper-wrapper\">\r\n                <div class=\"swiper-slide\" *ngFor=\"let other of others\">\r\n                    <div class=\"other_box\">\r\n                        <img [src]=\"other.bgImage || ''\"/>\r\n                        <div class=\"info\">\r\n                            <h6>{{other.movieName}}</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
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



var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(elementRef, data, route) {
        this.elementRef = elementRef;
        this.data = data;
        this.route = route;
        this.movie = [];
        this.others = [];
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            var movieId = param.get("id");
            var catIdd = param.get("CategoryId");
            _this.movieIdd = movieId;
            _this.catId = catIdd;
        });
        this.data.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var x = assistArray.find(function (item) { return item.catId == _this.catId; });
            var z = x.moviesList;
            var finalDetail = z.find(function (item) { return item.movieId == _this.movieIdd; });
            _this.movie = finalDetail;
            var neewArray = [];
            neewArray = data;
            var otherMovie = neewArray.find(function (item) { return item.catId == 7; });
            var u = otherMovie.moviesList;
            _this.others = u;
            setTimeout(function () {
                _this.swiper = new Swiper(_this.elementRef.nativeElement.querySelector('.swiper-container'), {
                    slidesPerView: 5,
                    spaceBetween: 18,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                });
            }, 0);
        });
    };
    MovieDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movie-details/movie-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, li {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">MoviesNight</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goDown()\">Category</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/boxoffice\">Box Office</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">News</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/support\" routerLinkActive=\"active\">Support</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goDown = function () {
        var x = document.getElementById("myPlace");
        x.scrollIntoView();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news-boxffice/news-boxffice.component.css":
/*!***********************************************************!*\
  !*** ./src/app/news-boxffice/news-boxffice.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".both_container {\r\n    display: flex;\r\n    \r\n    padding: 16px 0px;\r\n    padding-top: 32px;\r\n    height: 400px;\r\n}\r\n.news_container {\r\n    width: 70%;\r\n}\r\n.boxoffice_container {\r\n    width: 30%;\r\n    padding: 16px;\r\n    padding-bottom: 0px;\r\n}\r\n.swiper-slide {\r\n    border: 1px solid #4c4c4c;\r\n    display: block;\r\n    padding: 16px;\r\n}\r\n.swiper-container {\r\n    height: calc(100% - 40px);\r\n}\r\n.office_title {\r\n    padding-bottom: 8px;\r\n}\r\n.boxoffice_data {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.boxoffice_data span:last-child {\r\n    margin-left: 16px;\r\n}\r\n.news_title {\r\n    padding: 16px;\r\n}\r\n.news_title h5{\r\n    margin: 0px;\r\n}\r\n.news_content {\r\n    height: calc(100% - 56px);\r\n    overflow-y: auto;\r\n    padding-right: 16px;\r\n}\r\n.news_box {\r\n    display: flex;\r\n    height: 47.4%;\r\n    border: 1px solid #4c4c4c;\r\n    margin-bottom: 2.4%;\r\n}\r\n.news_box:last-child {\r\n    margin-bottom: 0px;\r\n}\r\n.left_box {\r\n    width: 20%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.left_box img {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n.right_box {\r\n    width: 80%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content : center;\r\n    padding-left: 16px;\r\n}\r\n.right_box button {\r\n    width: 140px;\r\n    padding: 6px 0px;\r\n    font-size: 15px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: black;\r\n    color: white;\r\n    border: 1px solid #4c4c4c;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1ib3hmZmljZS9uZXdzLWJveGZmaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjOztJQUVkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksY0FBYztJQUNkLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1ib3hmZmljZS9uZXdzLWJveGZmaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90aF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLm5ld3NfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuLmJveG9mZmljZV9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRjNGM0YztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG59XHJcbi5vZmZpY2VfdGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4uYm94b2ZmaWNlX2RhdGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJveG9mZmljZV9kYXRhIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG4ubmV3c190aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5uZXdzX3RpdGxlIGg1e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ld3NfY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU2cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuLm5ld3NfYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDQ3LjQlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRjNGM0YztcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNCU7XHJcbn1cclxuLm5ld3NfYm94Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5sZWZ0X2JveCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGVmdF9ib3ggaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5yaWdodF9ib3gge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcbi5yaWdodF9ib3ggYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM0YzRjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/news-boxffice/news-boxffice.component.html":
/*!************************************************************!*\
  !*** ./src/app/news-boxffice/news-boxffice.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    <div class=\"both_container\">\n      <div class=\"news_container\">\n        <div class=\"news_title\">\n          <h5>HotBuzz! (News)</h5>\n        </div>  \n        <div class=\"news_content\">\n         \n\n          <div class=\"news_box\" *ngFor=\"let news of myNews\">\n              <div class=\"left_box\">\n                <img src={{news.newsPhoto}}>\n              </div>\n              <div class=\"right_box\">\n                <p>{{news.newsDetail}}</p>\n                <button (click)=\"moreDetail(news)\">More Details</button>\n              </div>\n          </div>\n\n          \n        </div>\n      </div>\n      <div class=\"boxoffice_container\">\n          <div class=\"office_title\">\n            <h5>Box Office</h5>\n          </div>\n          <div class=\"swiper-container\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\" *ngFor=\"let movie of myMovies\">\n                  <div class=\"boxoffice_data\">\n                    <h6>{{movie.movieName}}</h6>\n                    <p>\n                      <span>Total Gross:</span>\n                      <span>{{movie.totalGross}}</span>\n                    </p>\n                </div>\n                </div>\n                \n              </div>\n              <!-- Add Pagination -->\n              <div class=\"swiper-pagination\"></div>\n            </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/news-boxffice/news-boxffice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/news-boxffice/news-boxffice.component.ts ***!
  \**********************************************************/
/*! exports provided: NewsBoxfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBoxfficeComponent", function() { return NewsBoxfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
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



var NewsBoxfficeComponent = /** @class */ (function () {
    function NewsBoxfficeComponent(elementRef, data, router) {
        this.elementRef = elementRef;
        this.data = data;
        this.router = router;
        this.myMovies = [];
        this.myNews = [];
    }
    NewsBoxfficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var x = assistArray.find(function (item) { return item.catId == 8; });
            var z = x.moviesList;
            _this.myMovies = z;
            var a = assistArray.find(function (item) { return item.catId == 10; });
            var e = a.newsList;
            var catId = a.catId;
            _this.myNews = e;
            _this.catId = catId;
            setTimeout(function () {
                _this.swiper = new Swiper(_this.elementRef.nativeElement.querySelector('.swiper-container'), {
                    direction: 'vertical',
                    slidesPerGroup: 3,
                    slidesPerView: 3,
                    spaceBetween: 16,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }, 0);
        });
    };
    NewsBoxfficeComponent.prototype.moreDetail = function (news) {
        var newsId = news.newsId;
        this.router.navigate(["/newsRoom", newsId, { "CategoryId": this.catId }]);
    };
    NewsBoxfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-boxffice',
            template: __webpack_require__(/*! ./news-boxffice.component.html */ "./src/app/news-boxffice/news-boxffice.component.html"),
            styles: [__webpack_require__(/*! ./news-boxffice.component.css */ "./src/app/news-boxffice/news-boxffice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsBoxfficeComponent);
    return NewsBoxfficeComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
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

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/popular/popular.component.css":
/*!***********************************************!*\
  !*** ./src/app/popular/popular.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popular_title {\r\n    padding: 16px 0px;\r\n}\r\n.popular_swiper {\r\n    height: 350px;\r\n    padding: 0px 0px 16px 0px;\r\n}\r\n.swiper-slide {\r\n    background-color: tomato;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    transition: 0.3s;\r\n}\r\n.swiper-slide.swiper-slide-active {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n.movie_container {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: yellowgreen;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.tomato_line {\r\n    height: 3px;\r\n    width: 100%;\r\n    background-color: tomato\r\n}\r\n.movie_title {\r\n    padding: 16px 0px;\r\n    text-align: center;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n.hidden_info {\r\n    height: 40%;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    position: absolute;\r\n    bottom: -40%;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.hidden_info button {\r\n    padding: 8px 32px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: rgba(0, 0, 0, 1);\r\n    color: white;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n}\r\n.movie_container:hover .hidden_info {\r\n    bottom: 0px;\r\n}\r\n.relative {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 16px;\r\n    text-align: center;\r\n    \r\n}\r\n.relative .tomato_line {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdWxhci9wb3B1bGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7Q0FDN0I7QUFDQTtJQUNHLHlCQUF5QjtJQUN6Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUNBQWlDO0NBQ3BDO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7O0NBRXRCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTs7Q0FFZiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXIvcG9wdWxhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVsYXJfdGl0bGUge1xyXG4gICAgcGFkZGluZzogMTZweCAwcHg7XHJcbn1cclxuLnBvcHVsYXJfc3dpcGVyIHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE2cHggMHB4O1xyXG59XHJcbiAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi5tb3ZpZV9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udG9tYXRvX2xpbmUge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0b1xyXG59XHJcbi5tb3ZpZV90aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG4uaGlkZGVuX2luZm8ge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTQwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5oaWRkZW5faW5mbyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogOHB4IDMycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5tb3ZpZV9jb250YWluZXI6aG92ZXIgLmhpZGRlbl9pbmZvIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcbi5yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4ucmVsYXRpdmUgLnRvbWF0b19saW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/popular/popular.component.html":
/*!************************************************!*\
  !*** ./src/app/popular/popular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light popular_title\">\n  <div class=\"container\">\n    <h5>Most Popular Movies</h5>\n  </div>\n</div>\n<div class=\"container-fluid bg-light\">\n  <div class=\"container popular_swiper\">\n  <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" *ngFor=\"let movie of listMovies\">\n            <div class=\"movie_container\" [style.background-image]=\"'url('+movie.bgImage+')'\">\n              <div class=\"tomato_line\"></div>\n              <div class=\"movie_title\">\n                <h6>{{movie.movieName}}</h6>\n              </div>\n              <div class=\"hidden_info\">\n                <div class=\"relative\">\n                    <p [ngStyle]=\"twoLine\">{{movie.movieDisc}}</p>\n                    <button (click)=\"goDetail(movie)\">Watch Now</button>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/popular/popular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popular/popular.component.ts ***!
  \**********************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-data.service */ "./src/app/movie-data.service.ts");
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



var PopularComponent = /** @class */ (function () {
    function PopularComponent(elementRef, data, router) {
        this.elementRef = elementRef;
        this.data = data;
        this.router = router;
        this.listMovies = [];
        this.twoLine = {
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            OellipsisLastline: 2,
            webkitLineClamp: 2,
            mozBineBlamp: 2,
            webkitBoxOrient: "vertical",
            mozBoxOrient: "vertical",
            msBoxOrient: "vertical",
            boxOrient: "vertical",
        };
    }
    PopularComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            var assistArray = [];
            assistArray = data;
            var arrayById = assistArray.find(function (item) { return item.catId == 7; });
            var arrayId = arrayById.catId;
            var x = arrayById.moviesList;
            _this.listMovies = x;
            _this.catId = arrayId;
            setTimeout(function () {
                _this.swiper = new Swiper(_this.elementRef.nativeElement.querySelector('.swiper-container'), {
                    slidesPerView: 3,
                    spaceBetween: 8,
                    centeredSlides: true,
                });
            }, 0);
        });
    };
    PopularComponent.prototype.goDetail = function (movie) {
        var movieId = movie.movieId;
        this.router.navigate(["/details", movieId, { "CategoryId": this.catId }]);
    };
    PopularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular',
            template: __webpack_require__(/*! ./popular.component.html */ "./src/app/popular/popular.component.html"),
            styles: [__webpack_require__(/*! ./popular.component.css */ "./src/app/popular/popular.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _movie_data_service__WEBPACK_IMPORTED_MODULE_1__["MovieDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PopularComponent);
    return PopularComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
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

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AngularLearn\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map