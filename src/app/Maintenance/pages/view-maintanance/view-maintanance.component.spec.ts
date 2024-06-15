import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaintananceComponent } from './view-maintanance.component';

describe('ViewMaintananceComponent', () => {
  let component: ViewMaintananceComponent;
  let fixture: ComponentFixture<ViewMaintananceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMaintananceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
