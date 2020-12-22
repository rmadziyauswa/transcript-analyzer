import { Component, Input } from '@angular/core';
import { TranscriptLoad } from './Models/transcript-load';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transcript-analyzer';
  callId!: string;
  selectedSensitivity:number = 0;
  constructor(){}

  ngOnInit(): void {
    this.selectedSensitivity = environment.defaultSensitivity;
  }

  callIdEmitter(e:string)
  {
    this.callId = e;
  }

  sensitivityEmitter(e:number)
  {
    this.selectedSensitivity = e;
  }
}
