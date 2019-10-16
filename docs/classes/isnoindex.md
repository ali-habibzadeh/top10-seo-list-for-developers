[top10-seo-list-for-developer](../README.md) › [IsNoIndex](isnoindex.md)

# Class: IsNoIndex

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **IsNoIndex**

## Index

### Constructors

* [constructor](isnoindex.md#constructor)

### Properties

* [page](isnoindex.md#protected-page)
* [response](isnoindex.md#protected-response)

### Methods

* [getMetric](isnoindex.md#getmetric)
* [getMetricValue](isnoindex.md#getmetricvalue)
* [hasMetaNoIndex](isnoindex.md#private-hasmetanoindex)
* [hasNoIndexHeahder](isnoindex.md#private-hasnoindexheahder)
* [pageFunction](isnoindex.md#protected-pagefunction)

## Constructors

###  constructor

\+ **new IsNoIndex**(`page`: Page, `response`: Response | null): *[IsNoIndex](isnoindex.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/noindex/noindex.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[IsNoIndex](isnoindex.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/noindex/noindex.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L9)*

___

### `Protected` response

• **response**: *Response | null*

*Overrides [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/metric-items/noindex/noindex.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L9)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/noindex/noindex.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L22)*

Returns `true` when either page has a meta tag with `content` attribute being `noindex`
OR if page response headers contained `X-Robots-Tag` with value `noindex`

**`property`** {string} `name` - The name of this metric

**`property`** {boolean} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

IMetricValue

___

### `Private` hasMetaNoIndex

▸ **hasMetaNoIndex**(): *Promise‹boolean›*

*Defined in [metrics/metric-items/noindex/noindex.ts:29](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L29)*

**Returns:** *Promise‹boolean›*

___

### `Private` hasNoIndexHeahder

▸ **hasNoIndexHeahder**(): *boolean*

*Defined in [metrics/metric-items/noindex/noindex.ts:33](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L33)*

**Returns:** *boolean*

___

### `Protected` pageFunction

▸ **pageFunction**(): *boolean*

*Defined in [metrics/metric-items/noindex/noindex.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/noindex/noindex.ts#L7)*

**Returns:** *boolean*
