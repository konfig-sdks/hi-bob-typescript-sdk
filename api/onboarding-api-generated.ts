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
import { OnboardingWizards } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OnboardingApi - axios parameter creator
 * @export
 */
export const OnboardingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.
         * @summary Get a summary of all onboarding wizards.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWizardSummary: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/onboarding/wizards`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/onboarding/wizards',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OnboardingApi - functional programming interface
 * @export
 */
export const OnboardingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OnboardingApiAxiosParamCreator(configuration)
    return {
        /**
         * Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.
         * @summary Get a summary of all onboarding wizards.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWizardSummary(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OnboardingWizards>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWizardSummary(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OnboardingApi - factory interface
 * @export
 */
export const OnboardingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OnboardingApiFp(configuration)
    return {
        /**
         * Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.
         * @summary Get a summary of all onboarding wizards.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWizardSummary(options?: AxiosRequestConfig): AxiosPromise<OnboardingWizards> {
            return localVarFp.getWizardSummary(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OnboardingApiGenerated - object-oriented interface
 * @export
 * @class OnboardingApiGenerated
 * @extends {BaseAPI}
 */
export class OnboardingApiGenerated extends BaseAPI {
    /**
     * Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.
     * @summary Get a summary of all onboarding wizards.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnboardingApiGenerated
     */
    public getWizardSummary(options?: AxiosRequestConfig) {
        return OnboardingApiFp(this.configuration).getWizardSummary(options).then((request) => request(this.axios, this.basePath));
    }
}
