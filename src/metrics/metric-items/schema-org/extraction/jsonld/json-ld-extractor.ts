import * as cheerio from "cheerio";
import { IMiccroDataScope } from "metrics/metric-items/schema-org/extraction/microdata-scope.interface";

export class JsonLDExtractor {
  private $ = cheerio.load(this.content, { ignoreWhitespace: true });
  private jsonLDScript = this.$(`script[type="application/ld+json"]`).html();
  private jsonLdData = this.getJsonLDData();
  constructor(private content: string) {}

  public getTypes(): IMiccroDataScope[] {
    return [this.getParentType(), ...this.getChildTypes()];
  }

  private getParentType(): IMiccroDataScope {
    return Object.entries(this.jsonLdData).reduce(
      (obj, [key, value]) => ({
        ...obj,
        ...(typeof value === "string" && { [key]: value })
      }),
      { "@type": "" }
    );
  }

  private getChildTypes(): IMiccroDataScope[] {
    return Object.values(this.jsonLdData)
      .filter(value => typeof value !== "string")
      .flat();
  }

  private getJsonLDData(): Record<string, object | string> {
    try {
      return JSON.parse(this.jsonLDScript || "");
    } catch (e) {
      return {};
    }
  }
}
