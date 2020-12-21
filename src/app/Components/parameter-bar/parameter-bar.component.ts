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
  agentDescriptions:string[] = ['full_name'];
  callDescriptions:string[] = ['call_start_time',''];
  selectedCall:string = "";
  @Output() callIdEmitter = new EventEmitter<string>();

  constructor(private repoService:RepoService) { }

  ngOnInit(): void {
    this.repoService.getAgents().subscribe(data=> this.agents = data);
  }

  changeSensitivity(e:number)
  {
    console.log("Sensitivity Changed To : ",e)
  }

  changeAgent(e:string)
  {
    this.repoService.getCallsByAgentId(e).subscribe(data => {
      this.calls = data.sort((a,b)=> a.call_start_time.getDate() - b.call_start_time.getDate());
    });
  }

  changeCall()
  {
    this.callIdEmitter.emit(this.selectedCall);
  }
}
