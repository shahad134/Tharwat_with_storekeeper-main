(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-driver-module"],{

/***/ "0FUp":
/*!*******************************************************!*\
  !*** ./src/app/pages/driver/driver-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DriverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageRoutingModule", function() { return DriverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver.page */ "FKGi");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ "j0SS");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "nKbU");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finish/finish.component */ "XIzR");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "8tzE");








const routes = [
    {
        path: '',
        component: _driver_page__WEBPACK_IMPORTED_MODULE_3__["DriverPage"]
    },
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"],
        children: [
            {
                path: '',
                redirectTo: "new"
            },
            {
                path: "finish",
                component: _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__["finishComponent"]
            },
            {
                path: 'new',
                component: _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"]
            },
        ]
    },
];
let DriverPageRoutingModule = class DriverPageRoutingModule {
};
DriverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverPageRoutingModule);



/***/ }),

/***/ "2KCK":
/*!***********************************************************!*\
  !*** ./src/app/pages/driver/finish/finish.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5pc2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5DBH":
/*!*******************************************!*\
  !*** ./src/app/services/param.service.ts ***!
  \*******************************************/
/*! exports provided: ParamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamService", function() { return ParamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ParamService = class ParamService {
    constructor() { }
};
ParamService.ctorParameters = () => [];
ParamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParamService);



/***/ }),

/***/ "6HZM":
/*!*************************************************************************!*\
  !*** ./src/app/pages/driver/order-details/order-details.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQVJGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFaRjs7QUFpQkE7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkRjs7QUFpQkE7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkRjs7QUFpQkE7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLGlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtBQWRGIiwiZmlsZSI6Im9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICBoZWlnaHQ6IDk1JTtcbiAgcGFkZGluZzogMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbn1cblxuLnJvdzEge1xuICBoZWlnaHQ6IDE5MCU7XG4gIG1hcmdpbi10b3A6IDBjbTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiYSgyMjcsIDIyNywgMjMxLCAwLjk3MykgMCUsXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiKDIzMywgMjMwLCAyMzApIDAlLFxuICAgIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlXG4gICk7XG59XG5cbi5wZDUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmFjY2VwdCB7XG4gIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTYlO1xufVxuXG4ucmVqZWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBzaWx2ZXIgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "8tzE":
/*!*********************************************************!*\
  !*** ./src/app/pages/driver/orders/orders.component.ts ***!
  \*********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "vsBh");
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component.scss */ "fuVX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-service.service */ "mKmO");






let OrdersComponent = class OrdersComponent {
    constructor(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
    }
    ngOnInit() { }
    goBack() {
        this.navCtrl.navigateBack('/driver');
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"] }
];
OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersComponent);



/***/ }),

