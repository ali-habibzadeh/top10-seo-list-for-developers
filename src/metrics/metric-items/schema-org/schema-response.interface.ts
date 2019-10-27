import { IAutoExtractorParseResponse } from "web-auto-extractor";

import { ISchemaValidatorResponse } from "./validation/schema-validator-response.interface";

export interface ISchemaResponse {
  extractions: IAutoExtractorParseResponse;
  diagnostics: ISchemaValidatorResponse[];
}
