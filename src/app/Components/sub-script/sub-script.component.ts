import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { SingleDataSet } from 'ng2-charts';
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
  @Input() selectedSensitivity:number = 0;
  @Input() matchingExpectedSentence:string = "";
  @Output() matchingExpectedSentenceEmitter = new EventEmitter<string>();
  pieChartData: SingleDataSet = [];
  expectedAgentLabel:string = "Rep :";
  tooltipPosition:TooltipPosition = "above";
  transcriptLoad!:TranscriptLoad;
  percentage:number = 0;
  customerName:string = "";
  customerChannel:number = 0;
  agentName:string = "";
  agentChannel:number = 0;


  constructor(private repoService:RepoService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.repoService.getTranscriptLoad(this.callId).subscribe(data => {
      this.transcriptLoad=data[0];
      if(this.transcriptLoad)
      {
        this.customerName = this.getFirstnameOnly(this.transcriptLoad.customer[0].full_name);
        this.customerChannel = this.transcriptLoad.customer[0].channel_no;
        this.agentChannel = this.transcriptLoad.agent[0].channel_no;
        let agentId= this.transcriptLoad.agent[0].agent_id;
        this.repoService.getAgentById(agentId).subscribe(data => this.agentName = this.getFirstnameOnly(data[0].full_name));
        this.percentage = this.calculatePercentage();
        this.pieChartData = [(100 - this.percentage) , this.percentage];
      }
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

  sentenceClasses(similarity:number,matching_sentence:string)
  {
    let isSimilar = similarity >= (this.selectedSensitivity / 100);
    let result:string[] = [];
    if(isSimilar){
      result.push("isSimilar");
    }
if(!this.isReal && this.matchingExpectedSentence === matching_sentence)
    {
      result = ["isSimilarDarker"];
    }

    return result;
  }

  getToolTip(similarity:number,sentence:string,matching_sentence:string)
  {
    let lineNumber = this.getLineNumberForMatchingSentence(matching_sentence);
    let percentage = Math.round(similarity * 100);
    let tooltip = "";
    if(lineNumber > 0)
    {
      tooltip = `${percentage}% matching with line #${lineNumber} "${matching_sentence}"`;
    }
    return tooltip;
  }

  setMatchingExpectedSentence(matching_sentence:string)
  {
    this.matchingExpectedSentence = matching_sentence;
    this.matchingExpectedSentenceEmitter.emit(this.matchingExpectedSentence);
  }

  getLineNumberForMatchingSentence(matching_sentence:string):number
  {
    let matchingFilter =  this.transcriptLoad.script.filter(s => s.sentence===matching_sentence);
    if(matchingFilter.length > 0)
    {
      return matchingFilter[0].order + 1;
    }
    return 0;
  }


  calculatePercentage()
  {
    let result = 0
    if(this.isReal)
    {
      let numberSelected =  this.transcriptLoad.transcript.filter(s => s.similarity >= (this.selectedSensitivity / 100)).length;
      let numberOfSentences = this.transcriptLoad.transcript.length;
      result = Math.round((numberSelected / numberOfSentences) * 100);

    }else{
      let numberSelected =  this.transcriptLoad.script.filter(s => s.similarity >= (this.selectedSensitivity / 100)).length;
      let numberOfSentences = this.transcriptLoad.script.length;
      result = Math.round((numberSelected / numberOfSentences) * 100);
    }
    return result;
  }

}