/***/ "A+0v":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/history/history.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-list>\n      <ion-item *ngFor=\"let order of order_info\"  (click)=\"presentModal($event, order.order_number)\" dir=\"rtl\" >\n      <!-- <ion-item *ngFor=\"let order of order_info\"> -->\n        <!-- <ion-item *ngFor=\"let connect of connect_info\"> -->\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n            />\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ order.order_number }}</h2>\n            <!-- <p>قيد التنفيذ</p> -->\n\n            <div *ngFor=\"let connect of connect_info\">\n              <div *ngIf=\"order.order_number == connect.order_number\">\n                <p>{{ connect.birth_date }} - {{ connect.time }}</p>\n              </div>\n            </div>\n          \n          </ion-label>\n        </ion-item>\n      <!-- </ion-item> -->\n      </ion-list><br>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "CG+H":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/finish/finish.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n  <ion-grid class=\"grid1\">\n    <ion-list>\n      <ion-item *ngFor=\"let order of order_info\" dir=\"rtl\">\n      <!-- <ion-item *ngFor=\"let order of order_info\"> -->\n        <!-- <ion-item *ngFor=\"let connect of connect_info\"> -->\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n            />\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ order.order_number }}</h2>\n            <p>منتهي</p>\n\n            <!-- <p>{{ order.status }}</p> -->\n\n            <div *ngFor=\"let connect of connect_info\">\n              <div *ngIf=\"order.order_number == connect.order_number\">\n                <p>{{ connect.birth_date }} - {{ connect.time }}</p>\n              </div>\n            </div>\n          \n          </ion-label>\n        </ion-item>\n      <!-- </ion-item> -->\n      </ion-list><br>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "DlNB":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/order-details -accept/order-details -accept.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1 row1\">\n    <ion-row style=\"padding: 14px\">\n      <ion-col class=\"content\">\n        <ion-row>\n          <div style=\"width: 100%\" class=\"center bold fheading\" dir=\"rtl\">\n            تفاصيل الطلب\n          </div>\n        </ion-row>\n        <br/>\n        \n        <div *ngFor=\"let connect of connect_info\" dir=\"rtl\">\n        \n          <ion-row>\n            <ion-col class=\"bold\">الاسم</ion-col>\n            <ion-col>{{ connect.name }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"bold\">رقم الجوال</ion-col>\n            <ion-col>{{ connect.numberphone }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"bold\">تاريخ الاستلام</ion-col>\n            <ion-col>{{ connect.birth_date }}</ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col class=\"bold\">وقت الاستلام</ion-col>\n            <ion-col>{{ connect.time }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\"> الحي</ion-col>\n            <ion-col>{{ connect.neighborhood_name }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">رقم البيت</ion-col>\n            <ion-col>{{ connect.house_number }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">اسم الشارع</ion-col>\n            <ion-col>{{ connect.street_name }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">أقرب معلم</ion-col>\n            <ion-col>{{ connect.nearest_landmark }}</ion-col>\n          </ion-row>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <!-- Checkboxes in a List -->\n    <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item *ngFor=\"let f of arr\" dir=\"rtl\">\n            <ion-label>{{ f.val }}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"f.isChecked\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n    </ion-row>\n\n\n\n    <ion-row class=\"pd5\">\n      <ion-col style=\"text-align: center\">\n        <ion-button\n          (click)=\"submit()\"\n          type=\"button\"\n          fill=\"solid\"\n          class=\"accept\">\n         انهاء\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"pd5\">\n      <ion-col>\n        <ion-button\n          (click)=\"dismiss()\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          إغلاق\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "FKGi":
/*!*********************************************!*\
  !*** ./src/app/pages/driver/driver.page.ts ***!
  \*********************************************/
/*! exports provided: DriverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPage", function() { return DriverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driver_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driver.page.html */ "rCWc");
/* harmony import */ var _driver_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver.page.scss */ "adCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let DriverPage = class DriverPage {
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
DriverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
DriverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver',
        template: _raw_loader_driver_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DriverPage);



/***/ }),

/***/ "JQWR":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/driver/order-details -accept/order-details -accept.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL29yZGVyLWRldGFpbHMlMjAtYWNjZXB0L29yZGVyLWRldGFpbHMlMjAtYWNjZXB0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vb3JkZXItZGV0YWlscyAtYWNjZXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBV0EsK0VBQUE7QUNSRjs7QURlQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDWkY7O0FEaUJBO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FDZEY7O0FEaUJBO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNkRjs7QURpQkE7RUFDRSxpQkFBQTtBQ2RGOztBRGlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZEY7O0FEaUJBO0VBQ0Usa0JBQUE7QUNkRiIsImZpbGUiOiJvcmRlci1kZXRhaWxzIC1hY2NlcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICBoZWlnaHQ6IDk1JTtcbiAgcGFkZGluZzogMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbn1cblxuLnJvdzEge1xuICBoZWlnaHQ6IDE5MCU7XG4gIG1hcmdpbi10b3A6IDBjbTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiYSgyMjcsIDIyNywgMjMxLCAwLjk3MykgMCUsXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiKDIzMywgMjMwLCAyMzApIDAlLFxuICAgIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlXG4gICk7XG59XG5cbi5wZDUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmFjY2VwdCB7XG4gIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTYlO1xufVxuXG4ucmVqZWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBzaWx2ZXIgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5ncmlkMSB7XG4gIGhlaWdodDogOTUlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3cxIHtcbiAgaGVpZ2h0OiAxOTAlO1xuICBtYXJnaW4tdG9wOiAwY207XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIyNywgMjI3LCAyMzEsIDAuOTczKSAwJSwgd2hpdGUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTllNmU2IDAlLCByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYzBiYWJhIDAlLCByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlKTtcbn1cblxuLnBkNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5hY2NlcHQge1xuICAtLWJhY2tncm91bmQ6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk2JTtcbn1cblxuLnJlamVjdCB7XG4gIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICB3aWR0aDogNDglO1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogc2lsdmVyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZoZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "Q9Hu":
/*!***********************************************!*\
  !*** ./src/app/pages/driver/driver.module.ts ***!
  \***********************************************/
