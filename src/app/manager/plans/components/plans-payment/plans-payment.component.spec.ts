import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansPaymentComponent } from './plans-payment.component';

describe('PlansPaymentComponent', () => {
  let component: PlansPaymentComponent;
  let fixture: ComponentFixture<PlansPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
