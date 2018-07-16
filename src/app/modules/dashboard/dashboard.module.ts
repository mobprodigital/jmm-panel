import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// modules
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { PerformanceReportDatePickerDialogComponent } from './components/performance-report-date-picker-dialog/performance-report-date-picker-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    ChartsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [DashboardComponent, PerformanceReportDatePickerDialogComponent],
  entryComponents : [PerformanceReportDatePickerDialogComponent],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
