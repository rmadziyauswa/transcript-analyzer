import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitivityMeterComponent } from './sensitivity-meter.component';

describe('SensitivityMeterComponent', () => {
  let component: SensitivityMeterComponent;
  let fixture: ComponentFixture<SensitivityMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitivityMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitivityMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
