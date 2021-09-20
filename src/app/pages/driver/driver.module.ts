import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DriverPageRoutingModule } from './driver-routing.module';
import { DriverPage } from './driver.page';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsAcceptComponent } from './order-details -accept/order-details -accept.component';
import { NewComponent } from './new/new.component';
import { HistoryComponent } from './history/history.component';
import { finishComponent } from './finish/finish.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverPageRoutingModule
  ],
  declarations: [DriverPage, OrdersComponent, OrderDetailsComponent, NewComponent, HistoryComponent,finishComponent, OrderDetailsAcceptComponent]
})
export class DriverPageModule {}
