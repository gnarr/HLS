export default class ExtXProgramDateTime {
  private dateTime!: Date;

  public constructor(dateTime: Date) {
    this.dateTime = dateTime;
  }

  public toString() {
    return `#EXT-X-PROGRAM-DATE-TIME:${this.dateTime.toISOString()}`;
  }
}
