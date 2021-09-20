import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ParamService } from 'src/app/services/param.service';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss'],
})
export class ListDriversComponent implements OnInit {
  drivers: any;

  constructor(
    private httpService :HttpServiceService,
    private alertService: AlertService,
    private param : ParamService,
    public modalController: ModalController,
    private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {}

  async presentModal($event: any, id: string) {
    // to send driver ID to next page
    this.param.id = id
    this.router.navigate(['orders']);
    console.log('param id in present:', this.param.id);
  }

  ionViewWillEnter() {
    this.httpService.makeGet('auth/driver_index').subscribe(
      drivers => {
        this.drivers = drivers;
        console.log('order_info: ', this.drivers);
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error['message']);
      }
    );
  }
}
