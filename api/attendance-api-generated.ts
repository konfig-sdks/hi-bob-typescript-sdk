/* tslint:disable */
/* eslint-disable */
/*
Bob API

Access your employees data with the Bob API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ImportAttendanceData } from '../models';
// @ts-ignore
import { ImportAttendanceEvent } from '../models';
// @ts-ignore
import { ImportAttendanceResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AttendanceApi - axios parameter creator
 * @export
 */
export const AttendanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Import attendance data
         * @param {'aggregate' | 'immediate'} importMethod Indicates if the provided data should be processed via an aggregation engine or immediately. &lt;ul&gt;Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.&lt;/ul&gt;&lt;ul&gt;Immediate - will insert the records as-is.&lt;/ul&gt;
         * @param {ImportAttendanceData} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importData: async (importMethod: 'aggregate' | 'immediate', body: ImportAttendanceData, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'importMethod' is not null or undefined
            assertParamExists('importData', 'importMethod', importMethod)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('importData', 'body', body)
            const localVarPath = `/attendance/import/{importMethod}`
                .replace(`{${"importMethod"}}`, encodeURIComponent(String(importMethod !== undefined ? importMethod : `-importMethod-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/attendance/import/{importMethod}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AttendanceApi - functional programming interface
 * @export
 */
export const AttendanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttendanceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Import attendance data
         * @param {AttendanceApiImportDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importData(requestParameters: AttendanceApiImportDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImportAttendanceResponse>> {
            const body: ImportAttendanceData = {
                idType: requestParameters.idType,
                requests: requestParameters.requests,
                dateTimeFormat: requestParameters.dateTimeFormat
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.importData(requestParameters.importMethod, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AttendanceApi - factory interface
 * @export
 */
export const AttendanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttendanceApiFp(configuration)
    return {
        /**
         * 
         * @summary Import attendance data
         * @param {AttendanceApiImportDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importData(requestParameters: AttendanceApiImportDataRequest, options?: AxiosRequestConfig): AxiosPromise<ImportAttendanceResponse> {
            return localVarFp.importData(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for importData operation in AttendanceApi.
 * @export
 * @interface AttendanceApiImportDataRequest
 */
export type AttendanceApiImportDataRequest = {
    
    /**
    * Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>
    * @type {'aggregate' | 'immediate'}
    * @memberof AttendanceApiImportData
    */
    readonly importMethod: 'aggregate' | 'immediate'
    
} & ImportAttendanceData

/**
 * AttendanceApiGenerated - object-oriented interface
 * @export
 * @class AttendanceApiGenerated
 * @extends {BaseAPI}
 */
export class AttendanceApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Import attendance data
     * @param {AttendanceApiImportDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttendanceApiGenerated
     */
    public importData(requestParameters: AttendanceApiImportDataRequest, options?: AxiosRequestConfig) {
        return AttendanceApiFp(this.configuration).importData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
