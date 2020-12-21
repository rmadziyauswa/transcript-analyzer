import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterBarComponent } from './parameter-bar.component';

describe('ParameterBarComponent', () => {
  let component: ParameterBarComponent;
  let fixture: ComponentFixture<ParameterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
