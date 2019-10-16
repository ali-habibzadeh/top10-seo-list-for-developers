declare module "robots-parser" {
  class Robots {
    constructor(url?: string, contents?: string) {}
    public isAllowed(url: string, ua?: string): boolean | undefined;
    public isDisallowed(url: string, ua?: string): boolean | undefined;
    public getMatchingLineNumber(url: string, ua?: string): number | undefined;
  }
  export default function(url: string, contents: string) {
    return new Robots(url, contents);
  }
}
