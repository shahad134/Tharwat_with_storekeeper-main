import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-storekeeper',
  templateUrl: './storekeeper.page.html',
  styleUrls: ['./storekeeper.page.scss'],
})
export class StorekeeperPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("is_admin");
    this.navCtrl.navigateRoot("/login")
  }
}