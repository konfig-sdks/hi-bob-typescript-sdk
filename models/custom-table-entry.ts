/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The row data depends on what is defined in the table\'s schema, use HiBob Custom Table Metadata API to get list of defined columns. The only property that\'s always present is ID.
 * @export
 * @interface CustomTableEntry
 */
export interface CustomTableEntry {
    /**
     * The ID of the row
     * @type {number}
     * @memberof CustomTableEntry
     */
    'id'?: number;
}

