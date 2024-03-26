/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeReference } from './employee-reference';

/**
 * 
 * @export
 * @interface WorkPart
 */
export interface WorkPart {
    /**
     * The employee\'s title.
     * @type {string}
     * @memberof WorkPart
     */
    'title'?: string;
    /**
     * 
     * @type {EmployeeReference}
     * @memberof WorkPart
     */
    'reportsTo'?: EmployeeReference;
    /**
     * The employee\'s description.
     * @type {string}
     * @memberof WorkPart
     */
    'department'?: string;
    /**
     * The employee\'s site.
     * @type {string}
     * @memberof WorkPart
     */
    'site'?: string;
    /**
     * The employee\'s employment start date
     * @type {string}
     * @memberof WorkPart
     */
    'startDate'?: string;
}