/*! exports provided: DriverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-routing.module */ "0FUp");
/* harmony import */ var _driver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver.page */ "FKGi");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "8tzE");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-details/order-details.component */ "ZCUc");
/* harmony import */ var _order_details_accept_order_details_accept_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-details -accept/order-details -accept.component */ "tpZm");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "nKbU");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./history/history.component */ "j0SS");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finish/finish.component */ "XIzR");













let DriverPageModule = class DriverPageModule {
};
DriverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverPageRoutingModule"]
        ],
        declarations: [_driver_page__WEBPACK_IMPORTED_MODULE_6__["DriverPage"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_12__["finishComponent"], _order_details_accept_order_details_accept_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsAcceptComponent"]]
    })
], DriverPageModule);



/***/ }),

/***/ "RBha":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/new/new.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"grid1\">\n  <ion-list>\n    <div>\n\n\n      <ion-item *ngFor=\"let order of order_info \" (click)=\"presentModal($event, order.order_number)\" dir=\"rtl\">\n\n          <ion-avatar slot=\"start\">\n            <img\n              src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n            />\n          </ion-avatar>\n\n          <ion-label>\n            <h2>{{ order.order_number }}</h2>\n            <p>انتظار القبول</p>\n            <p>{{ order.status }}</p>\n\n            <div *ngFor=\"let connect of connect_info\">\n            <div *ngIf=\"order.order_number == connect.order_number\">\n              <p>{{ connect.birth_date }} - {{ connect.time }}</p>\n            </div>\n          </div>\n\n          </ion-label>\n\n      </ion-item>\n\n\n\n    </div>\n  </ion-list><br>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "WkuH":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/order-details/order-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1 row1\">\n    <ion-row style=\"padding: 14px\">\n      <ion-col class=\"content\">\n        <ion-row>\n          <div style=\"width: 100%\" class=\"center bold fheading\" dir=\"rtl\">\n            تفاصيل الطلب\n          </div>\n        </ion-row>\n        <br/>\n\n        <div *ngFor=\"let connect of connect_info\" dir=\"rtl\">\n        \n          <ion-row>\n            <ion-col class=\"bold\">الاسم</ion-col>\n            <ion-col>{{ connect.name }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"bold\">رقم الجوال</ion-col>\n            <ion-col>{{ connect.numberphone }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"bold\">تاريخ الاستلام</ion-col>\n            <ion-col>{{ connect.birth_date }}</ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col class=\"bold\">وقت الاستلام</ion-col>\n            <ion-col>{{ connect.time }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\"> الحي</ion-col>\n            <ion-col>{{ connect.neighborhood_name }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">رقم البيت</ion-col>\n            <ion-col>{{ connect.house_number }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">اسم الشارع</ion-col>\n            <ion-col>{{ connect.street_name }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"bold\">أقرب معلم</ion-col>\n            <ion-col>{{ connect.nearest_landmark }}</ion-col>\n          </ion-row>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <ion-button\n          (click)=\"submit()\"\n          type=\"button\"\n          fill=\"solid\"\n          class=\"accept\">\n          قبول\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"pd5\">\n      <ion-col>\n        <ion-button\n          (click)=\"dismiss()\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          إغلاق\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "XIzR":
/*!*********************************************************!*\
  !*** ./src/app/pages/driver/finish/finish.component.ts ***!
  \*********************************************************/
/*! exports provided: finishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishComponent", function() { return finishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finish_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finish.component.html */ "CG+H");
/* harmony import */ var _finish_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finish.component.scss */ "2KCK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-details/order-details.component */ "ZCUc");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");










