import ExtInf from "./ExtInf";
import ExtXByterange from "./ExtXByterange";
import ExtXDiscontinuity from "./ExtXDiscontinuity";
import ExtXKey, { EncryptionMethod } from "./ExtXKey";

export default class MediaSegment {
  private version!: number;
  private sequence!: number;
  private path!: string;
  private extInf!: ExtInf;
  private extXByterange!: ExtXByterange;
  private extXDiscontinuity!: ExtXDiscontinuity;

  public constructor(
    version: number,
    sequence: number,
    path: string,
    extInf: {
      duration: number;
      title?: string;
    },
    extXByterange: {
      byterange?: number;
      byteoffset?: number;
    },
    discontinuity: boolean
  ) {
    this.version = version;
    this.sequence = sequence;
    this.path = path;
    this.extInf = new ExtInf(version, extInf.duration, extInf.title);
    this.extXByterange = new ExtXByterange(
      version,
      extXByterange.byterange,
      extXByterange.byteoffset
    );
    this.extXDiscontinuity = new ExtXDiscontinuity(discontinuity);
  }

  public toString() {
    const tags: Array<string | undefined> = [];
    tags.push(`${this.extXByterange}`);
    tags.push(`${this.extXDiscontinuity}`);
    tags.push(`${this.extInf}`);
    tags.push(this.path);
    return tags.filter(tag => tag).join("\n");
  }
}
