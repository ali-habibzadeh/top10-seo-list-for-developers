import CDP from "devtools-protocol/types/protocol";

export interface IRawLinkData {
  /**
   * value of the href attribute of an HTMLAnchorElement as it is inside the page and not parsed
   */
  href: string | null;
  /**
   * Collection of event listeners attached to this anchor element.
   * Extracted using `DOMDebugger.getEventListeners`from devtools-protocol
   * @see https://chromedevtools.github.io/devtools-protocol/tot/DOMDebugger#type-EventListener
   *
   * This function is also exposed in Chrome when you open the developer toolbar as `window.getEventListeners`
   */
  listeners: CDP.DOMDebugger.EventListener[];
  /**
   * Combined text contents from the elements inside this anchor
   * @interface CDP.DOMDebugger.EventListener
   */
  text: string | null;
}

/**
 * Metric value for inernal links
 */
export interface ILinkData extends IRawLinkData {
  /**
   * Is true when link is deemed healthy. A link a healthy when:
   * 1. Has a value for href attribute AND has no event listenders attached AND the href value is not a hash based value AND href is not javascript code
   * 2. All of the above but link has event listenders attached
   *
   * Everything else is deemed as not healthy
   */
  healthy: boolean;
}
