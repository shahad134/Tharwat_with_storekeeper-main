(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-auth-register-register-module"],{

/***/ "40d1":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-no-border {\n  height: 9%;\n  padding: 0px;\n  align-items: center;\n}\n\n.img-right {\n  text-align: center;\n  margin-left: 0.3cm;\n}\n\n.grid1 {\n  height: 90%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 17px;\n  background: #fffffffb;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(228, 217, 217, 0.75);\n}\n\n.row1 {\n  height: 230%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #5f5d5d 0%, rgba(231, 231, 231, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 3px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxzREFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFHQSw2RUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBUUoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1uby1ib3JkZXJ7XG4gICAgaGVpZ2h0OiA5JTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuLmltZy1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjUwY207XG4gICAgbWFyZ2luLWxlZnQ6IC4zY207XG59XG4uZ3JpZDEge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5jb250YWllci1sb2dpbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxN3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZmYjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMjI4LCAyMjgsIDIyOCwgMC41NDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjIyLCAyMjIsIDAuODIyKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMjI4LCAyMTcsIDIxNywgMC43NSk7XG59XG4ucm93MSB7XG4gICAgaGVpZ2h0OiAyMzAlO1xuICAgIG1hcmdpbi10b3A6IDBjbTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxNDUsIDE0NSwgMTUxLCAwLjk3MykgMCUsIHJnYmEoMTc3LCAxNzcsIDE4MiwgMC45MDQpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTUxLCAxNDgsIDE0OCkgMCUsIHJnYmEoMTM2LCAxMzAsIDEzMCwgMC45MDQpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDk1LCA5MywgOTMpIDAlLCByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuOCkgMTAwJSk7XG59XG4ucm93MiB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5pb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "NKrf":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "tvH6");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "faZD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.page */ "SixS");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_pages_custmer_rest_rest_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/custmer/rest/rest.page */ "afyf");









let LoginPage = class LoginPage {
    constructor(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.checked = false; // amon
    }
    ngOnInit() {
    }
    rememberMe() {
        this.checked = !this.checked;
        // console.log("checked: " + this.checked);//it is working !!!
    }
    // Dismiss Login Modal
    dismissLogin() {
        this.modalController.dismiss();
    }
    // On Register button tap, dismiss login modal and open register modal
    registerModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissLogin();
            const registerModal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
            });
            return yield registerModal.present();
        });
    }
    login(form) {
        this.authService.login(form.value.email, form.value.password).subscribe(data => {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('is_admin', data.is_admin);
            this.alertService.presentToast("تم تسجيل الدخول");
            console.log(data);
        }, error => {
            this.alertService.presentToast("خطأ في اسم المستخدم أو كلمة المرور");
            console.log(error);
        }, () => {
            this.dismissLogin();
            this.rot = localStorage.getItem('is_admin');
            this.navCtrl.navigateRoot(this.rot);
        });
    }
    showForgetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forgetModal = yield this.modalController.create({
                component: src_app_pages_custmer_rest_rest_page__WEBPACK_IMPORTED_MODULE_8__["RestPage"],
            });
            return yield forgetModal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "SixS":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "ak2j");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "40d1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "NKrf");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");








