[top10-seo-list-for-developers](../README.md) › [MicrodataExtractor](microdataextractor.md)

# Class: MicrodataExtractor

## Hierarchy

* **MicrodataExtractor**

## Index

### Constructors

* [constructor](microdataextractor.md#constructor)

### Properties

* [$](microdataextractor.md#private-$)
* [attrMappings](microdataextractor.md#private-attrmappings)
* [content](microdataextractor.md#private-content)
* [scopesList](microdataextractor.md#private-scopeslist)

### Methods

* [getMicrodata](microdataextractor.md#getmicrodata)
* [getPropValue](microdataextractor.md#private-getpropvalue)
* [getPropValuesFromList](microdataextractor.md#private-getpropvaluesfromlist)
* [getSchemaTypeName](microdataextractor.md#private-getschematypename)
* [getScopePropertiesList](microdataextractor.md#private-getscopepropertieslist)

## Constructors

###  constructor

\+ **new MicrodataExtractor**(`content`: string): *[MicrodataExtractor](microdataextractor.md)*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[MicrodataExtractor](microdataextractor.md)*

## Properties

### `Private` $

• **$**: *CheerioStatic* =  cheerio.load(this.content, { ignoreWhitespace: true })

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L9)*

___

### `Private` attrMappings

• **attrMappings**: *object[]* =  valueAttrMappings

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:8](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L8)*

___

### `Private` content

• **content**: *string*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L12)*

___

### `Private` scopesList

• **scopesList**: *Cheerio* =  this.$("[itemscope][itemtype]")

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:10](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L10)*

## Methods

###  getMicrodata

▸ **getMicrodata**(): *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:14](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L14)*

**Returns:** *[IMiccroDataScope](../interfaces/imiccrodatascope.md)[]*

___

### `Private` getPropValue

▸ **getPropValue**(`prop`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:42](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | CheerioElement |

**Returns:** *string*

___

### `Private` getPropValuesFromList

▸ **getPropValuesFromList**(`propsList`: CheerioElement[]): *__type*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:32](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`propsList` | CheerioElement[] |

**Returns:** *__type*

___

### `Private` getSchemaTypeName

▸ **getSchemaTypeName**(`scope`: CheerioElement): *string*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:27](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *string*

___

### `Private` getScopePropertiesList

▸ **getScopePropertiesList**(`scope`: CheerioElement): *CheerioElement[]*

*Defined in [metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts:22](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/30b8a97/src/metrics/metric-items/schema-org/extraction/microdata/microdata-extractor.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | CheerioElement |

**Returns:** *CheerioElement[]*
