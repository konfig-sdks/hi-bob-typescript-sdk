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
 * @interface AddDocument
 */
export interface AddDocument {
    /**
     * Tags to.
     * @type {Array<string>}
     * @memberof AddDocument
     */
    'tags'?: Array<string>;
    /**
     * Document name.
     * @type {string}
     * @memberof AddDocument
     */
    'documentName'?: string;
    /**
     * URL of the document to upload.
     * @type {string}
     * @memberof AddDocument
     */
    'documentUrl'?: string;
}