let RegisterPage = class RegisterPage {
    constructor(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    // Dismiss Register Modal
    // On Login button tap, dismiss Register modal and open login Modal
    loginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissRegister();
            const loginModal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
    dismissRegister() {
        this.modalController.dismiss();
    }
    register(form) {
        console.log(form.value.name, form.value.email);
        this.authService.register(form.value.name, form.value.email, form.value.password).subscribe(data => {
            this.authService.login(form.value.email, form.value.password).subscribe(data => {
            }, error => {
                console.log(error);
            }, () => {
                this.dismissRegister();
                // this.navCtrl.navigateRoot('/donations');
                this.navCtrl.navigateRoot('/home');
            });
            this.alertService.presentToast(data['message']);
        }, error => {
            console.log(error);
        }, () => {
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "U/zi":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/custmer/rest/rest.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>rest</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n        <ion-col>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"row2\">\n        <ion-col>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n<ion-slide >\n  <form #form=\"ngForm\" (ngSubmit)=\"reset(form)\" method=\"post\">\n        <p>\n            استرجاع كلمة المرور\n        </p>\n    <ion-item>\n      <ion-label   dir=\"rtl\" position=\"floating\">البريدالإكتروني</ion-label>\n      <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\n    </ion-item>\n\n      <ion-button type=\"submit\" color=\"medium\" fill=\"solid\" expand=\"full\">متابعة</ion-button>\n</form>\n<ion-slide >\n\n\n");

/***/ }),

/***/ "Z2Lw":
/*!***************************************************!*\
  !*** ./src/app/pages/custmer/rest/rest.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-no-border {\n  height: 9%;\n  padding: 0px;\n  align-items: center;\n}\n\n.img-right {\n  text-align: center;\n  margin-left: 0.3cm;\n}\n\n.grid1 {\n  height: 90%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 17px;\n  background: #fffffffb;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(228, 217, 217, 0.75);\n}\n\n.row1 {\n  height: 230%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, rgba(252, 246, 246, 0.603) 0%, rgba(231, 231, 231, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 3px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLHNEQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUdBLGdHQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFRSiIsImZpbGUiOiJyZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbm8tYm9yZGVye1xuICAgIGhlaWdodDogOSU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cbi5pbWctcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbi1yaWdodDo1MGNtO1xuICAgIG1hcmdpbi1sZWZ0OiAuM2NtO1xufVxuLmdyaWQxIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uY29udGFpZXItbG9naW4ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZmI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuNTQxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgyMjgsIDIyMiwgMjIyLCAwLjgyMik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjE3LCAyMTcsIDAuNzUpO1xufVxuLnJvdzEge1xuICAgIGhlaWdodDogMjMwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTQ1LCAxNDUsIDE1MSwgMC45NzMpIDAlLCByZ2JhKDE3NywgMTc3LCAxODIsIDAuOTA0KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE1MSwgMTQ4LCAxNDgpIDAlLCByZ2JhKDEzNiwgMTMwLCAxMzAsIDAuOTA0KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjUyLCAyNDYsIDI0NiwgMC42MDMpIDAlLCByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuOCkgMTAwJSk7XG59XG4ucm93MiB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5pb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "afyf":
/*!*************************************************!*\
  !*** ./src/app/pages/custmer/rest/rest.page.ts ***!
  \*************************************************/
/*! exports provided: RestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestPage", function() { return RestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rest_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rest.page.html */ "U/zi");
/* harmony import */ var _rest_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.page.scss */ "Z2Lw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");








let RestPage = class RestPage {
    constructor(modalController, navCtrl, route, alertService, authService) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.alertService = alertService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    dismissReset() {
        this.modalController.dismiss();
    }
    reset(form) {
        this.authService.reset(form.value.email).subscribe(data => {
            this.alertService.presentToast("Send password link");
        }, error => {
            console.log(error);
            this.alertService.presentToast("error");
        }, () => {
            this.dismissReset();
            this.navCtrl.navigateRoot('/dashboard');
        });
    }
};
RestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
RestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rest',
        template: _raw_loader_rest_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rest_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RestPage);



/***/ }),

/***/ "ak2j":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n        <ion-col>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"row2\">\n        <ion-col>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n<ion-slide >\n  <div class=\"contaier-login\">\n    <div>\n      <form #form=\"ngForm\"(ngSubmit)=\"register(form)\" method=\"post\">\n      <ion-grid>\n<ion-row>\n  <ion-col>\n      <h1>تسجيل مستخدم جديد</h1>\n  </ion-col>\n</ion-row>\n<ion-row> \n  <ion-col>\n      <ion-list>\n        <ion-item  dir=\"rtl\" >\n          <ion-icon name=\"person-outline\" class=\"icon-login\" ></ion-icon>\n      <ion-input  dir=\"rtl\" ngModel name=\"name\" placeholder=\"الاسم\"></ion-input>\n    </ion-item>\n    <br/>\n          <ion-item dir=\"rtl\">\n              <ion-icon  name=\"at-outline\" class=\"icon-login\"></ion-icon>\n              <ion-input  ngModel type=\"email\"  name=\"email\" required placeholder=\"البريدالإكتروني\"></ion-input>\n          </ion-item>\n          <br />\n          <ion-item dir=\"rtl\">  \n              <ion-icon name=\"eye-off-outline\" class=\"icon-login\"></ion-icon>\n              <ion-input  ngModel type=\"password\" name=\"password\" required placeholder=\"كلمة المرور\"></ion-input>\n          </ion-item>\n      </ion-list>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n      <ion-button type=\"submit\"  color=\"medium\" fill=\"solid\" expand=\"full\">\n         تسجيل دخول\n      </ion-button>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n      <ion-label>\n          <h3 (click)=\"loginModal()\">لديك حساب بالفعل ؟ اضغط هنا </h3>\n      </ion-label>\n  </ion-col>\n</ion-row>\n</ion-grid></form></div>\n</div>   \n</ion-slide> \n</ion-content>\n");

