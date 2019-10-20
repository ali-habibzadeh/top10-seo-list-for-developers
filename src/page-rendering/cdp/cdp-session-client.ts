import * as cheerio from "cheerio";
import CDP from "devtools-protocol/types/protocol";
import { CDPSession, Page } from "puppeteer";

export class CDPSessionClient {
  private client!: CDPSession;
  constructor(private page: Page) {}

  public async getEventListeners(nodeId: number): Promise<CDP.DOMDebugger.EventListener[]> {
    const objectId = await this.resolveNodeObjectId(nodeId);
    const { listeners } = <CDP.DOMDebugger.GetEventListenersResponse>(
      await this.client.send("DOMDebugger.getEventListeners", { objectId })
    );
    return listeners;
  }

  public async querySelectorAll(selector: string): Promise<number[]> {
    const doc = await this.getDocument();
    const { nodeIds } = <CDP.DOM.QuerySelectorAllResponse>(
      await this.client.send("DOM.querySelectorAll", { selector, nodeId: doc.root.nodeId })
    );
    return nodeIds;
  }

  public async getDocument(): Promise<CDP.DOM.GetDocumentResponse> {
    this.client = await this.page.target().createCDPSession();
    return <Promise<CDP.DOM.GetDocumentResponse>>this.client.send("DOM.getDocument");
  }

  public async resolveNodeObjectId(nodeId: number): Promise<string | undefined> {
    const {
      object: { objectId }
    } = <CDP.DOM.ResolveNodeResponse>await this.client.send("DOM.resolveNode", { nodeId });
    return objectId;
  }

  public async getTextContent(nodeId: number): Promise<string> {
    const { outerHTML } = <CDP.DOM.GetOuterHTMLResponse>await this.client.send("DOM.getOuterHTML", { nodeId });
    const $ = cheerio.load(outerHTML);
    const elememt = $("*").first();
    return elememt.text();
  }

  public async getAttribute(nodeId: number, attribute: string): Promise<string | null> {
    const { attributes } = <CDP.DOM.GetAttributesResponse>await this.client.send("DOM.getAttributes", { nodeId });
    const attrIndex = attributes.indexOf(attribute);
    return attrIndex === -1 ? null : attributes[attrIndex + 1];
  }
}
