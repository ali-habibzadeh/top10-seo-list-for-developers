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

  public async getMetricValue(): Promise<IMetricValue<PerformanceEntry[]>> {
    return {
      name: PerformanceMetrics.name,
      value: JSON.parse(await this.page.evaluate(this.pageFunction))
    };
  }
}