/***/ }),

/***/ "faZD":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-no-border {\n  height: 9%;\n  padding: 0px;\n  align-items: center;\n}\n\n.img-right {\n  text-align: center;\n  margin-left: 0.3cm;\n}\n\n.grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 17px;\n  background: #fffffffb;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(228, 217, 217, 0.75);\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 2cm;\n  background: linear-gradient(45deg, #817e7e 0%, rgba(231, 231, 231, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 1px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n\n.alzaads {\n  height: 0%;\n  padding: 0px;\n  margin-top: 0cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFTQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7QUFQSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTko7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxzREFBQTtBQUxKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFHQSw2RUFBQTtBQUpKOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubG9naW57XG4vLyAgICAgZm9udC1zaXplOi4zODhjbTtcbi8vICAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgbWFyZ2luLXRvcDogMzBweDtcbi8vIH1cbi5pb24tbm8tYm9yZGVye1xuICAgIGhlaWdodDogOSU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cbi5pbWctcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbi1yaWdodDo1MGNtO1xuICAgIG1hcmdpbi1sZWZ0OiAuM2NtO1xufVxuLmdyaWQxIHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uY29udGFpZXItbG9naW4ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZmI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuNTQxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgyMjgsIDIyMiwgMjIyLCAwLjgyMik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjE3LCAyMTcsIDAuNzUpO1xufVxuLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAyY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTQ1LCAxNDUsIDE1MSwgMC45NzMpIDAlLCByZ2JhKDE3NywgMTc3LCAxODIsIDAuOTA0KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE1MSwgMTQ4LCAxNDgpIDAlLCByZ2JhKDEzNiwgMTMwLCAxMzAsIDAuOTA0KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxMjksIDEyNiwgMTI2KSAwJSwgcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjgpIDEwMCUpO1xufVxuLnJvdzIge1xuICAgIGhlaWdodDogNTAlO1xufVxuaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLmFsemFhZHN7XG4gICAgaGVpZ2h0OiAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMGNtO30iXX0= */");

/***/ }),

/***/ "tvH6":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\" >\n  <ion-toolbar>\n    <div   style=\"height: 40px\"></div> \n      <div  class=\"img-right\">\n        <img  class=\"img-right\"  src=\"../../../../assets/tharwat1.png\"   \n        width=\"160mm\"   height=\"80mm\" />\n      </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"grid1\">\n      <ion-row class=\"row1\">\n          <ion-col>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"row2\">\n          <ion-col>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-slide >\n      <div class=\"contaier-login\">\n        <div>\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <h1>تسجيل الدخول</h1>\n                  </ion-col>\n              </ion-row>\n              <ion-row> \n                  <ion-col>\n                      <ion-list>\n                          <ion-item dir=\"rtl\">\n                              <ion-icon  name=\"at-outline\" class=\"icon-login\"></ion-icon>\n                              <ion-input  ngModel type=\"email\"  name=\"email\" required placeholder=\"البريدالإكتروني\"></ion-input>\n                          </ion-item>\n                          <br />\n                          <ion-item dir=\"rtl\">  \n                              <ion-icon  name=\"eye-off-outline\" class=\"icon-login\"></ion-icon>\n                              <ion-input  ngModel type=\"password\" name=\"password\" required placeholder=\"كلمة المرور\"></ion-input>\n                          </ion-item>\n                      </ion-list>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <ion-label>\n                      <h3  (click)=\"showForgetPassword()\">نسيت كلمة المرور ؟</h3>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <ion-button type=\"submit\"  color=\"medium\" fill=\"solid\" expand=\"full\">\n                         تسجيل دخول\n                      </ion-button>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <ion-label>\n                          <h3 (click)=\"registerModal()\">تسجيل جديد</h3>\n                      </ion-label>\n                  </ion-col>\n              </ion-row>\n          </ion-grid></form></div>\n      </div>   \n</ion-slide> \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-auth-register-register-module-es2015.js.map