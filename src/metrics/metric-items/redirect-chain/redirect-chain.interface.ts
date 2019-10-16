export interface IRedirectChainItem {
  /**
   * Contains the url of the request made
   */
  url: string;
  /**
   * Status code of the request
   */
  status: number;
  /**
   * Whether the page is the final page in the redirection chain or not
   */
  isRedirect: boolean;
}
