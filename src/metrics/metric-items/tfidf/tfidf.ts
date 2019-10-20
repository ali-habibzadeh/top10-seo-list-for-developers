import { camelCase } from "lodash";
import { TfIdf, TfIdfTerm } from "natural";
import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class TfIdfScore extends BaseMetric {
  private tfidf = new TfIdf();
  private pageFunction = () => {
    const selectors = "p, h1, h2, h3, h4, h5, h6";
    const links = [...document.querySelectorAll(selectors)];
    return links.map(node => node.textContent).join("");
  };

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<TfIdfTerm[]>> {
    return {
      name: camelCase(TfIdfScore.name),
      value: await this.getTfIdf()
    };
  }

  private async getTfIdf(): Promise<TfIdfTerm[]> {
    const document = await this.page.evaluate(this.pageFunction);
    this.tfidf.addDocument(document);
    return this.tfidf.listTerms(0).slice(0, 10);
  }
}
