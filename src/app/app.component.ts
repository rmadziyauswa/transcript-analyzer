import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transcript-analyzer';
  callId!: string;
  selectedSensitivity: number = 0;

  ngOnInit(): void {
    this.selectedSensitivity = environment.defaultSensitivity;
  }

  setCallId(e: string) {
    this.callId = e;
  }

  setSensitivity(e: number) {
    this.selectedSensitivity = e;
  }
}
