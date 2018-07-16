import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCreativesComponent } from './campaign-creatives.component';

describe('CampaignCreativesComponent', () => {
  let component: CampaignCreativesComponent;
  let fixture: ComponentFixture<CampaignCreativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCreativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
