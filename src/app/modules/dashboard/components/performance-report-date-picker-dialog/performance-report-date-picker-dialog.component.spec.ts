import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportDatePickerDialogComponent } from './performance-report-date-picker-dialog.component';

describe('PerformanceReportDatePickerDialogComponent', () => {
  let component: PerformanceReportDatePickerDialogComponent;
  let fixture: ComponentFixture<PerformanceReportDatePickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceReportDatePickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportDatePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
