import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-sensitivity-meter',
  templateUrl: './sensitivity-meter.component.html',
  styleUrls: ['./sensitivity-meter.component.css']
})
export class SensitivityMeterComponent implements OnInit {
  @Output() change = new EventEmitter<number>();
  sensitivity:number = 38;
  @Input() rangeLabel = "MATCHING SENSITIVITY";
  @Input() disabled = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() step = 1;
  @Input() vertical = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  emitSensitivity()
  {
    this.change.emit(this.sensitivity);
  }

}