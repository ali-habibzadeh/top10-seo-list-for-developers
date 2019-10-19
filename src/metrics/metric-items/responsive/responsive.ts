import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class IsResponsive extends BaseMetric {
  private selector = `meta[name="viewport"][content*="width=device-width`;
  private pageFunction = () => document.querySelector(this.selector) !== undefined;

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Returns true if the page has a meta tag with attribute `name=viewport`
   * and it the `content` attribute at least contains `width=device-width`
   *
   * @returns {Object} IMetricValue
   * @property {string} `name` - The name of this metric
   * @property {boolean} `value` - The value of this metric
   *
   */
  public async getMetricValue(): Promise<IMetricValue<boolean>> {
    return {
      name: IsResponsive.name,
      value: await this.page.evaluate(this.pageFunction)
    };
  }
}
