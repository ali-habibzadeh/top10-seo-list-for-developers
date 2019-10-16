[top10-seo-list-for-developer](../README.md) › [IRawLinkData](irawlinkdata.md)

# Interface: IRawLinkData

## Hierarchy

* **IRawLinkData**

  ↳ [ILinkData](ilinkdata.md)

## Index

### Properties

* [href](irawlinkdata.md#href)
* [listeners](irawlinkdata.md#listeners)
* [text](irawlinkdata.md#text)

## Properties

###  href

• **href**: *string | null*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:7](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/internal-links/internal-links.interface.ts#L7)*

value of the href attribute of an HTMLAnchorElement as it is inside the page and not parsed

___

###  listeners

• **listeners**: *CDP.DOMDebugger.EventListener[]*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:15](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/internal-links/internal-links.interface.ts#L15)*

Collection of event listeners attached to this anchor element.
Extracted using `DOMDebugger.getEventListeners`from devtools-protocol

**`see`** https://chromedevtools.github.io/devtools-protocol/tot/DOMDebugger#type-EventListener

This function is also exposed in Chrome when you open the developer toolbar as `window.getEventListeners`

___

###  text

• **text**: *string | null*

*Defined in [metrics/metric-items/internal-links/internal-links.interface.ts:20](https://github.com/deepcrawl/top10-seo-list-for-developer/blob/9aaba96/src/metrics/metric-items/internal-links/internal-links.interface.ts#L20)*

Combined text contents from the elements inside this anchor

**`interface`** CDP.DOMDebugger.EventListener
