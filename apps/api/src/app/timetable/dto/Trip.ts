export interface TripLabel {

    /**
     * Filter flags.
     */
    f?: string;

    /**
     * Trip type.
     */
    t?: string;

    /**
     * Owner. A unique short-form and only intended to map a trip to specific evu.
     */
    o: string;

    /**
     * Trip/train number, e.g. "4523".
     */
    n: string;

    /**
     * Category. Trip category, e.g. "ICE" or "RE".
     */
    c: string;
}

export interface TripReference {

    /**
     * The referred trips label.
     */
    tl: TripLabel;

    /**
     * The referred trips reference trip elements.
     */
    rt?: TripLabel[];
}
