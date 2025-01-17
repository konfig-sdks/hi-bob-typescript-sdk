/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface TableEntry
 */
export interface TableEntry {
    /**
     * ID.
     * @type {number}
     * @memberof TableEntry
     */
    'id'?: number;
    /**
     * The reason for this change.
     * @type {string}
     * @memberof TableEntry
     */
    'reason'?: string;
    /**
     * The date this entry becomes effective.
     * @type {string}
     * @memberof TableEntry
     */
    'effectiveDate': string;
}

