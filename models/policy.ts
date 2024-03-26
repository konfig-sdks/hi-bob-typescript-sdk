/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { YearsOfServiceIncrements } from './years-of-service-increments';

/**
 * 
 * @export
 * @interface Policy
 */
export interface Policy {
    /**
     * Policy description.
     * @type {string}
     * @memberof Policy
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Policy
     */
    'name'?: string;
    /**
     * Base annual allowance.
     * @type {number}
     * @memberof Policy
     */
    'allowance'?: number;
    /**
     * Maximum balance at the end of the cycle.
     * @type {number}
     * @memberof Policy
     */
    'maxBalance'?: number;
    /**
     * Minimum balance cap.
     * @type {number}
     * @memberof Policy
     */
    'minBalance'?: number;
    /**
     * 
     * @type {Array<YearsOfServiceIncrements>}
     * @memberof Policy
     */
    'yosIncrease'?: Array<YearsOfServiceIncrements>;
    /**
     * The shortest amount of time employees can request.
     * @type {string}
     * @memberof Policy
     */
    'minTimeOffRequestDuration'?: PolicyMinTimeOffRequestDurationEnum;
    /**
     * Requests require approval.
     * @type {boolean}
     * @memberof Policy
     */
    'approvalRequired'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Policy
     */
    'unit'?: PolicyUnitEnum;
}

type PolicyMinTimeOffRequestDurationEnum = 'fullDay' | 'halfDay' | 'fullHour' | 'halfHour' | 'quarterHour'
type PolicyUnitEnum = 'days' | 'hours'

