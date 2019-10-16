[top10-seo-list-for-developer](../README.md) › [CDPSessionClient](cdpsessionclient.md)

# Class: CDPSessionClient

## Hierarchy

* **CDPSessionClient**

## Index

### Constructors

* [constructor](cdpsessionclient.md#constructor)

### Properties

* [client](cdpsessionclient.md#private-client)
* [page](cdpsessionclient.md#private-page)

### Methods

* [getAttribute](cdpsessionclient.md#getattribute)
* [getDocument](cdpsessionclient.md#getdocument)
* [getEventListeners](cdpsessionclient.md#geteventlisteners)
* [getTextContent](cdpsessionclient.md#gettextcontent)
* [querySelectorAll](cdpsessionclient.md#queryselectorall)
* [resolveNodeObjectId](cdpsessionclient.md#resolvenodeobjectid)

## Constructors

###  constructor

\+ **new CDPSessionClient**(`page`: Page): *[CDPSessionClient](cdpsessionclient.md)*

*Defined in [page-rendering/cdp/cdp-session-client.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |

**Returns:** *[CDPSessionClient](cdpsessionclient.md)*

## Properties

### `Private` client

• **client**: *CDPSession*

*Defined in [page-rendering/cdp/cdp-session-client.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L6)*

___

### `Private` page

• **page**: *Page*

*Defined in [page-rendering/cdp/cdp-session-client.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L7)*

## Methods

###  getAttribute

▸ **getAttribute**(`nodeId`: number, `attribute`: string): *Promise‹string | null›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:42](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |
`attribute` | string |

**Returns:** *Promise‹string | null›*

___

###  getDocument

▸ **getDocument**(): *Promise‹CDP.DOM.GetDocumentResponse›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:25](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L25)*

**Returns:** *Promise‹CDP.DOM.GetDocumentResponse›*

___

###  getEventListeners

▸ **getEventListeners**(`nodeId`: number): *Promise‹CDP.DOMDebugger.EventListener[]›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹CDP.DOMDebugger.EventListener[]›*

___

###  getTextContent

▸ **getTextContent**(`nodeId`: number): *Promise‹string›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:35](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹string›*

___

###  querySelectorAll

▸ **querySelectorAll**(`selector`: string): *Promise‹number[]›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:17](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`selector` | string |

**Returns:** *Promise‹number[]›*

___

###  resolveNodeObjectId

▸ **resolveNodeObjectId**(`nodeId`: number): *Promise‹string | undefined›*

*Defined in [page-rendering/cdp/cdp-session-client.ts:30](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e7273e7/src/page-rendering/cdp/cdp-session-client.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹string | undefined›*
