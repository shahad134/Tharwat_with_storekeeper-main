import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorekeeperPageRoutingModule } from './storekeeper-routing.module';

import { StorekeeperPage } from './storekeeper.page';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorekeeperPageRoutingModule
  ],
  declarations: [StorekeeperPage, ListDriversComponent, OrdersDetailsComponent]
})
export class StorekeeperPageModule {}
