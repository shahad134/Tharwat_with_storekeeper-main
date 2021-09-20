import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { NavController } from '@ionic/angular';
import { HttpServiceService} from '../../../services/http-service.service';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';
import {Donations_info} from 'src/app/models/donations';
import { ParamService } from 'src/app/services/param.service';

@Component({
  selector: 'app-not-assign',
  templateUrl: './not-assign.component.html',
  styleUrls: ['./not-assign.component.scss'],
})
export class NotassignComponent implements OnInit {
  order_number: any;

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

  async presentModal($event, order_number) {
    this.param.order_number = order_number
    console.log('param order_number:', this.param.order_number);
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
  ionViewWillEnter() {    
    console.log('history page');    
    this.httpService.makeGet('auth/receive_not_assign_orders').subscribe(
      order_number => {
        this.order_number = order_number;
        console.log('order_number: ', this.order_number);
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error['message']);
      },
    );
  }
    // this.httpService.makeGet('auth/receive_infoconnect').subscribe(
    //   connect_info => {
    //     this.connect_info = connect_info;
    //     console.log(connect_info);
    //   }
    // )
}