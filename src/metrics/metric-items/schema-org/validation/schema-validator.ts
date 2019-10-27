import { Project } from "ts-morph";
import { IAutoExtractorParseResponse } from "web-auto-extractor";

import { ISchemaValidatorResponse } from "./schema-validator-response.interface";

export class SchemaValidator {
  private project = new Project();
  private microdata = Object.values(this.schemaData.microdata).flat();
  private jsonLds = Object.values(this.schemaData.jsonld).flat();

  constructor(private schemaData: IAutoExtractorParseResponse) {
    this.setTestFile();
  }

  public getDiagnostics(): ISchemaValidatorResponse[] {
    const diagnostics = this.project.getPreEmitDiagnostics();
    return diagnostics.map(diagnostic => {
      const { messageText, relatedInformation } = diagnostic.compilerObject;
      return {
        messageText,
        relatedInformation: relatedInformation!.map(info => info.messageText)
      };
    });
  }

  private setTestFile(): any {
    this.project.addExistingSourceFile("node_modules/schema-dts/schema.d.ts");
    this.project.createSourceFile(
      "test-program.ts",
      `import * as schema from "schema-dts";
      ${this.getTestConstants()}`
    );
  }

  private getTestConstants(): string {
    const schemas = [...this.microdata, ...this.jsonLds];
    return schemas
      .map((schema, index) => {
        const constName = `const_${index}`;
        const constType = `schema.WithContext<schema.${schema["@type"]}>`;
        const object = JSON.stringify(schema);
        return `const ${constName}: ${constType} = ${object};`;
      })
      .join("\n");
  }
}
