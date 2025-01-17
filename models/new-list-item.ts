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
 * @interface NewListItem
 */
export interface NewListItem {
    /**
     * Name of the item.
     * @type {string}
     * @memberof NewListItem
     */
    'name': string;
    /**
     * ID of the new hierarchy parent node.
     * @type {number}
     * @memberof NewListItem
     */
    'parentId'?: number;
}

