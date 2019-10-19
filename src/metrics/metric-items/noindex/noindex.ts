import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class IsNoIndex extends BaseMetric {
  private pageFunction = () => document.querySelector(`meta[content="noindex"]`) !== null;

  constructor(protected page: Page, protected response: Response | null) {
    super(page, response);
  }

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
