export interface IMiccroDataScope {
  /**
   * The type name for the item scope. e.g. Person
   */
  "@type": string;
  /**
   * Key value pairs of properties under this scope
   */
  [key: string]: string;
}
