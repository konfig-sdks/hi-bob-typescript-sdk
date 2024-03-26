/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CurrencyValue } from './currency-value';

/**
 * 
 * @export
 * @interface EquityEntryAllOf
 */
export interface EquityEntryAllOf {
    /**
     * The number of equities granted.
     * @type {number}
     * @memberof EquityEntryAllOf
     */
    'quantity'?: number;
    /**
     * The type of the grant.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'equityType'?: string;
    /**
     * Vesting commencement date.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'vestingCommencementDate'?: string;
    /**
     * Consent number.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'consentNumber'?: string;
    /**
     * Date the equity was granted.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'grantDate'?: string;
    /**
     * Date the options expire.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'optionExpiration'?: string;
    /**
     * 
     * @type {CurrencyValue}
     * @memberof EquityEntryAllOf
     */
    'exercisePrice'?: CurrencyValue;
    /**
     * Terms for exercising this grant.
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'vestingTerm'?: string;
    /**
     * Grant type. One of: Initial Grant, Merit Grant
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'grantType'?: string;
    /**
     * The vesting schedule ID assigned to this grant.
     * @type {number}
     * @memberof EquityEntryAllOf
     */
    'vestingSchedule'?: number;
    /**
     * The Grant number for employee.
     * @type {number}
     * @memberof EquityEntryAllOf
     */
    'grantNumber'?: number;
    /**
     * Grant status. one of: Granted, Pending Approval
     * @type {string}
     * @memberof EquityEntryAllOf
     */
    'grantStatus'?: string;
}

