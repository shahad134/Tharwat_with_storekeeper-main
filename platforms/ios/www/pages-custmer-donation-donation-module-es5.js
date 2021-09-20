(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-custmer-donation-donation-module"], {
    /***/
    "5qG6":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/custmer/donation/donation.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qG6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title >قائمة التبرعات</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"grid1\">\n      <ion-row class=\"row1\">\n          <ion-col>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"row2\">\n          <ion-col>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-slide >\n  <div class=\"contaier-login\" [formGroup]=\"addmore\" dir=\"rtl\">\n    <ng-container formArrayName=\"lessons\">\n      <ng-container *ngFor=\"let lessonForm of lessons.controls; let i = index\">\n        <div [formGroupName]=\"i\">\n          <ion-select formControlName=\"kind\" placeholder=\"اختر تصنيف التبرع\" interface=\"action-sheet\" expand=\"block\">\n            <ion-select-option value=\"furniture\">الاثاث المنزلي</ion-select-option>\n            <ion-select-option value=\"clothes\">ملابس</ion-select-option>\n            <ion-select-option value=\"dishes\">الأواني المنزلية</ion-select-option>\n            <ion-select-option value=\"electrical_tools\">الأدوات الكهربائية</ion-select-option>\n            <ion-select-option value=\"baby_things\">مستلزمات الأطفال</ion-select-option>\n            <ion-select-option value=\"luxuries\">الكماليات</ion-select-option>\n            <ion-select-option value=\"accessories_and_mobiles\">إكسسوارات نسائية وجوالات</ion-select-option>\n            <ion-select-option value=\"medical_devices\">أجهزة طبية</ion-select-option>\n            <ion-select-option value=\"miscellaneous\">متفرقات</ion-select-option>\n          </ion-select>\n          <ion-input formControlName=\"type\" placeholder=\"النوع\" expand=\"block\"></ion-input>\n          <ion-input formControlName='number' placeholder=\"العدد\" expand=\"block\"></ion-input>\n\n          <ion-button (click)=\"addOrder(i)\" [disabled]=\"!lessonForm.valid\" mode=\"ios\" color=\"medium \" class=\"roundedInput8px ion-margin-top button\">إضافة صنف آخر</ion-button>\n          <div *ngIf='i!=0'>\n            <ion-button (click)=\"deleteOrder(i)\" mode=\"ios\" color=\"medium\" class=\"roundedInput8px ion-margin-top button\">حذف</ion-button>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <div [hidden]=\"!inboundClick\">\n      <ion-button (click)=\"add()\" id=\"addButton\" mode=\"ios\"  expand=\"block\" color=\"light\" class=\"roundedInput8px ion-margin-top\">إضافة صنف</ion-button>\n    </div>\n    <div>\n      <ion-button (click)=\"submit()\" [disabled]=\"!addmore.valid\" id=\"send1\" mode=\"ios\" expand=\"block\" color=\"medium\" fill=\"outline\" class=\"roundedInput8px ion-margin-top button-bottom\">\n        إرسال\n      </ion-button></div>\n  </div>\n \n  \n\n</ion-slide >\n</ion-content>\n";
      /***/
    },

    /***/
    "7QzR":
    /*!***********************************************************!*\
      !*** ./src/app/pages/custmer/donation/donation.module.ts ***!
      \***********************************************************/

    /*! exports provided: DonationPageModule */

    /***/
    function QzR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonationPageModule", function () {
        return DonationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _donation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donation-routing.module */
      "vi15");
      /* harmony import */


      var _donation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donation.page */
      "af/Q");

      var DonationPageModule = function DonationPageModule() {
        _classCallCheck(this, DonationPageModule);
      };

      DonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donation_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_donation_page__WEBPACK_IMPORTED_MODULE_6__["DonationPage"]]
      })], DonationPageModule);
      /***/
    },

    /***/
    "F33n":
    /*!***********************************************************!*\
      !*** ./src/app/pages/custmer/donation/donation.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function F33n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-no-border {\n  height: 9%;\n  padding: 0px;\n  align-items: center;\n}\n\n.grid1 {\n  height: 80%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  left: 66%;\n  padding: 47px;\n  background: #fffffffb;\n  border-radius: 6px;\n  box-shadow: 0px 0px 10px 1px rgba(228, 217, 217, 0.75);\n}\n\n.row1 {\n  height: 150%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #d6d4d4 0%, rgba(231, 231, 231, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 1px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n\n.alzaads {\n  height: 0%;\n  padding: 0px;\n  margin-top: 0cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RvbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUEo7O0FBU0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBR0Esc0RBQUE7QUFOSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBR0EsNkVBQUE7QUFMSjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiZG9uYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxvZ2lue1xuLy8gICAgIGZvbnQtc2l6ZTouMzg4Y207XG4vLyAgICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyB9XG4uaW9uLW5vLWJvcmRlcntcbiAgICBoZWlnaHQ6IDklO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5ncmlkMSB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLmNvbnRhaWVyLWxvZ2luIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxlZnQ6IDY2JTtcbiAgICBwYWRkaW5nOjQ3cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiKDIyOCwgMjI4LCAyMjgpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDIyOCwgMjIyLCAyMjIsIDAuODIyKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMjI4LCAyMTcsIDIxNywgMC43NSk7XG59XG4ucm93MSB7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIG1hcmdpbi10b3A6IDBjbTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyMjYsIDIyNiwgMjI4LCAwLjk3MykgMCUsIHJnYmEoMTc3LCAxNzcsIDE4MiwgMC45MDQpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjUyLCAyNTIsIDI1MikgMCUsIHJnYmEoMTM2LCAxMzAsIDEzMCwgMC45MDQpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDIxNCwgMjEyLCAyMTIpIDAlLCByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuOCkgMTAwJSk7XG59XG4ucm93MiB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5pb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uYWx6YWFkc3tcbiAgICBoZWlnaHQ6IDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwY207fSJdfQ== */";
      /***/
    },

    /***/
    "NKBj":
    /*!*************************************!*\
      !*** ./src/app/models/donations.ts ***!
      \*************************************/

    /*! exports provided: Donations_info */

    /***/
    function NKBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Donations_info", function () {
        return Donations_info;
      });

      var Donations_info = function Donations_info() {
        _classCallCheck(this, Donations_info);
      };
      /***/

    },

    /***/
    "af/Q":
    /*!*********************************************************!*\
      !*** ./src/app/pages/custmer/donation/donation.page.ts ***!
      \*********************************************************/

    /*! exports provided: DonationPage */

    /***/
    function afQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonationPage", function () {
        return DonationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donation.page.html */
      "5qG6");
      /* harmony import */


      var _donation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donation.page.scss */
      "F33n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_donations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/donations */
      "NKBj");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var DonationPage = /*#__PURE__*/function () {
        function DonationPage(alertService, httpService, modalController, navCtrl, fb) {
          _classCallCheck(this, DonationPage);

          this.alertService = alertService;
          this.httpService = httpService;
          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.donations_info = new src_app_models_donations__WEBPACK_IMPORTED_MODULE_4__["Donations_info"]();
          this.counter = 0;
          this.inboundClick = false;
          this.furniture_information = [];
          this.clothes_information = [];
          this.dishes_information = [];
          this.electrical_tools_information = [];
          this.baby_things_information = [];
          this.luxuries_information = [];
          this.accessories_and_mobiles_information = [];
          this.medical_devices_information = [];
          this.miscellaneous_information = [];
        }

        _createClass(DonationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addmore = this.fb.group({
              lessons: this.fb.array([])
            });
            var el = document.getElementById("addButton");
            el.click();
          }
        }, {
          key: "lessons",
          get: function get() {
            return this.addmore.controls["lessons"];
          }
        }, {
          key: "add",
          value: function add() {
            var lessonForm = this.fb.group({
              kind: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            });
            this.lessons.push(lessonForm);
          }
        }, {
          key: "addOrder",
          value: function addOrder(lessonIndex) {
            this.add();
            this.counter += 1;
            this.save(lessonIndex);
          }
        }, {
          key: "save",
          value: function save(i) {
            var furniture = "furniture",
                clothes = "clothes",
                dishes = "dishes",
                electrical = "electrical_tools",
                baby = "baby_things",
                luxuries = "luxuries",
                accessories = "accessories_and_mobiles",
                medical = "medical_devices",
                miscellaneous = "miscellaneous";

            if (this.lessons.value[i].kind == furniture) {
              this.furniture_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == clothes) {
              this.clothes_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == dishes) {
              this.dishes_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == electrical) {
              this.electrical_tools_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == baby) {
              this.baby_things_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == luxuries) {
              this.luxuries_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == accessories) {
              this.accessories_and_mobiles_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == medical) {
              this.medical_devices_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            } else if (this.lessons.value[i].kind == miscellaneous) {
              this.miscellaneous_information.push(this.lessons.value[i].type, this.lessons.value[i].number);
            }
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(lessonIndex) {
            this.lessons.removeAt(lessonIndex);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.save(this.counter);
            this.donations_info.furniture = this.furniture_information.toString().replace(/"/g, "");
            this.donations_info.clothes = this.clothes_information.toString();
            this.donations_info.dishes = this.dishes_information.toString();
            this.donations_info.electrical_tools = this.electrical_tools_information.toString();
            this.donations_info.baby_things = this.baby_things_information.toString();
            this.donations_info.luxuries = this.luxuries_information.toString();
            this.donations_info.medical_devices = this.medical_devices_information.toString();
            this.donations_info.accessories_and_mobiles = this.accessories_and_mobiles_information.toString();
            this.donations_info.miscellaneous = this.miscellaneous_information.toString();
            var data = {
              donations_info: this.donations_info
            };
            console.log(this.donations_info);
            this.httpService.post('auth/donations', data).subscribe(function (data) {
              _this.alertService.presentToast("تم حفظ البيانات بنجاح");
            }, function (error) {
              console.log(error.error);
            }, function () {
              _this.modalController.dismiss();

              _this.navCtrl.navigateForward('/info-connect');
            });
          }
        }]);

        return DonationPage;
      }();

      DonationPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      DonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donation',
        template: _raw_loader_donation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonationPage); // import { Component, OnInit } from '@angular/core';
      // import {Donations_info} from 'src/app/models/donations';
      // import { AlertService } from 'src/app/services/alert.service';
      // import { EnvService } from '../../../services/env.service';
      // import{ HttpServiceService}  from '../../../services/http-service.service';
      // import { ModalController, NavController } from '@ionic/angular';
      // import { NgForm } from '@angular/forms';
      // @Component({
      //   selector: 'app-donation',
      //   templateUrl: './donation.page.html',
      //   styleUrls: ['./donation.page.scss'],
      // })
      // export class DonationPage implements OnInit {
      //   donations_info: Donations_info = new Donations_info ;
      //   constructor(
      //     private alertService: AlertService,
      //     private env: EnvService,
      //     private httpService :HttpServiceService,
      //     private modalController: ModalController,
      //     private navCtrl: NavController,
      //   ) { }
      //   ngOnInit() {
      //   }
      //   item_qty=[1];
      //   donationList:string;
      //   furniture_information=[]
      //   clothes_information=[]
      //   dishes_information=[]
      //   electrical_tools_information=[]
      //   baby_things_information=[] 
      //   luxuries_information=[]
      //   accessories_and_mobiles_information=[]
      //   medical_devices_information=[]
      //   miscellaneous_information=[]
      //   addToArray(form: NgForm){
      //     let furniture = "furniture", 
      //     clothes = "clothes", 
      //     dishes="dishes", 
      //     electrical="electrical_tools", 
      //     baby="baby_things", 
      //     luxuries="luxuries", 
      //     accessories="accessories_and_mobiles", 
      //     medical="medical_devices", 
      //     miscellaneous="miscellaneous";
      //     if (form.value.donationList == furniture){
      //       this.furniture_information.push(form.value.type, form.value.number)
      //     } 
      //     else if (form.value.donationList== clothes){
      //       this.clothes_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == dishes){
      //       this.dishes_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == electrical){
      //       this.electrical_tools_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == baby){
      //       this.baby_things_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == luxuries){
      //       this.luxuries_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == accessories){
      //       this.medical_devices_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == medical){
      //       this.accessories_and_mobiles_information.push(form.value.type, form.value.number)
      //     }
      //     else if (form.value.donationList == miscellaneous){
      //       this.miscellaneous_information.push(form.value.type, form.value.number)
      //     }
      //   }  
      //   add(){
      //     this.item_qty.push(2)
      //     console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
      //   }
      //   remove(){//add
      //     this.item_qty.pop();
      //     console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
      //   }
      //   submit(){
      //     this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
      //     this.donations_info.clothes=this.clothes_information.toString();
      //     this.donations_info.dishes=this.dishes_information.toString();
      //     this.donations_info.electrical_tools=this.electrical_tools_information.toString();
      //     this.donations_info.baby_things=this.baby_things_information.toString();
      //     this.donations_info.luxuries=this.luxuries_information.toString();
      //     this.donations_info.medical_devices=this.medical_devices_information.toString();
      //     this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
      //     this.donations_info.miscellaneous=this.miscellaneous_information.toString();
      //     //this.donations_info.birth_date=this.birth_date_information;
      //     let data = {
      //       donations_info:this.donations_info
      //     }
      //     //this.donations_info.furniture=this.home_furniture;
      //     console.log(this.donations_info)
      //     this.httpService.post( 'auth/donations', data).subscribe(
      //       data => {
      //         this.alertService.presentToast("تم حفظ البيانات بنجاح");
      //       },
      //       error => {
      //         console.log(error.error);
      //       },
      //       () => {
      //         this.modalController.dismiss();
      //         this.navCtrl.navigateForward('/info-connect');
      //       }
      //     )
      //   }
      // }

      /***/
    },

    /***/
    "mKmO":
    /*!**************************************************!*\
      !*** ./src/app/services/http-service.service.ts ***!
      \**************************************************/

    /*! exports provided: HttpServiceService */

    /***/
    function mKmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpServiceService", function () {
        return HttpServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./env.service */
      "5zL6");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "M2ZX");

      var HttpServiceService = /*#__PURE__*/function () {
        function HttpServiceService(http, env, authService, storage) {
          _classCallCheck(this, HttpServiceService);

          this.http = http;
          this.env = env;
          this.authService = authService;
          this.storage = storage;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          this.isLoggedIn = false;
        }

        _createClass(HttpServiceService, [{
          key: "makeGet",
          value: function makeGet(endpoint) {
            var _this2 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this2.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "makePost",
          value: function makePost(endpoint, clothes, furniture) {
            var _this3 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, {
              clothes: clothes,
              furniture: furniture
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this3.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "post",
          value: function post(endpoint, data) {
            var _this4 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this4.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "get",
          value: function get(endpoint) {
            var _this5 = this;

            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this5.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "getWithParam",
          value: function getWithParam(endpoint, param, name) {
            var _this6 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(name, param); //Create new HttpParams

            return this.http.get(this.env.API_URL + endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this6.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this7 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.log(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this7.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
            };
          }
          /** Log a HeroService message with the MessageService */

        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return HttpServiceService;
      }();

      HttpServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
        }];
      };

      HttpServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HttpServiceService);
      /***/
    },

    /***/
    "vi15":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/custmer/donation/donation-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DonationPageRoutingModule */

    /***/
    function vi15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonationPageRoutingModule", function () {
        return DonationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _donation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donation.page */
      "af/Q");

      var routes = [{
        path: '',
        component: _donation_page__WEBPACK_IMPORTED_MODULE_3__["DonationPage"]
      }];

      var DonationPageRoutingModule = function DonationPageRoutingModule() {
        _classCallCheck(this, DonationPageRoutingModule);
      };

      DonationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-custmer-donation-donation-module-es5.js.map