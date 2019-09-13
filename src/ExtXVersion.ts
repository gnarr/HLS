export default class ExtXVersion {
  private version!: number;

  public constructor(version: number) {
    this.version = version;
  }

  public toString() {
    return `#EXT-X-VERSION:${this.version}`;
  }
}
