[top10-seo-list-for-developer](../README.md) › [SchemaExtractor](schemaextractor.md)

# Class: SchemaExtractor

## Hierarchy

* **SchemaExtractor**

## Index

### Constructors

* [constructor](schemaextractor.md#constructor)

### Properties

* [$](schemaextractor.md#private-$)
* [attrMappings](schemaextractor.md#private-attrmappings)
* [content](schemaextractor.md#private-content)
* [scopesList](schemaextractor.md#private-scopeslist)

### Methods

* [getPropValue](schemaextractor.md#private-getpropvalue)
* [getPropValuesFromList](schemaextractor.md#private-getpropvaluesfromlist)
* [getSchema](schemaextractor.md#getschema)
* [getSchemaTypeName](schemaextractor.md#private-getschematypename)
* [getScopePropertiesList](schemaextractor.md#private-getscopepropertieslist)

## Constructors

###  constructor

\+ **new SchemaExtractor**(`content`: string): *[SchemaExtractor](schemaextractor.md)*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[SchemaExtractor](schemaextractor.md)*

## Properties

### `Private` $

• **$**: *CheerioStatic* =  cheerio.load(this.content, { ignoreWhitespace: true })

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L9)*

___

### `Private` attrMappings

• **attrMappings**: *object[]* =  valueAttrMappings

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L8)*

___

### `Private` content

• **content**: *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L12)*

___

### `Private` scopesList

• **scopesList**: *Cheerio* =  this.$("[itemscope][itemtype]")

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L10)*

## Methods

### `Private` getPropValue

▸ **getPropValue**(`prop`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:50](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | CheerioElement |

**Returns:** *string*

___

### `Private` getPropValuesFromList

▸ **getPropValuesFromList**(`propsList`: CheerioElement[]): *__type*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:40](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`propsList` | CheerioElement[] |

**Returns:** *__type*

___

###  getSchema

▸ **getSchema**(): *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L22)*

Extracts the microdata within the document and returns an array objects for each scope found.

**`property`** {string} `@type` - The type name for the item scope. e.g. Person

**`property`** {[key: string]: string} `...` Key value pairs of the properties and their values within this scope

**Returns:** *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

List of schema scopes

___

### `Private` getSchemaTypeName

▸ **getSchemaTypeName**(`scope`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:35](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *string*

___

### `Private` getScopePropertiesList

▸ **getScopePropertiesList**(`scope`: CheerioElement): *CheerioElement[]*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:30](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/33055d5/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *CheerioElement[]*
