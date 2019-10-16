[top10-seo-list-for-developer](../README.md) › [InternalLinks](internallinks.md)

# Class: InternalLinks

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **InternalLinks**

## Index

### Constructors

* [constructor](internallinks.md#constructor)

### Properties

* [cdpSession](internallinks.md#private-cdpsession)
* [page](internallinks.md#protected-page)
* [response](internallinks.md#protected-response)

### Methods

* [getAllInternalLinks](internallinks.md#private-getallinternallinks)
* [getAllLinksData](internallinks.md#private-getalllinksdata)
* [getLinkData](internallinks.md#private-getlinkdata)
* [getMetric](internallinks.md#getmetric)
* [getMetricValue](internallinks.md#getmetricvalue)
* [isExternalLink](internallinks.md#private-isexternallink)

## Constructors

###  constructor

\+ **new InternalLinks**(`page`: Page, `response`: Response | null): *[InternalLinks](internallinks.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[InternalLinks](internallinks.md)*

## Properties

### `Private` cdpSession

• **cdpSession**: *[CDPSessionClient](cdpsessionclient.md)* =  new CDPSessionClient(this.page)

*Defined in [metrics/metric-items/internal-links/internal-links.ts:11](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L11)*

___

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:13](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L13)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/base-types/base-metric.ts#L7)*

## Methods

### `Private` getAllInternalLinks

▸ **getAllInternalLinks**(): *Promise‹[ILinkData](../interfaces/ilinkdata.md)[]›*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:32](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L32)*

**Returns:** *Promise‹[ILinkData](../interfaces/ilinkdata.md)[]›*

___

### `Private` getAllLinksData

▸ **getAllLinksData**(): *Promise‹[ILinkData](../interfaces/ilinkdata.md)[]›*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:37](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L37)*

**Returns:** *Promise‹[ILinkData](../interfaces/ilinkdata.md)[]›*

___

### `Private` getLinkData

▸ **getLinkData**(`nodeId`: number): *Promise‹[ILinkData](../interfaces/ilinkdata.md)›*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:42](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹[ILinkData](../interfaces/ilinkdata.md)›*

___

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[ILinkData](../interfaces/ilinkdata.md)[]››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:25](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L25)*

Returns a list of link data objects for all the internal links found on this page.

**`property`** {string} `name` - The name of this metric

**`property`** {Array.<ILinkData>} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[ILinkData](../interfaces/ilinkdata.md)[]››*

IMetricValue

___

### `Private` isExternalLink

▸ **isExternalLink**(`href`: string | null): *boolean*

*Defined in [metrics/metric-items/internal-links/internal-links.ts:52](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/e8cd669/src/metrics/metric-items/internal-links/internal-links.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`href` | string &#124; null |

**Returns:** *boolean*
