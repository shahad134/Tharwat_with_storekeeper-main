import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Donations_info} from 'src/app/models/donations';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';
import { User } from 'src/app/models/user';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { ParamService } from 'src/app/services/param.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  order_number: any;

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private httpService :HttpServiceService,
    private authService: AuthService,
    private env: EnvService,
    private param : ParamService,
    private alertService: AlertService,
    ) { }

ngOnInit() {
  console.log('srart');
}

async presentModal($event, order_number) {
  this.param.order_number = order_number
  console.log('param order_number:', this.param.order_number);
  const modal = await this.modalController.create({
    component: OrderDetailsComponent,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}

// tutorialShown = false;

ionViewWillEnter() {    
  console.log('new page');

  // this.httpService.makeGet('auth/receive_new_orders').subscribe(
  this.httpService.makeGet('auth/receive_new_orders').subscribe(
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
  //    this.put(this.donations_info.furniture,this.furniture)
  //    console.log(donations_info);
  //  for(let i =0; i <= donations_info.length; i++){
  //   console.log(donations_info[i]);
  //  if(this.donations_info[i] == "null"){
  //  this.donations_info[i] ={
  //       furniture:'',
  //       clothes :'',
  //       electrical_tools:'',
  //       dishes:'',
  //       baby_things:'',
  //       luxuries:'',
  //       accessories_and_mobiles:'',
  //       medical_devices:'',
  //       miscellaneous:''
   
  // },
  //  JSON.stringify(donations_info[i])}}
  // }
  // ,
  //   ( error: any) => {
  //   console.log(error);
  // },
  // () => {
    
  // });
  // this.authService.connect_info().subscribe(
  //   connect_info => {
  //     // this.connect_info = connect_info[0];
  //     // console.log(connect_info[0]);
  //     connect_info.forEach(element => {
  //       this.connect_inlfo.push(element)
  //     });
  //     console.log('sss');
      
  //     console.log(connect_ info);
  //     console.log('sssdf');
      
  //     console.log(this.connect_inlfo);

      
  //   }
//   // );
//   this.authService.user().subscribe(
//     user => {
//       this.user =user;
//     }
//   );
// }
    //  });
// }
}