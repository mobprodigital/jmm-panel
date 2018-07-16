import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

//components
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HomeComponent } from '../../core/components/home/home.component';
const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component : HomeComponent,
    children : [
      {
        path : 'dashbaord',
        component : DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
