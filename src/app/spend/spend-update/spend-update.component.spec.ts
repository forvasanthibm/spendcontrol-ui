import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendUpdateComponent } from './spend-update.component';

describe('PatientCreateComponent', () => {
  let component: SpendUpdateComponent;
  let fixture: ComponentFixture<SpendUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
