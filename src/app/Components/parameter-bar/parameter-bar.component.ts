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
  @Output() transcriptLoadEmitter = new EventEmitter<TranscriptLoad>();

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

    console.log("Agent Changed To : ",e)
    this.repoService.getCalls().subscribe(data => this.calls = data.filter(c => c.agent[0].agent_id == e).sort((a,b)=> a.call_start_time.getDate() - b.call_start_time.getDate()));
  }

  changeCall()
  {
    console.log("Call Changed To : ",this.selectedCall)
    this.repoService.getTranscriptLoad().subscribe(data => {
      console.log(data); 
      this.transcriptLoad = data;
      this.transcriptLoadEmitter.emit(this.transcriptLoad);
    });
  }

}
