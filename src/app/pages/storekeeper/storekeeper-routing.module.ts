import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDriversComponent } from './list-drivers/list-drivers.component';

import { StorekeeperPage } from './storekeeper.page';

import { CommonModule } from '@angular/common';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

const routes: Routes = [
  {
    path: '',
    component: StorekeeperPage
  },
  {
    path: 'list-drivers',
    component: ListDriversComponent,
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'orders-details',
    component: OrdersDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class StorekeeperPageRoutingModule {}
