import { Page, Response } from "puppeteer";

import { CDPSessionClient } from "../../../page-rendering/cdp/cdp-session-client";
import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { LinkHealthChecker } from "./health-check/link-health-checker";
import { ILinkData, IRawLinkData } from "./internal-links.interface";

export class InternalLinks extends BaseMetric {
  private cdpSession = new CDPSessionClient(this.page);

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<ILinkData[]>> {
    return {
      value: await this.getAllInternalLinks(),
      name: InternalLinks.name
    };
  }

  private async getAllInternalLinks(): Promise<ILinkData[]> {
    const linksData = await this.getAllLinksData();
    return linksData.filter(linkData => !this.isExternalLink(linkData.href));
  }

  private async getAllLinksData(): Promise<ILinkData[]> {
    const nodeIds = await this.cdpSession.querySelectorAll("a");
    return Promise.all(nodeIds.map(async nodeId => this.getLinkData(nodeId)));
  }

  private async getLinkData(nodeId: number): Promise<ILinkData> {
    const rawLinkData: IRawLinkData = {
      href: await this.cdpSession.getAttribute(nodeId, "href"),
      listeners: await this.cdpSession.getEventListeners(nodeId),
      text: await this.cdpSession.getTextContent(nodeId)
    };
    const healthy = new LinkHealthChecker(rawLinkData).isHealthy();
    return { ...rawLinkData, healthy };
  }

  private isExternalLink(href: string | null): boolean {
    const pageUrl = this.page.url();
    try {
      return new URL(href || "").hostname !== new URL(pageUrl).hostname;
    } catch (e) {
      return false;
    }
  }
}
