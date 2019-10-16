[top10-seo-list-for-developer](../README.md) › [RedirectChain](redirectchain.md)

# Class: RedirectChain

## Hierarchy

* BaseMetric

  ↳ **RedirectChain**

## Index

### Constructors

* [constructor](redirectchain.md#constructor)

### Methods

* [getMetric](redirectchain.md#getmetric)
* [getMetricValue](redirectchain.md#getmetricvalue)

## Constructors

###  constructor

\+ **new RedirectChain**(`page`: Page, `response`: Response | null): *[RedirectChain](redirectchain.md)*

*Overrides void*

*Defined in [redirect-chain/redirect-chain.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[RedirectChain](redirectchain.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]››*

*Overrides void*

*Defined in [redirect-chain/redirect-chain.ts:23](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/redirect-chain/redirect-chain.ts#L23)*

Returns the list of redirects that has happened until the final page is reached.
There is always at least 1 item returned if no redirections take place.

**`property`** {String} `name` - The name of this metric

**`property`** {Array.<IRedirectChainItem[]>} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹[IRedirectChainItem](../interfaces/iredirectchainitem.md)[]››*

IMetricValue
