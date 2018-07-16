import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCategoriesComponent } from './campaign-categories.component';

describe('CampaignCategoriesComponent', () => {
  let component: CampaignCategoriesComponent;
  let fixture: ComponentFixture<CampaignCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
