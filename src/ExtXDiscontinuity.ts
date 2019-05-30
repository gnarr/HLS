export default class ExtXDiscontinuity {
  private discontinuity?: boolean;
  public constructor(discontinuity?: boolean) {
    this.discontinuity = discontinuity;
  }

  public print() {
    if (!this.discontinuity) {
      return undefined;
    }
    return `#EXT-X-DISCONTINUITY`;
  }
}