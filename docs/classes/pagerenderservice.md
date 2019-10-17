[top10-seo-list-for-developer](../README.md) › [PageRenderService](pagerenderservice.md)

# Class: PageRenderService

## Hierarchy

* **PageRenderService**

## Index

### Constructors

* [constructor](pagerenderservice.md#constructor)

### Properties

* [browser](pagerenderservice.md#private-browser)
* [page](pagerenderservice.md#private-page)
* [url](pagerenderservice.md#private-url)

### Methods

* [close](pagerenderservice.md#private-close)
* [getPageRenderMetrics](pagerenderservice.md#getpagerendermetrics)
* [getResponse](pagerenderservice.md#private-getresponse)
* [setPageHandlers](pagerenderservice.md#private-setpagehandlers)

## Constructors

###  constructor

\+ **new PageRenderService**(`url`: string): *[PageRenderService](pagerenderservice.md)*

*Defined in [page-rendering/page-render.service.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[PageRenderService](pagerenderservice.md)*

## Properties

### `Private` browser

• **browser**: *Browser*

*Defined in [page-rendering/page-render.service.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L9)*

___

### `Private` page

• **page**: *Page*

*Defined in [page-rendering/page-render.service.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L10)*

___

### `Private` url

• **url**: *string*

*Defined in [page-rendering/page-render.service.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L12)*

## Methods

### `Private` close

▸ **close**(): *Promise‹void›*

*Defined in [page-rendering/page-render.service.ts:38](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L38)*

**Returns:** *Promise‹void›*

___

###  getPageRenderMetrics

▸ **getPageRenderMetrics**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any›[]›*

*Defined in [page-rendering/page-render.service.ts:19](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L19)*

<uml>
!include designs/high-level-api.puml
</uml>

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any›[]›*

___

### `Private` getResponse

▸ **getResponse**(): *Promise‹Response | null›*

*Defined in [page-rendering/page-render.service.ts:26](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L26)*

**Returns:** *Promise‹Response | null›*

___

### `Private` setPageHandlers

▸ **setPageHandlers**(): *Promise‹void›*

*Defined in [page-rendering/page-render.service.ts:33](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b2629c6/src/page-rendering/page-render.service.ts#L33)*

**Returns:** *Promise‹void›*
