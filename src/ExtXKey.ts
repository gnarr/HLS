export type EncryptionMethod = "NONE" | "AES-128" | "SAMPLE-AES";

export default class ExtXKey {
  private method!: EncryptionMethod;
  private uri?: string;
  private iv?: string;
  private keyformat?: string;
  private keyformatversions?: number[];

  public constructor(
    method: EncryptionMethod,
    uri?: string,
    iv?: string,
    keyformat?: string,
    keyformatversions?: number[]
  ) {
    if (method !== "NONE" && uri === undefined) {
      throw new Error("URI is REQUIRED unless the METHOD is NONE.");
    }
    this.method = method;
    this.uri = uri;
    this.iv = iv;
    this.keyformat = keyformat;
    this.keyformatversions = keyformatversions;
  }

  public print(version: number) {
    const attributes: string[] = [];
    attributes.push(`METHOD=${this.method}`);
    if (this.method !== "NONE") {
      attributes.push(`URI="${this.uri}"`);
      if (version >= 2) {
        if (this.iv) {
          attributes.push(`IV=${this.iv}`);
        }
      }
      if (version >= 5) {
        if (this.keyformat) {
          attributes.push(`KEYFORMAT="${this.keyformat}"`);
        }
        if (this.keyformatversions) {
          attributes.push(
            `KEYFORMATVERSIONS="${this.keyformatversions.join("/")}"`
          );
        }
      }
    }
    return `#EXT-X-KEY:${attributes.join(",")}`;
  }
}
