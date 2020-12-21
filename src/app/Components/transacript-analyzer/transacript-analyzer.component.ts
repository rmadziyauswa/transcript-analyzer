import { Component, Input, OnInit } from '@angular/core';
import { TranscriptLoad } from 'src/app/Models/transcript-load';

@Component({
  selector: 'app-transacript-analyzer',
  templateUrl: './transacript-analyzer.component.html',
  styleUrls: ['./transacript-analyzer.component.css']
})
export class TransacriptAnalyzerComponent implements OnInit {
  columnsForReal:string[] = ['Time','Speaker','Sentence'];
  columnsForExpected:string[] = ['Line','Speaker','Sentence'];
  @Input() callId: string = "";

  constructor() { }
  ngOnInit(): void {
    
  }

}
