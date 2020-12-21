import { Agent } from "./agent";
import { Customer } from "./customer";

export interface Call {
    call_id: string,
    calltype_id: string,
    agent: Agent[],
    customer: Customer[],
    call_start_time: Date,
    gs_file_url: string,
    duration: number
}
