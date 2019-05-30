export default class ExtXByterange {
  private byterange?: number;
  private byteoffset?: number;

  public constructor(byterange?: number, byteoffset?: number) {
    this.byterange = byterange;
    this.byteoffset = byteoffset;
  }

  public print(version: number) {
    if (version < 4 || !this.byterange) {
      return undefined;
    }
    const tags: string[] = [];
    tags.push(`${this.byterange}`);
    if (this.byteoffset) {
      tags.push(`[@${this.byteoffset}]`);
    }
    return `#EXT-X-BYTERANGE:${tags.join("")}`;
  }
}
