import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { JsonLDExtractor } from "./extraction/jsonld/json-ld-extractor";
import { IMiccroDataScope } from "./extraction/microdata-scope.interface";
import { MicrodataExtractor } from "./extraction/microdata/microdata-extractor";

export class SchemaOrg extends BaseMetric {
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<IMiccroDataScope[]>> {
    const content = await this.page.content();
    const microdata = new MicrodataExtractor(content).getMicrodata();
    const jsonLd = new JsonLDExtractor(content).getTypes();
    console.log(jsonLd);

    return {
      name: SchemaOrg.name,
      value: [...microdata, ...jsonLd]
    };
  }
}
