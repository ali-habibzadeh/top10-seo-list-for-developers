export interface IMetricValue<T> {
  /**
   * Name of the metric
   */
  name: string;
  /**
   * Value of the metric
   */
  value: T;
}

export interface IMetric<T> extends IMetricValue<T> {
  /**
   * Name of the data type of this metric
   */
  type: string;
  /**
   * Whether the value is an array or not
   */
  isArray?: boolean;
}
