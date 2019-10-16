import * as cheerio from "cheerio";
import CDP from "devtools-protocol/types/protocol";
import * as puppeteer from "puppeteer";

export class CDPSessionClient {
  private client!: puppeteer.CDPSession;
  constructor(private page: puppeteer.Page) {}

  public async getEventListeners(nodeId: number): Promise<CDP.DOMDebugger.EventListener[]> {
    const objectId = await this.resolveNodeObjectId(nodeId);
    const output = <CDP.DOMDebugger.GetEventListenersResponse>(
      await this.client.send("DOMDebugger.getEventListeners", { objectId })
    );
    return output.listeners;
  }

  public async querySelectorAll(selector: string): Promise<number[]> {
    const dom = await this.getDocument();
    const nodes = <CDP.DOM.QuerySelectorAllResponse>(
      await this.client.send("DOM.querySelectorAll", { selector, nodeId: dom.root.nodeId })
    );
    return nodes.nodeIds;
  }

  public async getDocument(): Promise<CDP.DOM.GetDocumentResponse> {
    this.client = await this.page.target().createCDPSession();
    return <CDP.DOM.GetDocumentResponse>await this.client.send("DOM.getDocument");
  }

  public async resolveNodeObjectId(nodeId: number): Promise<string | undefined> {
    const node = <CDP.DOM.ResolveNodeResponse>await this.client.send("DOM.resolveNode", { nodeId });
    return node.object.objectId;
  }

  public async getTextContent(nodeId: number): Promise<string> {
    const output = <CDP.DOM.GetOuterHTMLResponse>await this.client.send("DOM.getOuterHTML", { nodeId });
    const $ = cheerio.load(output.outerHTML);
    const elememt = $("*").first();
    return elememt.text();
  }

  public async getAttribute(nodeId: number, attribute: string): Promise<string | null> {
    const attributesList = <CDP.DOM.GetAttributesResponse>await this.client.send("DOM.getAttributes", { nodeId });
    const attrs = attributesList.attributes;
    const attrIndex = attrs.indexOf(attribute);
    return attrIndex === -1 ? null : attrs[attrIndex + 1];
  }
}
