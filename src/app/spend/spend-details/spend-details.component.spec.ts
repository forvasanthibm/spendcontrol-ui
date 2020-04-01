import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendDetailsComponent } from './spend-details.component';

describe('PatientdataComponent', () => {
  let component: SpendDetailsComponent;
  let fixture: ComponentFixture<SpendDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
