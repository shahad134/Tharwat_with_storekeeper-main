import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsAcceptComponent } from '../order-details -accept/order-details -accept.component';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { ParamService } from 'src/app/services/param.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  order_info: Driver[];
  connect_info: Connect_info[];
  order_number: any;
  users: [{order_number:number}];

  interval: any;

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
    const modal = await this.modalController.create({
      component: OrderDetailsAcceptComponent,
      cssClass: 'my-custom-class'
    });
    // to make the orders update in fast 
    modal.onDidDismiss().then(() => {
      setTimeout(() => { this.refreshValues() }, 10);
    });
    return await modal.present();
  }

  refreshValues(){
    // to get the orders that accept
    this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(
      order_info => {
        this.order_info = order_info;
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error['message']);
      },
    )
    // to get the connect info for these orders
    this.httpService.makeGet('auth/index').subscribe(
      connect_info => {
        this.connect_info = connect_info;
      }
    )
  }
}