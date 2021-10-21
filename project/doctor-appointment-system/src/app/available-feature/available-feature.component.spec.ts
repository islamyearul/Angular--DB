import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFeatureComponent } from './available-feature.component';

describe('AvailableFeatureComponent', () => {
  let component: AvailableFeatureComponent;
  let fixture: ComponentFixture<AvailableFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
