/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListItem } from './list-item';

/**
 * 
 * @export
 * @interface List
 */
export interface List {
    /**
     * The name of the list
     * @type {string}
     * @memberof List
     */
    'name'?: string;
    /**
     * The elements in the list.
     * @type {Array<ListItem>}
     * @memberof List
     */
    'items'?: Array<ListItem>;
}

