[top10-seo-list-for-developer](../README.md) › [ILinkData](ilinkdata.md)

# Interface: ILinkData

Metric value for inernal links

## Hierarchy

* [IRawLinkData](irawlinkdata.md)

  ↳ **ILinkData**

## Index

### Properties

* [healthy](ilinkdata.md#healthy)
* [href](ilinkdata.md#href)
* [listeners](ilinkdata.md#listeners)
* [text](ilinkdata.md#text)

## Properties

###  healthy

• **healthy**: *boolean*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:34](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/0eaacd5/src/metrics/metric-items/internal-links/internal-links.interface.ts#L34)*

Is true when link is deemed healthy. A link a healthy when:
1. Has a value for href attribute AND has no event listenders attached AND the href value is not a hash based value AND href is not javascript code
2. All of the above but link has event listenders attached

Everything else is deemed as not healthy

___

###  href

• **href**: *string | null*

*Inherited from [IRawLinkData](irawlinkdata.md).[href](irawlinkdata.md#href)*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/0eaacd5/src/metrics/metric-items/internal-links/internal-links.interface.ts#L7)*

value of the href attribute of an HTMLAnchorElement as it is inside the page and not parsed

___

###  listeners

• **listeners**: *CDP.DOMDebugger.EventListener[]*

*Inherited from [IRawLinkData](irawlinkdata.md).[listeners](irawlinkdata.md#listeners)*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:15](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/0eaacd5/src/metrics/metric-items/internal-links/internal-links.interface.ts#L15)*

Collection of event listeners attached to this anchor element.
Extracted using `DOMDebugger.getEventListeners`from devtools-protocol

**`see`** https://chromedevtools.github.io/devtools-protocol/tot/DOMDebugger#type-EventListener

This function is also exposed in Chrome when you open the developer toolbar as `window.getEventListeners`

___

###  text

• **text**: *string | null*

*Inherited from [IRawLinkData](irawlinkdata.md).[text](irawlinkdata.md#text)*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/0eaacd5/src/metrics/metric-items/internal-links/internal-links.interface.ts#L20)*

Combined text contents from the elements inside this anchor

**`interface`** CDP.DOMDebugger.EventListener
