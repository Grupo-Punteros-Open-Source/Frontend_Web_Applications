import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceCardComponent } from './maintanance-card.component';

describe('MaintananceCardComponent', () => {
  let component: MaintananceCardComponent;
  let fixture: ComponentFixture<MaintananceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintananceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintananceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
