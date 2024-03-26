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
 * @interface PolicyType
 */
export interface PolicyType {
    /**
     * 
     * @type {string}
     * @memberof PolicyType
     */
    'name'?: string;
    /**
     * Activity type.
     * @type {string}
     * @memberof PolicyType
     */
    'activity'?: PolicyTypeActivityEnum;
    /**
     * Requests will be deducted from the balance only for working days.
     * @type {boolean}
     * @memberof PolicyType
     */
    'bookingWorkDaysOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyType
     */
    'unit'?: PolicyTypeUnitEnum;
}

type PolicyTypeActivityEnum = 'paidTimeoff' | 'unpaidTimeoff' | 'workTime'
type PolicyTypeUnitEnum = 'days' | 'hours'


