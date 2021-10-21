import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmaintComponent } from './appointmaint.component';

describe('AppointmaintComponent', () => {
  let component: AppointmaintComponent;
  let fixture: ComponentFixture<AppointmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
