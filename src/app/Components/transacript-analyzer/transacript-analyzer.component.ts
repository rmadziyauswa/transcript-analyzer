import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranscriptLoad } from 'src/app/Models/transcript-load';

@Component({
  selector: 'app-transacript-analyzer',
  templateUrl: './transacript-analyzer.component.html',
  styleUrls: ['./transacript-analyzer.component.css']
})
export class TransacriptAnalyzerComponent implements OnInit, OnChanges {
  columnsForReal:string[] = ['Time','Speaker','Sentence'];
  columnsForExpected:string[] = ['Line','Speaker','Sentence'];
  @Input() callId: string = "";
  @Input() selectedSensitivity:number = 0;
  currentMatchingExpectedSentence:string = "";

  constructor() { }
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  currentMatchingExpectedSentenceChange(e:string)
  {
    this.currentMatchingExpectedSentence = e;
  }
}
