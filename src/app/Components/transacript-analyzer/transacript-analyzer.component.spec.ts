import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacriptAnalyzerComponent } from './transacript-analyzer.component';

describe('TransacriptAnalyzerComponent', () => {
  let component: TransacriptAnalyzerComponent;
  let fixture: ComponentFixture<TransacriptAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacriptAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacriptAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
