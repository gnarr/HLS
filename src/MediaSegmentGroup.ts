import ExtXKey, { EncryptionMethod } from "./ExtXKey";
import MediaSegment from "./MediaSegment";

export default class MediaSegmentGroup {
  private extXKey!: ExtXKey;
  private segmentList!: MediaSegment[];
  public constructor(
    version: number,
    extXKey: {
      method: EncryptionMethod;
      uri?: string;
      iv?: string;
      keyformat?: string;
      keyformatversions?: number[];
    },
    segmentList: MediaSegment[]
  ) {
    this.extXKey = new ExtXKey(
      version,
      extXKey.method,
      extXKey.uri,
      extXKey.iv,
      extXKey.keyformat,
      extXKey.keyformatversions
    );
    this.segmentList = segmentList;
  }

  public toString() {
    const group: string[] = [];
    group.push(`${this.extXKey}`);
    for (const segment of this.segmentList) {
      group.push(`${segment}`);
    }
    return group.join("\n");
  }
}
