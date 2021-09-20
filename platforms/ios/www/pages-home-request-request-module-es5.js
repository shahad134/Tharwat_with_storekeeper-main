(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-request-request-module"], {
    /***/
    "SejM":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/request/request.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function SejM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header  class=\"ion-no-border\"> \n  <ion-toolbar> -->\n    <!-- <ion-title>طلباتي</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons> -->\n    <!-- <ion-buttons slot=\"start\">\n      \n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div style=\"height: 40px\"></div>\n    <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n      <img\n        class=\"img-right\"\n        src=\"../../../../assets/tharwat1.png\"\n        width=\"160mm\"\n        height=\"80mm\"\n      />\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content> -->\n  <!-- <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row2\">\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n<!-- \n  <ion-tabs> -->\n    <!-- Tab bar -->\n    <!-- <ion-tab-bar slot=\"top\">\n      <ion-tab-button > الطلبات  </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <ion-list *ngFor =\"let tag of donations_info\">\n    <ion-item *ngIf=\"tag\"> \n\n      <ion-button expand=\"full\" (click)=\"tutorialShown = !tutorialShown\">\n        <span>{{ tag.order_number }}</span>\n      </ion-button>\n\n      <ion-text *ngIf=\"tutorialShown\">\n        <p>\n          {{ tag.furniture  === 'null' ? '' : ':أثاث' }}\n          {{ tag.furniture  === 'null' ? '' :tag.furniture }}\n        </p>\n\n        <p>             \n          {{ tag.clothes  === 'null' ? '' : 'ملابس:' }}\n          {{ tag.clothes === 'null' ? '' : tag.clothes }}\n        </p> \n        \n        <p>\n          {{ tag.dishes  === 'null' ? '' : 'أواني:' }}\n          {{ tag.dishes === 'null' ? '':tag.dishes }}\n        </p>\n\n        <p>\n          {{ tag.electrical_tools  === 'null' ? '' : 'الأدوات الكهربائية:' }}\n          {{ tag.electrical_tools === 'null' ? '' : tag.electrical_tools }}\n        </p> \n        \n        <p>\n          {{ tag.baby_things  === 'null' ? '' : 'مستلزمات الأطفال:' }}\n          {{ tag.baby_things === 'null' ? '' :tag.baby_things }}\n        </p>\n\n        <p>\n          {{ tag.luxuries  === 'null' ? '' : 'الكماليات:' }}\n          {{ tag.luxuries === 'null' ? '' :tag. luxuries }}\n        </p>\n        \n        <p>\n          {{ tag.accessories_and_mobiles  === 'null' ? '' : 'إكسسوارات نسائية وجوالات:' }}\n          {{ tag.accessories_and_mobiles === 'null' ? '' :tag.accessories_and_mobiles }}\n        </p>\n\n        <p>\n          {{ tag.medical_devices  === 'null' ? '' : 'أجهزة طبية:' }}\n          {{ tag.medical_devices=== 'null' ? '' :tag.medical_devices }}\n        </p>\n\n        <p>\n          {{ tag.miscellaneous  === 'null' ? '' : 'متفرقات:' }}\n          {{ tag.miscellaneous=== 'null' ? '' :tag.miscellaneous }}\n        </p>\n\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content> -->\n\n  <!-- <ion-text *ngIf=\"tutorialShown1\">\n\n  <ion-list *ngFor =\"let tag of donations_info\">\n    <ion-item *ngIf=\"tag\"> \n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.furniture  === 'null' ? '' : ':أثاث' }}\n              {{ tag.furniture  === 'null' ? '' :tag.furniture }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    \n      <div>\n        <ion-row>\n          <ion-col>\n            <p>             \n              {{ tag.clothes  === 'null' ? '' : 'ملابس:' }}\n              {{ tag.clothes === 'null' ? '' : tag.clothes }}\n            </p> \n          </ion-col>\n        </ion-row> \n      </div>\n    \n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.dishes  === 'null' ? '' : 'أواني:' }}\n              {{ tag.dishes === 'null' ? '':tag.dishes }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.electrical_tools  === 'null' ? '' : 'الأدوات الكهربائية:' }}\n              {{ tag.electrical_tools === 'null' ? '' : tag.electrical_tools }}\n            </p> \n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.baby_things  === 'null' ? '' : 'مستلزمات الأطفال:' }}\n              {{ tag.baby_things === 'null' ? '' :tag.baby_things }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div> \n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.luxuries  === 'null' ? '' : 'الكماليات:' }}\n              {{ tag.luxuries === 'null' ? '' :tag. luxuries }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div> \n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.accessories_and_mobiles  === 'null' ? '' : 'إكسسوارات نسائية وجوالات:' }}\n              {{ tag.accessories_and_mobiles === 'null' ? '' :tag.accessories_and_mobiles }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.medical_devices  === 'null' ? '' : 'أجهزة طبية:' }}\n              {{ tag.medical_devices=== 'null' ? '' :tag.medical_devices }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{ tag.miscellaneous  === 'null' ? '' : 'متفرقات:' }}\n              {{ tag.miscellaneous=== 'null' ? '' :tag.miscellaneous }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div> \n    \n    </ion-item>\n  </ion-list>\n\n  </ion-text>\n</ion-content>\n     -->\n     <ion-header class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar>\n        <div style=\"height: 40px\"></div>\n        <div class=\"img-right\" style=\"padding-bottom: 20px; text-align: center\">\n          <img\n            class=\"img-right\"\n            src=\"../../../../assets/tharwat1.png\"\n            width=\"160mm\"\n            height=\"80mm\"\n          />\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n      <ion-tabs>\n        <!-- Tab bar -->\n        <ion-tab-bar slot=\"top\" selectedTab=\"new\">\n          <ion-tab-button tab=\"new\"> الطلبات الجديدة </ion-tab-button>\n       \n        </ion-tab-bar>\n      </ion-tabs>\n    </ion-content>";
      /***/
    },

    /***/
    "SfBt":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/request/request.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function SfBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 90%;\n  margin-top: 57px;\n  padding: 0px;\n}\n\n.row1 {\n  height: 190%;\n  margin-top: 0cm;\n  background: linear-gradient(45deg, #c0baba 0%, rgba(255, 254, 254, 0.856) 100%);\n}\n\n.tab-selected {\n  border-bottom: 3px solid #3880ff;\n}\n\nion-tab-button {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE3Q0o7O0FBZ0RFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFXQSwrRUFBQTtBQXJESjs7QUE0REU7RUFDRSxnQ0FBQTtBQXpESjs7QUE0REU7RUFDRSxlQUFBO0FBekRKIiwiZmlsZSI6InJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmlvbi1uby1ib3JkZXJ7XG4vLyAgICAgaGVpZ2h0OiAwJTtcbi8vICAgICBwYWRkaW5nOiAwcHg7XG4vLyAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuLy8gfVxuXG4vLyAuZ3JpZDEge1xuLy8gICAgIGhlaWdodDogMTAlO1xuLy8gICAgIHBhZGRpbmc6IDBweDtcbi8vIH1cbi8vIC5jb250YWllci1sb2dpbiB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbGVmdDogNjYlO1xuLy8gICAgIHBhZGRpbmc6NDdweDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZmI7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2IoMjI4LCAyMjgsIDIyOCk7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMjI4LCAyMjIsIDIyMiwgMC44MjIpO1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgyMjgsIDIxNywgMjE3LCAwLjc1KTtcbi8vIH1cbi8vIC5yb3cxIHtcbi8vICAgICBoZWlnaHQ6IDUwMCU7XG4vLyAgICAgbWFyZ2luLXRvcDogMGNtO1xuLy8gICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIyNiwgMjI2LCAyMjgsIDAuOTczKSAwJSwgcmdiYSgxNzcsIDE3NywgMTgyLCAwLjkwNCkgMTAwJSk7XG4vLyAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigyNTIsIDI1MiwgMjUyKSAwJSwgcmdiYSgxMzYsIDEzMCwgMTMwLCAwLjkwNCkgMTAwJSk7XG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjE0LCAyMTIsIDIxMikgMCUsIHJnYmEoMjMxLCAyMzEsIDIzMSwgMC44KSAxMDAlKTtcbi8vIH1cbi8vIC5yb3cyIHtcbi8vICAgICBoZWlnaHQ6IDQwJTtcbi8vIH1cbi8vIGlvbi1pY29uIHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbi8vIH1cbi8vIC8vIGlvbi1idXR0b24ge1xuLy8gLy8gICAgIG1hcmdpbi10b3A6IDVweDtcbi8vIC8vICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuLy8gLy8gfVxuLy8gaW9uLXNsaWRlIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDMwMCU7XG4vLyAgICAgcGFkZGluZzo0N3B4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuLy8gICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmZmI7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gfVxuLmdyaWQxIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiA1N3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIGhlaWdodDogMTkwJTtcbiAgICBtYXJnaW4tdG9wOiAwY207XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjI3LCAyMjcsIDIzMSwgMC45NzMpIDAlLFxuICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2IoMjMzLCAyMzAsIDIzMCkgMCUsXG4gICAgICByZ2JhKDI0NSwgMjM1LCAyMzUsIDAuOTA0KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigxOTIsIDE4NiwgMTg2KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NTYpIDEwMCVcbiAgICApO1xuICB9XG4gIFxuICAudGFiLXNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM4ODBmZjtcbiAgfVxuICBcbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    "Us8k":
    /*!**************************************************************!*\
      !*** ./src/app/pages/home/request/request-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: RequestPageRoutingModule */

    /***/
    function Us8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPageRoutingModule", function () {
        return RequestPageRoutingModule;
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


      var _request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./request.page */
      "li2U");

      var routes = [{
        path: '',
        component: _request_page__WEBPACK_IMPORTED_MODULE_3__["RequestPage"]
      }];

      var RequestPageRoutingModule = function RequestPageRoutingModule() {
        _classCallCheck(this, RequestPageRoutingModule);
      };

      RequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RequestPageRoutingModule);
      /***/
    },

    /***/
    "li2U":
    /*!****************************************************!*\
      !*** ./src/app/pages/home/request/request.page.ts ***!
      \****************************************************/

    /*! exports provided: RequestPage */

    /***/
    function li2U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPage", function () {
        return RequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./request.page.html */
      "SejM");
      /* harmony import */


      var _request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./request.page.scss */
      "SfBt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/env.service */
      "5zL6");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // import { Component, OnInit } from '@angular/core';
      // import {Donations_info} from 'src/app/models/donations';
      // import { AlertService } from 'src/app/services/alert.service';
      // import { EnvService } from '../../../services/env.service';
      // import { CommonModule } from '@angular/common';
      // import{ HttpServiceService} from '../../../services/http-service.service';
      // import { AuthService } from '../../../services/auth.service';
      // import { User } from 'src/app/models/user';
      // //Connect_info
      // import { Connect_info } from 'src/app/models/connectinfo';
      // @Component({
      //   selector: 'app-request',
      //   templateUrl: './request.page.html',
      //   styleUrls: ['./request.page.scss'],
      // })
      // export class RequestPage implements OnInit {
      //     imports: [CommonModule]
      //     tutorialShown = false;
      //     user: User;
      //    donations_info:Donations_info ;
      //    public Donation_info:any[];
      //    tag=[];
      //     // =[{furniture:'',clothes:'',electrical_tools:'',dishes:'',baby_things:'',luxuries:'',accessories_and_mobiles:'',medical_devices:'',miscellaneous:''}]
      //      ;  
      //     // donations_info=[]
      //     constructor(
      //       private alertService: AlertService,
      //       private env: EnvService,
      //       private authService: AuthService,
      //       private httpService :HttpServiceService
      //   ) { }
      //   ngOnInit() {
      //   }
      //   ionViewWillEnter() {
      //     this.httpService.makeGet('auth/receive_donation').subscribe(
      //       // user => {
      //       //   this.user = user;
      //       // },
      //       donations_info => {
      //        this.donations_info = donations_info
      //        console.log(donations_info);
      //         for(let i =0; i <= donations_info.length; i++){
      //          console.log(donations_info[i]);}
      //       })
      //     //    this.put(this.donations_info.furniture,this.furniture)
      //     //    console.log(donations_info);
      //     //  for(let i =0; i <= donations_info.length; i++){
      //     //   console.log(donations_info[i]);
      //     //  if(this.donations_info[i] == "null"){
      //     //  this.donations_info[i] ={
      //     //       furniture:'',
      //     //       clothes :'',
      //     //       electrical_tools:'',
      //     //       dishes:'',
      //     //       baby_things:'',
      //     //       luxuries:'',
      //     //       accessories_and_mobiles:'',
      //     //       medical_devices:'',
      //     //       miscellaneous:''
      //     // },
      //     //  JSON.stringify(donations_info[i])}}
      //     // }
      //     // ,
      //     //   ( error: any) => {
      //     //   console.log(error);
      //     // },
      //     // () => {
      //     // });
      //     // this.authService.connect_info().subscribe(
      //     //   connect_info => {
      //     //     // this.connect_info =connect_info[0];
      //     //     // console.log(connect_info[0]);
      //     //     connect_info.forEach(element => {
      //     //       this.connect_inlfo.push(element)
      //     //     });
      //     //     console.log('sss');
      //     //     console.log(connect_ info);
      //     //     console.log('sssdf');
      //     //     console.log(this.connect_inlfo);
      //     //   }
      //   //   // );
      //   //   this.authService.user().subscribe(
      //   //     user => {
      //   //       this.user =user;
      //   //     }
      //   //   );
      //   // }
      //       //  });
      //   }}


      var RequestPage = /*#__PURE__*/function () {
        // connect_info:Connect_info ;
        // user: User;
        // connect_inlfo=[];
        // // donations_info=[]
        // donations_info:Donations_info[];
        // // =[{furniture:'',clothes:'',electrical_tools:'',dishes:'',baby_things:'',luxuries:'',accessories_and_mobiles:'',medical_devices:'',miscellaneous:''}]
        //  ;  
        function RequestPage(alertService, env, authService, httpService, navCtrl) {
          _classCallCheck(this, RequestPage);

          this.alertService = alertService;
          this.env = env;
          this.authService = authService;
          this.httpService = httpService;
          this.navCtrl = navCtrl;
        } // tutorialShown = false;


        _createClass(RequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // goBack(){
          //   this.navCtrl.navigateBack('/home');
          // }

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.httpService.makeGet('auth/receive_donation').subscribe(
            //   // user => {
            //   //   this.user = user;
            //   // },
            //   donations_info => {
            //    this.donations_info = donations_info
            //    console.log(donations_info);
            //     for(let i =0; i <= donations_info.length; i++){
            //      console.log(donations_info[i]);}
            // })
            //    this.put(this.donations_info.furniture,this.furniture)
            //    console.log(donations_info);
            //  for(let i =0; i <= donations_info.length; i++){
            //   console.log(donations_info[i]);
            //  if(this.donations_info[i] == "null"){
            //  this.donations_info[i] ={
            //       furniture:'',
            //       clothes :'',
            //       electrical_tools:'',
            //       dishes:'',
            //       baby_things:'',
            //       luxuries:'',
            //       accessories_and_mobiles:'',
            //       medical_devices:'',
            //       miscellaneous:''
            // },
            //  JSON.stringify(donations_info[i])}}
            // }
            // ,
            //   ( error: any) => {
            //   console.log(error);
            // },
            // () => {
            // });
            // this.authService.connect_info().subscribe(
            //   connect_info => {
            //     // this.connect_info =connect_info[0];
            //     // console.log(connect_info[0]);
            //     connect_info.forEach(element => {
            //       this.connect_inlfo.push(element)
            //     });
            //     console.log('sss');
            //     console.log(connect_ info);
            //     console.log('sssdf');
            //     console.log(this.connect_inlfo);
            //   }
            //   // );
            //   this.authService.user().subscribe(
            //     user => {
            //       this.user =user;
            //     }
            //   );
            // }
            //  });
          }
        }]);

        return RequestPage;
      }();

      RequestPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      RequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request',
        template: _raw_loader_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RequestPage);
      /***/
    },

    /***/
    "lyl4":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/request/request.module.ts ***!
      \******************************************************/

    /*! exports provided: RequestPageModule */

    /***/
    function lyl4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPageModule", function () {
        return RequestPageModule;
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


      var _request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./request-routing.module */
      "Us8k");
      /* harmony import */


      var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./request.page */
      "li2U");

      var RequestPageModule = function RequestPageModule() {
        _classCallCheck(this, RequestPageModule);
      };

      RequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _request_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestPageRoutingModule"]],
        declarations: [_request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]]
      })], RequestPageModule);
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
            var _this = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "makePost",
          value: function makePost(endpoint, clothes, furniture) {
            var _this2 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, {
              clothes: clothes,
              furniture: furniture
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this2.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "post",
          value: function post(endpoint, data) {
            var _this3 = this;

            // let options = {headers: new HttpHeaders({ 
            //   'Content-Type': 'application/json',
            //  })  };
            return this.http.post(this.env.API_URL + endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this3.env.API_URL + endpoint);
            }));
          }
        }, {
          key: "get",
          value: function get(endpoint) {
            var _this4 = this;

            return this.http.get(this.env.API_URL + endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this4.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "getWithParam",
          value: function getWithParam(endpoint, param, name) {
            var _this5 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(name, param); //Create new HttpParams

            return this.http.get(this.env.API_URL + endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              return console.log(_this5.env.API_URL + endpoint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getData', [])));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this6 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.log(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this6.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


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
    }
  }]);
})();
//# sourceMappingURL=pages-home-request-request-module-es5.js.map