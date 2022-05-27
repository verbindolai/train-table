import {TimetableStop} from './TimetableStop';

export interface Connection {

  id: string;

  ts: string;

  eva?: string;

  cs: string;

  ref?: TimetableStop;

  s: TimetableStop;

}

