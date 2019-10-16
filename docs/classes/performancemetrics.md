[top10-seo-list-for-developer](../README.md) › [PerformanceMetrics](performancemetrics.md)

# Class: PerformanceMetrics

## Hierarchy

* BaseMetric

  ↳ **PerformanceMetrics**

## Index

### Constructors

* [constructor](performancemetrics.md#constructor)

### Methods

* [getMetric](performancemetrics.md#getmetric)
* [getMetricValue](performancemetrics.md#getmetricvalue)

## Constructors

###  constructor

\+ **new PerformanceMetrics**(`page`: Page, `response`: Response | null): *[PerformanceMetrics](performancemetrics.md)*

*Overrides void*

*Defined in [performance/performance.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/performance/performance.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[PerformanceMetrics](performancemetrics.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹PerformanceEntry[]››*

*Overrides void*

*Defined in [performance/performance.ts:25](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/performance/performance.ts#L25)*

Returns the list of paint performance entries.

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry

**`property`** {String} `name` - The name of this metric

**`property`** {Array.<PerformanceEntry>} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹PerformanceEntry[]››*

IMetricValue