let finishComponent = class finishComponent {
    constructor(modalController, navCtrl, httpService, authService, env) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.authService = authService;
        this.env = env;
    }
    ngOnInit() { }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.httpService.makeGet('auth/api_receive_orders_finish').subscribe(
        // user => {
        //   this.user = user;
        // },
        order_info => {
            this.order_info = order_info;
            console.log(order_info);
        });
        this.httpService.makeGet('auth/index').subscribe(connect_info => {
            this.connect_info = connect_info;
            console.log(connect_info);
        });
    }
};
finishComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] }
];
finishComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_finish_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finish_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], finishComponent);



/***/ }),

/***/ "Z9XF":
/*!*************************************************************!*\
  !*** ./src/app/pages/driver/history/history.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ZCUc":
/*!***********************************************************************!*\
  !*** ./src/app/pages/driver/order-details/order-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-details.component.html */ "WkuH");
/* harmony import */ var _order_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.component.scss */ "6HZM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");








let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(modalController, actionSheetController, httpService, alertService, navCtrl, param) {
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.httpService = httpService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.param = param;
    }
    // public form = [
    //   { val: 'Pepperoni', isChecked: true },
    //   { val: 'Sausage', isChecked: false },
    //   { val: 'Mushroom', isChecked: false }
    // ];
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    submit() {
        let data = {
            order_number: [this.order_number]
        };
        this.order_number = this.param.order_number;
        this.httpService.post('auth/update_status', data).subscribe(data => {
            // this.alertService.presentToast("تم تحديث البيانات بنجاح");
        }, error => {
            console.log(error.error);
        }, () => {
            this.modalController.dismiss();
        });
    }
    ionViewWillEnter() {
        this.order_number = this.param.order_number;
        let name = 'order_number';
        this.httpService.getWithParam('auth/receive_donation', this.order_number, name).subscribe(donations_info => {
            this.donations_info = donations_info;
            console.log('donations_info inside');
            console.log(donations_info);
        }, error => {
            console.log(error);
        });
        for (let i in this.donations_info) {
            console.log('for loop: ', i);
        }
        this.order_number = this.param.order_number;
        this.httpService.getWithParam('auth/receive_infoconnect', this.order_number, name).subscribe(connect_info => {
            this.connect_info = connect_info;
            console.log('connect_info inside22');
            console.log(connect_info);
        }, error => {
            console.log(error);
        });
    }
};
OrderDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__["ParamService"] }
];
OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailsComponent);



/***/ }),

/***/ "adCc":
/*!***********************************************!*\
  !*** ./src/app/pages/driver/driver.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.ion-button {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 3cm;\n}\n\n.ion-button2 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n\n.ion-button3 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RyaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQVBGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVZGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUkYiLCJmaWxlIjoiZHJpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkMSB7XG4gIGhlaWdodDogOTUlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3cxIHtcbiAgaGVpZ2h0OiAxOTAlO1xuICBtYXJnaW4tdG9wOiAwY207XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYigyMzMsIDIzMCwgMjMwKSAwJSxcbiAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICA0NWRlZyxcbiAgICByZ2IoMTkyLCAxODYsIDE4NikgMCUsXG4gICAgcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg1NikgMTAwJVxuICApO1xufVxuLmlvbi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjNjbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgbWFyZ2luLXRvcDogM2NtO1xufVxuLmlvbi1idXR0b24yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjNjbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRjbTtcbiAgbWFyZ2luLXRvcDogMC4zY207XG59XG4uaW9uLWJ1dHRvbjMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDAuM2NtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNGNtO1xuICBtYXJnaW4tdG9wOiAwLjNjbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "e0ne":
/*!*****************************************************!*\
  !*** ./src/app/pages/driver/new/new.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fuVX":
/*!***********************************************************!*\
  !*** ./src/app/pages/driver/orders/orders.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 90%;\n  margin-top: 57px;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.tab-selected {\n  border-bottom: 3px solid #3880ff;\n}\n\nion-tab-button {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBV0EsK0VBQUE7QUFQRjs7QUFjQTtFQUNFLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0FBWEYiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQxIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi10b3A6IDU3cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvdzEge1xuICBoZWlnaHQ6IDE5MCU7XG4gIG1hcmdpbi10b3A6IDBjbTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiYSgyMjcsIDIyNywgMjMxLCAwLjk3MykgMCUsXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiKDIzMywgMjMwLCAyMzApIDAlLFxuICAgIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlXG4gICk7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM4ODBmZjtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "j0SS":
/*!***********************************************************!*\
  !*** ./src/app/pages/driver/history/history.component.ts ***!
  \***********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.component.html */ "A+0v");
