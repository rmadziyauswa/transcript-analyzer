import { Component,Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-sensitivity-meter',
  templateUrl: './sensitivity-meter.component.html',
  styleUrls: ['./sensitivity-meter.component.css']
})
export class SensitivityMeterComponent {
  @Output() change = new EventEmitter<number>();
  @Input() sensitivity:number = 38;
  @Input() rangeLabel = "MATCHING SENSITIVITY";
  @Input() disabled = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() step = 1;
  @Input() vertical = false;

  emitSensitivity()
  {
    this.change.emit(this.sensitivity);
  }

}
