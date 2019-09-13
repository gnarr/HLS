export default class ExtXDiscontinuity {
  private discontinuity?: boolean;
  public constructor(discontinuity?: boolean) {
    this.discontinuity = discontinuity;
  }

  public toString() {
    if (!this.discontinuity) {
      return "";
    }
    return `#EXT-X-DISCONTINUITY`;
  }
}
