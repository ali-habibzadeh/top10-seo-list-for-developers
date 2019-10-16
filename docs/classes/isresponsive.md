[top10-seo-list-for-developer](../README.md) › [IsResponsive](isresponsive.md)

# Class: IsResponsive

## Hierarchy

* BaseMetric

  ↳ **IsResponsive**

## Index

### Constructors

* [constructor](isresponsive.md#constructor)

### Methods

* [getMetric](isresponsive.md#getmetric)
* [getMetricValue](isresponsive.md#getmetricvalue)

## Constructors

###  constructor

\+ **new IsResponsive**(`page`: Page, `response`: Response | null): *[IsResponsive](isresponsive.md)*

*Overrides void*

*Defined in [responsive/responsive.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/responsive/responsive.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[IsResponsive](isresponsive.md)*

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

*Defined in [responsive/responsive.ts:23](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/responsive/responsive.ts#L23)*

Returns true if the page has a meta tag with attribute `name=viewport`
and it the `content` attribute at least contains `width=device-width`

**`property`** {string} `name` - The name of this metric

**`property`** {boolean} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹boolean››*

IMetricValue
