declare module "web-auto-extractor" {
  interface ICheerioOptionsInterface {
    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
    ignoreWhitespace?: boolean;
  }
  export interface ISchemaContext {
    [key: string]: any;
    "@context": string;
    "@type": string;
  }
  export interface IAutoExtractorParseResponse {
    metatags: Record<string, string[]>;
    microdata: Record<string, ISchemaContext[]>;
    rdfa: Record<string, ISchemaContext[]>;
    jsonld: Record<string, ISchemaContext[]>;
  }
  export default () => {
    return { parse };
  };
  function parse(html: string, options?: ICheerioOptionsInterface): IAutoExtractorParseResponse;
}
