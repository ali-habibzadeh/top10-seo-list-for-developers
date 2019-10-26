import { Page, Response } from "puppeteer";
import WAE, { IAutoExtractorParseResponse } from "web-auto-extractor";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class SchemaOrg extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<IAutoExtractorParseResponse>> {
    const content = await this.page.content();
    return {
      name: SchemaOrg.name,
      value: WAE().parse(content)
    };
  }
}
