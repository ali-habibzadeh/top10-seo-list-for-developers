import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { IRedirectChainItem } from "./redirect-chain.interface";

export class RedirectChain extends BaseMetric {
  private redirects = this.response!.request().redirectChain();

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Returns the list of redirects that has happened until the final page is reached.
   * There is always at least 1 item returned if no redirections take place.
   *
   * @returns {Object} IMetricValue
   * @property {String} `name` - The name of this metric
   * @property {Array.<IRedirectChainItem[]>} `value` - The value of this metric
   *
   */
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
