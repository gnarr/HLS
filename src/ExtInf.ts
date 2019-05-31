export default class ExtInf {
  private duration!: number;
  private title?: string;

  public constructor(duration: number, title?: string) {
    this.duration = duration;
    this.title = title;
  }

  public print(version: number) {
    const tags: string[] = [];
    tags.push(`${version < 3 ? Math.round(this.duration) : this.duration}`);
    if (this.title) {
      tags.push(`[${this.title}]`);
    }
    return `#EXTINF:${tags.join(",")},`;
  }
}