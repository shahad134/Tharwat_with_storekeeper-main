import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Connect_info } from 'src/app/models/connectinfo';
import { Driver } from 'src/app/models/driversModel';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ParamService } from 'src/app/services/param.service';
import { Donations_info } from 'src/app/models/donations';
import { receivedOrders } from 'src/app/models/receivedOrders';
import * as moment from 'moment';

@Component({
  selector: 'app-order-details-accept',
  templateUrl: './order-details -accept.component.html',
  styleUrls: ['./order-details -accept.component.scss'],
})
export class OrderDetailsAcceptComponent implements OnInit {
  order_number: any;
  donations_info: Donations_info[];
  connect_info: Connect_info[];
  driver: Driver[];
  isChecked = true;
  receivedOrders: receivedOrders = new receivedOrders;
  today: any;
  finish_order_date: any;

  form=[];
  furniture_information=[]
  clothes_information=[]
  dishes_information=[]
  electrical_tools_information=[]
  baby_things_information=[] 
  luxuries_information=[]
  accessories_and_mobiles_information=[]
  medical_devices_information=[]
  miscellaneous_information=[]

  constructor(public modalController: ModalController, 
    public actionSheetController: ActionSheetController,
    private httpService :HttpServiceService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private param : ParamService,
    ) { }

