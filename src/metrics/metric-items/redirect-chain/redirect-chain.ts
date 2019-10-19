import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { IRedirectChainItem } from "./redirect-chain.interface";

export class RedirectChain extends BaseMetric {
  private redirects = this.response!.request().redirectChain();

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<IRedirectChainItem[]>> {
    return {
      name: RedirectChain.name,
      value: this.getRedirectChain()
    };
  }

  private getRedirectChain(): IRedirectChainItem[] {
    const chain = this.redirects.map(request => ({
      url: request.url(),
      status: request.response()!.status(),
      isRedirect: true
    }));
    return [...chain, { url: this.page.url(), status: this.response!.status(), isRedirect: false }];
  }
}
