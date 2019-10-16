[top10-seo-list-for-developer](../README.md) › [AllowedInRobotsTxt](allowedinrobotstxt.md)

# Class: AllowedInRobotsTxt

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **AllowedInRobotsTxt**

## Index

### Constructors

* [constructor](allowedinrobotstxt.md#constructor)

### Properties

* [page](allowedinrobotstxt.md#protected-page)
* [pageUrl](allowedinrobotstxt.md#private-pageurl)
* [response](allowedinrobotstxt.md#protected-response)

### Methods

* [getMetric](allowedinrobotstxt.md#getmetric)
* [getMetricValue](allowedinrobotstxt.md#getmetricvalue)
* [getRobotsParser](allowedinrobotstxt.md#private-getrobotsparser)
* [getRobotsTxt](allowedinrobotstxt.md#private-getrobotstxt)

## Constructors

###  constructor

\+ **new AllowedInRobotsTxt**(`page`: Page, `response`: Response | null): *[AllowedInRobotsTxt](allowedinrobotstxt.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[AllowedInRobotsTxt](allowedinrobotstxt.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L11)*

___

### `Private` pageUrl

• **pageUrl**: *string* =  this.page.url()

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L10)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/base-types/base-metric.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IAllowedInRobotsTxt](../interfaces/iallowedinrobotstxt.md)››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:24](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L24)*

Determines whether this URL is allowed by robots.txt or not.
User agent is `*`

**`property`** {string} `name` - The name of this metric

**`property`** {Object<IAllowedInRobotsTxt>} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IAllowedInRobotsTxt](../interfaces/iallowedinrobotstxt.md)››*

IMetricValue

___

### `Private` getRobotsParser

▸ **getRobotsParser**(): *Promise‹Robots›*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:35](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L35)*

**Returns:** *Promise‹Robots›*

___

### `Private` getRobotsTxt

▸ **getRobotsTxt**(): *Promise‹string›*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.ts:40](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/a94cda7/src/metrics/metric-items/robots/allowed-robots-txt.ts#L40)*

**Returns:** *Promise‹string›*
