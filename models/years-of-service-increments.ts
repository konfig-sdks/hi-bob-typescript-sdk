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
 * @interface YearsOfServiceIncrements
 */
export interface YearsOfServiceIncrements {
    /**
     * Start after this number of years.
     * @type {number}
     * @memberof YearsOfServiceIncrements
     */
    'yearsOfService'?: number;
    /**
     * Additional days to add.
     * @type {number}
     * @memberof YearsOfServiceIncrements
     */
    'extraDays'?: number;
}
