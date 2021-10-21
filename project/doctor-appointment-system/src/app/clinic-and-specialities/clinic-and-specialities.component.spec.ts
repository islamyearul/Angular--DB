import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAndSpecialitiesComponent } from './clinic-and-specialities.component';

describe('ClinicAndSpecialitiesComponent', () => {
  let component: ClinicAndSpecialitiesComponent;
  let fixture: ComponentFixture<ClinicAndSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicAndSpecialitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicAndSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
