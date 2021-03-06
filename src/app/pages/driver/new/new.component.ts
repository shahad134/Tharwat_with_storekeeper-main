import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';
import { ParamService } from 'src/app/services/param.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  order_info: Driver[];
  connect_info: Connect_info[];
  order_number: any;
  users: [{order_number:number}];


  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private httpService :HttpServiceService,
    private authService: AuthService,
    private env: EnvService,
    private alertService: AlertService,
    private param : ParamService,
    ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.refreshValues();
  }

  async presentModal($event, order_number) {
    this.param.order_number = order_number
    console.log('param order_number:', this.param.order_number);
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      cssClass: 'my-custom-class'
    });
    // to make the orders update in fast 
    modal.onDidDismiss().then(() => {
      setTimeout(() => { this.refreshValues() }, 10);
    });
    return await modal.present();
  }

  refreshValues(){
    // to get the orders that new
    this.param.order_number = this.order_number;

    this.httpService.makeGet('auth/api_receive_orders_wait').subscribe(
      order_info => {
        this.order_info = order_info;
        console.log('order_info: ', this.order_info);
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error['message']);
      },
    );

    this.httpService.makeGet('auth/index').subscribe(
      connect_info => {
        this.connect_info = connect_info;
        console.log(connect_info);
      }
    )
  }

  // ionViewWillEnter() {
    // this.param.order_number = this.order_number;

    // this.httpService.makeGet('auth/api_receive_orders_wait').subscribe(
    //   order_info => {
    //     this.order_info = order_info;
    //     console.log('order_info: ', this.order_info);
    //   },
    //   error => {
    //     console.log(error);
    //     this.alertService.presentToast(error['message']);
    //   },
    // );

    // this.httpService.makeGet('auth/index').subscribe(
    //   connect_info => {
    //     this.connect_info = connect_info;
    //     console.log(connect_info);
    //   }
    // )
  // }
}