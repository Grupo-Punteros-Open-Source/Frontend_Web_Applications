import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceListComponent } from './maintanance-list.component';

describe('MaintananceListComponent', () => {
  let component: MaintananceListComponent;
  let fixture: ComponentFixture<MaintananceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintananceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintananceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
