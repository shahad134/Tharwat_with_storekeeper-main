(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-custmer-select-location-select-location-module"],{

/***/ "Bae4":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custmer/select-location/select-location.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 60px;\n  width: 60px;\n  transform: translate(-50%, -50%);\n}\n\nion-button {\n  position: absolute;\n  bottom: 60px;\n  margin: 0 auto;\n  width: 90%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlbGVjdC1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic2VsZWN0LWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICBpb24tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9Il19 */");

/***/ }),

/***/ "Olnh":
/*!***********************************************************************!*\
  !*** ./src/app/pages/custmer/select-location/select-location.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPage", function() { return SelectLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-location.page.html */ "imv8");
/* harmony import */ var _select_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-location.page.scss */ "Bae4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// // import { google } from "google-maps";



// declare var google;
// @Component({
//   selector: 'app-select-location',
//   templateUrl: './select-location.page.html',
//   styleUrls: ['./select-location.page.scss'],
// })
// export class SelectLocationPage implements OnInit {
//   map: any;
//   @ViewChild('map') mapElement: ElementRef;
//   constructor(
//     private modalCtrl: ModalController
//   ) {
//     navigator.geolocation.getCurrentPosition((res) => {
//       console.log("res", res);
//       const { coords } = res;
//       this.addMap(coords.latitude, coords.longitude);
//     });
//   }
//   ngOnInit() {
//   }
//   close1() {
//     this.modalCtrl.dismiss();
//   }
//   close(data: { lat: any; lng: any; }) {
//     this.modalCtrl.dismiss(data);
//   }
//   addMap(lat, long) {
//     let latLng = new google.maps.LatLng(lat, long);
//     let mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//   }
//   getMapCenter() {
//     console.log(this.map.getCenter().lat());
//     console.log(this.map.getCenter().lng());
//     this.close({
//       lat: this.map.getCenter().lat(),
//       lng: this.map.getCenter().lng()
//     })
//   }
// }
// // @ViewChild("map") mapElement: { nativeElement: any; };
// // map: any;
// // constructor() {
// // }
// // ngOnInit(){
// //   this.initMap();
// // }
// // initMap(){
// //   let coords = new google.maps.LatLng(25,80);
// //   let mapOptions: google.maps.MapOptions = {
// //     center: coords,
// //     zoom: 11,
// //     mapTypeId: google.maps.MapTypeId.ROADMAP
// //   }
// //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
// //   let marker: google.maps.Marker = new google.maps.Marker({
// //     map: this.map,
// //     position: coords
// //   })
// // }
// // }
// home.page.ts



let SelectLocationPage = class SelectLocationPage {
    constructor(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
};
SelectLocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] }
];
SelectLocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: false },] }]
};
SelectLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-location',
        template: _raw_loader_select_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectLocationPage);



/***/ }),

/***/ "RVLa":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/custmer/select-location/select-location-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageRoutingModule", function() { return SelectLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-location.page */ "Olnh");




const routes = [
    {
        path: '',
        component: _select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"]
    }
];
let SelectLocationPageRoutingModule = class SelectLocationPageRoutingModule {
};
SelectLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectLocationPageRoutingModule);



/***/ }),

/***/ "ZGlp":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custmer/select-location/select-location.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageModule", function() { return SelectLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-location-routing.module */ "RVLa");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-location.page */ "Olnh");







let SelectLocationPageModule = class SelectLocationPageModule {
};
SelectLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectLocationPageRoutingModule"]
        ],
        declarations: [_select_location_page__WEBPACK_IMPORTED_MODULE_6__["SelectLocationPage"]]
    })
], SelectLocationPageModule);



/***/ }),

/***/ "imv8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/custmer/select-location/select-location.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\" (click)=\"close()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-buttons>\n    <ion-title>select-location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div #map id=\"map\"></div>\n  <img src=\"../../assets//678111-map-marker-512.webp\" class=\"icon\" />\n\n  <ion-button (click)=\"getMapCenter()\" color=\"danger\">Select Location</ion-button>\n</ion-content> -->\n\n<ion-header [translucent]=\"true\">\n\n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"../../assets//678111-map-marker-512.webp\" class=\"icon\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-custmer-select-location-select-location-module-es2015.js.map