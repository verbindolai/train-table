export interface ReferenceTrip {
    /**
     * An id that uniquely identifies the reference trip. It consists of the following two elements separated by dashes:
     * A 'daily trip id' that uniquely identifies a reference trip within one day. This id is typically reused on subsequent days. This could be negative.
     * A 10-digit date specifier (YYMMddHHmm) that indicates the planned departure date of the referenced regular trip from its start station.
     * @example '-7874571842864554321-1403311221' would be used for a trip with daily trip id '-7874571842864554321' that starts on march the 31th 2014.
     */
    id: string;

    /**
     * The cancellation flag. True means, the reference trip is cancelled.
     */
    c: boolean;

    /**
     * Reference trip label.
     */
    rtl: ReferenceTripLabel;

    /**
     * Reference trip stop label of the start departure event.
     */
    sd: ReferenceTripStopLabel;

    /**
     * Reference trip stop label of the end arrival event.
     */
    ea: ReferenceTripStopLabel;
}


export interface ReferenceTripStopLabel {
    /**
     * The index of the correspondent stop of the regular trip.
     */
    i: number;

    /**
     * The planned time of the correspondent stop of the regular trip.
     */
    pt: string;

    /**
     * The eva number of the correspondent stop of the regular trip.
     */
    eva: number;

    /**
     * The (long) name of the correspondent stop of the regular trip.
     */
    n: string;
}

export interface ReferenceTripLabel {
    /**
     * Trip/train number.
     * @example "4523"
     */
    n: string;

    /**
     * Trip category. 
     * @example "ICE" or "RE".
     */
    c: string;
}

export interface ReferenceTripRelation {
    rt: ReferenceTrip;

    rts: string;
}
