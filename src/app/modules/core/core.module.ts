import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule
} from "@angular/material";

// modules
import { DashboardModule } from "../dashboard/dashboard.module";
import { CampaignModule } from "../campaign/campaign.module";


const coreRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    DashboardModule,
    CampaignModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, RouterModule, DashboardModule, CampaignModule],
})
export class CoreModule { }
