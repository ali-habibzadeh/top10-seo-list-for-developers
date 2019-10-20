import { camelCase } from "lodash";
import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class ResponseStatus extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<number>> {
    return {
      name: camelCase(ResponseStatus.name),
      value: this.response!.status()
    };
  }
}
