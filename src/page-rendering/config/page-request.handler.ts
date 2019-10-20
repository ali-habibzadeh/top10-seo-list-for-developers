import { Minimatch } from "minimatch";
import { Request } from "puppeteer";

import { adRejections } from "./constants/ad-rejections";
import { analyticsRejections } from "./constants/analytics-rejections";
import { blockedResourceTypes } from "./constants/blocked-resource-types";

export class PageRequestHandler {
  private resourceType = this.request.resourceType();

  constructor(private request: Request) {}

  public async handle(): Promise<void> {
    return this.isBlocked() ? this.request.abort("aborted") : this.request.continue();
  }

  private isBlocked(): boolean {
    const isBlockedType = blockedResourceTypes.includes(this.resourceType);
    const isAdvert = adRejections.some(token => this.globMatchesUrl(token));
    const isAnalytics = analyticsRejections.some(token => this.globMatchesUrl(token));
    return isBlockedType || isAdvert || isAnalytics;
  }

  private globMatchesUrl(glob: string): boolean {
    const url = this.request.url();
    return new Minimatch(glob).match(url);
  }
}
