// import { Component, OnInit } from '@angular/core';
// import {Connect_info} from 'src/app/models/connectinfo';
// import { AlertService } from 'src/app/services/alert.service';
// import { EnvService } from '../../../services/env.service';
// import{ HttpServiceService}  from '../../../services/http-service.service';
// import { ModalController, NavController } from '@ionic/angular';
// import { NgForm } from '@angular/forms';
// import * as moment from 'moment';

// @Component({
//   selector: 'app-info-connect',
//   templateUrl: './info-connect.page.html',
//   styleUrls: ['./info-connect.page.scss'],
// })
// export class InfoConnectPage implements OnInit {

//   info_connect: Connect_info = new Connect_info ;
//   constructor(
//     private alertService: AlertService,
//     private env: EnvService,
//     private httpService :HttpServiceService,
//     private modalController: ModalController,
//     private navCtrl: NavController,
//   ) { }

//   ngOnInit() {
//   }
  
//   submit(){
//     this.info_connect.birth_date = moment(this.info_connect.birth_date).format("YYYY-MM-DD");
//     let data = {
//       info_connect:this.info_connect
//     }
//     let data1 = {
//       time:this.info_connect.time
//     }
//     console.log(this.info_connect.time);
//     this.httpService.post('auth/time_info',data1).subscribe(
//       data => {
//         console.log('اقققققققققققققققققققققققققققققققققققققققققققق');
//       },
//     )
//     this.httpService.post('auth/infoconnects',data).subscribe(
//       data => {
//         this.alertService.presentToast("تم حفظ البيانات بنجاح");
//       },
//       error => {
//         console.log(error);
//       },
      
//       () => {
//         this.modalController.dismiss();
//         this.navCtrl.navigateForward('/home');
//       }
//       )
//       console.log('outsidepost');
//       console.log(data1);
      

//       }  

// }

import { Component, OnInit } from '@angular/core';
import {Connect_info} from 'src/app/models/connectinfo';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import { Donations_info } from 'src/app/models/donations';
import { AuthService } from 'src/app/services/auth.service';

import { ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-info-connect',
  templateUrl: './info-connect.page.html',
  styleUrls: ['./info-connect.page.scss'],
})
export class InfoConnectPage implements OnInit {

  neighborhoods = [

    { name: 'النقع'},
    { name: 'السادة'},
    { name: 'القادسية'},
    { name: 'الفايزية'},

    { name: 'الوسيطى'},
    { name: 'الخبيب'},
    { name: 'الزرقاء'},
    { name: 'الأخضر'},

    { name: 'النهضة'},
    { name: 'الريان'},
    { name: 'سلطانة'},
    { name: 'قرطبة'},
    { name: 'الروضة'},
    { name: 'الرحاب'},
    { name: 'الإسكان'}
  ];
  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  vehicleChanged(event: {
    component: IonicSelectableComponent,
    value: any
    })
    {console.log('vehicle Changed');}


  info_connect: Connect_info = new Connect_info ;
  // donations_info:Donations_info[];
  user_info: Connect_info;
  putData = false;
  hideButton = true;
  nullValue = true;

  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private authService: AuthService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }

  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      numberphone: [null, Validators.compose([Validators.required, Validators.pattern("[0-9 ]{10}")])],
      birth_date: [null, Validators.compose([Validators.required])],
      time: [null, Validators.compose([Validators.required])],
      neighborhood_name: [null, Validators.compose([Validators.required])],
      street_name: [null, Validators.compose([Validators.required])],
      house_number: [null, Validators.compose([Validators.required])],
      nearest_landmark: [null, Validators.compose([Validators.required])],
    });
  }

  onFormSubmit(): void {
    console.log('onFormSubmit');
  }

  onSubmit(){
    this.info_connect.name = this.addmore.get('name').value
    this.info_connect.numberphone = this.addmore.get('numberphone').value
    this.info_connect.birth_date = moment(this.addmore.get('birth_date').value).format("YYYY-MM-DD");
    this.info_connect.time = this.addmore.get('time').value
    // to get just the neighborhood name
    let neighborhood = JSON.stringify(this.addmore.get('neighborhood_name').value)
    const neighborhood_name = JSON.parse(neighborhood);
    this.info_connect.neighborhood_name = neighborhood_name.name
    this.info_connect.street_name = this.addmore.get('street_name').value
    this.info_connect.house_number = this.addmore.get('house_number').value
    this.info_connect.nearest_landmark = this.addmore.get('nearest_landmark').value

    let data = {
      info_connect:this.info_connect
    }
    console.log(data)
    
    this.httpService.post('auth/infoconnects', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/home');
      }
    )
  }

  onSubmitSave(){
    // to fill the form if the user have pevious data
    this.info_connect.name = this.addmore.get('name').value
    this.info_connect.numberphone = this.addmore.get('numberphone').value
    this.info_connect.birth_date = moment(this.addmore.get('birth_date').value).format("YYYY-MM-DD");
    this.info_connect.time = this.addmore.get('time').value
    this.info_connect.neighborhood_name = this.addmore.get('neighborhood_name').value
    this.info_connect.street_name = this.addmore.get('street_name').value
    this.info_connect.house_number = this.addmore.get('house_number').value
    this.info_connect.nearest_landmark = this.addmore.get('nearest_landmark').value

    let data = {
      info_connect:this.info_connect
    }
    console.log(data)
    
    this.httpService.post('auth/infoconnects', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/home');
      }
    )
  }
  
  ionViewWillEnter(){
    this.httpService.makeGet('auth/display').subscribe(
      user_info => {
        this.user_info = user_info;
        console.log('user: ', user_info);
      },
      error => {
        console.log(error.error);
      },
      () => {
        // If the user not have previous data
        if (Array.isArray(this.user_info) && this.user_info.length==0) {
          this.nullValue = true;
        }
        else{
          this.nullValue = false;
        }
      }
    )
  }
  
    show(){
    // Set the user values who is has a previous address
    this.hideButton = false;

    let name = this.user_info[0].name;
    let numberphone = this.user_info[0].numberphone;
    let neighborhood = this.user_info[0].neighborhood_name;
    let street_name = this.user_info[0].street_name;
    let house_number = this.user_info[0].house_number;
    let nearest_landmark = this.user_info[0].nearest_landmark;

    this.addmore.controls.name.setValue(name);
    this.addmore.controls.numberphone.setValue(numberphone);
    this.addmore.controls.neighborhood_name.setValue(neighborhood);
    this.addmore.controls.street_name.setValue(street_name);
    this.addmore.controls.house_number.setValue(house_number);
    this.addmore.controls.nearest_landmark.setValue(nearest_landmark);

    this.putData = true;
  }
}
