[top10-seo-list-for-developer](../README.md) › [InternalLinks](internallinks.md)

# Class: InternalLinks

## Hierarchy

* BaseMetric

  ↳ **InternalLinks**

## Index

### Constructors

* [constructor](internallinks.md#constructor)

### Methods

* [getMetric](internallinks.md#getmetric)
* [getMetricValue](internallinks.md#getmetricvalue)

## Constructors

###  constructor

\+ **new InternalLinks**(`page`: Page, `response`: Response | null): *[InternalLinks](internallinks.md)*

*Overrides void*

*Defined in [internal-links/internal-links.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/internal-links/internal-links.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[InternalLinks](internallinks.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹[ILinkData](../interfaces/ilinkdata.md)[]››*

*Overrides void*

*Defined in [internal-links/internal-links.ts:25](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/internal-links/internal-links.ts#L25)*

Returns a list of link data objects for all the internal links found on this page.

**`property`** {string} `name` - The name of this metric

**`property`** {Array.<ILinkData>} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹[ILinkData](../interfaces/ilinkdata.md)[]››*

IMetricValue
