import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// modules
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    ChartsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
