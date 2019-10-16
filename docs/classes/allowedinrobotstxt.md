[top10-seo-list-for-developer](../README.md) › [AllowedInRobotsTxt](allowedinrobotstxt.md)

# Class: AllowedInRobotsTxt

## Hierarchy

* BaseMetric

  ↳ **AllowedInRobotsTxt**

## Index

### Constructors

* [constructor](allowedinrobotstxt.md#constructor)

### Methods

* [getMetric](allowedinrobotstxt.md#getmetric)
* [getMetricValue](allowedinrobotstxt.md#getmetricvalue)

## Constructors

###  constructor

\+ **new AllowedInRobotsTxt**(`page`: Page, `response`: Response | null): *[AllowedInRobotsTxt](allowedinrobotstxt.md)*

*Overrides void*

*Defined in [robots/allowed-robots-txt.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/robots/allowed-robots-txt.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[AllowedInRobotsTxt](allowedinrobotstxt.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹[IAllowedInRobotsTxt](../interfaces/iallowedinrobotstxt.md)››*

*Overrides void*

*Defined in [robots/allowed-robots-txt.ts:24](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/robots/allowed-robots-txt.ts#L24)*

Determines whether this URL is allowed by robots.txt or not.
User agent is `*`

**`property`** {string} `name` - The name of this metric

**`property`** {Object<IAllowedInRobotsTxt>} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹[IAllowedInRobotsTxt](../interfaces/iallowedinrobotstxt.md)››*

IMetricValue