/* harmony import */ var _history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.component.scss */ "Z9XF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_details_accept_order_details_accept_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-details -accept/order-details -accept.component */ "tpZm");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");












let HistoryComponent = class HistoryComponent {
    constructor(modalController, navCtrl, httpService, authService, env, alertService, param) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.authService = authService;
        this.env = env;
        this.alertService = alertService;
        this.param = param;
    }
    ngOnInit() {
        this.refreshValues();
    }
    ngOnDestroy() {
        this.refreshValues();
    }
    presentModal($event, order_number) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.param.order_number = order_number;
            const modal = yield this.modalController.create({
                component: _order_details_accept_order_details_accept_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsAcceptComponent"],
                cssClass: 'my-custom-class'
            });
            modal.onDidDismiss().then(() => {
                setTimeout(() => {
                    this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(order_info => {
                        this.order_info = order_info;
                        console.log(this.order_info);
                    }, error => {
                        console.log(error);
                        this.alertService.presentToast(error['message']);
                    });
                }, 10);
            });
            // if(modal.onWillDismiss()){
            //   console.log('-------------------')
            // setInterval(() => {  
            //   this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(
            //     order_info => {
            //       this.order_info = order_info;
            //       console.log(this.order_info);
            //     },
            //     error => {
            //       console.log(error);
            //       this.alertService.presentToast(error['message']);
            //     },
            //   )
            // }, 6000);
            // }
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        // this.param.order_number = this.order_number;
        // let name = 'order_number'
        // this.httpService.getWithParam('auth/receive_infoconnect', this.param.order_number, name).subscribe(
        //   (connect_info: any) => {
        //   this.connect_info = connect_info;
        //   },
        //   error => {
        //     console.log(error);
        //     this.alertService.presentToast(error['message']);
        //   },
        // )
        // console.log('connect: ', this.connect_info);
        // var i = 0;
        // var id = setInterval(function(){alert('count '+(i++));
        //   this.httpService.getWithParam('auth/receive_infoconnect', this.param.order_number, name).subscribe(
        //       (connect_info: any) => {
        //       this.connect_info = connect_info;
        //     });
        // }, 2000);
        // clearTimeout(id);
        //   this.refreshValues();
        // this.param.order_number = this.order_number;
        // // for(let i = 0; i <3; i++){
        //   // this.interval = setInterval(() => {  
        //     this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(
        //       order_info => {
        //         this.order_info = order_info;
        //         console.log(this.order_info);
        //       },
        //       error => {
        //         console.log(error);
        //         this.alertService.presentToast(error['message']);
        //       },
        //     )
        //     this.httpService.makeGet('auth/receive_infoconnect').subscribe(
        //       connect_info => {
        //         this.connect_info = connect_info;
        //         console.log(connect_info);
        //       }
        //     )
        // }, 6000); 
        // }
        // return () => {
        //   console.log("inside the return of the observable");
        //   clearInterval();
        // }
        // const interval: ReturnType<typeof setTimeout> = setTimeout(() => {
        // for(let i = 0; i <3; i++){
        // this.interval = setInterval(() => {
        //   this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(
        //   order_info => {
        //     this.order_info = order_info;
        //     console.log(this.order_info);
        //   },
        //   error => {
        //     console.log(error);
        //     this.alertService.presentToast(error['message']);
        //   },
        //   )
        //   this.httpService.makeGet('auth/receive_infoconnect').subscribe(
        //     connect_info => {
        //       this.connect_info = connect_info;
        //       console.log(connect_info);
        //     }
        //   )
        // }, 500);
        // clearInterval(this.interval); //stop that interval
        // }
        // clearInterval(this.interval); //stop that interval
        // console.log('stop that interval');
        // setInterval(function(){ 
        //   console.log("Oooo Yeaaa!");
        // }, 2000);//run this thang every 2 seconds
    }
    // ionViewWillEnter() {
    //   this.refreshValues();
    // }
    ionViewDidEnter() {
        this.refreshValues();
        // //Start periodic Refresh
        // this.interval = setInterval(() => {
        //   this.refreshValues()
        // }, 6000);
    }
    ionViewWillLeave() {
        this.refreshValues();
    }
    ionViewDidLeave() {
        this.refreshValues();
        // //Stop refresh
        // clearTimeout(this.interval);
    }
    refreshValues() {
        // for(let i = 0; i <3; i++){
        // this.interval = setInterval(() => {  
        this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(order_info => {
            this.order_info = order_info;
            console.log(this.order_info);
        }, error => {
            console.log(error);
            this.alertService.presentToast(error['message']);
        });
        this.httpService.makeGet('auth/index').subscribe(connect_info => {
            this.connect_info = connect_info;
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_9__["ParamService"] }
];
HistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryComponent);



