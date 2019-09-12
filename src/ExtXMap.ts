export default class ExtXMap {
  /**
   * URI
   *
   * The value is a quoted-string containing a URI that identifies a
   * resource that contains the Media Initialization Section.  This
   * attribute is REQUIRED.
   */
  private uri: string;
  public constructor(uri: string) {
    this.uri = uri;
  }

  public print() {
    if (!this.uri) {
      return undefined;
    }
    return `#EXT-X-MAP:`;
  }
}