    public arr = [
      { id: 0, val: '', isChecked: false }
    ];

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  submit() {
    // to get the date of finish the order
    this.finish_order_date = new Date().toISOString();;

    let data = {
      order_number: [this.order_number]
    }

    this.order_number = this.param.order_number;
    this.httpService.post('auth/update_status_finish', data).subscribe(
      data => {
        this.alertService.presentToast("تم تحديث البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
      }
    )

    // push vlues that checked by the user to save in DB
    for(let i in this.arr){
      if(this.arr[i]['id']==0 && (this.arr[i].isChecked==true)){
        this.furniture_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==1 && (this.arr[i].isChecked==true)){
        this.clothes_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==2 && (this.arr[i].isChecked==true)){
        this.dishes_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==3 && (this.arr[i].isChecked==true)){
        this.electrical_tools_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==4 && (this.arr[i].isChecked==true)){
        this.baby_things_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==5 && (this.arr[i].isChecked==true)){
        this.luxuries_information.push(this.arr[i].val);
      }
      if(this.arr[i]['id']==6 && (this.arr[i].isChecked==true)){
        this.medical_devices_information.push(this.arr[i].val);
      }
      if(this.arr[i]['id']==7 && (this.arr[i].isChecked==true)){
        this.accessories_and_mobiles_information.push(this.arr[i].val);
      }
      if(this.arr[i]['id']==8 && (this.arr[i].isChecked==true)){
        this.miscellaneous_information.push(this.arr[i].val);
      }
    }
    console.log("arr Before: ", this.arr);

    // push received orders
    this.receivedOrders.order_number=this.order_number.toString();
    this.receivedOrders.furniture=this.furniture_information.toString().replace(/"/g,"");
    this.receivedOrders.clothes=this.clothes_information.toString().replace(/"/g,"");
    this.receivedOrders.dishes=this.dishes_information.toString().replace(/"/g,"");
    this.receivedOrders.electrical_tools=this.electrical_tools_information.toString().replace(/"/g,"");
    this.receivedOrders.baby_things=this.baby_things_information.toString().replace(/"/g,"");
    this.receivedOrders.luxuries=this.luxuries_information.toString().replace(/"/g,"");
    this.receivedOrders.medical_devices=this.medical_devices_information.toString().replace(/"/g,"");
    this.receivedOrders.accessories_and_mobiles=this.accessories_and_mobiles_information.toString().replace(/"/g,"");
    this.receivedOrders.miscellaneous=this.miscellaneous_information.toString().replace(/"/g,"");

    console.log("receivedOrders: ", this.receivedOrders);

    let data1 = {
      receivedOrders:this.receivedOrders,
      finish_order_date:this.finish_order_date
    }

    console.log('data1: ', data1);
    this.httpService.post('auth/add_orders', data1).subscribe(
      data1 => {
        this.alertService.presentToast("تم تحديث البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
      }
    )
  }

  ionViewWillEnter() {
    this.order_number = this.param.order_number;
    let name = 'order_number'
    this.httpService.getWithParam('auth/receive_donation', this.order_number, name).subscribe(
      donations_info => {
        this.donations_info = donations_info;
        console.log('donations_info inside', donations_info);
      },
      error => {
        console.log(error);
      },
      () => {
        let  fur = this.donations_info[0].furniture;
        let  clo = this.donations_info[0].clothes;
        let  dish = this.donations_info[0].dishes;
        let  elec = this.donations_info[0].electrical_tools;
        let  baby = this.donations_info[0].baby_things;
        let  lux = this.donations_info[0].luxuries;
        let  acc = this.donations_info[0].accessories_and_mobiles;
        let  med = this.donations_info[0].medical_devices;
        let  mis = this.donations_info[0].miscellaneous;

        // put the sections name in array to use it when we need to orders in each section
        let kinds = [fur, clo, dish, elec, baby, lux, acc, med, mis];

        // to count the number of orders for each section
        let countOrders = function(sentence){
          if (sentence!=null){
            return sentence.split("''").length;
          }
        }
        // to split the orders in one section
        let splitOrders = function(sentence){
          console.log('sen: ', sentence);
          return sentence.split("''");
        }
        let AllOrders = [];
        // to get specific order from one section
        let getAllOrders = function(sentence, i){
            let split = splitOrders(sentence);
            AllOrders = split[i];
          return AllOrders;
        }
        // to get  All orders from all sections
        for(let k=0; k<9; k++){
          console.log("k: ", k)
          console.log("countOrders: ", countOrders(kinds[k]), kinds[k]);
          if(countOrders(kinds[k])>=1){
            if(kinds[k]!=''){
              for(let i=0; i<(countOrders(kinds[k])); i++){
                this.form.push(getAllOrders(kinds[k], i));
              }
            }

            // put all orders in Array with false Checked as default
            // for (var i in this.form) {
            //   if (!this.form[i].includes('null')){
            //     if(this.arr[i].id = k){
            //       this.arr.push({ 'id': k, 'val': JSON.stringify(this.form[i].replace(/['" ]/g, "")), 'isChecked': false});
            //     }
            //   }
            // }
            console.log('form: ', this.form);
            console.log('arr: ', this.arr);
          }
        }
        // put all orders in Array with false Checked as default
        for(let k=0; k<9; k++){
          for (var i in this.form) {
            if (!this.form[i].includes('null')){
              if (kinds[k].includes(this.form[i])){
                this.arr.push({ 'id':k, 'val': JSON.stringify(this.form[i].replace(/['" ]/g, "")), 'isChecked': false});
              }
            }
          }
        }
        console.log('form After: ', this.form);

        // shift first value because we declared by assign empty value
        this.arr.shift();
        console.log('Arr Data: ', this.arr);
      }
    )

    this.order_number = this.param.order_number;
    this.httpService.getWithParam('auth/receive_infoconnect', this.order_number, name).subscribe(
      connect_info => {
        this.connect_info = connect_info;
      },
      error => {
        console.log(error);
      }
    )
  }
}

          // this.form = [
            // { val: fur[0].replace(/["\/\\\["]/g, ''), isChecked: false },
            // { val: getAllOrders(fur)[0].replace(/[^a-zA-Z1-9, ]/g, ""), isChecked: false},
          //   { val: clo[(clo.length -1)].replace(/[^a-zA-Z1-9, ]/g, ""), isChecked: false},
          //   { val: this.donations_info[0].dishes, isChecked: false},
          //   { val: this.donations_info[0].electrical_tools, isChecked: false},
          //   { val: this.donations_info[0].baby_things, isChecked: false},
          //   { val: this.donations_info[0].luxuries, isChecked: false},
          //   { val: this.donations_info[0].accessories_and_mobiles, isChecked: false},
          //   { val: this.donations_info[0].medical_devices, isChecked: false},
          //   { val: this.donations_info[0].miscellaneous, isChecked: false},
          // ];