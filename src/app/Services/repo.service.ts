import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Agent } from '../Models/agent';
import { Call } from '../Models/call';
import { TranscriptLoad } from '../Models/transcript-load';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  agentsEndpoint = "agents";
  callsEndpoint = "calls";
  transcriptsEndpoint = "transcripts";
  genericErrorMessage = "An error occurred, please try again.";

  constructor(private http: HttpClient) { }

  getAgents() {
    let url = `${environment.apiUrl}/${this.agentsEndpoint}`;
    return this.http.get<Agent[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAgentById(agentId: string) {
    let url = `${environment.apiUrl}/${this.agentsEndpoint}`;
    return this.http.get<Agent[]>(url)
      .pipe(
        map(data => data.filter(a => a.agent_id === agentId)),
        catchError(this.handleError)
      );
  }

  getCallsByAgentId(agentId: string) {
    let url = `${environment.apiUrl}/${this.callsEndpoint}`;
    return this.http.get<Call[]>(url)
      .pipe(
        map(data => data.filter(c => c.agent[0].agent_id === agentId)),
        catchError(this.handleError)
      );
  }

  getTranscriptLoad(callId: string) {
    let url = `${environment.apiUrl}/${this.transcriptsEndpoint}`;
    return this.http.get<TranscriptLoad[]>(url)
      .pipe(
        map(data => data.filter(t => t.call_id === callId)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(this.genericErrorMessage, error.error.message);
    } else {
      console.error(`${this.genericErrorMessage} , code : ${error.status}, ` + ` error text: ${error.error}`);
    }
    return throwError(this.genericErrorMessage);
  }
}
