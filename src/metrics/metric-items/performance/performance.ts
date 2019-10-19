import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class PerformanceMetrics extends BaseMetric {
  private pageFunction = () => {
    const perf = performance.getEntries().filter(entry => entry.entryType === "paint");
    return JSON.stringify(perf);
  };

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Returns the list of paint performance entries.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
   *
   * @returns {Object} IMetricValue
   * @property {String} `name` - The name of this metric
   * @property {Array.<PerformanceEntry>} `value` - The value of this metric
   *
   */
  public async getMetricValue(): Promise<IMetricValue<PerformanceEntry[]>> {
    return {
      name: PerformanceMetrics.name,
      value: JSON.parse(await this.page.evaluate(this.pageFunction))
    };
  }
}
