[top10-seo-list-for-developer](../README.md) › [SchemaOrg](schemaorg.md)

# Class: SchemaOrg

## Hierarchy

* BaseMetric

  ↳ **SchemaOrg**

## Index

### Constructors

* [constructor](schemaorg.md#constructor)

### Methods

* [getMetric](schemaorg.md#getmetric)
* [getMetricValue](schemaorg.md#getmetricvalue)

## Constructors

###  constructor

\+ **new SchemaOrg**(`page`: Page, `response`: Response | null): *[SchemaOrg](schemaorg.md)*

*Overrides void*

*Defined in [schema-org/schema-org.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/schema-org/schema-org.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |
`response` | Response &#124; null |

**Returns:** *[SchemaOrg](schemaorg.md)*

## Methods

###  getMetric

▸ **getMetric**(): *Promise‹IMetric‹any››*

*Inherited from void*

*Defined in [/Users/alihabibzadeh/top10-seo-list-for-developer/src/metrics/base-types/base-metric.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/base-types/base-metric.ts#L9)*

**Returns:** *Promise‹IMetric‹any››*

___

###  getMetricValue

▸ **getMetricValue**(): *Promise‹IMetricValue‹[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]››*

*Overrides void*

*Defined in [schema-org/schema-org.ts:21](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/schema-org/schema-org.ts#L21)*

Extracts the microdata within the document and returns an array objects for each scope found.

**`property`** {String} `name` - The name of this metric

**`property`** {Array.IMiccroDataScope} `value` - The value of this metric

**Returns:** *Promise‹IMetricValue‹[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]››*

IMetricValue