/***/ }),

/***/ "mKmO":
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");








let HttpServiceService = class HttpServiceService {
    constructor(http, env, authService, storage) {
        this.http = http;
        this.env = env;
        this.authService = authService;
        this.storage = storage;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.isLoggedIn = false;
    }
    makeGet(endpoint) {
        // let options = {headers: new HttpHeaders({ 
        //   'Content-Type': 'application/json',
        //  })  };
        return this.http.get(this.env.API_URL + endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(this.env.API_URL + endpoint)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
    }
    makePost(endpoint, clothes, furniture) {
        // let options = {headers: new HttpHeaders({ 
        //   'Content-Type': 'application/json',
        //  })  };
        return this.http.post(this.env.API_URL + endpoint, { clothes: clothes, furniture: furniture })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(this.env.API_URL + endpoint)));
    }
    post(endpoint, data) {
        // let options = {headers: new HttpHeaders({ 
        //   'Content-Type': 'application/json',
        //  })  };
        return this.http.post(this.env.API_URL + endpoint, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(this.env.API_URL + endpoint)));
    }
    get(endpoint) {
        return this.http.get(this.env.API_URL + endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(this.env.API_URL + endpoint)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
    }
    getWithParam(endpoint, param, name) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(name, param); //Create new HttpParams
        return this.http.get(this.env.API_URL + endpoint, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(this.env.API_URL + endpoint)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        console.log(message);
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] }
];
HttpServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpServiceService);



/***/ }),

/***/ "nKbU":
/*!***************************************************!*\
  !*** ./src/app/pages/driver/new/new.component.ts ***!
  \***************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new.component.html */ "RBha");
/* harmony import */ var _new_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new.component.scss */ "e0ne");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-details/order-details.component */ "ZCUc");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");












