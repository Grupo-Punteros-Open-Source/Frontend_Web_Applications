import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavegationBarCustomerComponent } from './side-navegation-bar-customer.component';

describe('SideNavegationBarCustomerComponent', () => {
  let component: SideNavegationBarCustomerComponent;
  let fixture: ComponentFixture<SideNavegationBarCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavegationBarCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavegationBarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
