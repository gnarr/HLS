import ByteRange from './ByteRange';

export default class ExtXMap {
  private uri!: string;
  private byterange?: ByteRange;

  public constructor(uri: string, byterange?: { length: number, offset?: number }) {
    this.uri = uri;
    if (byterange) {
      this.byterange = new ByteRange(byterange.length, byterange.offset);
    }
  }

  public toString() {
    const attributeList: string[] = [];
    attributeList.push(`URI="${this.uri}"`);
    if (this.byterange) {
      attributeList.push(`BYTERANGE="${this.byterange}"`);
    }
    return `#EXT-X-MAP:${attributeList.join(",")}`;
  }
}
