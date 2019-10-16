[top10-seo-list-for-developer](../README.md) › [SchemaOrg](schemaorg.md)

# Class: SchemaOrg

## Hierarchy

* [BaseMetric](basemetric.md)

  ↳ **SchemaOrg**

## Index

### Constructors

* [constructor](schemaorg.md#constructor)

### Properties

* [page](schemaorg.md#protected-page)
* [response](schemaorg.md#protected-response)

### Methods

* [getMetric](schemaorg.md#getmetric)
* [getMetricValue](schemaorg.md#getmetricvalue)

## Constructors

###  constructor

\+ **new SchemaOrg**(`page`: Page, `response`: Response | null): *[SchemaOrg](schemaorg.md)*

*Overrides [BaseMetric](basemetric.md).[constructor](basemetric.md#constructor)*

*Defined in [metrics/metric-items/schema-org/schema-org.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/schema-org/schema-org.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[SchemaOrg](schemaorg.md)*

## Properties

### `Protected` page

• **page**: *Page*

*Overrides [BaseMetric](basemetric.md).[page](basemetric.md#protected-page)*

*Defined in [metrics/metric-items/schema-org/schema-org.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/schema-org/schema-org.ts#L9)*

___

### `Protected` response

• **response**: *Response | null*

*Inherited from [BaseMetric](basemetric.md).[response](basemetric.md#protected-response)*

*Defined in [metrics/base-types/base-metric.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L7)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

*Inherited from [BaseMetric](basemetric.md).[getMetric](basemetric.md#getmetric)*

*Defined in [metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹[IMetric](../interfaces/imetric.md)‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]››*

*Overrides [BaseMetric](basemetric.md).[getMetricValue](basemetric.md#abstract-getmetricvalue)*

*Defined in [metrics/metric-items/schema-org/schema-org.ts:21](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/schema-org/schema-org.ts#L21)*

Extracts the microdata within the document and returns an array objects for each scope found.

**`property`** {String} `name` - The name of this metric

**`property`** {Array.IMiccroDataScope} `value` - The value of this metric

**Returns:** *Promise‹[IMetricValue](../interfaces/imetricvalue.md)‹[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]››*

IMetricValue
