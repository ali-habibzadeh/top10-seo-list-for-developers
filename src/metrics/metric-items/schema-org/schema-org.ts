import { Page, Response } from "puppeteer";
import { IMiccroDataScope } from "src/metrics/metric-items/schema-org/extraction/microdata/microdata-scope.interface";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { MicrodataExtractor } from "./extraction/microdata/microdata-extractor";

export class SchemaOrg extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<IMiccroDataScope[]>> {
    const content = await this.page.content();
    const extractor = new MicrodataExtractor(content);
    return {
      name: SchemaOrg.name,
      value: extractor.getMicrodata()
    };
  }
}
