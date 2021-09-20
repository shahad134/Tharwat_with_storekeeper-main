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
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})
export class SelectLocationPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
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
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
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
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

}