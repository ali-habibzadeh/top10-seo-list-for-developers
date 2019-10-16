[top10-seo-list-for-developer](../README.md) › [PageRequestHandler](pagerequesthandler.md)

# Class: PageRequestHandler

## Hierarchy

* **PageRequestHandler**

## Index

### Constructors

* [constructor](pagerequesthandler.md#constructor)

### Properties

* [request](pagerequesthandler.md#private-request)
* [resourceType](pagerequesthandler.md#private-resourcetype)

### Methods

* [globMatchesUrl](pagerequesthandler.md#private-globmatchesurl)
* [handle](pagerequesthandler.md#handle)
* [isBlocked](pagerequesthandler.md#private-isblocked)

## Constructors

###  constructor

\+ **new PageRequestHandler**(`request`: Request): *[PageRequestHandler](pagerequesthandler.md)*

*Defined in [page-rendering/config/page-request.handler.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | Request |

**Returns:** *[PageRequestHandler](pagerequesthandler.md)*

## Properties

### `Private` request

• **request**: *Request*

*Defined in [page-rendering/config/page-request.handler.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L11)*

___

### `Private` resourceType

• **resourceType**: *"font" | "script" | "image" | "document" | "stylesheet" | "media" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other"* =  this.request.resourceType()

*Defined in [page-rendering/config/page-request.handler.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L9)*

## Methods

### `Private` globMatchesUrl

▸ **globMatchesUrl**(`glob`: string): *boolean*

*Defined in [page-rendering/config/page-request.handler.ts:24](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`glob` | string |

**Returns:** *boolean*

___

###  handle

▸ **handle**(): *Promise‹void›*

*Defined in [page-rendering/config/page-request.handler.ts:13](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L13)*

**Returns:** *Promise‹void›*

___

### `Private` isBlocked

▸ **isBlocked**(): *boolean*

*Defined in [page-rendering/config/page-request.handler.ts:17](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/page-rendering/config/page-request.handler.ts#L17)*

**Returns:** *boolean*
