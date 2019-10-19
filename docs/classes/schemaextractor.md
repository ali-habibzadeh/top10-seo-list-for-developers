[top10-seo-list-for-developers](../README.md) › [SchemaExtractor](schemaextractor.md)

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

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[SchemaExtractor](schemaextractor.md)*

## Properties

### `Private` $

• **$**: *CheerioStatic* =  cheerio.load(this.content, { ignoreWhitespace: true })

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L9)*

___

### `Private` attrMappings

• **attrMappings**: *object[]* =  valueAttrMappings

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L8)*

___

### `Private` content

• **content**: *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L12)*

___

### `Private` scopesList

• **scopesList**: *Cheerio* =  this.$("[itemscope][itemtype]")

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L10)*

## Methods

### `Private` getPropValue

▸ **getPropValue**(`prop`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:42](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | CheerioElement |

**Returns:** *string*

___

### `Private` getPropValuesFromList

▸ **getPropValuesFromList**(`propsList`: CheerioElement[]): *__type*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:32](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`propsList` | CheerioElement[] |

**Returns:** *__type*

___

###  getSchema

▸ **getSchema**(): *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:14](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L14)*

**Returns:** *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

___

### `Private` getSchemaTypeName

▸ **getSchemaTypeName**(`scope`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:27](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *string*

___

### `Private` getScopePropertiesList

▸ **getScopePropertiesList**(`scope`: CheerioElement): *CheerioElement[]*

*Defined in [metrics/metric-items/schema-org/extraction/schema-extractor.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/schema-org/extraction/schema-extractor.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *CheerioElement[]*
