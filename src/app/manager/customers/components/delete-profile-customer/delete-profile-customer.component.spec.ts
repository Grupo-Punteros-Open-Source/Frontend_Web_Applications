import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileCustomerComponent } from './delete-profile-customer.component';

describe('DeleteProfileCustomerComponent', () => {
  let component: DeleteProfileCustomerComponent;
  let fixture: ComponentFixture<DeleteProfileCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteProfileCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProfileCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
