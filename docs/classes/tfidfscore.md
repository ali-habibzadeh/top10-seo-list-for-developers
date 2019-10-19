[top10-seo-list-for-developers](../README.md) › [TfIdfScore](tfidfscore.md)

# Class: TfIdfScore

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **TfIdfScore**

## Index

### Constructors

* [constructor](tfidfscore.md#constructor)

### Properties

* [page](tfidfscore.md#protected-page)
* [response](tfidfscore.md#protected-response)
* [tfidf](tfidfscore.md#private-tfidf)

### Methods

* [getMetric](tfidfscore.md#getmetric)
* [getMetricValue](tfidfscore.md#getmetricvalue)
* [getTfIdf](tfidfscore.md#private-gettfidf)
* [pageFunction](tfidfscore.md#private-pagefunction)

## Constructors

###  constructor

\+ **new TfIdfScore**(`page`: Page, `response`: Response | null): *[TfIdfScore](tfidfscore.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:14](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[TfIdfScore](tfidfscore.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:16](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L16)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/base-types/base-metric.ts#L7)*

___

### `Private` tfidf

• **tfidf**: *TfIdf* =  new TfIdf()

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L9)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹TfIdfTerm[]››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L20)*

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹TfIdfTerm[]››*

___

### `Private` getTfIdf

▸ **getTfIdf**(): *Promise‹TfIdfTerm[]›*

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:27](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L27)*

**Returns:** *Promise‹TfIdfTerm[]›*

___

### `Private` pageFunction

▸ **pageFunction**(): *string*

*Defined in [metrics/metric-items/tf–idf/tf–idf.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/b4206b2/src/metrics/metric-items/tf–idf/tf–idf.ts#L10)*

**Returns:** *string*
