<div align="center">

[![Visit Hibob](./header.png)](https://hibob.com)

# [Hibob](https://hibob.com)<a id="hibob"></a>

Access your employees data with the Bob API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`hibob.attendance.importData`](#hibobattendanceimportdata)
  * [`hibob.customTables.createNewEntry`](#hibobcustomtablescreatenewentry)
  * [`hibob.customTables.deleteEntryById`](#hibobcustomtablesdeleteentrybyid)
  * [`hibob.customTables.readEntries`](#hibobcustomtablesreadentries)
  * [`hibob.customTables.updateEntry`](#hibobcustomtablesupdateentry)
  * [`hibob.documents.deleteEmployeeConfidentialDoc`](#hibobdocumentsdeleteemployeeconfidentialdoc)
  * [`hibob.documents.downloadLinks`](#hibobdocumentsdownloadlinks)
  * [`hibob.documents.removeEmployeeSharedDocument`](#hibobdocumentsremoveemployeeshareddocument)
  * [`hibob.documents.uploadConfidentialFile`](#hibobdocumentsuploadconfidentialfile)
  * [`hibob.documents.uploadToConfidentialFolder`](#hibobdocumentsuploadtoconfidentialfolder)
  * [`hibob.documents.uploadToSharedFolder`](#hibobdocumentsuploadtosharedfolder)
  * [`hibob.documents.uploadToSharedFolder_0`](#hibobdocumentsuploadtosharedfolder_0)
  * [`hibob.metadata.addNewField`](#hibobmetadataaddnewfield)
  * [`hibob.metadata.addNewItemToNamedList`](#hibobmetadataaddnewitemtonamedlist)
  * [`hibob.metadata.deleteField`](#hibobmetadatadeletefield)
  * [`hibob.metadata.deleteItemFromCompanyNamedList`](#hibobmetadatadeleteitemfromcompanynamedlist)
  * [`hibob.metadata.getCompanyFields`](#hibobmetadatagetcompanyfields)
  * [`hibob.metadata.getCompanyNamedLists`](#hibobmetadatagetcompanynamedlists)
  * [`hibob.metadata.getCustomTableMetadata`](#hibobmetadatagetcustomtablemetadata)
  * [`hibob.metadata.getNamedList`](#hibobmetadatagetnamedlist)
  * [`hibob.metadata.getPositionFields`](#hibobmetadatagetpositionfields)
  * [`hibob.metadata.getTableDetails`](#hibobmetadatagettabledetails)
  * [`hibob.metadata.updateField`](#hibobmetadataupdatefield)
  * [`hibob.metadata.updateItemFromNamedList`](#hibobmetadataupdateitemfromnamedlist)
  * [`hibob.objects.searchCompanyPositions`](#hibobobjectssearchcompanypositions)
  * [`hibob.onboarding.getWizardSummary`](#hibobonboardinggetwizardsummary)
  * [`hibob.payroll.createEquityGrant`](#hibobpayrollcreateequitygrant)
  * [`hibob.payroll.createNewSalaryEntry`](#hibobpayrollcreatenewsalaryentry)
  * [`hibob.payroll.createTrainingRecord`](#hibobpayrollcreatetrainingrecord)
  * [`hibob.payroll.createVariablePayment`](#hibobpayrollcreatevariablepayment)
  * [`hibob.payroll.deleteEquityGrant`](#hibobpayrolldeleteequitygrant)
  * [`hibob.payroll.deleteSalaryEntry`](#hibobpayrolldeletesalaryentry)
  * [`hibob.payroll.deleteTrainingRecord`](#hibobpayrolldeletetrainingrecord)
  * [`hibob.payroll.deleteTrainingRecord_0`](#hibobpayrolldeletetrainingrecord_0)
  * [`hibob.payroll.getSalaryHistory`](#hibobpayrollgetsalaryhistory)
  * [`hibob.payroll.listEquityGrants`](#hibobpayrolllistequitygrants)
  * [`hibob.payroll.listTrainingRecords`](#hibobpayrolllisttrainingrecords)
  * [`hibob.payroll.listVariablePayments`](#hibobpayrolllistvariablepayments)
  * [`hibob.payroll.readHistory`](#hibobpayrollreadhistory)
  * [`hibob.payroll.updateEquityGrantForEmployee`](#hibobpayrollupdateequitygrantforemployee)
  * [`hibob.people.createEmployeeRecord`](#hibobpeoplecreateemployeerecord)
  * [`hibob.people.createEmploymentEntry`](#hibobpeoplecreateemploymententry)
  * [`hibob.people.createEquityGrant`](#hibobpeoplecreateequitygrant)
  * [`hibob.people.createNewSalaryEntry`](#hibobpeoplecreatenewsalaryentry)
  * [`hibob.people.createTrainingRecord`](#hibobpeoplecreatetrainingrecord)
  * [`hibob.people.createVariablePayment`](#hibobpeoplecreatevariablepayment)
  * [`hibob.people.createWorkEntry`](#hibobpeoplecreateworkentry)
  * [`hibob.people.deleteEmploymentEntry`](#hibobpeopledeleteemploymententry)
  * [`hibob.people.deleteEquityGrant`](#hibobpeopledeleteequitygrant)
  * [`hibob.people.deleteSalaryEntry`](#hibobpeopledeletesalaryentry)
  * [`hibob.people.deleteTrainingRecord`](#hibobpeopledeletetrainingrecord)
  * [`hibob.people.deleteTrainingRecord_0`](#hibobpeopledeletetrainingrecord_0)
  * [`hibob.people.deleteWorkEntry`](#hibobpeopledeleteworkentry)
  * [`hibob.people.getAvatarUrl`](#hibobpeoplegetavatarurl)
  * [`hibob.people.getAvatarUrl_0`](#hibobpeoplegetavatarurl_0)
  * [`hibob.people.getEmailAvatar`](#hibobpeoplegetemailavatar)
  * [`hibob.people.getEmploymentHistory`](#hibobpeoplegetemploymenthistory)
  * [`hibob.people.getSalaryHistory`](#hibobpeoplegetsalaryhistory)
  * [`hibob.people.getWorkHistory`](#hibobpeoplegetworkhistory)
  * [`hibob.people.inviteEmployeeWizard`](#hibobpeopleinviteemployeewizard)
  * [`hibob.people.listActiveEmployees`](#hibobpeoplelistactiveemployees)
  * [`hibob.people.listEmployeeLifecycle`](#hibobpeoplelistemployeelifecycle)
  * [`hibob.people.listEmployees`](#hibobpeoplelistemployees)
  * [`hibob.people.listEquityGrants`](#hibobpeoplelistequitygrants)
  * [`hibob.people.listTrainingRecords`](#hibobpeoplelisttrainingrecords)
  * [`hibob.people.listVariablePayments`](#hibobpeoplelistvariablepayments)
  * [`hibob.people.readEmployeeById`](#hibobpeoplereademployeebyid)
  * [`hibob.people.readEmployeeFields`](#hibobpeoplereademployeefields)
  * [`hibob.people.revokeAccessToEmployee`](#hibobpeoplerevokeaccesstoemployee)
  * [`hibob.people.searchEmployees`](#hibobpeoplesearchemployees)
  * [`hibob.people.setStartDate`](#hibobpeoplesetstartdate)
  * [`hibob.people.terminateEmployee`](#hibobpeopleterminateemployee)
  * [`hibob.people.updateEmail`](#hibobpeopleupdateemail)
  * [`hibob.people.updateEmployeeRecord`](#hibobpeopleupdateemployeerecord)
  * [`hibob.people.updateEmploymentEntry`](#hibobpeopleupdateemploymententry)
  * [`hibob.people.updateEquityGrantForEmployee`](#hibobpeopleupdateequitygrantforemployee)
  * [`hibob.people.updateWorkEntry`](#hibobpeopleupdateworkentry)
  * [`hibob.people.uploadEmployeeAvatarUrl`](#hibobpeopleuploademployeeavatarurl)
  * [`hibob.reports.downloadById`](#hibobreportsdownloadbyid)
  * [`hibob.reports.downloadReportFile`](#hibobreportsdownloadreportfile)
  * [`hibob.reports.getDownloadUrl`](#hibobreportsgetdownloadurl)
  * [`hibob.reports.listAccessibleReports`](#hibobreportslistaccessiblereports)
  * [`hibob.tables.createEmploymentEntry`](#hibobtablescreateemploymententry)
  * [`hibob.tables.createEquityGrant`](#hibobtablescreateequitygrant)
  * [`hibob.tables.createNewSalaryEntry`](#hibobtablescreatenewsalaryentry)
  * [`hibob.tables.createTrainingRecord`](#hibobtablescreatetrainingrecord)
  * [`hibob.tables.createVariablePayment`](#hibobtablescreatevariablepayment)
  * [`hibob.tables.createWorkEntry`](#hibobtablescreateworkentry)
  * [`hibob.tables.deleteEmploymentEntry`](#hibobtablesdeleteemploymententry)
  * [`hibob.tables.deleteEquityGrant`](#hibobtablesdeleteequitygrant)
  * [`hibob.tables.deleteSalaryEntry`](#hibobtablesdeletesalaryentry)
  * [`hibob.tables.deleteTrainingRecord`](#hibobtablesdeletetrainingrecord)
  * [`hibob.tables.deleteTrainingRecord_0`](#hibobtablesdeletetrainingrecord_0)
  * [`hibob.tables.deleteWorkEntry`](#hibobtablesdeleteworkentry)
  * [`hibob.tables.getEmploymentHistory`](#hibobtablesgetemploymenthistory)
  * [`hibob.tables.getSalaryHistory`](#hibobtablesgetsalaryhistory)
  * [`hibob.tables.getWorkHistory`](#hibobtablesgetworkhistory)
  * [`hibob.tables.listEmployeeLifecycle`](#hibobtableslistemployeelifecycle)
  * [`hibob.tables.listEquityGrants`](#hibobtableslistequitygrants)
  * [`hibob.tables.listTrainingRecords`](#hibobtableslisttrainingrecords)
  * [`hibob.tables.listVariablePayments`](#hibobtableslistvariablepayments)
  * [`hibob.tables.updateEmploymentEntry`](#hibobtablesupdateemploymententry)
  * [`hibob.tables.updateEquityGrantForEmployee`](#hibobtablesupdateequitygrantforemployee)
  * [`hibob.tables.updateWorkEntry`](#hibobtablesupdateworkentry)
  * [`hibob.tasks.completeTask`](#hibobtaskscompletetask)
  * [`hibob.tasks.getEmployeeTasks`](#hibobtasksgetemployeetasks)
  * [`hibob.tasks.getOpenTasks`](#hibobtasksgetopentasks)
  * [`hibob.tasks.readEmployeeTasks`](#hibobtasksreademployeetasks)
  * [`hibob.timeOff.addReasonCodes`](#hibobtimeoffaddreasoncodes)
  * [`hibob.timeOff.cancelRequest`](#hibobtimeoffcancelrequest)
  * [`hibob.timeOff.createBalanceAdjustment`](#hibobtimeoffcreatebalanceadjustment)
  * [`hibob.timeOff.getDetailsOfRequest`](#hibobtimeoffgetdetailsofrequest)
  * [`hibob.timeOff.getEmployeeBalance`](#hibobtimeoffgetemployeebalance)
  * [`hibob.timeOff.getNewDeletedRequestsSinceDate`](#hibobtimeoffgetnewdeletedrequestssincedate)
  * [`hibob.timeOff.getOutOfOffice`](#hibobtimeoffgetoutofoffice)
  * [`hibob.timeOff.getPolicyDetails`](#hibobtimeoffgetpolicydetails)
  * [`hibob.timeOff.getPolicyDetails_0`](#hibobtimeoffgetpolicydetails_0)
  * [`hibob.timeOff.getWhosOut`](#hibobtimeoffgetwhosout)
  * [`hibob.timeOff.listPolicyTypeNames`](#hibobtimeofflistpolicytypenames)
  * [`hibob.timeOff.listPolicyTypesNames`](#hibobtimeofflistpolicytypesnames)
  * [`hibob.timeOff.listReasonCodes`](#hibobtimeofflistreasoncodes)
  * [`hibob.timeOff.submitNewRequest`](#hibobtimeoffsubmitnewrequest)
  * [`hibob.timeOff.submitNewRequestDiffHours`](#hibobtimeoffsubmitnewrequestdiffhours)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=HiBob&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { HiBob } from "hi-bob-typescript-sdk";

const hibob = new HiBob({
  // Defining the base path is optional and defaults to https://api.hibob.com/v1
  // basePath: "https://api.hibob.com/v1",
  apiKey: "API_KEY",
});

const importDataResponse = await hibob.attendance.importData({
  importMethod: "aggregate",
  idType: "idType_example",
  requests: [
    {
      id: "12356733644",
      clockIn: "2022-06-12T08:00",
      clockOut: "2022-06-12T17:00",
    },
  ],
  dateTimeFormat: "yyyy-MM-dd hh:mm a",
});

console.log(importDataResponse);
```

## Reference<a id="reference"></a>


### `hibob.attendance.importData`<a id="hibobattendanceimportdata"></a>

Import attendance data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const importDataResponse = await hibob.attendance.importData({
  importMethod: "aggregate",
  idType: "idType_example",
  requests: [
    {
      id: "12356733644",
      clockIn: "2022-06-12T08:00",
      clockOut: "2022-06-12T17:00",
    },
  ],
  dateTimeFormat: "yyyy-MM-dd hh:mm a",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idType: `string`<a id="idtype-string"></a>

The ID type used to identify the employee. Can be one of: \\\"bobId\\\", \\\"email\\\", \\\"idInCompany\\\", or a custom field.<br/>For <b>custom fields</b> a forward slash separator should be used.<br/>In order to use a specific custom field to identify an employee, for example a custom field called \\\"Payroll integration ID\\\":<ul><li>Query the field name via the <a href=\\\'https://apidocs.hibob.com/reference/get_company-people-fields\\\'>\\\"Get all company fields\\\"</a></li><li>In the response the name will look like <b>\\\"identification.custom.Payroll Integration ID_1RNhIIf\\\"</b></li><li>The value to use should be: <b>\\\"/identification/custom/Payroll Integration ID_1RNhI\\\"</b></li></ul>

##### requests: [`ImportAttendanceEvent`](./models/import-attendance-event.ts)[]<a id="requests-importattendanceeventmodelsimport-attendance-eventts"></a>

List of attendance events

##### importMethod: `'aggregate' | 'immediate'`<a id="importmethod-aggregate--immediate"></a>

Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>

##### dateTimeFormat: `string`<a id="datetimeformat-string"></a>

Allows to set custom date format for the date-time values sent in the requests

#### 🔄 Return<a id="🔄-return"></a>

[ImportAttendanceResponse](./models/import-attendance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/import/{importMethod}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.customTables.createNewEntry`<a id="hibobcustomtablescreatenewentry"></a>

Create new custom table entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEntryResponse = await hibob.customTables.createNewEntry({
  employeeId: "employeeId_example",
  customTableId: "customTableId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

##### customTableId: `string`<a id="customtableid-string"></a>

The ID of custom table.

##### RAW_BODY: `string`<a id="raw_body-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/{employee_id}/{custom_table_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.customTables.deleteEntryById`<a id="hibobcustomtablesdeleteentrybyid"></a>

Delete custom table entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEntryByIdResponse = await hibob.customTables.deleteEntryById({
  employeeId: "employeeId_example",
  customTableId: "customTableId_example",
  entryId: "entryId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

##### customTableId: `string`<a id="customtableid-string"></a>

The ID of custom table.

##### entryId: `string`<a id="entryid-string"></a>

The ID of custom table entry.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.customTables.readEntries`<a id="hibobcustomtablesreadentries"></a>

Read all entries of the given custom table

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const readEntriesResponse = await hibob.customTables.readEntries({
  employeeId: "employeeId_example",
  customTableId: "customTableId_example",
  includeHumanReadable: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

##### customTableId: `string`<a id="customtableid-string"></a>

The ID of custom table.

##### includeHumanReadable: `boolean`<a id="includehumanreadable-boolean"></a>

Whether to include the additional \"humanReadable\" JSON node in the response.

#### 🔄 Return<a id="🔄-return"></a>

[CustomTableEntriesList](./models/custom-table-entries-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/{employee_id}/{custom_table_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.customTables.updateEntry`<a id="hibobcustomtablesupdateentry"></a>

Update custom table entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEntryResponse = await hibob.customTables.updateEntry({
  employeeId: "employeeId_example",
  customTableId: "customTableId_example",
  entryId: "entryId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

##### customTableId: `string`<a id="customtableid-string"></a>

The ID of custom table.

##### entryId: `string`<a id="entryid-string"></a>

The ID of custom table entry.

##### RAW_BODY: `string`<a id="raw_body-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.deleteEmployeeConfidentialDoc`<a id="hibobdocumentsdeleteemployeeconfidentialdoc"></a>

Delete a specific document from the employee\&#39;s confidential folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmployeeConfidentialDocResponse =
  await hibob.documents.deleteEmployeeConfidentialDoc({
    id: "id_example",
    docId: "docId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### docId: `string`<a id="docid-string"></a>

Document ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/confidential/{docId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.downloadLinks`<a id="hibobdocumentsdownloadlinks"></a>

Returns a list of documents and download links.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadLinksResponse = await hibob.documents.downloadLinks({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeDocumentResponse](./models/employee-document-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.removeEmployeeSharedDocument`<a id="hibobdocumentsremoveemployeeshareddocument"></a>

Delete specific document from the employee\&#39;s shared folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEmployeeSharedDocumentResponse =
  await hibob.documents.removeEmployeeSharedDocument({
    id: "id_example",
    docId: "docId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### docId: `string`<a id="docid-string"></a>

Document ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/shared/{docId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.uploadConfidentialFile`<a id="hibobdocumentsuploadconfidentialfile"></a>

Upload a file to the employee\&#39;s confidential folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadConfidentialFileResponse =
  await hibob.documents.uploadConfidentialFile({
    id: "id_example",
    file: fs.readFileSync("/path/to/file"),
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The file to upload.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/confidential/upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.uploadToConfidentialFolder`<a id="hibobdocumentsuploadtoconfidentialfolder"></a>

Upload a document to the employee\&#39;s confidential folder

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadToConfidentialFolderResponse =
  await hibob.documents.uploadToConfidentialFolder({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### tags: `string`[]<a id="tags-string"></a>

Tags to.

##### documentName: `string`<a id="documentname-string"></a>

Document name.

##### documentUrl: `string`<a id="documenturl-string"></a>

URL of the document to upload.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/confidential` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.uploadToSharedFolder`<a id="hibobdocumentsuploadtosharedfolder"></a>

Upload a document to the employee\&#39;s shared folder

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadToSharedFolderResponse = await hibob.documents.uploadToSharedFolder(
  {
    id: "id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### tags: `string`[]<a id="tags-string"></a>

Tags to.

##### documentName: `string`<a id="documentname-string"></a>

Document name.

##### documentUrl: `string`<a id="documenturl-string"></a>

URL of the document to upload.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/shared` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.documents.uploadToSharedFolder_0`<a id="hibobdocumentsuploadtosharedfolder_0"></a>

Upload a file to the employee\&#39;s shared folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadToSharedFolder_0Response =
  await hibob.documents.uploadToSharedFolder_0({
    id: "id_example",
    file: fs.readFileSync("/path/to/file"),
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The file to upload.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/docs/people/{id}/shared/upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.addNewField`<a id="hibobmetadataaddnewfield"></a>

Create a new field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewFieldResponse = await hibob.metadata.addNewField({
  name: "name_example",
  category: "category_example",
  type: "type_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the field.

##### category: `string`<a id="category-string"></a>

The category of the field.

##### type: `string`<a id="type-string"></a>

The type of field. Supported field types: text, text-area, number, date, list, multi-list, hierarchy-list, currency, employee-reference, document.

##### description: `string`<a id="description-string"></a>

The description of the field.

##### historical: `string`<a id="historical-string"></a>

When true, this field keeps the history of its values, each being active starting from a certain date. The default value is false.

#### 🔄 Return<a id="🔄-return"></a>

[FieldId](./models/field-id.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/people/fields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.addNewItemToNamedList`<a id="hibobmetadataaddnewitemtonamedlist"></a>

Add a new item to an existing list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewItemToNamedListResponse =
  await hibob.metadata.addNewItemToNamedList({
    listName: "listName_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the item.

##### listName: `string`<a id="listname-string"></a>

The internal name of the list.

##### parentId: `number`<a id="parentid-number"></a>

ID of the new hierarchy parent node.

#### 🔄 Return<a id="🔄-return"></a>

[FlatListItemId](./models/flat-list-item-id.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/named-lists/{listName}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.deleteField`<a id="hibobmetadatadeletefield"></a>

Delete an existing field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFieldResponse = await hibob.metadata.deleteField({
  fieldId: "fieldId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fieldId: `string`<a id="fieldid-string"></a>

The ID of the field.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/people/fields/{fieldId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.deleteItemFromCompanyNamedList`<a id="hibobmetadatadeleteitemfromcompanynamedlist"></a>

Delete an item from an existing list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteItemFromCompanyNamedListResponse =
  await hibob.metadata.deleteItemFromCompanyNamedList({
    listName: "listName_example",
    itemId: "itemId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listName: `string`<a id="listname-string"></a>

The internal name of the list.

##### itemId: `string`<a id="itemid-string"></a>

The ID of the list item.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/named-lists/{listName}/{itemId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getCompanyFields`<a id="hibobmetadatagetcompanyfields"></a>

Get all company fields.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyFieldsResponse = await hibob.metadata.getCompanyFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[Field](./models/field.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/people/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getCompanyNamedLists`<a id="hibobmetadatagetcompanynamedlists"></a>

Get all company lists

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyNamedListsResponse = await hibob.metadata.getCompanyNamedLists({
  includeArchived: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeArchived: `boolean`<a id="includearchived-boolean"></a>

Whether to include archived items in the response.

#### 🔄 Return<a id="🔄-return"></a>

[List](./models/list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/named-lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getCustomTableMetadata`<a id="hibobmetadatagetcustomtablemetadata"></a>

Read metadata of custom tables defined

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomTableMetadataResponse =
  await hibob.metadata.getCustomTableMetadata();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomTableMetadataList](./models/custom-table-metadata-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/metadata` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getNamedList`<a id="hibobmetadatagetnamedlist"></a>

Get a specific company list by name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNamedListResponse = await hibob.metadata.getNamedList({
  listName: "listName_example",
  includeArchived: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listName: `string`<a id="listname-string"></a>

The internal name of the list.

##### includeArchived: `boolean`<a id="includearchived-boolean"></a>

Whether to include archived items in the response.

#### 🔄 Return<a id="🔄-return"></a>

[List](./models/list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/named-lists/{listName}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getPositionFields`<a id="hibobmetadatagetpositionfields"></a>

Returns a list of all fields of object type position.<br/>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionFieldsResponse = await hibob.metadata.getPositionFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[ObjectsMetadata](./models/objects-metadata.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata/objects/position` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.getTableDetails`<a id="hibobmetadatagettabledetails"></a>

Read metadata for specific custom table

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTableDetailsResponse = await hibob.metadata.getTableDetails({
  customTableId: "customTableId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customTableId: `string`<a id="customtableid-string"></a>

The ID of custom table.

#### 🔄 Return<a id="🔄-return"></a>

[CustomTableMetadata](./models/custom-table-metadata.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/custom-tables/metadata/{custom_table_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.updateField`<a id="hibobmetadataupdatefield"></a>

Update an existing field

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFieldResponse = await hibob.metadata.updateField({
  fieldId: "fieldId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fieldId: `string`<a id="fieldid-string"></a>

The ID of the field.

##### description: `string`<a id="description-string"></a>

The description of the field.

##### name: `string`<a id="name-string"></a>

The name of the field.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/people/fields/{fieldId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.metadata.updateItemFromNamedList`<a id="hibobmetadataupdateitemfromnamedlist"></a>

Update an existing item from a list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateItemFromNamedListResponse =
  await hibob.metadata.updateItemFromNamedList({
    listName: "listName_example",
    itemId: "itemId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listName: `string`<a id="listname-string"></a>

The internal name of the list.

##### itemId: `string`<a id="itemid-string"></a>

The ID of the list item.

##### name: `string`<a id="name-string"></a>

Name of the item.

##### parentId: `number`<a id="parentid-number"></a>

ID of the new hierarchy parent node.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/named-lists/{listName}/{itemId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.objects.searchCompanyPositions`<a id="hibobobjectssearchcompanypositions"></a>

Returns a list of the company positions, filtered by the specified attributes.  <br /><br><b>Note</b>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchCompanyPositionsResponse =
  await hibob.objects.searchCompanyPositions({
    fields: ["fields_example"],
    filters: [null],
    includeHumanReadable: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

Array of field ids (paths) to fetch for the positions.<br /> Minimum 1 up to 50 fields. Any invalid number of fields will get a response of 400 HTTP error.<br /> You can include only the field ids listed in the [Positions Fields Metadata API](https://apidocs.hibob.com/reference/get_metadata-objects-position).

##### filters: `FilterInstruction`[]<a id="filters-filterinstruction"></a>

##### includeHumanReadable: `boolean`<a id="includehumanreadable-boolean"></a>

Whether to include the additional \\\"humanReadable\\\" entry in the response.

#### 🔄 Return<a id="🔄-return"></a>

[PositionEntriesInner](./models/position-entries-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/objects/position/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.onboarding.getWizardSummary`<a id="hibobonboardinggetwizardsummary"></a>

Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWizardSummaryResponse = await hibob.onboarding.getWizardSummary();
```

#### 🔄 Return<a id="🔄-return"></a>

[OnboardingWizards](./models/onboarding-wizards.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/onboarding/wizards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.createEquityGrant`<a id="hibobpayrollcreateequitygrant"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEquityGrantResponse = await hibob.payroll.createEquityGrant({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

Equity grant to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.createNewSalaryEntry`<a id="hibobpayrollcreatenewsalaryentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSalaryEntryResponse = await hibob.payroll.createNewSalaryEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`SalaryEntry`](./models/salary-entry.ts)<a id="requestbody-salaryentrymodelssalary-entryts"></a>

Salary entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.createTrainingRecord`<a id="hibobpayrollcreatetrainingrecord"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTrainingRecordResponse = await hibob.payroll.createTrainingRecord({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`TrainingEntry`](./models/training-entry.ts)<a id="requestbody-trainingentrymodelstraining-entryts"></a>

Training entry to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.createVariablePayment`<a id="hibobpayrollcreatevariablepayment"></a>

<br><br><b>Note</b>:The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariablePaymentResponse = await hibob.payroll.createVariablePayment(
  {
    id: "id_example",
    requestBody: null,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`VariableEntry`](./models/variable-entry.ts)<a id="requestbody-variableentrymodelsvariable-entryts"></a>

Variable payment to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.deleteEquityGrant`<a id="hibobpayrolldeleteequitygrant"></a>

Deletes an equity grant for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEquityGrantResponse = await hibob.payroll.deleteEquityGrant({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.deleteSalaryEntry`<a id="hibobpayrolldeletesalaryentry"></a>

Deletes a salary entry from the employee\&#39;s list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSalaryEntryResponse = await hibob.payroll.deleteSalaryEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.deleteTrainingRecord`<a id="hibobpayrolldeletetrainingrecord"></a>

Deletes a training record for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecordResponse = await hibob.payroll.deleteTrainingRecord({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.deleteTrainingRecord_0`<a id="hibobpayrolldeletetrainingrecord_0"></a>

Deletes any training records for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecord_0Response =
  await hibob.payroll.deleteTrainingRecord_0({
    id: "id_example",
    entryId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.getSalaryHistory`<a id="hibobpayrollgetsalaryhistory"></a>

Returns a list of salary history entries for a given employee.<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSalaryHistoryResponse = await hibob.payroll.getSalaryHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[SalaryEntries](./models/salary-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.listEquityGrants`<a id="hibobpayrolllistequitygrants"></a>

Returns a list of equity grants for a given employee.<br /><b>Supported user types:</b> Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEquityGrantsResponse = await hibob.payroll.listEquityGrants({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EquityEntries](./models/equity-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.listTrainingRecords`<a id="hibobpayrolllisttrainingrecords"></a>

Returns a list of training records for a given employee<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTrainingRecordsResponse = await hibob.payroll.listTrainingRecords({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingEntries](./models/training-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.listVariablePayments`<a id="hibobpayrolllistvariablepayments"></a>

Returns a list of variable payments for a given employee.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablePaymentsResponse = await hibob.payroll.listVariablePayments({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[VariableEntries](./models/variable-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.readHistory`<a id="hibobpayrollreadhistory"></a>

Read payroll history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const readHistoryResponse = await hibob.payroll.readHistory({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### department: `string`<a id="department-string"></a>

filter payroll for specific department.

##### showInactive: `boolean`<a id="showinactive-boolean"></a>

Whether to include inactive employees in the response.

#### 🔄 Return<a id="🔄-return"></a>

[Employees](./models/employees.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payroll/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.payroll.updateEquityGrantForEmployee`<a id="hibobpayrollupdateequitygrantforemployee"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEquityGrantForEmployeeResponse =
  await hibob.payroll.updateEquityGrantForEmployee({
    id: "id_example",
    entryId: 1,
    requestBody: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createEmployeeRecord`<a id="hibobpeoplecreateemployeerecord"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This creates a new employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields).  <br /><br><b>Note</b>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmployeeRecordResponse = await hibob.people.createEmployeeRecord({
  firstName: "firstName_example",
  surname: "surname_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `string`<a id="firstname-string"></a>

Employee\\\'s first name.

##### surname: `string`<a id="surname-string"></a>

Employee\\\'s surname.

##### email: `string`<a id="email-string"></a>

Employee\\\'s email address.

##### work: [`CreateEmployeeRequestWork`](./models/create-employee-request-work.ts)<a id="work-createemployeerequestworkmodelscreate-employee-request-workts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createEmploymentEntry`<a id="hibobpeoplecreateemploymententry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmploymentEntryResponse = await hibob.people.createEmploymentEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### requestBody: [`EmploymentEntry`](./models/employment-entry.ts)<a id="requestbody-employmententrymodelsemployment-entryts"></a>

Employment entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createEquityGrant`<a id="hibobpeoplecreateequitygrant"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEquityGrantResponse = await hibob.people.createEquityGrant({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

Equity grant to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createNewSalaryEntry`<a id="hibobpeoplecreatenewsalaryentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSalaryEntryResponse = await hibob.people.createNewSalaryEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`SalaryEntry`](./models/salary-entry.ts)<a id="requestbody-salaryentrymodelssalary-entryts"></a>

Salary entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createTrainingRecord`<a id="hibobpeoplecreatetrainingrecord"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTrainingRecordResponse = await hibob.people.createTrainingRecord({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`TrainingEntry`](./models/training-entry.ts)<a id="requestbody-trainingentrymodelstraining-entryts"></a>

Training entry to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createVariablePayment`<a id="hibobpeoplecreatevariablepayment"></a>

<br><br><b>Note</b>:The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariablePaymentResponse = await hibob.people.createVariablePayment({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`VariableEntry`](./models/variable-entry.ts)<a id="requestbody-variableentrymodelsvariable-entryts"></a>

Variable payment to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.createWorkEntry`<a id="hibobpeoplecreateworkentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWorkEntryResponse = await hibob.people.createWorkEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`WorkEntry`](./models/work-entry.ts)<a id="requestbody-workentrymodelswork-entryts"></a>

Work entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteEmploymentEntry`<a id="hibobpeopledeleteemploymententry"></a>

Deletes an employment entry from a given employee\&#39;s employment history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmploymentEntryResponse = await hibob.people.deleteEmploymentEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteEquityGrant`<a id="hibobpeopledeleteequitygrant"></a>

Deletes an equity grant for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEquityGrantResponse = await hibob.people.deleteEquityGrant({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteSalaryEntry`<a id="hibobpeopledeletesalaryentry"></a>

Deletes a salary entry from the employee\&#39;s list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSalaryEntryResponse = await hibob.people.deleteSalaryEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteTrainingRecord`<a id="hibobpeopledeletetrainingrecord"></a>

Deletes a training record for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecordResponse = await hibob.people.deleteTrainingRecord({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteTrainingRecord_0`<a id="hibobpeopledeletetrainingrecord_0"></a>

Deletes any training records for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecord_0Response =
  await hibob.people.deleteTrainingRecord_0({
    id: "id_example",
    entryId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.deleteWorkEntry`<a id="hibobpeopledeleteworkentry"></a>

Deletes a work entry from a given employee\&#39;s work history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWorkEntryResponse = await hibob.people.deleteWorkEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getAvatarUrl`<a id="hibobpeoplegetavatarurl"></a>

Returns the avatar image URL of the employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvatarUrlResponse = await hibob.people.getAvatarUrl({
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

employee id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getAvatarUrl_0`<a id="hibobpeoplegetavatarurl_0"></a>

Returns the avatar image URL of the logged-in user.<b>Supported user types:</b> Employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvatarUrl_0Response = await hibob.people.getAvatarUrl_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/my/avatar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getEmailAvatar`<a id="hibobpeoplegetemailavatar"></a>

Returns the avatar image URL of the employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailAvatarResponse = await hibob.people.getEmailAvatar({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Employee email.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getEmploymentHistory`<a id="hibobpeoplegetemploymenthistory"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>Returns a list of employment history entries for a given employee.<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmploymentHistoryResponse = await hibob.people.getEmploymentHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentEntries](./models/employment-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getSalaryHistory`<a id="hibobpeoplegetsalaryhistory"></a>

Returns a list of salary history entries for a given employee.<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSalaryHistoryResponse = await hibob.people.getSalaryHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[SalaryEntries](./models/salary-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.getWorkHistory`<a id="hibobpeoplegetworkhistory"></a>

Returns a list of work history entries for a given employee.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkHistoryResponse = await hibob.people.getWorkHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[WorkEntries](./models/work-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.inviteEmployeeWizard`<a id="hibobpeopleinviteemployeewizard"></a>

Invite an employee with a welcome wizard ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteEmployeeWizardResponse = await hibob.people.inviteEmployeeWizard({
  employeeId: "employeeId_example",
  welcomeWizardId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### welcomeWizardId: `number`<a id="welcomewizardid-number"></a>

The Welcome wizard ID.

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/invitations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listActiveEmployees`<a id="hibobpeoplelistactiveemployees"></a>

Returns the public section of all  active employees of the logged-in user company.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value. Use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActiveEmployeesResponse = await hibob.people.listActiveEmployees({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `string`<a id="sortby-string"></a>

Optional field name to sort by. This defaults to firstName.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesProfiles](./models/employees-profiles.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/profiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listEmployeeLifecycle`<a id="hibobpeoplelistemployeelifecycle"></a>

Returns a list of life-cycle history entries for a given employee.<br /><br><br><b>Note</b>: TThe values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeLifecycleResponse = await hibob.people.listEmployeeLifecycle({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[LifeCycleEntries](./models/life-cycle-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/lifecycle` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listEmployees`<a id="hibobpeoplelistemployees"></a>

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>/people/search</b> ("Search for employees") instead. <br/><br/> This returns a list of all active employees. The data is filtered based on the access level of the logged-in user. Only viewable categories are returned.<br /><br> <b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeesResponse = await hibob.people.listEmployees({
  humanReadable: false,
  includeHumanReadable: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### showInactive: `boolean`<a id="showinactive-boolean"></a>

Should include inactive employees.

##### humanReadable: `boolean`<a id="humanreadable-boolean"></a>

Whether to supply humanReadable values in JSON instead of machine-readable format (default).

##### includeHumanReadable: `boolean`<a id="includehumanreadable-boolean"></a>

Whether to include the additional \"humanReadable\" JSON node in the response.

#### 🔄 Return<a id="🔄-return"></a>

[Employees](./models/employees.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listEquityGrants`<a id="hibobpeoplelistequitygrants"></a>

Returns a list of equity grants for a given employee.<br /><b>Supported user types:</b> Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEquityGrantsResponse = await hibob.people.listEquityGrants({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EquityEntries](./models/equity-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listTrainingRecords`<a id="hibobpeoplelisttrainingrecords"></a>

Returns a list of training records for a given employee<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTrainingRecordsResponse = await hibob.people.listTrainingRecords({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingEntries](./models/training-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.listVariablePayments`<a id="hibobpeoplelistvariablepayments"></a>

Returns a list of variable payments for a given employee.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablePaymentsResponse = await hibob.people.listVariablePayments({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[VariableEntries](./models/variable-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.readEmployeeById`<a id="hibobpeoplereademployeebyid"></a>

<b>Note:</b> Deprecated at the end of March 2024. Please use <b>POST /people/{identifier}</b> ("Read company employee fields by ID.") instead. <br/><br/> Returns the employee by the specified ID.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const readEmployeeByIdResponse = await hibob.people.readEmployeeById({
  identifier: "identifier_example",
  fields: ["fields_example"],
  humanReadable: false,
  includeHumanReadable: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

employee id

##### fields: `string`[]<a id="fields-string"></a>

Whether to supply fields (paths) instead of empty list as a default in order  to not exceed data permitted.

##### humanReadable: `boolean`<a id="humanreadable-boolean"></a>

Whether to supply humanReadable values in JSON instead of machine-readable (default) format.

##### includeHumanReadable: `boolean`<a id="includehumanreadable-boolean"></a>

Whether to include the additional \"humanReadable\" JSON node in the response.

#### 🔄 Return<a id="🔄-return"></a>

[Employees](./models/employees.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{identifier}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.readEmployeeFields`<a id="hibobpeoplereademployeefields"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>Returns the employee's fields by the specified ID or email.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const readEmployeeFieldsResponse = await hibob.people.readEmployeeFields({
  identifier: "identifier_example",
  fields: [
    "root.id",
    "root.firstName",
    "root.surname",
    "root.email",
    "work.site",
    "work.department",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

employee ID or email

##### fields: `string`[]<a id="fields-string"></a>

Optional array of employee field paths that\\\'s are required in response. If you don\\\'t specify fields - only basic fields and categories are returned: <br/><b>Basic fields:</b>  <ul>                       <li>ID</li>                       <li>Company ID</li>                       <li>Email</li>                       <li>First name</li>                       <li>Last name</li>                       <li>Display name</li>                       <li>Middle name</li>                       <li>Creation timestamp</li>                       <li>Avatar URL</li> </ul> <br/><b>Basic Categories:</b> <ul>                       <li>About</li>                       <li>Employment</li>                       <li>Work</li> </ul>

##### humanReadable: `string`<a id="humanreadable-string"></a>

Optional field.  <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \\\"humanReadable\\\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>

#### 🔄 Return<a id="🔄-return"></a>

[Employees](./models/employees.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{identifier}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.revokeAccessToEmployee`<a id="hibobpeoplerevokeaccesstoemployee"></a>

Revoke access to Bob for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeAccessToEmployeeResponse =
  await hibob.people.revokeAccessToEmployee({
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

employee id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{identifier}/uninvite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.searchEmployees`<a id="hibobpeoplesearchemployees"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This API returns a list of requested employees with requested fields.  The data is filtered based on the requested fields and access level of the logged-in user.  Only viewable categories are returned.<br /> <br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchEmployeesResponse = await hibob.people.searchEmployees({
  fields: [
    "root.id",
    "root.firstName",
    "root.surname",
    "root.email",
    "work.site",
    "work.department",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

Optional array of employee field paths that\\\'s are required in response. If you don\\\'t specify fields - only basic fields and categories are returned: <br/><b>Basic fields:</b>  <ul>                       <li>ID</li>                       <li>Company ID</li>                       <li>Email</li>                       <li>First name</li>                       <li>Last name</li>                       <li>Display name</li>                       <li>Middle name</li>                       <li>Creation timestamp</li>                       <li>Avatar URL</li> </ul> <br/><b>Basic Categories:</b> <ul>                       <li>About</li>                       <li>Employment</li>                       <li>Work</li> </ul>

##### filters: [`EmployeeFilter`](./models/employee-filter.ts)[]<a id="filters-employeefiltermodelsemployee-filterts"></a>

Optional list of filters for filtering employees. We currently support up to one filter.

##### showInactive: `boolean`<a id="showinactive-boolean"></a>

<br>Optional field. <br>Default value = false. <br>Defines whether response should include inactive employees.

##### humanReadable: `string`<a id="humanreadable-string"></a>

Optional field.  <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \\\"humanReadable\\\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>

#### 🔄 Return<a id="🔄-return"></a>

[Employees](./models/employees.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.setStartDate`<a id="hibobpeoplesetstartdate"></a>

Set or update an employee\&#39;s start date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setStartDateResponse = await hibob.people.setStartDate({
  employeeId: "employeeId_example",
  startDate: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

The date this entry becomes effective.

##### employeeId: `string`<a id="employeeid-string"></a>

employee ID

##### reason: `string`<a id="reason-string"></a>

Additional info for the start date update.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/start-date` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.terminateEmployee`<a id="hibobpeopleterminateemployee"></a>

This changes the employee’s status to Terminated according to specified termination date. <br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateEmployeeResponse = await hibob.people.terminateEmployee({
  identifier: "identifier_example",
  terminationDate: "Mon Sep 22 17:00:00 PDT 2025",
  terminationReason: "Redundant",
  reasonType: "End of Contract",
  lastDayOfWork: "Sun Sep 21 17:00:00 PDT 2025",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### terminationDate: `string`<a id="terminationdate-string"></a>

The employee\\\'s termination date

##### identifier: `string`<a id="identifier-string"></a>

Employee ID.

##### terminationReason: `string`<a id="terminationreason-string"></a>

The ID of the \\\'terminationReason\\\' list entry

##### reasonType: `string`<a id="reasontype-string"></a>

The ID of the \\\'lifecycleReasonType\\\' list entry

##### noticePeriod: [`EmployeeTerminationNoticePeriod`](./models/employee-termination-notice-period.ts)<a id="noticeperiod-employeeterminationnoticeperiodmodelsemployee-termination-notice-periodts"></a>

##### lastDayOfWork: `string`<a id="lastdayofwork-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{identifier}/terminate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.updateEmail`<a id="hibobpeopleupdateemail"></a>

Change an employee's email address. If you cannot change the self email an invitation will be sent to the new address to verify the email if the employee is invited/active.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailResponse = await hibob.people.updateEmail({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### email: `string`<a id="email-string"></a>

new email

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/email` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.updateEmployeeRecord`<a id="hibobpeopleupdateemployeerecord"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>This updates the employee record in Bob. You can include only the fields listed in the  [Fields Metadata API](https://apidocs.hibob.com/reference/get_company-people-fields) where historical is equal to false.  <br /><br><b>Note</b>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeRecordResponse = await hibob.people.updateEmployeeRecord({
  identifier: "identifier_example",
  firstName: "Bob",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

Employee ID.

##### firstName: `string`<a id="firstname-string"></a>

##### personal: [`PeopleUpdateEmployeeRecordRequestPersonal`](./models/people-update-employee-record-request-personal.ts)<a id="personal-peopleupdateemployeerecordrequestpersonalmodelspeople-update-employee-record-request-personalts"></a>

##### about: [`PeopleUpdateEmployeeRecordRequestAbout`](./models/people-update-employee-record-request-about.ts)<a id="about-peopleupdateemployeerecordrequestaboutmodelspeople-update-employee-record-request-aboutts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{identifier}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.updateEmploymentEntry`<a id="hibobpeopleupdateemploymententry"></a>

<br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmploymentEntryResponse = await hibob.people.updateEmploymentEntry({
  id: "id_example",
  entryId: 1,
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`EmploymentEntry`](./models/employment-entry.ts)<a id="requestbody-employmententrymodelsemployment-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.updateEquityGrantForEmployee`<a id="hibobpeopleupdateequitygrantforemployee"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEquityGrantForEmployeeResponse =
  await hibob.people.updateEquityGrantForEmployee({
    id: "id_example",
    entryId: 1,
    requestBody: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.updateWorkEntry`<a id="hibobpeopleupdateworkentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkEntryResponse = await hibob.people.updateWorkEntry({
  id: "id_example",
  entryId: 1,
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`WorkEntry`](./models/work-entry.ts)<a id="requestbody-workentrymodelswork-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.people.uploadEmployeeAvatarUrl`<a id="hibobpeopleuploademployeeavatarurl"></a>

Upload an employee's Avatar by providing a URL to the image to upload.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadEmployeeAvatarUrlResponse =
  await hibob.people.uploadEmployeeAvatarUrl({
    employeeId: "employeeId_example",
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

The URL of the source of the avatar image.

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/{employeeId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.reports.downloadById`<a id="hibobreportsdownloadbyid"></a>

Returns a report data file in the specified format.<br /><b>Supported user types:</b> Service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadByIdResponse = await hibob.reports.downloadById({
  reportId: 3.14,
  format: "csv",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportId: `number`<a id="reportid-number"></a>

Report ID

##### format: `'csv' | 'xlsx' | 'json'`<a id="format-csv--xlsx--json"></a>

File format

##### includeInfo: `boolean`<a id="includeinfo-boolean"></a>

Should include info.

##### locale: `string`<a id="locale-string"></a>

Requested language for the report columns in the format of locale (e.g. fr-FR). If this is not provided, the user preferences locale is used.

##### humanReadable: `string`<a id="humanreadable-string"></a>

Optional field. Only enforced when <i><b>format</b></i> is <i>json</i>. <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \"humanReadable\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/reports/{reportId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.reports.downloadReportFile`<a id="hibobreportsdownloadreportfile"></a>

Returns the report data file when it is ready. If the file is not ready yet the response will be 204. It will then have to try again.<br />(This URL is the response of the previous API: https://api.hibob.com/v1/company/reports/reportId/download-async)<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadReportFileResponse = await hibob.reports.downloadReportFile({
  reportName: "reportName_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportName: `string`<a id="reportname-string"></a>

Report name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/reports/download/{reportName}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.reports.getDownloadUrl`<a id="hibobreportsgetdownloadurl"></a>

Returns the polling URL report file of the specified format under "Location" in the response header.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDownloadUrlResponse = await hibob.reports.getDownloadUrl({
  reportId: 3.14,
  format: "csv",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportId: `number`<a id="reportid-number"></a>

Report id

##### format: `'csv' | 'xlsx'`<a id="format-csv--xlsx"></a>

File format

##### includeInfo: `boolean`<a id="includeinfo-boolean"></a>

Should include info

##### locale: `string`<a id="locale-string"></a>

Requested language for the report columns in the format of the locale (e.g. fr-FR). If this is not provided, the user preferences locale is used.

##### humanReadable: `string`<a id="humanreadable-string"></a>

Optional field. Only enforced when <i><b>format</b></i> is <i>json</i>. <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \"humanReadable\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/reports/{reportId}/download-async` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.reports.listAccessibleReports`<a id="hibobreportslistaccessiblereports"></a>

Returns a list of all the defined company reports. The data is filtered based on the access level of the user. Only viewable categories are returned.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleReportsResponse =
  await hibob.reports.listAccessibleReports();
```

#### 🔄 Return<a id="🔄-return"></a>

[Reports](./models/reports.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createEmploymentEntry`<a id="hibobtablescreateemploymententry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmploymentEntryResponse = await hibob.tables.createEmploymentEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### requestBody: [`EmploymentEntry`](./models/employment-entry.ts)<a id="requestbody-employmententrymodelsemployment-entryts"></a>

Employment entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createEquityGrant`<a id="hibobtablescreateequitygrant"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEquityGrantResponse = await hibob.tables.createEquityGrant({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

Equity grant to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createNewSalaryEntry`<a id="hibobtablescreatenewsalaryentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSalaryEntryResponse = await hibob.tables.createNewSalaryEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`SalaryEntry`](./models/salary-entry.ts)<a id="requestbody-salaryentrymodelssalary-entryts"></a>

Salary entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createTrainingRecord`<a id="hibobtablescreatetrainingrecord"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTrainingRecordResponse = await hibob.tables.createTrainingRecord({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`TrainingEntry`](./models/training-entry.ts)<a id="requestbody-trainingentrymodelstraining-entryts"></a>

Training entry to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createVariablePayment`<a id="hibobtablescreatevariablepayment"></a>

<br><br><b>Note</b>:The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariablePaymentResponse = await hibob.tables.createVariablePayment({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`VariableEntry`](./models/variable-entry.ts)<a id="requestbody-variableentrymodelsvariable-entryts"></a>

Variable payment to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.createWorkEntry`<a id="hibobtablescreateworkentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWorkEntryResponse = await hibob.tables.createWorkEntry({
  id: "id_example",
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestBody: [`WorkEntry`](./models/work-entry.ts)<a id="requestbody-workentrymodelswork-entryts"></a>

Work entry to add. This must not conflict with another entry on the same effective date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteEmploymentEntry`<a id="hibobtablesdeleteemploymententry"></a>

Deletes an employment entry from a given employee\&#39;s employment history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmploymentEntryResponse = await hibob.tables.deleteEmploymentEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteEquityGrant`<a id="hibobtablesdeleteequitygrant"></a>

Deletes an equity grant for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEquityGrantResponse = await hibob.tables.deleteEquityGrant({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteSalaryEntry`<a id="hibobtablesdeletesalaryentry"></a>

Deletes a salary entry from the employee\&#39;s list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSalaryEntryResponse = await hibob.tables.deleteSalaryEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteTrainingRecord`<a id="hibobtablesdeletetrainingrecord"></a>

Deletes a training record for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecordResponse = await hibob.tables.deleteTrainingRecord({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteTrainingRecord_0`<a id="hibobtablesdeletetrainingrecord_0"></a>

Deletes any training records for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrainingRecord_0Response =
  await hibob.tables.deleteTrainingRecord_0({
    id: "id_example",
    entryId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The Entry ID to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.deleteWorkEntry`<a id="hibobtablesdeleteworkentry"></a>

Deletes a work entry from a given employee\&#39;s work history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWorkEntryResponse = await hibob.tables.deleteWorkEntry({
  id: "id_example",
  entryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work/{entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.getEmploymentHistory`<a id="hibobtablesgetemploymenthistory"></a>

<b>Note:</b> Changes to this API are planned to take effect on May 31, 2024.  Make sure to review all of the details in the <a href='https://help.hibob.com/hc/en-us/articles/19726260483601'>Working pattern API Changes</a>  article in the help center.<br> <br>Returns a list of employment history entries for a given employee.<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmploymentHistoryResponse = await hibob.tables.getEmploymentHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentEntries](./models/employment-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.getSalaryHistory`<a id="hibobtablesgetsalaryhistory"></a>

Returns a list of salary history entries for a given employee.<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSalaryHistoryResponse = await hibob.tables.getSalaryHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[SalaryEntries](./models/salary-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/salaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.getWorkHistory`<a id="hibobtablesgetworkhistory"></a>

Returns a list of work history entries for a given employee.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkHistoryResponse = await hibob.tables.getWorkHistory({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[WorkEntries](./models/work-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.listEmployeeLifecycle`<a id="hibobtableslistemployeelifecycle"></a>

Returns a list of life-cycle history entries for a given employee.<br /><br><br><b>Note</b>: TThe values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeLifecycleResponse = await hibob.tables.listEmployeeLifecycle({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[LifeCycleEntries](./models/life-cycle-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/lifecycle` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.listEquityGrants`<a id="hibobtableslistequitygrants"></a>

Returns a list of equity grants for a given employee.<br /><b>Supported user types:</b> Service<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEquityGrantsResponse = await hibob.tables.listEquityGrants({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EquityEntries](./models/equity-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.listTrainingRecords`<a id="hibobtableslisttrainingrecords"></a>

Returns a list of training records for a given employee<br /><br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTrainingRecordsResponse = await hibob.tables.listTrainingRecords({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingEntries](./models/training-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/training` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.listVariablePayments`<a id="hibobtableslistvariablepayments"></a>

Returns a list of variable payments for a given employee.<br /><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablePaymentsResponse = await hibob.tables.listVariablePayments({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[VariableEntries](./models/variable-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/variable` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.updateEmploymentEntry`<a id="hibobtablesupdateemploymententry"></a>

<br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmploymentEntryResponse = await hibob.tables.updateEmploymentEntry({
  id: "id_example",
  entryId: 1,
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`EmploymentEntry`](./models/employment-entry.ts)<a id="requestbody-employmententrymodelsemployment-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/employment/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.updateEquityGrantForEmployee`<a id="hibobtablesupdateequitygrantforemployee"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>. - Basic: [] - Bearer: []

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEquityGrantForEmployeeResponse =
  await hibob.tables.updateEquityGrantForEmployee({
    id: "id_example",
    entryId: 1,
    requestBody: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`EquityEntry`](./models/equity-entry.ts)<a id="requestbody-equityentrymodelsequity-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/equities/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tables.updateWorkEntry`<a id="hibobtablesupdateworkentry"></a>

<br><br><b>Note</b>: The values of the list fields represent the list item ID and not the list item value. To obtain the corresponding list item value, use the HiBob metadata API to determine the field list name. Then, use the list item ID to locate the list item value. For more information, see <a href='https://apidocs.hibob.com/docs/how-to-work-with-lists-public-api'>How to work with lists Public API</a>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkEntryResponse = await hibob.tables.updateWorkEntry({
  id: "id_example",
  entryId: 1,
  requestBody: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### entryId: `number`<a id="entryid-number"></a>

The entry ID to update.

##### requestBody: [`WorkEntry`](./models/work-entry.ts)<a id="requestbody-workentrymodelswork-entryts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}/work/{entry_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tasks.completeTask`<a id="hibobtaskscompletetask"></a>

Mark a task as complete

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeTaskResponse = await hibob.tasks.completeTask({
  taskId: "taskId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskId: `string`<a id="taskid-string"></a>

task id

#### 🔄 Return<a id="🔄-return"></a>

[Tasks](./models/tasks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{taskId}/complete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tasks.getEmployeeTasks`<a id="hibobtasksgetemployeetasks"></a>

<b>Supported user types:</b> Employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeTasksResponse = await hibob.tasks.getEmployeeTasks();
```

#### 🔄 Return<a id="🔄-return"></a>

[Tasks](./models/tasks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/my/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tasks.getOpenTasks`<a id="hibobtasksgetopentasks"></a>

Read all open tasks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpenTasksResponse = await hibob.tasks.getOpenTasks();
```

#### 🔄 Return<a id="🔄-return"></a>

[Tasks](./models/tasks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.tasks.readEmployeeTasks`<a id="hibobtasksreademployeetasks"></a>

Read tasks of a specific employee 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const readEmployeeTasksResponse = await hibob.tasks.readEmployeeTasks({
  id: "id_example",
  taskStatus: "open",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### taskStatus: `'open' | 'closed'`<a id="taskstatus-open--closed"></a>

filter tasks by open / closed status. Not sending task_status will return all tasks.

#### 🔄 Return<a id="🔄-return"></a>

[Tasks](./models/tasks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/people/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.addReasonCodes`<a id="hibobtimeoffaddreasoncodes"></a>

Add a list of reason codes for a given policy type.<br /><b>Supported user types:</b> Service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addReasonCodesResponse = await hibob.timeOff.addReasonCodes({
  policyType: "policyType_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyType: `string`<a id="policytype-string"></a>

Policy Type name

##### reasonCodes: `string`[]<a id="reasoncodes-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policy-types/{policyType}/reason-codes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.cancelRequest`<a id="hibobtimeoffcancelrequest"></a>

Cancels an existing time off request.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelRequestResponse = await hibob.timeOff.cancelRequest({
  id: "id_example",
  requestId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### requestId: `number`<a id="requestid-number"></a>

Request ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/requests/{requestId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.createBalanceAdjustment`<a id="hibobtimeoffcreatebalanceadjustment"></a>

Create a balance adjustment for a given employee for a given effective date.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBalanceAdjustmentResponse =
  await hibob.timeOff.createBalanceAdjustment({
    id: "id_example",
    adjustmentType: "balance",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### adjustmentType: `string`<a id="adjustmenttype-string"></a>

Adjustment type - balance or time used.

##### policyType: `string`<a id="policytype-string"></a>

Policy type name.

##### effectiveDate: `string`<a id="effectivedate-string"></a>

The date this adjustment becomes effective.

##### amount: `number`<a id="amount-number"></a>

The amount of days/hours to add/subtract.

##### reason: `string`<a id="reason-string"></a>

A reason for this adjustment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/adjustments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getDetailsOfRequest`<a id="hibobtimeoffgetdetailsofrequest"></a>

Supplies detailed info about an existing time off request.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsOfRequestResponse = await hibob.timeOff.getDetailsOfRequest({
  id: "id_example",
  requestId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

employee id

##### requestId: `number`<a id="requestid-number"></a>

request id

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffRequest](./models/timeoff-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/requests/{requestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getEmployeeBalance`<a id="hibobtimeoffgetemployeebalance"></a>

Retrieve the balance for a given employee, for a given policy type, as of a given date.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeBalanceResponse = await hibob.timeOff.getEmployeeBalance({
  id: "id_example",
  policyType: "policyType_example",
  date: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

##### policyType: `string`<a id="policytype-string"></a>

Policy type name.

##### date: `string | Date`<a id="date-string--date"></a>

Point in time.

#### 🔄 Return<a id="🔄-return"></a>

[BalanceResult](./models/balance-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/balance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getNewDeletedRequestsSinceDate`<a id="hibobtimeoffgetnewdeletedrequestssincedate"></a>

Returns the list of time off requests that are pending, approved or canceled since the specified date.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNewDeletedRequestsSinceDateResponse =
  await hibob.timeOff.getNewDeletedRequestsSinceDate({
    since: "1970-01-01",
    includePending: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### since: `string | Date`<a id="since-string--date"></a>

Timestamp starting from which to return the changes. Should be in ISO-8601 format, e.g. 2050-04-05T14:30:24.345Z or 2050-04-05T12:30-02:00.

##### includePending: `boolean`<a id="includepending-boolean"></a>

Optional parameter. Indicates whether to include pending requests in the results.

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffChanges](./models/timeoff-changes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/requests/changes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getOutOfOffice`<a id="hibobtimeoffgetoutofoffice"></a>

Returns the list of people that have a time off request today or on the specified date.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutOfOfficeResponse = await hibob.timeOff.getOutOfOffice({
  includeHourly: false,
  includePrivate: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### today: `string | Date`<a id="today-string--date"></a>

Date to report out of the office. If not specified, the date at UTC at the time of the request is used.

##### includeHourly: `boolean`<a id="includehourly-boolean"></a>

Include Hourly Requests

##### includePrivate: `boolean`<a id="includeprivate-boolean"></a>

Show the policy type\'s name instead of the policy\'s custom public name if the user has permission to view it, and the policy\'s custom public name exists.

##### siteId: `number`<a id="siteid-number"></a>

The employee\'s site ID

#### 🔄 Return<a id="🔄-return"></a>

[OutTodays](./models/out-todays.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/outtoday` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getPolicyDetails`<a id="hibobtimeoffgetpolicydetails"></a>

Get details about a given policy type.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyDetailsResponse = await hibob.timeOff.getPolicyDetails({
  policyType: "policyType_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyType: `string`<a id="policytype-string"></a>

Policy Type name

#### 🔄 Return<a id="🔄-return"></a>

[PolicyType](./models/policy-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policy-types/{policyType}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getPolicyDetails_0`<a id="hibobtimeoffgetpolicydetails_0"></a>

Get details about a given policy.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyDetails_0Response = await hibob.timeOff.getPolicyDetails_0({
  policyName: "policyName_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyName: `string`<a id="policyname-string"></a>

Policy name.

#### 🔄 Return<a id="🔄-return"></a>

[Policy](./models/policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.getWhosOut`<a id="hibobtimeoffgetwhosout"></a>

Returns time off information for a given date range.<br /><b>Supported user types:</b> Service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWhosOutResponse = await hibob.timeOff.getWhosOut({
  from: "1970-01-01",
  to: "1970-01-01",
  includeHourly: false,
  includePrivate: false,
  includePending: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string | Date`<a id="from-string--date"></a>

Start period date

##### to: `string | Date`<a id="to-string--date"></a>

End period date

##### includeHourly: `boolean`<a id="includehourly-boolean"></a>

Include Hourly Requests

##### includePrivate: `boolean`<a id="includeprivate-boolean"></a>

Show the policy type\'s name instead of the policy\'s custom public name if the user has permission to view it, and the policy\'s custom public name exists.

##### includePending: `boolean`<a id="includepending-boolean"></a>

Include Pending Requests

#### 🔄 Return<a id="🔄-return"></a>

[Requests](./models/requests.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/whosout` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.listPolicyTypeNames`<a id="hibobtimeofflistpolicytypenames"></a>

Get a list of policy names for the user's defined policy type.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPolicyTypeNamesResponse = await hibob.timeOff.listPolicyTypeNames({
  policyTypeName: "policyTypeName_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyTypeName: `string`<a id="policytypename-string"></a>

Policy type name.

#### 🔄 Return<a id="🔄-return"></a>

[PolicyNames](./models/policy-names.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policies/names` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.listPolicyTypesNames`<a id="hibobtimeofflistpolicytypesnames"></a>

Get a list of all policy type names.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPolicyTypesNamesResponse = await hibob.timeOff.listPolicyTypesNames();
```

#### 🔄 Return<a id="🔄-return"></a>

[PolicyTypes](./models/policy-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policy-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.listReasonCodes`<a id="hibobtimeofflistreasoncodes"></a>

Get list of reason codes for a given policy type.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listReasonCodesResponse = await hibob.timeOff.listReasonCodes({
  policyType: "policyType_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyType: `string`<a id="policytype-string"></a>

Policy Type name.

#### 🔄 Return<a id="🔄-return"></a>

[ReasonCodes](./models/reason-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/policy-types/{policyType}/reason-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.submitNewRequest`<a id="hibobtimeoffsubmitnewrequest"></a>

Submits a new timeoff request.<br />

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitNewRequestResponse = await hibob.timeOff.submitNewRequest({
  id: "id_example",
  policyType: "policyType_example",
  requestRangeType: "days",
  startDate: "1970-01-01",
  startDatePortion: "all_day",
  endDatePortion: "all_day",
  dayPortion: "morning",
  skipManagerApproval: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyType: `string`<a id="policytype-string"></a>

Request policy type, e.g. Holiday, Sick or any custom type defined.

##### startDate: `string`<a id="startdate-string"></a>

Date of the first day of the time off (not relevant for requests using the hours type).

##### id: `string`<a id="id-string"></a>

Employee ID.

##### description: `string`<a id="description-string"></a>

Request reason.

##### requestRangeType: `string`<a id="requestrangetype-string"></a>

The type of request duration.<br> Select <b>hours</b> when the request is for X hours during the day requested (This is supported only for policy types measured in hours).<br> Select <b>portionOnRange</b> when the  request is for every morning or every afternoon during the days requested.<br> Select <b>hoursOnRange</b> when the request is for X hours every day during the days requested (This is supported only for policy types measured in hours)

##### startDatePortion: `string`<a id="startdateportion-string"></a>

Portion of the first day - relevant for requests in days.

##### endDate: `string`<a id="enddate-string"></a>

Date of the last day of the time off (not relevant for requests using                                                the hours type).

##### hours: `number`<a id="hours-number"></a>

This field is mandatory if the requestRangeType is set to \\\'hours\\\'.

##### minutes: `number`<a id="minutes-number"></a>

Relevant if requestRangeType is set to \\\'hours\\\'.

##### endDatePortion: `string`<a id="enddateportion-string"></a>

Portion of the last day - relevant for requests in days.

##### dayPortion: `string`<a id="dayportion-string"></a>

Select <b>morning</b> when the request is for mornings on the days requested. Select <b>afternoon</b> when the request is for afternoons on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>portionOnRange</b>.

##### dailyHours: `number`<a id="dailyhours-number"></a>

Enter the number of hours when the request is for X hours on the days requested.<br> This is mandatory if the <b>requestRangeType</b> is <b>hoursOnRange</b>.

##### dailyMinutes: `number`<a id="dailyminutes-number"></a>

Enter the number of minutes when the request is for X hours and X minutes on the days requested.<br> This is relevant if the <b>requestRangeType</b> is <b>hoursOnRange</b> and the amount requested is not a full hour or hours.

##### skipManagerApproval: `boolean`<a id="skipmanagerapproval-boolean"></a>

Admins only can skip the approval policy. Setting this field to true will create an approved request.

##### approver: `string`<a id="approver-string"></a>

The employee ID of the user to be set as the approver for this request. This is relevant if \\\'skipManagerApproval\\\' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.

##### reasonCode: `number`<a id="reasoncode-number"></a>

The reason code ID taken from the policy type\\\'s reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hibob.timeOff.submitNewRequestDiffHours`<a id="hibobtimeoffsubmitnewrequestdiffhours"></a>

Submits a new timeoff request of different hours per day.<br /><b>Supported user types:</b> Employee, Service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitNewRequestDiffHoursResponse =
  await hibob.timeOff.submitNewRequestDiffHours({
    id: "id_example",
    description: "Vacation",
    policyType: "Holiday",
    startDate: "2024-01-03",
    endDate: "2024-01-05",
    durations: [
      {
        date: "1970-01-01",
        hours: 1,
        minutes: 1,
      },
      ,
    ],
    skipManagerApproval: false,
    approver: "3452152476387906847",
    reasonCode: 3000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyType: `string`<a id="policytype-string"></a>

Request policy type, e.g. Holiday, Sick or any custom type defined.

##### startDate: `string`<a id="startdate-string"></a>

Date of the first day of the time off

##### endDate: `string`<a id="enddate-string"></a>

Date of the last day of the time off.

##### durations: [`SubmitTimeoffRequestDiffHoursDurationsInner`](./models/submit-timeoff-request-diff-hours-durations-inner.ts)[]<a id="durations-submittimeoffrequestdiffhoursdurationsinnermodelssubmit-timeoff-request-diff-hours-durations-innerts"></a>

Array of durations for each day in the request.

##### id: `string`<a id="id-string"></a>

Employee ID.

##### description: `string`<a id="description-string"></a>

Request reason.

##### skipManagerApproval: `boolean`<a id="skipmanagerapproval-boolean"></a>

Admins only can skip the approval policy. Setting this field to true will create an approved request.

##### approver: `string`<a id="approver-string"></a>

The employee ID of the user to be set as the approver for this request. This is relevant if \\\'skipManagerApproval\\\' is set to true.<br>Please note that the user calling the API with this param must have permission to import time off requests.

##### reasonCode: `number`<a id="reasoncode-number"></a>

The reason code ID taken from the policy type\\\'s reason codes list. The list is available in GET /timeoff/policy-types/{policyType}/reason-codes

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timeoff/employees/{id}/diffHours/requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
