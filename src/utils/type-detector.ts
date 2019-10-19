export class TypeDetector {
  constructor(private value: string) {}

  private isNumber(): boolean {
    return this.value === "" ? false : typeof Number(this.value) === "number";
  }

  private isBoolean(): boolean {
    const booleans = ["http://schema.org/true", "http://schema.org/false"];
    return booleans.includes(this.value.toLowerCase());
  }
}
