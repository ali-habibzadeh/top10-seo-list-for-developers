[top10-seo-list-for-developers](../README.md) › [IsResponsive](isresponsive.md)

# Class: IsResponsive

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **IsResponsive**

## Index

### Constructors

* [constructor](isresponsive.md#constructor)

### Properties

* [page](isresponsive.md#protected-page)
* [response](isresponsive.md#protected-response)
* [selector](isresponsive.md#private-selector)

### Methods

* [getMetric](isresponsive.md#getmetric)
* [getMetricValue](isresponsive.md#getmetricvalue)
* [pageFunction](isresponsive.md#private-pagefunction)

## Constructors

###  constructor

\+ **new IsResponsive**(`page`: Page, `response`: Response | null): *[IsResponsive](isresponsive.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/responsive/responsive.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/metric-items/responsive/responsive.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[IsResponsive](isresponsive.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/responsive/responsive.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/metric-items/responsive/responsive.ts#L10)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/base-types/base-metric.ts#L7)*

___

### `Private` selector

• **selector**: *string* =  `meta[name="viewport"][content*="width=device-width`

*Defined in [metrics/metric-items/responsive/responsive.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/metric-items/responsive/responsive.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/responsive/responsive.ts:23](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/metric-items/responsive/responsive.ts#L23)*

Returns true if the page has a meta tag with attribute `name=viewport`
and it the `content` attribute at least contains `width=device-width`

**`property`** {string} `name` - The name of this metric

**`property`** {boolean} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹boolean››*

IMetricValue

___

### `Private` pageFunction

▸ **pageFunction**(): *boolean*

*Defined in [metrics/metric-items/responsive/responsive.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/c60e990/src/metrics/metric-items/responsive/responsive.ts#L8)*

**Returns:** *boolean*
