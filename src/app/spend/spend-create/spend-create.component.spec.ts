import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendCreateComponent } from './spend-create.component';

describe('PatientCreateComponent', () => {
  let component: SpendCreateComponent;
  let fixture: ComponentFixture<SpendCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpendCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
