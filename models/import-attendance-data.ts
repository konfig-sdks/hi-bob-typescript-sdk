/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ImportAttendanceEvent } from './import-attendance-event';

/**
 * 
 * @export
 * @interface ImportAttendanceData
 */
export interface ImportAttendanceData {
    /**
     * The ID type used to identify the employee. Can be one of: \"bobId\", \"email\", \"idInCompany\", or a custom field.<br/>For <b>custom fields</b> a forward slash separator should be used.<br/>In order to use a specific custom field to identify an employee, for example a custom field called \"Payroll integration ID\":<ul><li>Query the field name via the <a href=\'https://apidocs.hibob.com/reference/get_company-people-fields\'>\"Get all company fields\"</a></li><li>In the response the name will look like <b>\"identification.custom.Payroll Integration ID_1RNhIIf\"</b></li><li>The value to use should be: <b>\"/identification/custom/Payroll Integration ID_1RNhI\"</b></li></ul>
     * @type {string}
     * @memberof ImportAttendanceData
     */
    'idType': string;
    /**
     * List of attendance events
     * @type {Array<ImportAttendanceEvent>}
     * @memberof ImportAttendanceData
     */
    'requests': Array<ImportAttendanceEvent>;
    /**
     * Allows to set custom date format for the date-time values sent in the requests
     * @type {string}
     * @memberof ImportAttendanceData
     */
    'dateTimeFormat'?: string;
}

