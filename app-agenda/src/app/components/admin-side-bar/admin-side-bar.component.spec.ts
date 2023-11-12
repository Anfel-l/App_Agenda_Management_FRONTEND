import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideBarComponent } from './admin-side-bar.component';

describe('AdminSideBarComponent', () => {
  let component: AdminSideBarComponent;
  let fixture: ComponentFixture<AdminSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSideBarComponent]
    });
    fixture = TestBed.createComponent(AdminSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
