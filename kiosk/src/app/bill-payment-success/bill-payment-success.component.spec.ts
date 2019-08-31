import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentSuccessComponent } from './bill-payment-success.component';

describe('BillPaymentSuccessComponent', () => {
  let component: BillPaymentSuccessComponent;
  let fixture: ComponentFixture<BillPaymentSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPaymentSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
