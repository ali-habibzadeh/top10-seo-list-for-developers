import { Page, Response } from "puppeteer";
import { IMiccroDataScope } from "src/metrics/metric-items/schema-org/extraction/microdata-scope.interface";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { SchemaExtractor } from "./extraction/schema-extractor";

export class SchemaOrg extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Extracts the microdata within the document and returns an array objects for each scope found.
   *
   * @returns {Object} IMetricValue
   * @property {String} `name` - The name of this metric
   * @property {Array.IMiccroDataScope} `value` - The value of this metric
   *
   */
  public async getMetricValue(): Promise<IMetricValue<IMiccroDataScope[]>> {
    const content = await this.page.content();
    const extractor = new SchemaExtractor(content);
    return {
      name: SchemaOrg.name,
      value: extractor.getSchema()
    };
  }
}
