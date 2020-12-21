import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubScriptComponent } from './sub-script.component';

describe('SubScriptComponent', () => {
  let component: SubScriptComponent;
  let fixture: ComponentFixture<SubScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
