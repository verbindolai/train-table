import { Message } from "./Message";
import { TripLabel, TripReference } from "./Trip";
import { HistoricDelay, HistoricPlatformChange } from "./Historic";
import { Connection } from "./Connection";
import { ReferenceTripRelation } from "./ReferenceTrip";
import { Event } from "./Event";

export interface TimetableStop {

    /**
     * An id that uniquely identifies the stop. It consists of the following three elements separated by dashes
     * a 'daily trip id' that uniquely identifies a trip within one day. This id is typically reused on subsequent days. This could be negative.
     * a 6-digit date specifier (YYMMdd) that indicates the planned departure date of the trip from its start station.
     * an index that indicates the position of the stop within the trip (in rare cases, one trip may arrive multiple times at one station). Added trips get indices above 100.
     * @example '-7874571842864554321-1403311221-11' would be used for a trip with daily trip id '-7874571842864554321' that starts on march the 31th 2014 and where the current station is the 11th stop.
     */
    id: string;

    /**
     * The eva code of the station of this stop. 
     * @example '8000105' for Frankfurt(Main)Hbf.
     */
    eva: string;

    /**
     * Trip label.
     */
    tl?: TripLabel;

    /**
     * Reference to an referenced trip. The substitution or additional trip references the originally planned trip. 
     * Note, referenced trip != reference trip
     */
    ref?: TripReference;


    /**
     * Arrival element. This element does not have child elements. 
     * All information about the arrival is stored in attributes.
     */
    ar?: Event;


    /**
     * Departure element. This element does not have child elements. 
     * All information about the departure is stored in attributes.
     */
    dp?: Event;


    /**
     * Message element.
     */
    m?: Message[];


    /**
     * Historic delay element.
     */
    hd: HistoricDelay;


    /**
     * Historic platform change element.
     */
    hpc?: HistoricPlatformChange[];


    /**
     * Connection element.
     */
    conn?: Connection[];


    /**
     * Reference trip relation element.
     */
    rtr?: ReferenceTripRelation[];
}