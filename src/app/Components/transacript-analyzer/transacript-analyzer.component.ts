import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transacript-analyzer',
  templateUrl: './transacript-analyzer.component.html',
  styleUrls: ['./transacript-analyzer.component.css']
})
export class TransacriptAnalyzerComponent {
  columnsForReal: string[] = ['Time', 'Speaker', 'Sentence'];
  columnsForExpected: string[] = ['Line', 'Speaker', 'Sentence'];
  @Input() callId: string = "";
  @Input() selectedSensitivity: number = 0;
  currentMatchingExpectedSentence: string = "";

  currentMatchingExpectedSentenceChange(e: string) {
    this.currentMatchingExpectedSentence = e;
  }
}
