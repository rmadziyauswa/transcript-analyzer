import { Component, Input } from '@angular/core';
import { TranscriptLoad } from './Models/transcript-load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transcript-analyzer';
  callId!: string;

  callIdEmitter(e:string)
  {
    this.callId = e;
  }
}
