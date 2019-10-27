import * as ts from "typescript";

export interface ISchemaValidatorResponse {
  messageText: string | ts.DiagnosticMessageChain;
  relatedInformation: (string | ts.DiagnosticMessageChain)[];
}
