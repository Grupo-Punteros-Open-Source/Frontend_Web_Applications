import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavegationBarWorkshopComponent } from './side-navegation-bar-workshop.component';

describe('SideNavegationBarWorkshopComponent', () => {
  let component: SideNavegationBarWorkshopComponent;
  let fixture: ComponentFixture<SideNavegationBarWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavegationBarWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavegationBarWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
