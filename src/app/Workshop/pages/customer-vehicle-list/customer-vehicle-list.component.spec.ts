import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVehicleListComponent } from './customer-vehicle-list.component';

describe('CustomerVehicleListComponent', () => {
  let component: CustomerVehicleListComponent;
  let fixture: ComponentFixture<CustomerVehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerVehicleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
