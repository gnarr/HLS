export default class ByteRange {
  private length!: number;
  private offset?: number;
  public constructor(length: number, offset?: number) {
    this.length = length;
    this.offset = offset;
  }

  public toString() {
    if (this.offset) {
      return `${this.length}[@${this.offset}]`;
    } else {
      return `${this.length}`;
    }
  }
}
