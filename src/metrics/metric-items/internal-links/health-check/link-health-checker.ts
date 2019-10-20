import { IRawLinkData } from "../internal-links.interface";

export class LinkHealthChecker {
  constructor(private linkData: IRawLinkData) {}

  public isHealthy(): boolean {
    const good = this.hasHref() && !this.hasJsHandler() && !this.hasHashHref() && !this.hrefIsJs();
    const ok = this.hasHref() && this.hasJsHandler() && !this.hasHashHref() && !this.hrefIsJs();
    return good || ok || false;
  }

  private hasHref(): boolean {
    return this.linkData.href !== null;
  }

  private hasJsHandler(): boolean {
    return this.linkData.listeners.length > 0;
  }

  private hasHashHref(): boolean {
    return this.linkData.href!.startsWith("#");
  }

  private hrefIsJs(): boolean {
    return this.linkData.href!.startsWith("javascript:");
  }
}
