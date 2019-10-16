import * as cheerio from "cheerio";

import { IMiccroDataScope } from "./microdata-scope.interface";
import { valueAttrMappings } from "./prop-value.mappings";
import { schemaAttrs } from "./schema-attrs.enum";

export class SchemaExtractor {
  private attrMappings = valueAttrMappings;
  private $ = cheerio.load(this.content, { ignoreWhitespace: true });
  private scopesList = this.$("[itemscope][itemtype]");

  constructor(private content: string) {}

  /**
   * Extracts the microdata within the document and returns an array objects for each scope found.
   *
   * @returns {Array.IMiccroDataScope} List of schema scopes
   * @property {string} `@type` - The type name for the item scope. e.g. Person
   * @property {[key: string]: string} `...` Key value pairs of the properties and their values within this scope
   *
   */
  public getSchema(): IMiccroDataScope[] {
    const schemas = this.scopesList.map((_i, scope) => ({
      "@type": this.getSchemaTypeName(scope),
      ...this.getPropValuesFromList(this.getScopePropertiesList(scope))
    }));
    return <IMiccroDataScope[]>(<unknown>schemas.toArray());
  }

  private getScopePropertiesList(scope: CheerioElement): CheerioElement[] {
    const propsSelector = "[itemprop]:not(:scope [itemscope] [itemprop]):not([itemscope])";
    return Array.from(this.$(scope).find(propsSelector));
  }

  private getSchemaTypeName(scope: CheerioElement): string {
    const namespace = this.$(scope).attr(schemaAttrs.type);
    return namespace.replace(new RegExp("https?://schema.org/"), "");
  }

  private getPropValuesFromList(propsList: CheerioElement[]): {} {
    return propsList.reduce(
      (obj, prop) => ({
        ...obj,
        [prop.attribs[schemaAttrs.prop]]: this.getPropValue(prop)
      }),
      {}
    );
  }

  private getPropValue(prop: CheerioElement): string {
    const valueAttr = this.attrMappings.find(mapping => mapping.tags.includes(prop.name));
    return valueAttr ? this.$(prop).attr(valueAttr.attr) : this.$(prop).text();
  }
}
