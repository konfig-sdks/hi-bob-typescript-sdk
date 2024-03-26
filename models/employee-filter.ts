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
 * @interface EmployeeFilter
 */
export interface EmployeeFilter {
    /**
     * The field id (path) to filter by.<br /> Supported fields: “root.id”, \"root.email\".<br />Any other path will get a response of 400 HTTP error.
     * @type {string}
     * @memberof EmployeeFilter
     */
    'fieldPath'?: string;
    /**
     * Supported operators: “equals” <br /> Any other operator will get a response of 400 HTTP error.
     * @type {string}
     * @memberof EmployeeFilter
     */
    'operator'?: string;
    /**
     * List of values to compare. <br /> Empty list will result in 400 HTTP error.
     * @type {Array<string>}
     * @memberof EmployeeFilter
     */
    'values'?: Array<string>;
}

