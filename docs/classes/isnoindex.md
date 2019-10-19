[top10-seo-list-for-developers](../README.md) › [IsNoIndex](isnoindex.md)

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
* [pageFunction](isnoindex.md#private-pagefunction)

## Constructors

###  constructor

\+ **new IsNoIndex**(`page`: Page, `response`: Response | null): *[IsNoIndex](isnoindex.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/noindex/noindex.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L7)*

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

*Defined in [metrics/metric-items/noindex/noindex.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L9)*

___

### `Protected` response

• **response**: *Response | null*

*Overrides [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/metric-items/noindex/noindex.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L9)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/noindex/noindex.ts:13](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L13)*

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

___

### `Private` hasMetaNoIndex

▸ **hasMetaNoIndex**(): *Promise‹boolean›*

*Defined in [metrics/metric-items/noindex/noindex.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L20)*

**Returns:** *Promise‹boolean›*

___

### `Private` hasNoIndexHeahder

▸ **hasNoIndexHeahder**(): *boolean*

*Defined in [metrics/metric-items/noindex/noindex.ts:24](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L24)*

**Returns:** *boolean*

___

### `Private` pageFunction

▸ **pageFunction**(): *boolean*

*Defined in [metrics/metric-items/noindex/noindex.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/noindex/noindex.ts#L7)*

**Returns:** *boolean*
