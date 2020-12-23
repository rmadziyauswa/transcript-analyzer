import { Agent } from "./agent";
import { Customer } from "./customer";
import { Script } from "./script";
import { Transcript } from "./transcript";

export interface TranscriptLoad {
  call_id: string,
  file_url: string,
  calltype_id: string,
  call_datetime: Date,
  duration: number,
  agent: Agent[],
  customer: Customer[],
  script: Script[],
  transcript: Transcript[]
}
