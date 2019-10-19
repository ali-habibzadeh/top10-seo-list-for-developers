import fetch from "node-fetch";
import { Page, Response } from "puppeteer";
import parser, { Robots } from "robots-parser";

import { BaseMetric } from "../../base-types/base-metric";
import { IMetricValue } from "../../base-types/metric.interface";
import { IAllowedInRobotsTxt } from "./allowed-robots-txt.interface";

export class AllowedInRobotsTxt extends BaseMetric {
  private pageUrl = this.page.url();
  constructor(protected page: Page, response: Response | null) {
    super(page, response);
  }

  public async getMetricValue(): Promise<IMetricValue<IAllowedInRobotsTxt>> {
    const parser = await this.getRobotsParser();
    return {
      name: AllowedInRobotsTxt.name,
      value: {
        isAllowed: parser.isAllowed(this.pageUrl),
        matchedAtLine: parser.getMatchingLineNumber(this.pageUrl)
      }
    };
  }

  private async getRobotsParser(): Promise<Robots> {
    const robotsTxt = await this.getRobotsTxt();
    return parser(this.page.url(), robotsTxt);
  }

  private async getRobotsTxt(): Promise<string> {
    const origin = new URL(this.pageUrl).origin;
    const res = await fetch(`${origin}/robots.txt`);
    return res.text();
  }
}
