import ExtInf from "./ExtInf";
import ExtXByterange from "./ExtXByterange";
import ExtXDiscontinuity from "./ExtXDiscontinuity";

export default class MediaSegment {
  private version!: number;
  private sequence!: number;
  private path!: string;
  private extInf!: ExtInf;
  private extXByterange?: ExtXByterange;
  private extXDiscontinuity!: ExtXDiscontinuity;

  public constructor(
    version: number,
    sequence: number,
    path: string,
    extInf: {
      duration: number;
      title?: string;
    },
    discontinuity: boolean,
    extXByterange?: {
      length: number;
      offset?: number;
    }
  ) {
    this.version = version;
    this.sequence = sequence;
    this.path = path;
    this.extInf = new ExtInf(version, extInf.duration, extInf.title);
    if (extXByterange) {
      this.extXByterange = new ExtXByterange(
        version,
        extXByterange.length,
        extXByterange.offset
      );
    }
    this.extXDiscontinuity = new ExtXDiscontinuity(discontinuity);
  }

  public toString() {
    const tags: Array<string | undefined> = [];
    if (this.extXByterange) {
      tags.push(`${this.extXByterange}`);
    }
    tags.push(`${this.extXDiscontinuity}`);
    tags.push(`${this.extInf}`);
    tags.push(this.path);
    return tags.filter(tag => tag).join("\n");
  }
}
