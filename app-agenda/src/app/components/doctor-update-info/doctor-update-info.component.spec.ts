import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateInfoComponent } from './doctor-update-info.component';

describe('DoctorUpdateInfoComponent', () => {
  let component: DoctorUpdateInfoComponent;
  let fixture: ComponentFixture<DoctorUpdateInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpdateInfoComponent]
    });
    fixture = TestBed.createComponent(DoctorUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
