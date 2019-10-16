[top10-seo-list-for-developer](../README.md) › [RedirectChain](redirectchain.md)

# Class: RedirectChain

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **RedirectChain**

## Index

### Constructors

* [constructor](redirectchain.md#constructor)

### Properties

* [page](redirectchain.md#protected-page)
* [redirects](redirectchain.md#private-redirects)
* [response](redirectchain.md#protected-response)

### Methods

* [getMetric](redirectchain.md#getmetric)
* [getMetricValue](redirectchain.md#getmetricvalue)
* [getRedirectChain](redirectchain.md#private-getredirectchain)

## Constructors

###  constructor

\+ **new RedirectChain**(`page`: Page, `response`: Response | null): *[RedirectChain](redirectchain.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/redirect-chain/redirect-chain.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[RedirectChain](redirectchain.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/redirect-chain/redirect-chain.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L10)*

___

### `Private` redirects

• **redirects**: *Request[]* =  this.response!.request().redirectChain()

*Defined in [metrics/metric-items/redirect-chain/redirect-chain.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L8)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/base-types/base-metric.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/redirect-chain/redirect-chain.ts:23](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L23)*

Returns the list of redirects that has happened until the final page is reached.
There is always at least 1 item returned if no redirections take place.

**`property`** {String} `name` - The name of this metric

**`property`** {Array.<IRedirectChainItem[]>} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]››*

IMetricValue

___

### `Private` getRedirectChain

▸ **getRedirectChain**(): *[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]*

*Defined in [metrics/metric-items/redirect-chain/redirect-chain.ts:30](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L30)*

**Returns:** *[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]*
