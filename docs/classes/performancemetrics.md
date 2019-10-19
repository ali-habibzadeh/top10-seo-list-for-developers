[top10-seo-list-for-developers](../README.md) › [PerformanceMetrics](performancemetrics.md)

# Class: PerformanceMetrics

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **PerformanceMetrics**

## Index

### Constructors

* [constructor](performancemetrics.md#constructor)

### Properties

* [page](performancemetrics.md#protected-page)
* [response](performancemetrics.md#protected-response)

### Methods

* [getMetric](performancemetrics.md#getmetric)
* [getMetricValue](performancemetrics.md#getmetricvalue)
* [pageFunction](performancemetrics.md#private-pagefunction)

## Constructors

###  constructor

\+ **new PerformanceMetrics**(`page`: Page, `response`: Response | null): *[PerformanceMetrics](performancemetrics.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/performance/performance.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/performance/performance.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[PerformanceMetrics](performancemetrics.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/performance/performance.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/performance/performance.ts#L12)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/base-metric.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹PerformanceEntry[]››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/performance/performance.ts:16](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/performance/performance.ts#L16)*

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹PerformanceEntry[]››*

___

### `Private` pageFunction

▸ **pageFunction**(): *string*

*Defined in [metrics/metric-items/performance/performance.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/performance/performance.ts#L7)*

**Returns:** *string*
