import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ParamService } from 'src/app/services/param.service';
import { OrdersDetailsComponent } from '../orders-details/orders-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any;
  id: string;

  constructor(
    private httpService :HttpServiceService,
    private alertService: AlertService,
    private param : ParamService,
    public modalController: ModalController,
    private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {}

  async presentModal($event, order_number) {
    this.param.order_number = order_number
    console.log('param in orders page:', this.param.order_number);
    const modal = await this.modalController.create({
      component: OrdersDetailsComponent,
      cssClass: 'my-custom-class'
    });
    // to make the orders update in fast 
    modal.onDidDismiss().then(() => {
      setTimeout(() => { this.ionViewWillEnter() }, 10);
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.id = this.param.id;
    let name = 'user_id'
    this.httpService.getWithParam('auth/get_driver_order', this.id, name).subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        console.log(error);
      }
    )
  }
}
