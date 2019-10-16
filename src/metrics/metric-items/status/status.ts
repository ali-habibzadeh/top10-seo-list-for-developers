import { camelCase } from "lodash";
import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class ResponseStatus extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Contains the status code of the response (e.g., 200 for a success).
   *
   * @returns {Object} List of schema scopes found
   * @property {String} `name` - The name of this metric
   * @property {Number} `value` - Contains the status code of the response (e.g., 200 for a success).
   *
   */
  public async getMetricValue(): Promise<IMetricValue<number>> {
    return {
      name: camelCase(ResponseStatus.name),
      value: this.response!.status()
    };
  }
}
