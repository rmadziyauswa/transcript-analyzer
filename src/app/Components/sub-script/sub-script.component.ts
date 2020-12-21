import { Component, Input, OnInit } from '@angular/core';
import { TranscriptLoad } from 'src/app/Models/transcript-load';

@Component({
  selector: 'app-sub-script',
  templateUrl: './sub-script.component.html',
  styleUrls: ['./sub-script.component.css']
})
export class SubScriptComponent implements OnInit {
  @Input() columns?:string[];
  @Input() transcriptLoad!: TranscriptLoad;
  isNormalScript:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
