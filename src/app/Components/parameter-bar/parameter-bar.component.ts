import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Agent } from 'src/app/Models/agent';
import { Call } from 'src/app/Models/call';
import { TranscriptLoad } from 'src/app/Models/transcript-load';
import { RepoService } from 'src/app/Services/repo.service';

@Component({
  selector: 'app-parameter-bar',
  templateUrl: './parameter-bar.component.html',
  styleUrls: ['./parameter-bar.component.css']
})
export class ParameterBarComponent implements OnInit {
  calls?: Call[];
  agents?: Agent[];
  transcriptLoad!: TranscriptLoad;
  agentDescriptions: string[] = ['full_name'];
  callDescriptions: string[] = ['call_start_time', ''];
  selectedCall: string = "";
  selectedAgent: string = "";
  DEFAULT_SENSITIVITY: number = 38;
  selectedSensitivity: number = 0;
  @Output() callIdEmitter = new EventEmitter<string>();
  @Output() sensitivityEmitter = new EventEmitter<number>();

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repoService.getAgents().subscribe(data => this.agents = data);
  }

  changeSensitivity(e: number) {
    this.selectedSensitivity = e;
    this.sensitivityEmitter.emit(this.selectedSensitivity);
  }

  changeAgent(e: string) {
    this.selectedAgent = e;
    this.selectedCall = "";
    this.changeCall(this.selectedCall);
    this.repoService.getCallsByAgentId(e).subscribe(data => {
      this.calls = data.sort((a, b) => a.call_start_time.getDate() - b.call_start_time.getDate());
    });
  }

  changeCall(e: string) {
    this.selectedSensitivity = this.DEFAULT_SENSITIVITY;
    this.selectedCall = e;
    this.callIdEmitter.emit(this.selectedCall);
  }

  isCallsDisabled() {
    if (this.calls) {
      return false;
    }
    return true;
  }
}
