import { camelCase, isArray } from "lodash";
import { Page, Response } from "puppeteer";

import { IMetric, IMetricValue } from "./metric.interface";

export abstract class BaseMetric {
  constructor(protected page: Page, protected response: Response | null) {}

  public async getMetric(): Promise<IMetric<any>> {
    const { name, value } = await this.getMetricValue();
    const { name: typeName, isArray } = this.getDataType(value);
    return {
      value,
      isArray,
      type: typeName,
      name: camelCase(name)
    };
  }

  private getDataType(metricValue: any): { name: string; isArray: boolean } {
    const isCollection = isArray(metricValue);
    const singleItem = isCollection ? metricValue[0] : metricValue;
    const toBeDetermined = singleItem ? singleItem : {};
    return {
      isArray: isCollection,
      name: typeof toBeDetermined
    };
  }

  public abstract getMetricValue(): Promise<IMetricValue<any>>;
}
