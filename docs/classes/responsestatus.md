[top10-seo-list-for-developer](../README.md) › [ResponseStatus](responsestatus.md)

# Class: ResponseStatus

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **ResponseStatus**

## Index

### Constructors

* [constructor](responsestatus.md#constructor)

### Properties

* [page](responsestatus.md#protected-page)
* [response](responsestatus.md#protected-response)

### Methods

* [getMetric](responsestatus.md#getmetric)
* [getMetricValue](responsestatus.md#getmetricvalue)

## Constructors

###  constructor

\+ **new ResponseStatus**(`page`: Page, `response`: Response | null): *[ResponseStatus](responsestatus.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/status/status.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/status/status.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[ResponseStatus](responsestatus.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/status/status.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/status/status.ts#L8)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹number››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/status/status.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/status/status.ts#L20)*

Contains the status code of the response (e.g., 200 for a success).

**`property`** {String} `name` - The name of this metric

**`property`** {Number} `value` - Contains the status code of the response (e.g., 200 for a success).

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹number››*

List of schema scopes found
