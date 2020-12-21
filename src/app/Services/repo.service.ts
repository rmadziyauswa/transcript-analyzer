import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError,from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';
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

  constructor(private http:HttpClient) { }

  getAgents() {
    let url = `${environment.apiUrl}/${this.agentsEndpoint}`;
    return this.http.get<Agent[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCalls() {
    let url = `${environment.apiUrl}/${this.callsEndpoint}`;
    return this.http.get<Call[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTranscriptLoad() {
    let url = `${environment.apiUrl}/${this.transcriptsEndpoint}`;
    return this.http.get<TranscriptLoad>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