let NewComponent = class NewComponent {
    constructor(modalController, navCtrl, httpService, authService, env, alertService, param) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.authService = authService;
        this.env = env;
        this.alertService = alertService;
        this.param = param;
    }
    ngOnInit() { }
    presentModal($event, order_number) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.param.order_number = order_number;
            console.log('param order_number:', this.param.order_number);
            const modal = yield this.modalController.create({
                component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.param.order_number = this.order_number;
        this.httpService.makeGet('auth/api_receive_orders_wait').subscribe(order_info => {
            this.order_info = order_info;
            console.log('order_info: ', this.order_info);
        }, error => {
            console.log(error);
            this.alertService.presentToast(error['message']);
        });
        this.httpService.makeGet('auth/index').subscribe(connect_info => {
            this.connect_info = connect_info;
            console.log(connect_info);
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__["ParamService"] }
];
NewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new',
        template: _raw_loader_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewComponent);



/***/ }),

/***/ "nUzI":
/*!******************************************!*\
  !*** ./src/app/models/receivedOrders.ts ***!
  \******************************************/
/*! exports provided: receivedOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receivedOrders", function() { return receivedOrders; });
class receivedOrders {
}


/***/ }),

/***/ "rCWc":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/driver.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n      <ion-col>\n        <ion-button\n          href=\"/driver/orders\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          الطلبات\n        </ion-button>\n<!-- \n\n        <ion-button  href=\"/donation\" \n          class=\"ion-button\"  \n          expand=\"block\"\n          color=\"white\"> \n          (مستخدم(طلب جديد\n        </ion-button>\n   \n        <ion-button  href=\"/home/orders\" \n          class=\"ion-button2\"   \n          expand=\"block\" \n          color=\"white\">\n          (مستخدم)طلباتي\n        </ion-button> -->\n\n\n        <!-- <ion-button  href=\"\" class=\"ion-button2\"   expand=\"block\" color=\"white\" ></ion-button> -->\n        <ion-button\n          (click)=\"logout()\"\n          class=\"ion-button3\"\n          expand=\"block\"\n          color=\"white\">\n          تسجيل الخروج\n        </ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-button href=\"/orders\">Orders</ion-button> -->\n</ion-content>");

/***/ }),

/***/ "tpZm":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/driver/order-details -accept/order-details -accept.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrderDetailsAcceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsAcceptComponent", function() { return OrderDetailsAcceptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_details_accept_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-details -accept.component.html */ "DlNB");
/* harmony import */ var _order_details_accept_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details -accept.component.scss */ "JQWR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");
/* harmony import */ var src_app_models_receivedOrders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/receivedOrders */ "nUzI");









