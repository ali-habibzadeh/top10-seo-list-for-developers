[top10-seo-list-for-developers](../README.md) › [IAllowedInRobotsTxt](iallowedinrobotstxt.md)

# Interface: IAllowedInRobotsTxt

## Hierarchy

* **IAllowedInRobotsTxt**

## Index

### Properties

* [isAllowed](iallowedinrobotstxt.md#optional-isallowed)
* [matchedAtLine](iallowedinrobotstxt.md#optional-matchedatline)

## Properties

### `Optional` isAllowed

• **isAllowed**? : *undefined | false | true*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.interface.ts:6](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/robots/allowed-robots-txt.interface.ts#L6)*

Returns true if crawling the specified URL is allowed for the specified user-agent.
This will return undefined if the URL isn't valid for this robots.txt.

___

### `Optional` matchedAtLine

• **matchedAtLine**? : *undefined | number*

*Defined in [metrics/metric-items/robots/allowed-robots-txt.interface.ts:12](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/38108d7/src/metrics/metric-items/robots/allowed-robots-txt.interface.ts#L12)*

Returns the line number of the matching directive for the specified URL and user-agent if any.
Line numbers start at 1 and go up (1-based indexing).
Returns -1 if there is no matching directive. If a rule is manually added without a lineNumber then this will return undefined for that rule.
