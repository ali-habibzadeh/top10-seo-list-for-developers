[top10-seo-list-for-developer](../README.md) › [BaseMetric](basemetric.md)

# Class: BaseMetric

## Hierarchy

* **BaseMetric**

  ↳ [InternalLinks](internallinks.md)

  ↳ [IsNoIndex](isnoindex.md)

  ↳ [PerformanceMetrics](performancemetrics.md)

  ↳ [RedirectChain](redirectchain.md)

  ↳ [IsResponsive](isresponsive.md)

  ↳ [AllowedInRobotsTxt](allowedinrobotstxt.md)

  ↳ [SchemaOrg](schemaorg.md)

  ↳ [ResponseStatus](responsestatus.md)

  ↳ [TfIdfScore](tfidfscore.md)

## Index

### Constructors

* [constructor](basemetric.md#constructor)

### Properties

* [page](basemetric.md#protected-page)
* [response](basemetric.md#protected-response)

### Methods

* [getDataType](basemetric.md#private-getdatatype)
* [getMetric](basemetric.md#getmetric)
* [getMetricValue](basemetric.md#abstract-getmetricvalue)

## Constructors

###  constructor

\+ **new BaseMetric**(`page`: Page, `response`: Response | null): *[BaseMetric](basemetric.md)*

*Defined in [metrics/base-types/base-metric.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[BaseMetric](basemetric.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L7)*

___

### `Protected` response

• **response**: *Response | null*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L7)*

## Methods

### `Private` getDataType

▸ **getDataType**(`metricValue`: any): *object*

*Defined in [metrics/base-types/base-metric.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`metricValue` | any |

**Returns:** *object*

___

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

### `Abstract` getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹any››*

*Defined in [metrics/base-types/base-metric.ts:30](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L30)*

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹any››*
