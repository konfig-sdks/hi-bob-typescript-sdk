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
 * @interface SubmitTimeoffRequest
 */
export interface SubmitTimeoffRequest {
    /**
     * Request reason.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'description'?: string;
    /**
     * Request policy type, e.g. Holiday, Sick or any custom type defined.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'policyType': string;
    /**
     * The type of request duration.<br> Select <b>hours</b> when the request is for X hours during the day requested (This is supported only for policy types measured in hours).<br> Select <b>portionOnRange</b> when the  request is for every morning or every afternoon during the days requested.<br> Select <b>hoursOnRange</b> when the request is for X hours every day during the days requested (This is supported only for policy types measured in hours)
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'requestRangeType'?: SubmitTimeoffRequestRequestRangeTypeEnum;
    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'startDate': string;
    /**
     * Portion of the first day - relevant for requests in days.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'startDatePortion'?: SubmitTimeoffRequestStartDatePortionEnum;
    /**
     * Date of the last day of the time off (not relevant for requests using                                                the hours type).
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'endDate'?: string;
    /**
     * This field is mandatory if the requestRangeType is set to \'hours\'.
     * @type {number}
     * @memberof SubmitTimeoffRequest
     */
    'hours'?: number;
    /**
     * Relevant if requestRangeType is set to \'hours\'.
     * @type {number}
     * @memberof SubmitTimeoffRequest
     */
    'minutes'?: number;
    /**
     * Portion of the last day - relevant for requests in days.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'endDatePortion'?: SubmitTimeoffRequestEndDatePortionEnum;
    /**
     * Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'dayPortion'?: SubmitTimeoffRequestDayPortionEnum;
    /**
     * Enter the number of hours when the request is for X hours on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>hoursOnRange</b>.
     * @type {number}
     * @memberof SubmitTimeoffRequest
     */
    'dailyHours'?: number;
    /**
     * Enter the number of minutes when the request is for X hours and X minutes on the days requested.<br> This is relevant if the <b>requestRangeType</b> is <b>hoursOnRange</b> and the amount requested is not a full hour or hours.
     * @type {number}
     * @memberof SubmitTimeoffRequest
     */
    'dailyMinutes'?: number;
    /**
     * Admins only can skip the approval policy. Setting this field to true will create an approved request.
     * @type {boolean}
     * @memberof SubmitTimeoffRequest
     */
    'skipManagerApproval'?: boolean;
    /**
     * The employee ID of the user to be set as the approver for this request. This is relevant if \'skipManagerApproval\' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.
     * @type {string}
     * @memberof SubmitTimeoffRequest
     */
    'approver'?: string;
    /**
     * The reason code ID taken from the policy type\'s reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes
     * @type {number}
     * @memberof SubmitTimeoffRequest
     */
    'reasonCode'?: number;
}

type SubmitTimeoffRequestRequestRangeTypeEnum = 'days' | 'hours' | 'portionOnRange' | 'hoursOnRange'
type SubmitTimeoffRequestStartDatePortionEnum = 'all_day' | 'morning' | 'afternoon'
type SubmitTimeoffRequestEndDatePortionEnum = 'all_day' | 'morning' | 'afternoon'
type SubmitTimeoffRequestDayPortionEnum = 'morning' | 'afternoon'


