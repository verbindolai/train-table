import { DistributorMessage } from "./Distributor";
import { TripLabel } from "./Trip";

export interface Message {
    id: string;

    /**
     * Message type.
     */
    t: string;

    /**
     * Valid from. The time, in ten digit 'YYMMddHHmm' format, e.g. '1404011437' for 14:37 on April the 1st of 2014.
     */
    from?: string;

    /**
     * Valid to. The time, in ten digit 'YYMMddHHmm' format, e.g. '1404011437' for 14:37 on April the 1st of 2014.
     */
    to?: string;

    /**
     * Code.
     */
    c?: string;

    /**
     * Internal text.
     */
    int?: string;

    /**
     * External text.
     */
    ext?: string;

    /**
     * Category
     */
    cat?: string;

    /**
     * External category.
     */
    ec?: string;

    /**
     * Timestamp. The time, in ten digit 'YYMMddHHmm' format, e.g. "1404011437" for 14:37 on April the 1st of 2014.
     */
    ts?: string;

    /**
     * Priority.
     */
    pr?: string;

    /**
     * Owner.
     */
    o?: string;

    /**
     * External link associated with the message.
     */
    elnk?: string;

    /**
     * Deleted.
     */
    del?: string;

    /**
     * Distributor message.
     */
    dm?: DistributorMessage[];

    /**
     * Trip label.
     */
    tl?: TripLabel[];
}
