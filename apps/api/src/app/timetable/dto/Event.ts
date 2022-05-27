import { Message } from "./Message";

export interface Event {

    /**
     * Planned Path. A sequence of station names separated by the pipe symbols ('|').
     * E.g.: 'Mainz Hbf|Rüsselsheim|Frankfrt(M) Flughafen'. For arrival, the path
     * indicates the stations that come before the current station. The first element
     * then is the trip's start station. For departure, the path indicates the
     * stations that come after the current station. The last element in the path then
     * is the trip's destination station. Note that the current station is never
     * included in the path (neither for arrival nor for departure).
     */
    ppth?: string;

    /**
     * Changed path.
     */
    cpth?: string;

    /**
     * Planned platform.
     */
    pp?: string;

    /**
     * Changed platform.
     */
    cp?: string;

    /**
     * Planned time. Planned departure or arrival time. The time, in ten digit
     * 'YYMMddHHmm' format, e.g. '1404011437' for 14:37 on April the 1st of 2014.
     */
    pt?: string;

    /**
     * Changed time. New estimated or actual departure or arrival time. The time, in
     * ten digit 'YYMMddHHmm' format, e.g. '1404011437' for 14:37 on April the 1st of
     * 2014.
     */
    ct?: string;

    /**
     * Planned status.
     */
    ps?: string;

    /**
     * Changed status. The status of this event, a one-character indicator that is one of:

    'a' = this event was added
    'c' = this event was cancelled
    'p' = this event was planned (also used when the cancellation of an event has
        beenrevoked) The status applies to the event, not to the trip as a whole. Insertion or removal of a single stop will usually affect two events at once: one arrival and one departure event. Note that these two events do not have to belong to the same stop. For example, removing the last stop of a trip will result in arrival cancellation for the last stop and of departure cancellation for the stop before the last. So asymmetric cancellations of just arrival or departure for a stop can occur.

     */
    cs?: string;

    /**
     * Hidden. 1 if the event should not be shown on WBT because travellers are not
     * supposed to enter or exit the train at this stop.
     */
    hi?: string;

    /**
     * Cancellation time. Time when the cancellation of this stop was created. The time, in ten digit 'YYMMddHHmm' format, e.g. '1404011437' for 14:37 on April the 1st of 2014.
     */
    clt?: string;

    /**
     * Wing. A sequence of trip id separated by the pipe symbols ('|'). E.g. '-906407760000782942-1403311431'.
     */
    wings?: string;

    /**
     * Transition. Trip id of the next or previous train of a shared train. At the start stop this references the previous trip, at the last stop it references the next trip. E.g. '2016448009055686515-1403311438-1'
     */
    tra?: string;

    /**
     * Planned status.
     */
    pde?: string;

    /**
     * Changed distant endpoint.
     */
    cde?: string;

    /**
     * Distant change.
     */
    dc?: string;

    /**
     * Line. The line indicator (e.g. "3" for an S-Bahn or "45S" for a bus).
     */
    l?: string;

    /**
     * List of messages.
     */
    m?: Message[];

}
