/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Notice period length
 * @export
 * @interface EmployeeTerminationNoticePeriod
 */
export interface EmployeeTerminationNoticePeriod {
    /**
     * 
     * @type {string}
     * @memberof EmployeeTerminationNoticePeriod
     */
    'unit'?: EmployeeTerminationNoticePeriodUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof EmployeeTerminationNoticePeriod
     */
    'length'?: number;
}

type EmployeeTerminationNoticePeriodUnitEnum = 'days' | 'weeks' | 'month' | 'years'


