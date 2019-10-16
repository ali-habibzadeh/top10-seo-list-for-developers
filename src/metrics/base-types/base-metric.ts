import { camelCase, isArray } from "lodash";
import * as puppeteer from "puppeteer";

import { IMetric, IMetricValue } from "./metric.interface";

export abstract class BaseMetric {
  constructor(protected page: puppeteer.Page, protected response: puppeteer.Response | null) {}

  public async getMetric(): Promise<IMetric<any>> {
    const { name, value } = await this.getMetricValue();
    const dataType = this.getDataType(value);
    return {
      value,
      type: dataType.name,
      name: camelCase(name),
      isArray: dataType.isArray
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
