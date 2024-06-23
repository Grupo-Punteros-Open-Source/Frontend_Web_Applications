import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRepairingComponent } from './vehicle-repairing.component';

describe('VehicleRepairingComponent', () => {
  let component: VehicleRepairingComponent;
  let fixture: ComponentFixture<VehicleRepairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleRepairingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleRepairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
