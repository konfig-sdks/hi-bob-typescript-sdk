/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An event indicating clock-in, clock-out or both
 * @export
 * @interface ImportAttendanceEvent
 */
export interface ImportAttendanceEvent {
    /**
     * The id value to identify the customer by. Will fetch the employee based on the field (type) selected in <i>idType</i>.
     * @type {string}
     * @memberof ImportAttendanceEvent
     */
    'id': string;
    /**
     * The timestamp to log as a clock-in date-time in local time
     * @type {string}
     * @memberof ImportAttendanceEvent
     */
    'clockIn'?: string;
    /**
     * The timestamp to log as a clock-out date-time in local time.
     * @type {string}
     * @memberof ImportAttendanceEvent
     */
    'clockOut'?: string;
}

