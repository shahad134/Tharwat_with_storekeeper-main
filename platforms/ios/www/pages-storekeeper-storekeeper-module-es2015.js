(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-storekeeper-storekeeper-module"],{

/***/ "1yFL":
/*!*********************************************************!*\
  !*** ./src/app/pages/storekeeper/storekeeper.module.ts ***!
  \*********************************************************/
/*! exports provided: StorekeeperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorekeeperPageModule", function() { return StorekeeperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storekeeper_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storekeeper-routing.module */ "hZi8");
/* harmony import */ var _storekeeper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storekeeper.page */ "MuE7");
/* harmony import */ var _list_drivers_list_drivers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-drivers/list-drivers.component */ "oOvH");
/* harmony import */ var _orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders-details/orders-details.component */ "e24e");









let StorekeeperPageModule = class StorekeeperPageModule {
};
StorekeeperPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _storekeeper_routing_module__WEBPACK_IMPORTED_MODULE_5__["StorekeeperPageRoutingModule"]
        ],
        declarations: [_storekeeper_page__WEBPACK_IMPORTED_MODULE_6__["StorekeeperPage"], _list_drivers_list_drivers_component__WEBPACK_IMPORTED_MODULE_7__["ListDriversComponent"], _orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_8__["OrdersDetailsComponent"]]
    })
], StorekeeperPageModule);



/***/ }),

/***/ "KUj/":
/*!****************************************************************************!*\
  !*** ./src/app/pages/storekeeper/list-drivers/list-drivers.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.ion-button {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 3cm;\n}\n\n.ion-button2 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n\n.ion-button3 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n\n.secondary {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3QtZHJpdmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQVdBLCtFQUFBO0FBUEo7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVko7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFVRTtFQUNFLFlBQUE7QUFQSiIsImZpbGUiOiJsaXN0LWRyaXZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIC5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjNjbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGNtO1xuICAgIG1hcmdpbi10b3A6IDNjbTtcbiAgfVxuICAuaW9uLWJ1dHRvbjIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMC4zY207XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAwLjNjbTtcbiAgfVxuICAuaW9uLWJ1dHRvbjMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMC4zY207XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAwLjNjbTtcbiAgfVxuICAuc2Vjb25kYXJ5IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH0iXX0= */");

/***/ }),

/***/ "Mg3s":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storekeeper/list-drivers/list-drivers.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"grid1\">\n  <ion-list>\n    <div>\n\n      <ion-item *ngFor=\"let driver of drivers\" (click)=\"presentModal($event, driver.id)\" dir=\"rtl\">\n\n          <ion-avatar slot=\"start\">\n            <img\n              src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n            />\n          </ion-avatar>\n  \n            <h2><a class=\"secondary\" >{{ driver.name }}</a></h2>\n            <!-- <h2><a class=\"secondary\" href=\"/storekeeper/orders\">{{ driver.name }}</a></h2> -->\n\n      </ion-item>\n\n    </div>\n  </ion-list><br>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "MuE7":
/*!*******************************************************!*\
  !*** ./src/app/pages/storekeeper/storekeeper.page.ts ***!
  \*******************************************************/
/*! exports provided: StorekeeperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorekeeperPage", function() { return StorekeeperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_storekeeper_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./storekeeper.page.html */ "q/Vr");
/* harmony import */ var _storekeeper_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storekeeper.page.scss */ "yJU9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let StorekeeperPage = class StorekeeperPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.logout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("is_admin");
            this.navCtrl.navigateRoot("/login");
        };
    }
    ngOnInit() {
    }
};
StorekeeperPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
StorekeeperPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-storekeeper',
        template: _raw_loader_storekeeper_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_storekeeper_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StorekeeperPage);



/***/ }),

/***/ "hZi8":
/*!*****************************************************************!*\
  !*** ./src/app/pages/storekeeper/storekeeper-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StorekeeperPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorekeeperPageRoutingModule", function() { return StorekeeperPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_drivers_list_drivers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-drivers/list-drivers.component */ "oOvH");
/* harmony import */ var _storekeeper_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storekeeper.page */ "MuE7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-details/orders-details.component */ "e24e");







const routes = [
    {
        path: '',
        component: _storekeeper_page__WEBPACK_IMPORTED_MODULE_4__["StorekeeperPage"]
    },
    {
        path: 'list-drivers',
        component: _list_drivers_list_drivers_component__WEBPACK_IMPORTED_MODULE_3__["ListDriversComponent"],
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "common").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "frJH")).then(m => m.OrdersPageModule)
    },
    {
        path: 'orders-details',
        component: _orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_6__["OrdersDetailsComponent"],
    }
];
let StorekeeperPageRoutingModule = class StorekeeperPageRoutingModule {
};
StorekeeperPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StorekeeperPageRoutingModule);



/***/ }),

/***/ "oOvH":
/*!**************************************************************************!*\
  !*** ./src/app/pages/storekeeper/list-drivers/list-drivers.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListDriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDriversComponent", function() { return ListDriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_drivers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-drivers.component.html */ "Mg3s");
/* harmony import */ var _list_drivers_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-drivers.component.scss */ "KUj/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");









let ListDriversComponent = class ListDriversComponent {
    constructor(httpService, alertService, param, modalController, router, navCtrl) {
        this.httpService = httpService;
        this.alertService = alertService;
        this.param = param;
        this.modalController = modalController;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    presentModal($event, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // to send driver ID to next page
            this.param.id = id;
            this.router.navigate(['orders']);
            console.log('param id in present:', this.param.id);
        });
    }
    ionViewWillEnter() {
        this.httpService.makeGet('auth/driver_index').subscribe(drivers => {
            this.drivers = drivers;
            console.log('order_info: ', this.drivers);
        }, error => {
            console.log(error);
            this.alertService.presentToast(error['message']);
        });
    }
};
ListDriversComponent.ctorParameters = () => [
    { type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_7__["HttpServiceService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_8__["ParamService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ListDriversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-drivers',
        template: _raw_loader_list_drivers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_drivers_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListDriversComponent);



/***/ }),

/***/ "q/Vr":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storekeeper/storekeeper.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n      <ion-col>\n\n        <ion-button\n          href=\"/storekeeper/list-drivers\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          المناديب\n        </ion-button>\n\n        <ion-button\n          (click)=\"logout()\"\n          class=\"ion-button3\"\n          expand=\"block\"\n          color=\"white\">\n          تسجيل الخروج\n        </ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "yJU9":
/*!*********************************************************!*\
  !*** ./src/app/pages/storekeeper/storekeeper.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.ion-button {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 3cm;\n}\n\n.ion-button2 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n\n.ion-button3 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0b3Jla2VlcGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQVdBLCtFQUFBO0FBUEo7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVko7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFSSiIsImZpbGUiOiJzdG9yZWtlZXBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIC5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjNjbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGNtO1xuICAgIG1hcmdpbi10b3A6IDNjbTtcbiAgfVxuICAuaW9uLWJ1dHRvbjIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMC4zY207XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAwLjNjbTtcbiAgfVxuICAuaW9uLWJ1dHRvbjMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMC4zY207XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAwLjNjbTtcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-storekeeper-storekeeper-module-es2015.js.map