import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NewComponent } from './new/new.component'
import { RequestPage } from '../home/request/request.page'
import { OrdersComponent } from './orders/orders.component';
import { HistoryComponent } from './history/history.component';
import { componentFactoryName } from '@angular/compiler';
import {NotassignComponent} from './not-assign/not-assign.component'
const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'orders',
    component: OrdersComponent,
 
  children: [
    {
      path: '',
      redirectTo: "new"
    },
  {
    path: 'new',
    component:NewComponent,
     },      
     {  
      path: 'history',
      component: HistoryComponent
    },
    {
      path:'not-assign',
      component:NotassignComponent
    }
     
  ],
},
{
  path: "**",
  redirectTo: "/"
},
  // {
  //   path: 'order-details',
  //   loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
