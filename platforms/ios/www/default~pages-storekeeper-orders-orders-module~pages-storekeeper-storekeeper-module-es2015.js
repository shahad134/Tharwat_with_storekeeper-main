(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-storekeeper-orders-orders-module~pages-storekeeper-storekeeper-module"],{

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

/***/ "e24e":
/*!******************************************************************************!*\
  !*** ./src/app/pages/storekeeper/orders-details/orders-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrdersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailsComponent", function() { return OrdersDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-details.component.html */ "eT+c");
/* harmony import */ var _orders_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-details.component.scss */ "gJFK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service.service */ "mKmO");
/* harmony import */ var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/param.service */ "5DBH");
/* harmony import */ var src_app_models_storeKeeper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/storeKeeper */ "fb76");









let OrdersDetailsComponent = class OrdersDetailsComponent {
    constructor(modalController, actionSheetController, httpService, alertService, navCtrl, param) {
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.httpService = httpService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.param = param;
        this.isChecked = false;
        this.storeKeeper = new src_app_models_storeKeeper__WEBPACK_IMPORTED_MODULE_8__["storeKeeper"];
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
        this.storeKeeper.order_number = this.order_number.toString();
        this.storeKeeper.furniture = this.furniture_information.toString().replace(/"/g, "");
        this.storeKeeper.clothes = this.clothes_information.toString();
        this.storeKeeper.dishes = this.dishes_information.toString();
        this.storeKeeper.electrical_tools = this.electrical_tools_information.toString();
        this.storeKeeper.baby_things = this.baby_things_information.toString();
        this.storeKeeper.luxuries = this.luxuries_information.toString();
        this.storeKeeper.medical_devices = this.medical_devices_information.toString();
        this.storeKeeper.accessories_and_mobiles = this.accessories_and_mobiles_information.toString();
        this.storeKeeper.miscellaneous = this.miscellaneous_information.toString();
        let data = {
            storeKeeper: this.storeKeeper
        };
        this.httpService.post('auth/store_storekeeper_d', data).subscribe(data => {
            this.alertService.presentToast("تم تحديث البيانات بنجاح");
        }, error => {
            console.log(error.error);
        }, () => {
            this.modalController.dismiss();
        });
        console.log('Array: ', this.arr);
    }
    ionViewWillEnter() {
        this.order_number = this.param.order_number;
        let name = 'order_number';
        this.httpService.getWithParam('auth/receive_orders', this.order_number, name).subscribe(receivedOrders => {
            this.receivedOrders = receivedOrders;
            console.log('order_number inside: ', receivedOrders);
        }, error => {
            console.log(error);
        }, () => {
            this.form = [
                { val: this.receivedOrders[0].furniture, isChecked: false },
                { val: this.receivedOrders[0].clothes, isChecked: false },
                { val: this.receivedOrders[0].dishes, isChecked: false },
                { val: this.receivedOrders[0].electrical_tools, isChecked: false },
                { val: this.receivedOrders[0].baby_things, isChecked: false },
                { val: this.receivedOrders[0].luxuries, isChecked: false },
                { val: this.receivedOrders[0].accessories_and_mobiles, isChecked: false },
                { val: this.receivedOrders[0].medical_devices, isChecked: false },
                { val: this.receivedOrders[0].miscellaneous, isChecked: false },
            ];
            for (var i in this.form) {
                if (this.form[i].val !== null) {
                    this.arr.push({ 'val': JSON.stringify(this.form[i].val), 'isChecked': false });
                }
            }
            this.arr.shift();
            console.log('Arr Data: ', this.arr);
        });
    }
};
OrdersDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__["ParamService"] }
];
OrdersDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders-details',
        template: _raw_loader_orders_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersDetailsComponent);



/***/ }),

/***/ "eT+c":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storekeeper/orders-details/orders-details.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1 row1\">\n\n    <ion-row style=\"padding: 14px\">\n      <ion-col class=\"content\">\n\n        <ion-row>\n          <div style=\"width: 100%\" class=\"center bold fheading\" dir=\"rtl\">\n            تفاصيل الطلب\n          </div>\n        </ion-row>\n\n        <!-- Checkboxes in a List -->\n        <ion-row>\n          <ion-col>\n            <ion-list>\n              <ion-item *ngFor=\"let f of arr\" dir=\"rtl\">\n                  <ion-label>{{ f.val }}</ion-label>\n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"f.isChecked\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"pd5\">\n      <ion-col style=\"text-align: center\">\n        <ion-button\n          (click)=\"submit()\"\n          type=\"button\"\n          fill=\"solid\"\n          class=\"accept\">\n          انهاء\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"pd5\">\n      <ion-col>\n        <ion-button\n          (click)=\"dismiss()\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          إغلاق\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "fb76":
/*!***************************************!*\
  !*** ./src/app/models/storeKeeper.ts ***!
  \***************************************/
/*! exports provided: storeKeeper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeeper", function() { return storeKeeper; });
class storeKeeper {
}


/***/ }),

/***/ "gJFK":
/*!********************************************************************************!*\
  !*** ./src/app/pages/storekeeper/orders-details/orders-details.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBV0EsK0VBQUE7QUFSSjs7QUFlRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBWko7O0FBaUJFO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBZEo7O0FBaUJFO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxpQkFBQTtBQWRKOztBQWlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBZEo7O0FBaUJFO0VBQ0Usa0JBQUE7QUFkSiIsImZpbGUiOiJvcmRlcnMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkMSB7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xuICB9XG4gIFxuICAucm93MSB7XG4gICAgaGVpZ2h0OiAxOTAlO1xuICAgIG1hcmdpbi10b3A6IDBjbTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgcmdiYSgyMjcsIDIyNywgMjMxLCAwLjk3MykgMCUsXG4gICAgICByZ2IoMjU1LCAyNTUsIDI1NSkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigyMzMsIDIzMCwgMjMwKSAwJSxcbiAgICAgIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgcmdiKDE5MiwgMTg2LCAxODYpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg1NikgMTAwJVxuICAgICk7XG4gIH1cbiAgXG4gIC5wZDUge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICBcbiAgLmFjY2VwdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuICBcbiAgLnJlamVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxuICBcbiAgLmlvbi1idXR0b24ge1xuICAgIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBzaWx2ZXIgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAiXX0= */");

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



/***/ })

}]);
//# sourceMappingURL=default~pages-storekeeper-orders-orders-module~pages-storekeeper-storekeeper-module-es2015.js.map