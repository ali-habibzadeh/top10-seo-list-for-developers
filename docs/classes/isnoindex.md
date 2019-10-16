[top10-seo-list-for-developer](../README.md) › [IsNoIndex](isnoindex.md)

# Class: IsNoIndex

## Hierarchy

* BaseMetric

  ↳ **IsNoIndex**

## Index

### Constructors

* [constructor](isnoindex.md#constructor)

### Methods

* [getMetric](isnoindex.md#getmetric)
* [getMetricValue](isnoindex.md#getmetricvalue)

## Constructors

###  constructor

\+ **new IsNoIndex**(`page`: Page, `response`: Response | null): *[IsNoIndex](isnoindex.md)*

*Overrides void*

*Defined in [noindex/noindex.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/noindex/noindex.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[IsNoIndex](isnoindex.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹boolean››*

*Overrides void*

*Defined in [noindex/noindex.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/noindex/noindex.ts#L22)*

Returns `true` when either page has a meta tag with `content` attribute being `noindex`
OR if page response headers contained `X-Robots-Tag` with value `noindex`

**`property`** {string} `name` - The name of this metric

**`property`** {boolean} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹boolean››*

IMetricValue
