import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingLinksComponent } from './traking-links.component';

describe('TrakingLinksComponent', () => {
  let component: TrakingLinksComponent;
  let fixture: ComponentFixture<TrakingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
