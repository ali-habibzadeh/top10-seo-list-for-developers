import { URL } from "url";

export function isValidUrl(url: string): boolean {
  try {
    return new URL(url) !== undefined;
  } catch (e) {
    return false;
  }
}
