[top10-seo-list-for-developers](../README.md) › [IMetric](imetric.md)

# Interface: IMetric <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [IMetricValue](imetricvalue.md)‹T›

  ↳ **IMetric**

## Index

### Properties

* [isArray](imetric.md#optional-isarray)
* [name](imetric.md#name)
* [type](imetric.md#type)
* [value](imetric.md#value)

## Properties

### `Optional` isArray

• **isArray**? : *undefined | false | true*

*Defined in [metrics/base-types/metric.interface.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/metric.interface.ts#L20)*

Whether the value is an array or not

___

###  name

• **name**: *string*

*Inherited from [IMetricValue](imetricvalue.md).[name](imetricvalue.md#name)*

*Defined in [metrics/base-types/metric.interface.ts:5](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/metric.interface.ts#L5)*

Name of the metric

___

###  type

• **type**: *string*

*Defined in [metrics/base-types/metric.interface.ts:16](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/metric.interface.ts#L16)*

Name of the data type of this metric

___

###  value

• **value**: *T*

*Inherited from [IMetricValue](imetricvalue.md).[value](imetricvalue.md#value)*

*Defined in [metrics/base-types/metric.interface.ts:9](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/base-types/metric.interface.ts#L9)*

Value of the metric
