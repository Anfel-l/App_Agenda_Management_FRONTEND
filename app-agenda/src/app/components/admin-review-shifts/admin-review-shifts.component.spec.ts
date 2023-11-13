import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewShiftsComponent } from './admin-review-shifts.component';

describe('AdminReviewShiftsComponent', () => {
  let component: AdminReviewShiftsComponent;
  let fixture: ComponentFixture<AdminReviewShiftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReviewShiftsComponent],
    });
    fixture = TestBed.createComponent(AdminReviewShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
