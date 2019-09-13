export default class ExtXByterange {
  private version!: number;
  private byterange?: number;
  private byteoffset?: number;

  public constructor(version: number, byterange?: number, byteoffset?: number) {
    this.version = version;
    this.byterange = byterange;
    this.byteoffset = byteoffset;
  }

  public toString() {
    if (this.version < 4 || !this.byterange) {
      return "";
    }
    const tags: string[] = [];
    tags.push(`${this.byterange}`);
    if (this.byteoffset) {
      tags.push(`[@${this.byteoffset}]`);
    }
    return `#EXT-X-BYTERANGE:${tags.join("")}`;
  }
}
