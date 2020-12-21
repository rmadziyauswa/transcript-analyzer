import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranscriptLoad } from 'src/app/Models/transcript-load';
import { RepoService } from 'src/app/Services/repo.service';

@Component({
  selector: 'app-sub-script',
  templateUrl: './sub-script.component.html',
  styleUrls: ['./sub-script.component.css']
})
export class SubScriptComponent implements OnInit,OnChanges {
  @Input() columns?:string[];
  @Input() callId: string = "";
  @Input() headerLabel: string = "Real";
  @Input()isReal:boolean = true;
  transcriptLoad!:TranscriptLoad;
  percentage:number = 35;
  customerName:string = "";
  customerChannel:number = 0;
  agentName:string = "";
  agentChannel:number = 0;


  constructor(private repoService:RepoService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.repoService.getTranscriptLoad(this.callId).subscribe(data => {
      this.transcriptLoad=data[0];
      this.customerName = this.getFirstnameOnly(this.transcriptLoad.customer[0].full_name);
      this.customerChannel = this.transcriptLoad.customer[0].channel_no;
      this.agentChannel = this.transcriptLoad.agent[0].channel_no;
      let agentId= this.transcriptLoad.agent[0].agent_id;
      this.repoService.getAgentById(agentId).subscribe(data => this.agentName = this.getFirstnameOnly(data[0].full_name));
    });
  }

  ngOnInit(): void {
  }

  getSpeaker(channel_no:number){
    if(channel_no===this.agentChannel)
    {
      return this.agentName;
    }else if(channel_no===this.customerChannel)
    {
      return this.customerName;
    }
    return "";
  }

  getFirstnameOnly(fullName:string)
  {
    let result = fullName.split(" ");
    if(result.length > 1)
    {
      return result[0];
    }
    return fullName;
  }

  getTimeFrom(timeInSeconds:number)
  {
    let minute =  Math.floor(timeInSeconds / 60).toString();
    let seconds = (timeInSeconds % 60).toString();
    if(minute.length < 2)
    {
      minute = `0${minute}`;
    }
    if(seconds.length < 2)
    {
      seconds = `0${seconds}`;
    }
    return `${minute}:${seconds}`;
  }

  containerClasses()
  {
    if(!this.isReal){
      return ["transcript","isExpected"];
    }
    else{
      return ["transcript"];
    }
  }

}
