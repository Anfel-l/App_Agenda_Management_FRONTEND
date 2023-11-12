import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgendaComponent } from './admin-agenda.component';

describe('AdminAgendaComponent', () => {
  let component: AdminAgendaComponent;
  let fixture: ComponentFixture<AdminAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAgendaComponent]
    });
    fixture = TestBed.createComponent(AdminAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
