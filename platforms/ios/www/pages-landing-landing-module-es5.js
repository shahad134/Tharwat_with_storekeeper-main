(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"], {
    /***/
    "ARrX":
    /*!***********************************************!*\
      !*** ./src/app/pages/landing/landing.page.ts ***!
      \***********************************************/

    /*! exports provided: LandingPage */

    /***/
    function ARrX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
        return LandingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing.page.html */
      "suxN");
      /* harmony import */


      var _landing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing.page.scss */
      "lU/l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage() {
          _classCallCheck(this, LandingPage);
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingPage;
      }();

      LandingPage.ctorParameters = function () {
        return [];
      };

      LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LandingPage);
      /***/
    },

    /***/
    "CXjK":
    /*!*************************************************!*\
      !*** ./src/app/pages/landing/landing.module.ts ***!
      \*************************************************/

    /*! exports provided: LandingPageModule */

    /***/
    function CXjK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
        return LandingPageModule;
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


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-routing.module */
      "TzWB");
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing.page */
      "ARrX");

      var LandingPageModule = function LandingPageModule() {
        _classCallCheck(this, LandingPageModule);
      };

      LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
      })], LandingPageModule);
      /***/
    },

    /***/
    "TzWB":
    /*!*********************************************************!*\
      !*** ./src/app/pages/landing/landing-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LandingPageRoutingModule */

    /***/
    function TzWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
        return LandingPageRoutingModule;
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


      var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing.page */
      "ARrX");

      var routes = [{
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
      }];

      var LandingPageRoutingModule = function LandingPageRoutingModule() {
        _classCallCheck(this, LandingPageRoutingModule);
      };

      LandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LandingPageRoutingModule);
      /***/
    },

    /***/
    "lU/l":
    /*!*************************************************!*\
      !*** ./src/app/pages/landing/landing.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function lUL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "suxN":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function suxN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>landing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->\n<ion-reorder-group disabled=\"false\">\n  <!-- Default reorder icon, end aligned items -->\n  <ion-item>\n    <ion-label>\n      Item 1\n    </ion-label>\n    <ion-reorder slot=\"end\"></ion-reorder>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      Item 2\n    </ion-label>\n    <ion-reorder slot=\"end\"></ion-reorder>\n  </ion-item>\n\n  <!-- Default reorder icon, start aligned items -->\n  <ion-item>\n    <ion-reorder slot=\"start\"></ion-reorder>\n    <ion-label>\n      Item 3\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-reorder slot=\"start\"></ion-reorder>\n    <ion-label>\n      Item 4\n    </ion-label>\n  </ion-item>\n\n  <!-- Custom reorder icon end items -->\n  <ion-item>\n    <ion-label>\n      Item 5\n    </ion-label>\n    <ion-reorder slot=\"end\">\n      <ion-icon name=\"pizza\"></ion-icon>\n    </ion-reorder>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      Item 6\n    </ion-label>\n    <ion-reorder slot=\"end\">\n      <ion-icon name=\"pizza\"></ion-icon>\n    </ion-reorder>\n  </ion-item>\n\n  <!-- Items wrapped in a reorder, entire item can be dragged -->\n  <ion-reorder>\n    <ion-item>\n      <ion-label>\n        Item 7\n      </ion-label>\n    </ion-item>\n  </ion-reorder>\n\n  <ion-reorder>\n    <ion-item>\n      <ion-label>\n        Item 8\n      </ion-label>\n    </ion-item>\n  </ion-reorder>\n</ion-reorder-group>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-landing-landing-module-es5.js.map