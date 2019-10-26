declare module "web-auto-extractor" {
  interface CheerioOptionsInterface {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
    // DomHandler https://github.com/fb55/DomHandler

    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
    ignoreWhitespace?: boolean;
  }
  export interface IAutoExtractorParseResponse {
    metatags: {};
    microdata: {};
    rdfa: {};
    jsonld: {};
  }
  export default () => {
    return { parse };
  };
  function parse(html: string, options?: CheerioOptionsInterface): IAutoExtractorParseResponse;
}
