export interface IAllowedInRobotsTxt {
  /**
   * Returns true if crawling the specified URL is allowed for the specified user-agent.
   * This will return undefined if the URL isn't valid for this robots.txt.
   */
  isAllowed?: boolean;
  /**
   * Returns the line number of the matching directive for the specified URL and user-agent if any.
   * Line numbers start at 1 and go up (1-based indexing).
   * Returns -1 if there is no matching directive. If a rule is manually added without a lineNumber then this will return undefined for that rule.
   */
  matchedAtLine?: number;
}
