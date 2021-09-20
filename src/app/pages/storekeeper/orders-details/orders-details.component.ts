import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ParamService } from 'src/app/services/param.service';
import { receivedOrders } from 'src/app/models/receivedOrders';
import { storeKeeper } from 'src/app/models/storeKeeper';
import { Driver } from 'src/app/models/driversModel';
@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss'],
})
export class OrdersDetailsComponent implements OnInit {
  order_number: any;
  form: any;
  isChecked: any = false;
  receivedOrders: receivedOrders;
  storeKeeper: storeKeeper = new storeKeeper;
  driver: Driver[];
  finish_date: any;
  formB= [];

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
    for(let i in this.arr){
      if(this.arr[i]['id']==0 && (this.arr[i].isChecked==true)){
        this.furniture_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==1 && (this.arr[i].isChecked==true)){
        this.clothes_information.push(this.arr[i].val, "'");
      }
      if(this.arr[i]['id']==2 && (this.arr[i].isChecked==true)){
        this.dishes_information.push(this.arr[i].val);
      }
      if(this.arr[i]['id']==3 && (this.arr[i].isChecked==true)){
        this.electrical_tools_information.push(this.arr[i].val);
      }
      if(this.arr[i]['id']==4 && (this.arr[i].isChecked==true)){
        this.baby_things_information.push(this.arr[i].val);
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

    // push received orders
    this.storeKeeper.order_number=this.order_number.toString();
    this.storeKeeper.furniture=this.furniture_information.toString().replace(/"/g,"");
    this.storeKeeper.clothes=this.clothes_information.toString();
    this.storeKeeper.dishes=this.dishes_information.toString();
    this.storeKeeper.electrical_tools=this.electrical_tools_information.toString();
    this.storeKeeper.baby_things=this.baby_things_information.toString();
    this.storeKeeper.luxuries=this.luxuries_information.toString();
    this.storeKeeper.medical_devices=this.medical_devices_information.toString();
    this.storeKeeper.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
    this.storeKeeper.miscellaneous=this.miscellaneous_information.toString();

    let data = {
      storeKeeper:this.storeKeeper
    }

    this.httpService.post('auth/store_storekeeper_d', data).subscribe(
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
    console.log('Array: ', this.arr);
  }

  ionViewWillEnter() {
    this.order_number = this.param.order_number;
    let name = 'order_number'

    this.httpService.getWithParam('auth/receive_finish_date', this.order_number, name).subscribe(
      driver => {
        this.driver = driver;
      },
      error => {
        console.log(error);
      },
    )
    
    this.httpService.getWithParam('auth/receive_orders', this.order_number, name).subscribe(
      receivedOrders => {
        this.receivedOrders = receivedOrders;
      },
      error => {
        console.log(error);
      },
      () => {
          let  fur = this.receivedOrders[0].furniture;
          let  clo = this.receivedOrders[0].clothes;
          let  dish = this.receivedOrders[0].dishes;
          let  elec = this.receivedOrders[0].electrical_tools;
          let  baby = this.receivedOrders[0].baby_things;
          let  lux = this.receivedOrders[0].luxuries;
          let  acc = this.receivedOrders[0].accessories_and_mobiles;
          let  med = this.receivedOrders[0].medical_devices;
          let  mis = this.receivedOrders[0].miscellaneous;

        // put the sections name in array to use it when we need to orders in each section
        let kinds = [fur, clo, dish, elec, baby, lux, acc, med, mis];

        // to count the number of orders for each section
        let countOrders = function(sentence){
          if (sentence!=null){
            return sentence.split("'").length;
          }
        }
        // to split the orders in one section
        let splitOrders = function(sentence){
          return sentence.split("'");
        }
        let AllOrders = [];
        // to get specific order from one section
        let getAllOrders = function(sentence, i){
          console.log("getAllOrders: ");
          let split = splitOrders(sentence);
          AllOrders = split[i];
          console.log("AllOrders: ", AllOrders);
        return AllOrders;
        }
        // to get  All orders from all sections
        for(let k=0; k<9; k++){
          if(countOrders(kinds[k])>1){
            for(let i=0; i<countOrders(kinds[k]); i++){
              this.formB.push(getAllOrders(kinds[k], i));
            }
            // put all orders in Array with false Checked as default
            // for (var i in this.formB) {
            //   if (!this.formB[i].includes('null')){
            //     this.arr.push({ 'id': k, 'val': JSON.stringify(this.formB[i].replace(/['" ]/g, "")), 'isChecked': false});
            //     console.log('array: ', this.arr);
            //   }
            // }
          }
        }
        for(let k=0; k<9; k++){
          if(kinds[k]!=null){
            for (var i in this.formB) {
              if (this.formB[i]!=''){
                if (kinds[k].includes(this.formB[i])){
                  this.arr.push({ 'id':k, 'val': JSON.stringify(this.formB[i].replace(/['" ]/g, "")), 'isChecked': false});
                }
              }
            }
          }
        }

        console.log("formB: ", this.formB)
        this.arr.shift();
        // this.arr.pop();
        console.log('Arr Data: ', this.arr);
      }
    )
  }

}
