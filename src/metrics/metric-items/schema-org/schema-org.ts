import { Page, Response } from "puppeteer";
import WAE from "web-auto-extractor";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { ISchemaResponse } from "./schema-response.interface";
import { SchemaValidator } from "./validation/schema-validator";

export class SchemaOrg extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<ISchemaResponse>> {
    const content = await this.page.content();
    const extractions = WAE().parse(content);
    const diagnostics = new SchemaValidator(extractions).getDiagnostics();
    return {
      name: SchemaOrg.name,
      value: { extractions, diagnostics }
    };
  }
}
