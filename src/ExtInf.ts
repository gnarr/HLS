export default class ExtInf {
  private version!: number;
  private duration!: number;
  private title?: string;

  public constructor(version: number, duration: number, title?: string) {
    this.version = version;
    this.duration = duration;
    this.title = title;
  }

  public toString() {
    const tags: string[] = [];
    tags.push(`${this.version < 3 ? Math.round(this.duration) : this.duration}`);
    if (this.title) {
      tags.push(`[${this.title}]`);
    }
    return `#EXTINF:${tags.join(",")},`;
  }
}
