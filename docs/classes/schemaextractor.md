[top10-seo-list-for-developer](../README.md) › [SchemaExtractor](schemaextractor.md)

# Class: SchemaExtractor

## Hierarchy

* **SchemaExtractor**

## Index

### Constructors

* [constructor](schemaextractor.md#constructor)

### Methods

* [getSchema](schemaextractor.md#getschema)

## Constructors

###  constructor

\+ **new SchemaExtractor**(`content`: string): *[SchemaExtractor](schemaextractor.md)*

*Defined in [schema-org/extraction/schema-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[SchemaExtractor](schemaextractor.md)*

## Methods

###  getSchema

▸ **getSchema**(): *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

*Defined in [schema-org/extraction/schema-extractor.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/bfde32e/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L22)*

Extracts the microdata within the document and returns an array objects for each scope found.

**`property`** {string} `@type` - The type name for the item scope. e.g. Person

**`property`** {[key: string]: string} `...` Key value pairs of the properties and their values within this scope

**Returns:** *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

List of schema scopes
