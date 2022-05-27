import { TimetableStop } from './TimetableStop';
import { Message } from './Message';


export interface Timetable {
    /**
     * Station name.
     */
    station?: string;

    /**
     * EVA station number.
     */
    eva?: string;

    /**
     * List of TimetableStop.
     */
    s?: TimetableStop[];

    /**
     * List of Message.
     */
    m?: Message[];
}