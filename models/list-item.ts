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
 * @interface ListItem
 */
export interface ListItem {
    /**
     * Internal ID of the item.
     * @type {number}
     * @memberof ListItem
     */
    'id'?: number;
    /**
     * Name of the item.
     * @type {string}
     * @memberof ListItem
     */
    'name'?: string;
    /**
     * Whether the item is archived (not available for selection).
     * @type {boolean}
     * @memberof ListItem
     */
    'archived'?: boolean;
    /**
     * Nested items - if the list is nested.
     * @type {Array<ListItem>}
     * @memberof ListItem
     */
    'children'?: Array<ListItem>;
}