let OrderDetailsAcceptComponent = class OrderDetailsAcceptComponent {
    constructor(modalController, actionSheetController, httpService, alertService, navCtrl, param) {
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.httpService = httpService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.param = param;
        this.isChecked = true;
        this.receivedOrders = new src_app_models_receivedOrders__WEBPACK_IMPORTED_MODULE_8__["receivedOrders"];
        this.furniture_information = [];
        this.clothes_information = [];
        this.dishes_information = [];
        this.electrical_tools_information = [];
        this.baby_things_information = [];
        this.luxuries_information = [];
        this.accessories_and_mobiles_information = [];
        this.medical_devices_information = [];
        this.miscellaneous_information = [];
        this.arr = [
            { val: '', isChecked: false }
        ];
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    submit() {
        let data = {
            order_number: [this.order_number]
        };
        this.order_number = this.param.order_number;
        this.httpService.post('auth/update_status_finish', data).subscribe(data => {
            this.alertService.presentToast("تم تحديث البيانات بنجاح");
        }, error => {
            console.log(error.error);
        }, () => {
            this.modalController.dismiss();
        });
        if (this.arr[0] && (this.arr[0].isChecked == true)) {
            this.furniture_information.push(this.arr[0].val);
        }
        if (this.arr[1] && (this.arr[1].isChecked == true)) {
            this.clothes_information.push(this.arr[1].val);
        }
        if (this.arr[2] && (this.arr[2].isChecked == true)) {
            this.dishes_information.push(this.arr[2].val);
        }
        if (this.arr[3] && (this.arr[3].isChecked == true)) {
            this.electrical_tools_information.push(this.arr[3].val);
        }
        if (this.arr[4] && (this.arr[4].isChecked == true)) {
            this.baby_things_information.push(this.arr[4].val);
        }
        if (this.arr[5] && (this.arr[5].isChecked == true)) {
            this.luxuries_information.push(this.arr[5].val);
        }
        if (this.arr[6] && (this.arr[6].isChecked == true)) {
            this.medical_devices_information.push(this.arr[6].val);
        }
        if (this.arr[7] && (this.arr[7].isChecked == true)) {
            this.accessories_and_mobiles_information.push(this.arr[7].val);
        }
        if (this.arr[8] && (this.arr[8].isChecked == true)) {
            this.miscellaneous_information.push(this.arr[8].val);
        }
        // push received orders
        this.receivedOrders.order_number = this.order_number.toString();
        this.receivedOrders.furniture = this.furniture_information.toString().replace(/"/g, "");
        this.receivedOrders.clothes = this.clothes_information.toString().replace(/"/g, "");
        this.receivedOrders.dishes = this.dishes_information.toString().replace(/"/g, "");
        this.receivedOrders.electrical_tools = this.electrical_tools_information.toString().replace(/"/g, "");
        this.receivedOrders.baby_things = this.baby_things_information.toString().replace(/"/g, "");
        this.receivedOrders.luxuries = this.luxuries_information.toString().replace(/"/g, "");
        this.receivedOrders.medical_devices = this.medical_devices_information.toString().replace(/"/g, "");
        this.receivedOrders.accessories_and_mobiles = this.accessories_and_mobiles_information.toString().replace(/"/g, "");
        this.receivedOrders.miscellaneous = this.miscellaneous_information.toString().replace(/"/g, "");
        let data1 = {
            receivedOrders: this.receivedOrders
        };
        console.log('data1: ', data1);
        this.httpService.post('auth/add_orders', data1).subscribe(data1 => {
            this.alertService.presentToast("تم تحديث البيانات بنجاح");
        }, error => {
            console.log(error.error);
        }, () => {
            this.modalController.dismiss();
        });
    }
    ionViewWillEnter() {
        this.order_number = this.param.order_number;
        let name = 'order_number';
        this.httpService.getWithParam('auth/receive_donation', this.order_number, name).subscribe(donations_info => {
            this.donations_info = donations_info;
            console.log('donations_info inside', donations_info);
        }, error => {
            console.log(error);
        }, () => {
            this.form = [
                { val: this.donations_info[0].furniture, isChecked: false },
                { val: this.donations_info[0].clothes, isChecked: false },
                { val: this.donations_info[0].dishes, isChecked: false },
                { val: this.donations_info[0].electrical_tools, isChecked: false },
                { val: this.donations_info[0].baby_things, isChecked: false },
                { val: this.donations_info[0].luxuries, isChecked: false },
                { val: this.donations_info[0].accessories_and_mobiles, isChecked: false },
                { val: this.donations_info[0].medical_devices, isChecked: false },
                { val: this.donations_info[0].miscellaneous, isChecked: false },
            ];
            for (var i in this.form) {
                if (this.form[i].val !== 'null') {
                    this.arr.push({ 'val': JSON.stringify(this.form[i].val), 'isChecked': false });
                }
            }
            this.arr.shift();
            console.log('Arr Data: ', this.arr);
        });
        this.order_number = this.param.order_number;
        this.httpService.getWithParam('auth/receive_infoconnect', this.order_number, name).subscribe(connect_info => {
            this.connect_info = connect_info;
        }, error => {
            console.log(error);
        });
    }
};
OrderDetailsAcceptComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__["ParamService"] }
];
OrderDetailsAcceptComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details-accept',
        template: _raw_loader_order_details_accept_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_accept_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailsAcceptComponent);



/***/ }),

/***/ "vsBh":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/orders/orders.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\" selectedTab=\"new\">\n      <ion-tab-button tab=\"new\"> الطلبات الجديدة </ion-tab-button>\n      <ion-tab-button tab=\"history\"> الطلبات الحالية </ion-tab-button>\n      <ion-tab-button tab=\"finish\"> الطلبات القديمة </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-driver-driver-module-es2015.js.map