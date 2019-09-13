import ByteRange from "./ByteRange";

export default class ExtXByterange {
  private version!: number;
  private byteRange!: ByteRange;

  public constructor(version: number, length: number, offset?: number) {
    this.version = version;
    this.byteRange = new ByteRange(length, offset);
  }

  public toString() {
    if (this.version < 4 || !this.byteRange) {
      return "";
    }
    return `#EXT-X-BYTERANGE:${this.byteRange}`;
  }
}
