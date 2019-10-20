export interface IRedirectChainItem {
  /**
   * Contains the url of the requested page
   */
  url: string;
  /**
   * Contains the status code of the response (e.g., 200 for a success).
   */
  status: number;
  /**
   * Whether the page is the final page in the redirection chain or not
   */
  isRedirect: boolean;
}
