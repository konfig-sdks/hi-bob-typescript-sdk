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
 * @interface TimeoffChange
 */
export interface TimeoffChange {
    /**
     * Change type - created, canceled or deleted.
     * @type {string}
     * @memberof TimeoffChange
     */
    'changeType'?: TimeoffChangeChangeTypeEnum;
    /**
     * Employee ID
     * @type {string}
     * @memberof TimeoffChange
     */
    'employeeId'?: string;
    /**
     * Employee display name.
     * @type {string}
     * @memberof TimeoffChange
     */
    'employeeDisplayName'?: string;
    /**
     * Employee email address.
     * @type {string}
     * @memberof TimeoffChange
     */
    'employeeEmail'?: string;
    /**
     * TimeOff Request ID.
     * @type {number}
     * @memberof TimeoffChange
     */
    'requestId'?: number;
    /**
     * Display name of the policy type.
     * @type {string}
     * @memberof TimeoffChange
     */
    'policyTypeDisplayName'?: string;
    /**
     * The type of request duration.<br> <b>portionOnRange</b> is when the request is for every morning or every afternoon during the days requested.<br> <b>hoursOnRange</b> is when the request is for X hours every day during the days requested.
     * @type {string}
     * @memberof TimeoffChange
     */
    'type'?: TimeoffChangeTypeEnum;
    /**
     * Date of the first day of the time off (not relevant for requests using the hours type).
     * @type {string}
     * @memberof TimeoffChange
     */
    'startDate'?: string;
    /**
     * What portion of the first day is included - all_day, morning or afternoon (relevant for requests using the Days type).
     * @type {string}
     * @memberof TimeoffChange
     */
    'startPortion'?: string;
    /**
     * Date of the last day of the time off (not relevant for requests using the hours type).
     * @type {string}
     * @memberof TimeoffChange
     */
    'endDate'?: string;
    /**
     * What portion of the last day is included - all_day, morning or afternoon (relevant for requests using the Days type).
     * @type {string}
     * @memberof TimeoffChange
     */
    'endPortion'?: string;
    /**
     * What portion of the request\'s days is included - morning or afternoon (relevant for requests using the portionOnRange type).
     * @type {string}
     * @memberof TimeoffChange
     */
    'dayPortion'?: string;
    /**
     * Date of the time off (relevant for requests using the Hours type)
     * @type {string}
     * @memberof TimeoffChange
     */
    'date'?: string;
    /**
     * The time off duration in hours for the date (relevant for requests using the Hours type).
     * @type {number}
     * @memberof TimeoffChange
     */
    'hoursOnDate'?: number;
    /**
     * The time off duration in hours for every day in the request (relevant for requests using the hoursOnRange type)
     * @type {number}
     * @memberof TimeoffChange
     */
    'dailyHours'?: number;
    /**
     * The unit used for the totalDuration and totalCost - either \'days\' or \'hours\'
     * @type {string}
     * @memberof TimeoffChange
     */
    'durationUnit'?: TimeoffChangeDurationUnitEnum;
    /**
     * The total amount of time the request covers, including regular days off such as weekends
     * @type {number}
     * @memberof TimeoffChange
     */
    'totalDuration'?: number;
    /**
     * The amount that will be deducted from the balance
     * @type {number}
     * @memberof TimeoffChange
     */
    'totalCost'?: number;
    /**
     * Request change reason
     * @type {string}
     * @memberof TimeoffChange
     */
    'changeReason'?: string;
}

type TimeoffChangeChangeTypeEnum = 'Created' | 'Canceled' | 'Deleted'
type TimeoffChangeTypeEnum = 'days' | 'hours' | 'portionOnRange' | 'hoursOnRange'
type TimeoffChangeDurationUnitEnum = 'days' | 'hours'

