(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "+AkI":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/orders/orders.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AkI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\" selectedTab=\"new\">\n      <!-- <ion-tab-button tab=\"not-assign\">  الطلبات الجديدة </ion-tab-button> -->\n      <ion-tab-button tab=\"not-assign\"> الطلبات الجديدة </ion-tab-button>\n\n      <ion-tab-button tab=\"new\"> الطلبات قيد التنفيذ </ion-tab-button>\n      <!-- <ion-tab-button tab=\"accept\"> الطلبات المقبولة </ion-tab-button> -->\n      <ion-tab-button tab=\"history\"> الطلبات القديمة </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>";
      /***/
    },

    /***/
    "/PQ1":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/new/new.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function PQ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"grid1\"> \n\n    <ion-item *ngFor=\"let order of order_number\" (click)=\"presentModal($event, order.order_number)\" dir=\"rtl\">\n\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n        />\n      </ion-avatar>\n\n      <ion-label>\n        <h2>الطلب رقم {{ order.order_number }}</h2>\n        <div *ngIf=\"order.status === 'accept'\">\n          <h4>st</h4>\n        </div>\n      </ion-label>\n\n    </ion-item>\n  </ion-grid>\n</ion-content>\n\n    <!-- <ion-list *ngFor =\"let tag of donations_info\"  >\n      <ion-item *ngIf=\"tag\"> \n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n          />\n        </ion-avatar> \n        <ion-button expand=\"full\" (click)=\"tutorialShown = !tutorialShown\">\n          <span>{{ tag.order_number }}</span>\n        </ion-button>\n  \n        <ion-text *ngIf=\"tutorialShown\">\n          <p>\n            {{ tag.furniture  === 'null' ? '' : ':أثاث' }}\n            {{ tag.furniture  === 'null' ? '' :tag.furniture }}\n          </p>\n  \n          <p>             \n            {{ tag.clothes  === 'null' ? '' : 'ملابس:' }}\n            {{ tag.clothes === 'null' ? '' : tag.clothes }}\n          </p> \n          \n          <p>\n            {{ tag.dishes  === 'null' ? '' : 'أواني:' }}\n            {{ tag.dishes === 'null' ? '':tag.dishes }}\n          </p>\n  \n          <p>\n            {{ tag.electrical_tools  === 'null' ? '' : 'الأدوات الكهربائية:' }}\n            {{ tag.electrical_tools === 'null' ? '' : tag.electrical_tools }}\n          </p> \n          \n          <p>\n            {{ tag.baby_things  === 'null' ? '' : 'مستلزمات الأطفال:' }}\n            {{ tag.baby_things === 'null' ? '' :tag.baby_things }}\n          </p>\n  \n          <p>\n            {{ tag.luxuries  === 'null' ? '' : 'الكماليات:' }}\n            {{ tag.luxuries === 'null' ? '' :tag. luxuries }}\n          </p>\n          \n          <p>\n            {{ tag.accessories_and_mobiles  === 'null' ? '' : 'إكسسوارات نسائية وجوالات:' }}\n            {{ tag.accessories_and_mobiles === 'null' ? '' :tag.accessories_and_mobiles }}\n          </p>\n  \n          <p>\n            {{ tag.medical_devices  === 'null' ? '' : 'أجهزة طبية:' }}\n            {{ tag.medical_devices=== 'null' ? '' :tag.medical_devices }}\n          </p>\n  \n          <p>\n            {{ tag.miscellaneous  === 'null' ? '' : 'متفرقات:' }}\n            {{ tag.miscellaneous=== 'null' ? '' :tag.miscellaneous }}\n          </p>\n  \n        </ion-text>\n      </ion-item>\n    </ion-list> \n  </ion-grid>\n</ion-content> -->";
      /***/
    },

    /***/
    "/rnz":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function rnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.ion-button {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 3cm;\n}\n\n.ion-button2 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n\n.ion-button3 {\n  text-align: center;\n  color: black;\n  align-items: center;\n  margin-left: 0.3cm;\n  margin-right: 0.4cm;\n  margin-top: 0.3cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBR0EsK0VBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQxIHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3cxIHtcbiAgICBoZWlnaHQ6IDE5MCU7XG4gICAgbWFyZ2luLXRvcDogMGNtO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIyNywgMjI3LCAyMzEsIDAuOTczKSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE5MiwgMTg2LCAxODYpIDAlLCByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlKTtcbn1cbi5pb24tYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApOyAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgbWFyZ2luLWxlZnQ6IC4zY207IFxuICAgIG1hcmdpbi1yaWdodDogLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAzY207XG59XG4uaW9uLWJ1dHRvbjJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjazsgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIG1hcmdpbi1sZWZ0OiAuM2NtOyBcbiAgICBtYXJnaW4tcmlnaHQ6IC40Y207XG4gICAgbWFyZ2luLXRvcDogLjNjbTtcbn1cbi5pb24tYnV0dG9uM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrOyAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgbWFyZ2luLWxlZnQ6IC4zY207IFxuICAgIG1hcmdpbi1yaWdodDogLjRjbTtcbiAgICBtYXJnaW4tdG9wOiAuM2NtO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "0Xv8":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/home/order-details/order-details.component.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderDetailsComponent */

    /***/
    function Xv8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function () {
        return OrderDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-details.component.html */
      "KcrZ");
      /* harmony import */


      var _order_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-details.component.scss */
      "UqxP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/http-service.service */
      "mKmO");
      /* harmony import */


      var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/param.service */
      "5DBH");

      var OrderDetailsComponent = /*#__PURE__*/function () {
        function OrderDetailsComponent(modalController, actionSheetController, httpService, alertService, navCtrl, param) {
          _classCallCheck(this, OrderDetailsComponent);

          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.httpService = httpService;
          this.alertService = alertService;
          this.navCtrl = navCtrl;
          this.param = param;
        }

        _createClass(OrderDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.order_number = this.param.order_number;
            var name = 'order_number';
            this.httpService.getWithParam('auth/receive_donation', this.order_number, name).subscribe(function (donations_info) {
              _this.donations_info = donations_info;
              console.log(donations_info);
            }, function (error) {
              console.log(error);
            });
            this.httpService.getWithParam('auth/receive_infoconnect', this.order_number, name).subscribe(function (connect_info) {
              _this.connect_info = connect_info;
              console.log(connect_info);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return OrderDetailsComponent;
      }();

      OrderDetailsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_7__["ParamService"]
        }];
      };

      OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderDetailsComponent);
      /***/
    },

    /***/
    "24AC":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/new/new.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function AC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQVdBLCtFQUFBO0FBUko7O0FBZUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBWko7O0FBZUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVpKOztBQWlCRTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQWRKOztBQWlCRTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQWRKOztBQWlCRTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsaUJBQUE7QUFkSjs7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWlCRTtFQUNFLGtCQUFBO0FBZEoiLCJmaWxlIjoibmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQxIHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XG4gIH1cbiAgXG4gIC5yb3cxIHtcbiAgICBoZWlnaHQ6IDE5MCU7XG4gICAgbWFyZ2luLXRvcDogMGNtO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2JhKDIyNywgMjI3LCAyMzEsIDAuOTczKSAwJSxcbiAgICAgIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgcmdiKDIzMywgMjMwLCAyMzApIDAlLFxuICAgICAgcmdiYSgyNDUsIDIzNSwgMjM1LCAwLjkwNCkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMTkyLCAxODYsIDE4NikgMCUsXG4gICAgICByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlXG4gICAgKTtcbiAgfVxuICBcbiAgLnBkNSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIFxuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gIFxuICAuYWNjZXB0IHtcbiAgICAtLWJhY2tncm91bmQ6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTYlO1xuICB9XG4gIFxuICAucmVqZWN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDglO1xuICB9XG4gIFxuICAuaW9uLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHNpbHZlciAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjYjk5MjJlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5maGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICBcbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */";
      /***/
    },

    /***/
    "3G8R":
    /*!*********************************************************!*\
      !*** ./src/app/pages/home/orders/orders.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function G8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 90%;\n  margin-top: 57px;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.tab-selected {\n  border-bottom: 3px solid #3880ff;\n}\n\nion-tab-button {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBV0EsK0VBQUE7QUFQRjs7QUFjQTtFQUNFLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0FBWEYiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQxIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi10b3A6IDU3cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvdzEge1xuICBoZWlnaHQ6IDE5MCU7XG4gIG1hcmdpbi10b3A6IDBjbTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiYSgyMjcsIDIyNywgMjMxLCAwLjk3MykgMCUsXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgcmdiKDIzMywgMjMwLCAyMzApIDAlLFxuICAgIHJnYmEoMjQ1LCAyMzUsIDIzNSwgMC45MDQpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODU2KSAxMDAlXG4gICk7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM4ODBmZjtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "3fom":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/home/not-assign/not-assign.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function fom(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vdC1hc3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQVJKOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFaSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtBQWRKIiwiZmlsZSI6Im5vdC1hc3NpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIFxuICAucGQ1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgXG4gIC5hY2NlcHQge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NiU7XG4gIH1cbiAgXG4gIC5yZWplY3Qge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cbiAgXG4gIC5pb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogc2lsdmVyICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmZoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "5DBH":
    /*!*******************************************!*\
      !*** ./src/app/services/param.service.ts ***!
      \*******************************************/

    /*! exports provided: ParamService */

    /***/
    function DBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParamService", function () {
        return ParamService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ParamService = function ParamService() {
        _classCallCheck(this, ParamService);
      };

      ParamService.ctorParameters = function () {
        return [];
      };

      ParamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ParamService);
      /***/
    },

    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "9oos");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./orders/orders.component */
      "DXfP");
      /* harmony import */


      var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./order-details/order-details.component */
      "0Xv8");
      /* harmony import */


      var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./new/new.component */
      "mN4Y");
      /* harmony import */


      var _history_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./history/history.component */
      "D/qT");
      /* harmony import */


      var _not_assign_not_assign_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./not-assign/not-assign.component */
      "qc4R");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_10__["HistoryComponent"], _not_assign_not_assign_component__WEBPACK_IMPORTED_MODULE_11__["NotassignComponent"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "9oos":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function oos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new/new.component */
      "mN4Y");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders/orders.component */
      "DXfP");
      /* harmony import */


      var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./history/history.component */
      "D/qT");
      /* harmony import */


      var _not_assign_not_assign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./not-assign/not-assign.component */
      "qc4R");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }, {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
        children: [{
          path: '',
          redirectTo: "new"
        }, {
          path: 'new',
          component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"]
        }, {
          path: 'history',
          component: _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]
        }, {
          path: 'not-assign',
          component: _not_assign_not_assign_component__WEBPACK_IMPORTED_MODULE_7__["NotassignComponent"]
        }]
      }, {
        path: "**",
        redirectTo: "/"
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "D/qT":
    /*!*********************************************************!*\
      !*** ./src/app/pages/home/history/history.component.ts ***!
      \*********************************************************/

    /*! exports provided: HistoryComponent */

    /***/
    function DQT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
        return HistoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./history.component.html */
      "DUtg");
      /* harmony import */


      var _history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./history.component.scss */
      "bYyp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../order-details/order-details.component */
      "0Xv8");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/param.service */
      "5DBH");

      var HistoryComponent = /*#__PURE__*/function () {
        function HistoryComponent(modalController, navCtrl, httpService, authService, env, alertService, param) {
          _classCallCheck(this, HistoryComponent);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.httpService = httpService;
          this.authService = authService;
          this.env = env;
          this.alertService = alertService;
          this.param = param;
        }

        _createClass(HistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentModal",
          value: function presentModal($event, order_number) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.param.order_number = order_number;
                      console.log('param order_number:', this.param.order_number);
                      _context.next = 4;
                      return this.modalController.create({
                        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 4:
                      modal = _context.sent;
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('history page');
            this.httpService.makeGet('auth/receive_accept_orders').subscribe(function (order_number) {
              _this2.order_number = order_number;
              console.log('order_number: ', _this2.order_number);
            }, function (error) {
              console.log(error);

              _this2.alertService.presentToast(error['message']);
            });
          }
        }]);

        return HistoryComponent;
      }();

      HistoryComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }, {
          type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__["ParamService"]
        }];
      };

      HistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HistoryComponent);
      /***/
    },

    /***/
    "DUtg":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/history/history.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DUtg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"grid1\"> \n\n    <ion-item *ngFor=\"let order of order_number\" (click)=\"presentModal($event, order.order_number)\" dir=\"rtl\">\n\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n        />\n      </ion-avatar>\n\n      <ion-label>\n        <h2>الطلب رقم {{ order.order_number }}</h2>\n      </ion-label>\n\n    </ion-item>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "DXfP":
    /*!*******************************************************!*\
      !*** ./src/app/pages/home/orders/orders.component.ts ***!
      \*******************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function DXfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders.component.html */
      "+AkI");
      /* harmony import */


      var _orders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orders.component.scss */
      "3G8R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(navCtrl, httpService) {
          _classCallCheck(this, OrdersComponent);

          this.navCtrl = navCtrl;
          this.httpService = httpService;
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.navigateBack('/home');
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]
        }];
      };

      OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrdersComponent);
      /***/
    },

    /***/
    "KcrZ":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/order-details/order-details.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KcrZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1 row1\">\n    <ion-row style=\"padding: 14px\">\n      <ion-col class=\"content\">\n        <ion-row>\n          <div style=\"width: 100%\" class=\"center bold fheading\" dir=\"rtl\">\n            تفاصيل الطلب\n          </div>\n        </ion-row>\n        <br/>\n\n        <div *ngFor=\"let don of donations_info\" dir=\"rtl\">\n        \n          <div *ngIf=\"don.furniture !== 'null,null' && don.furniture !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">أثاث</ion-col>\n              <ion-col>{{ don.furniture }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.clothes !== 'null,null' && don.clothes !== 'null'\">\n            <ion-row>\n              <!-- <div *ngIf=\"don.clothes !== ('null' || 'null,null')\"> -->\n              <ion-col class=\"bold\">ملابس</ion-col>\n              <ion-col>{{ don.clothes }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.dishes !== 'null,null' && don.dishes !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">الأواني المنزلية</ion-col>\n              <ion-col>{{ don.dishes }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.electrical_tools !== 'null,null' && don.electrical_tools !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">الأدوات الكهربائية</ion-col>\n              <ion-col>{{ don.electrical_tools }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.baby_things !== 'null,null' && don.baby_things !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">مستلزمات الأطفال</ion-col>\n              <ion-col>{{ don.baby_things }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.luxuries !== 'null,null' && don.luxuries !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">كماليات</ion-col>\n              <ion-col>{{ don.luxuries }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.accessories_and_mobiles !== 'null,null' && don.accessories_and_mobiles !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">إكسسوارات نسائية وجوالات</ion-col>\n              <ion-col>{{ don.accessories_and_mobiles }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.medical_devices !== 'null,null' && don.medical_devices !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">أجهزة طبية</ion-col>\n              <ion-col>{{ don.medical_devices }}</ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"don.miscellaneous !== 'null,null' && don.miscellaneous !== 'null'\">\n            <ion-row>\n              <ion-col class=\"bold\">متفرقات</ion-col>\n              <ion-col>{{ don.miscellaneous }}</ion-col>\n            </ion-row>\n          </div>\n\n          <br/>\n          <br/>\n        </div>\n\n\n  \n          <div *ngFor=\"let connect of connect_info\" dir=\"rtl\">\n\n            <div *ngIf=\"connect.name\">\n\n              <ion-row>\n                <div style=\"width: 100%\" class=\"center bold fheading\" dir=\"rtl\">\n                  تفاصيل مسلم الطلب\n                </div>\n              </ion-row>\n              <br/>\n\n              \n              <ion-row>\n                <ion-col class=\"bold\">الاسم</ion-col>\n                <ion-col>{{ connect.name }}</ion-col>\n              </ion-row>\n    \n              <ion-row>\n                <ion-col class=\"bold\">رقم الجوال</ion-col>\n                <ion-col>{{ connect.numberphone }}</ion-col>\n              </ion-row>\n    \n              <ion-row>\n                <ion-col class=\"bold\">تاريخ الاستلام</ion-col>\n                <ion-col>{{ connect.birth_date }}</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class=\"bold\">وقت الاستلام</ion-col>\n                <ion-col>{{ connect.time }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bold pd3\"> الحي</ion-col>\n                <ion-col>{{ connect.neighborhood_name }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bold pd3\">رقم البيت</ion-col>\n                <ion-col>{{ connect.house_number }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bold pd3\">اسم الشارع</ion-col>\n                <ion-col>{{ connect.street_name }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bold pd3\">أقرب معلم</ion-col>\n                <ion-col>{{ connect.nearest_landmark }}</ion-col>\n              </ion-row>\n\n\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    <ion-row class=\"pd5\">\n      <!-- pd5 -->\n      <ion-col>\n        <ion-button\n          (click)=\"dismiss()\"\n          class=\"ion-button\"\n          expand=\"block\"\n          color=\"white\">\n          إغلاق\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "UqxP":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/home/order-details/order-details.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function UqxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQVJKOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFaSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtBQWRKIiwiZmlsZSI6Im9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIFxuICAucGQ1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgXG4gIC5hY2NlcHQge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NiU7XG4gIH1cbiAgXG4gIC5yZWplY3Qge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cbiAgXG4gIC5pb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogc2lsdmVyICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmZoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "bYyp":
    /*!***********************************************************!*\
      !*** ./src/app/pages/home/history/history.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function bYyp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 95%;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.pd5 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 400px;\n}\n\n.accept {\n  --background: #b9922e !important;\n  width: 96%;\n}\n\n.reject {\n  --background: #b9922e !important;\n  width: 48%;\n}\n\n.ion-button {\n  --color: black !important;\n  --background: silver !important;\n  --border-color: #b9922e !important;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.fheading {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQVJKOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFaSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtBQWRKIiwiZmlsZSI6Imhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZDEge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIFxuICAucGQ1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgXG4gIC5hY2NlcHQge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NiU7XG4gIH1cbiAgXG4gIC5yZWplY3Qge1xuICAgIC0tYmFja2dyb3VuZDogI2I5OTIyZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cbiAgXG4gIC5pb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogc2lsdmVyICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICNiOTkyMmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmZoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "eUf4":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function eUf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>الصفحة الرئسية</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n    \n        <ion-col  >\n          <ion-button  href=\"/donation\" \n          class=\"ion-button\"  \n           expand=\"block\"\n            color=\"white\" >طلب جديد\n          </ion-button>\n   \n          <ion-button  href=\"/home/orders\" \n          class=\"ion-button2\"   \n          expand=\"block\" \n          color=\"white\" >طلباتي\n        </ion-button>\n          <ion-button   (click)=\"logout()\" \n          class=\"ion-button3\"  \n           expand=\"block\" \n           color=\"white\" >\n           تسجيل خروج</ion-button>\n        </ion-col>\n    </ion-row> \n     \n  </ion-grid>\n \n  <!-- <ion-button href=\"/orders\">Orders</ion-button> -->\n</ion-content>\n ";
      /***/
    },

    /***/
    "hsj+":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function hsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "eUf4");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "/rnz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(authService, navCtrl, alertService) {
          var _this3 = this;

          _classCallCheck(this, HomePage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.alertService = alertService; //     logout() {
          //       this.authService.logout().subscribe(
          //         data => {
          //           this.alertService.presentToast("تم تسجيل الخروج");        
          //         },
          //         error => {
          //           console.log(error);
          //         },
          //         () => {
          //           this.navCtrl.navigateRoot('/login');
          //         }
          //       );
          //     }
          // }

          this.logout = function () {
            localStorage.removeItem("token");
            localStorage.removeItem("is_admin");

            _this3.navCtrl.navigateRoot("/login");
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
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
            var _this4 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this4.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "makePost",
          value: function makePost(endpoint, clothes, furniture) {
            var _this5 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, {
              clothes: clothes,
              furniture: furniture
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this5.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "post",
          value: function post(endpoint, data) {
            var _this6 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this6.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "get",
          value: function get(endpoint) {
            var _this7 = this;

            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this7.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "getWithParam",
          value: function getWithParam(endpoint, param, name) {
            var _this8 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(name, param); //Create new HttpParams

            return this.http.get(this.env.API_URL + endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this8.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this9 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.log(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this9.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


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
    "mN4Y":
    /*!*************************************************!*\
      !*** ./src/app/pages/home/new/new.component.ts ***!
      \*************************************************/

    /*! exports provided: NewComponent */

    /***/
    function mN4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewComponent", function () {
        return NewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new.component.html */
      "/PQ1");
      /* harmony import */


      var _new_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new.component.scss */
      "24AC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/param.service */
      "5DBH");
      /* harmony import */


      var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../order-details/order-details.component */
      "0Xv8");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");

      var NewComponent = /*#__PURE__*/function () {
        function NewComponent(modalController, navCtrl, httpService, authService, env, param, alertService) {
          _classCallCheck(this, NewComponent);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.httpService = httpService;
          this.authService = authService;
          this.env = env;
          this.param = param;
          this.alertService = alertService;
        }

        _createClass(NewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('srart');
          }
        }, {
          key: "presentModal",
          value: function presentModal($event, order_number) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.param.order_number = order_number;
                      console.log('param order_number:', this.param.order_number);
                      _context2.next = 4;
                      return this.modalController.create({
                        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 4:
                      modal = _context2.sent;
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // tutorialShown = false;

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this10 = this;

            console.log('new page'); // this.httpService.makeGet('auth/receive_new_orders').subscribe(

            this.httpService.makeGet('auth/receive_new_orders').subscribe(function (order_number) {
              _this10.order_number = order_number;
              console.log('order_number: ', _this10.order_number);
            }, function (error) {
              console.log(error);

              _this10.alertService.presentToast(error['message']);
            });
          }
        }]);

        return NewComponent;
      }();

      NewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"]
        }, {
          type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_8__["ParamService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }];
      };

      NewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new',
        template: _raw_loader_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewComponent);
      /***/
    },

    /***/
    "qc4R":
    /*!***************************************************************!*\
      !*** ./src/app/pages/home/not-assign/not-assign.component.ts ***!
      \***************************************************************/

    /*! exports provided: NotassignComponent */

    /***/
    function qc4R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotassignComponent", function () {
        return NotassignComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_assign_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-assign.component.html */
      "uq6n");
      /* harmony import */


      var _not_assign_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-assign.component.scss */
      "3fom");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../order-details/order-details.component */
      "0Xv8");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/param.service */
      "5DBH");

      var NotassignComponent = /*#__PURE__*/function () {
        function NotassignComponent(modalController, navCtrl, httpService, authService, env, alertService, param) {
          _classCallCheck(this, NotassignComponent);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.httpService = httpService;
          this.authService = authService;
          this.env = env;
          this.alertService = alertService;
          this.param = param;
        }

        _createClass(NotassignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentModal",
          value: function presentModal($event, order_number) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.param.order_number = order_number;
                      console.log('param order_number:', this.param.order_number);
                      _context3.next = 4;
                      return this.modalController.create({
                        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 4:
                      modal = _context3.sent;
                      _context3.next = 7;
                      return modal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this11 = this;

            console.log('history page');
            this.httpService.makeGet('auth/receive_not_assign_orders').subscribe(function (order_number) {
              _this11.order_number = order_number;
              console.log('order_number: ', _this11.order_number);
            }, function (error) {
              console.log(error);

              _this11.alertService.presentToast(error['message']);
            });
          }
        }]);

        return NotassignComponent;
      }();

      NotassignComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }, {
          type: src_app_services_param_service__WEBPACK_IMPORTED_MODULE_10__["ParamService"]
        }];
      };

      NotassignComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-assign',
        template: _raw_loader_not_assign_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_assign_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotassignComponent);
      /***/
    },

    /***/
    "uq6n":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/not-assign/not-assign.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uq6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"grid1\"> \n\n    <ion-item *ngFor=\"let order of order_number\" (click)=\"presentModal($event, order.order_number)\" dir=\"rtl\">\n\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://cdn.landesa.org/wp-content/uploads/default-user-image.png\"\n        />\n      </ion-avatar>\n\n      <ion-label>\n        <h2>الطلب رقم {{ order.order_number }}</h2>\n      </ion-label>\n\n    </ion-item>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map