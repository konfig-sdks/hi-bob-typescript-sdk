/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleUpdateEmployeeRecordRequestAbout } from './people-update-employee-record-request-about';
import { PeopleUpdateEmployeeRecordRequestPersonal } from './people-update-employee-record-request-personal';

/**
 * 
 * @export
 * @interface PeopleUpdateEmployeeRecordRequest
 */
export interface PeopleUpdateEmployeeRecordRequest {
    /**
     * 
     * @type {string}
     * @memberof PeopleUpdateEmployeeRecordRequest
     */
    'firstName'?: string;
    /**
     * 
     * @type {PeopleUpdateEmployeeRecordRequestPersonal}
     * @memberof PeopleUpdateEmployeeRecordRequest
     */
    'personal'?: PeopleUpdateEmployeeRecordRequestPersonal;
    /**
     * 
     * @type {PeopleUpdateEmployeeRecordRequestAbout}
     * @memberof PeopleUpdateEmployeeRecordRequest
     */
    'about'?: PeopleUpdateEmployeeRecordRequestAbout;
}

