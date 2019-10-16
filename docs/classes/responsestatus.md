[top10-seo-list-for-developer](../README.md) › [ResponseStatus](responsestatus.md)

# Class: ResponseStatus

## Hierarchy

* BaseMetric

  ↳ **ResponseStatus**

## Index

### Constructors

* [constructor](responsestatus.md#constructor)

### Methods

* [getMetric](responsestatus.md#getmetric)
* [getMetricValue](responsestatus.md#getmetricvalue)

## Constructors

###  constructor

\+ **new ResponseStatus**(`page`: Page, `response`: Response | null): *[ResponseStatus](responsestatus.md)*

*Overrides void*

*Defined in [status/status.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/status/status.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[ResponseStatus](responsestatus.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹number››*

*Overrides void*

*Defined in [status/status.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/status/status.ts#L20)*

Contains the status code of the response (e.g., 200 for a success).

**`property`** {String} `name` - The name of this metric

**`property`** {Number} `value` - Contains the status code of the response (e.g., 200 for a success).

**Returns:** *Promise‹IMetricValue‹number››*

List of schema scopes found
