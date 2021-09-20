import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewComponent } from './new/new.component';
import { HistoryComponent } from './history/history.component';
import{NotassignComponent} from'./not-assign/not-assign.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, OrdersComponent, OrderDetailsComponent, NewComponent, HistoryComponent,NotassignComponent]
})
export class HomePageModule {}
