import { InternalLinks } from "./metric-items/internal-links/internal-links";
import { IsNoIndex } from "./metric-items/noindex/noindex";
import { PerformanceMetrics } from "./metric-items/performance/performance";
import { RedirectChain } from "./metric-items/redirect-chain/redirect-chain";
import { IsResponsive } from "./metric-items/responsive/responsive";
import { AllowedInRobotsTxt } from "./metric-items/robots/allowed-robots-txt";
import { SchemaOrg } from "./metric-items/schema-org/schema-org";
import { ResponseStatus } from "./metric-items/status/status";
import { TfIdfScore } from "./metric-items/tfidf/tfidf";

export const metricsList = [
  IsResponsive,
  IsNoIndex,
  InternalLinks,
  PerformanceMetrics,
  TfIdfScore,
  ResponseStatus,
  SchemaOrg,
  RedirectChain,
  AllowedInRobotsTxt
];
