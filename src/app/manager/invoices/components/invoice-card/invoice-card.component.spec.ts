import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCardComponent } from './invoices-card.component';

describe('InvoicesCardComponent', () => {
  let component: InvoicesCardComponent;
  let fixture: ComponentFixture<InvoicesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
