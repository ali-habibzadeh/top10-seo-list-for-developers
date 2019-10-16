import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class IsNoIndex extends BaseMetric {
  protected pageFunction = () => document.querySelector(`meta[content="noindex"]`) !== null;

  constructor(protected page: Page, protected response: Response | null) {
    super(page, response);
  }

  /**
   * Returns `true` when either page has a meta tag with `content` attribute being `noindex`
   * OR if page response headers contained `X-Robots-Tag` with value `noindex`
   *
   * @returns {Object} IMetricValue
   * @property {string} `name` - The name of this metric
   * @property {boolean} `value` - The value of this metric
   *
   */
  public async getMetricValue(): Promise<IMetricValue<boolean>> {
    return {
      name: IsNoIndex.name,
      value: (await this.hasMetaNoIndex()) || this.hasNoIndexHeahder()
    };
  }

  private async hasMetaNoIndex(): Promise<boolean> {
    return this.page.evaluate(this.pageFunction);
  }

  private hasNoIndexHeahder(): boolean {
    return this.response!.headers()["X-Robots-Tag"] === "noindex";
  }
}
