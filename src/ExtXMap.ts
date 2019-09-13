export default class ExtXMap {
  private uri!: string;
  private byterange?: string;

  public constructor(uri: string, byterange?: string) {
    this.uri = uri;
    this.byterange = byterange;
  }

  public toString() {
    const attributeList: string[] = [];
    attributeList.push(`"${this.uri}"`);
    if (this.byterange) {
      attributeList.push(`"${this.byterange}"`);
    }
    return `#EXT-X-MAP:${attributeList.join("")}`;
  }
}
