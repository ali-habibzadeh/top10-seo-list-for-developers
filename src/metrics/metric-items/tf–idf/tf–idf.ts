import { camelCase } from "lodash";
import { TfIdf, TfIdfTerm } from "natural";
import { Page, Response } from "puppeteer";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";

export class TfIdfScore extends BaseMetric {
  private tfidf = new TfIdf();
  protected pageFunction = () => {
    const selectors = "p, h1, h2, h3, h4, h5";
    const links = [...document.querySelectorAll(selectors)];
    return links.map(node => node.textContent).join("");
  };

  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  /**
   * Returns list of first 10 key words sorted by their importance.
   *
   * Term Frequency–Inverse Document Frequency (tf-idf) is implemented to determine how important a word (or words) is to a document relative to a corpus.
   * @see https://en.wikipedia.org/wiki/Tf%E2%80%93idf
   *
   *
   * @returns {Object} IMetricValue
   * @property {String} `name` - The name of this metric
   * @property {Array.<TfIdfTerm>} `value` - The value of this metric
   *
   */
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
