[top10-seo-list-for-developer](../README.md) › [TfIdfScore](tfidfscore.md)

# Class: TfIdfScore

## Hierarchy

* BaseMetric

  ↳ **TfIdfScore**

## Index

### Constructors

* [constructor](tfidfscore.md#constructor)

### Methods

* [getMetric](tfidfscore.md#getmetric)
* [getMetricValue](tfidfscore.md#getmetricvalue)

## Constructors

###  constructor

\+ **new TfIdfScore**(`page`: Page, `response`: Response | null): *[TfIdfScore](tfidfscore.md)*

*Overrides void*

*Defined in [tf–idf/tf–idf.ts:14](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/tf–idf/tf–idf.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[TfIdfScore](tfidfscore.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹TfIdfTerm[]››*

*Overrides void*

*Defined in [tf–idf/tf–idf.ts:32](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/tf–idf/tf–idf.ts#L32)*

Returns list of first 10 key words sorted by their importance.

Term Frequency–Inverse Document Frequency (tf-idf) is implemented to determine how important a word (or words) is to a document relative to a corpus.

**`see`** https://en.wikipedia.org/wiki/Tf%E2%80%93idf

**`property`** {String} `name` - The name of this metric

**`property`** {Array.<TfIdfTerm>} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹TfIdfTerm[]››*

IMetricValue
