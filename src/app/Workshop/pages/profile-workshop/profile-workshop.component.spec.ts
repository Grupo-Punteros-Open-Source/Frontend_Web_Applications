import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkshopComponent } from './profile-workshop.component';

describe('ProfileWorkshopComponent', () => {
  let component: ProfileWorkshopComponent;
  let fixture: ComponentFixture<ProfileWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
