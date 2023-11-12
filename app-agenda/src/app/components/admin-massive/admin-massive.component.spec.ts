import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMassiveComponent } from './admin-massive.component';

describe('AdminMassiveComponent', () => {
  let component: AdminMassiveComponent;
  let fixture: ComponentFixture<AdminMassiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMassiveComponent]
    });
    fixture = TestBed.createComponent(AdminMassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
