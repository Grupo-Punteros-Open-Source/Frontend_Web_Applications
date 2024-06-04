import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVehicleListComponent } from './client-vehicle-list.component';

describe('ClientVehicleListComponent', () => {
  let component: ClientVehicleListComponent;
  let fixture: ComponentFixture<ClientVehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientVehicleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
