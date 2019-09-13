import MediaSegment from "./MediaSegment";
import MediaSegmentGroup from "./MediaSegmentGroup";

/* tslint:disable: max-line-length */

test("segment", () => {
  const segments: MediaSegment[] = [];
  for (let i = 0; i < 10; i++) {
    segments.push(
      new MediaSegment(5,
        i,
        `/path/to/segment${i}.ts`,
        { duration: 4, title: `segment ${i}` },
        false
      )
    );
  }
  const segmentGroup = new MediaSegmentGroup(5,
    {
      method: "SAMPLE-AES",
      uri: "http://www.mbl.is/key",
      iv: "IVIVI",
      keyformat: "identity",
      keyformatversions: [1, 3, 5]
    },
    segments
  );

  const playlist = `${segmentGroup}`;
  expect(playlist).toBe(`#EXT-X-KEY:METHOD=SAMPLE-AES,URI="http://www.mbl.is/key",IV=IVIVI,KEYFORMAT="identity",KEYFORMATVERSIONS="1/3/5"
#EXTINF:4,[segment 0],
/path/to/segment0.ts
#EXTINF:4,[segment 1],
/path/to/segment1.ts
#EXTINF:4,[segment 2],
/path/to/segment2.ts
#EXTINF:4,[segment 3],
/path/to/segment3.ts
#EXTINF:4,[segment 4],
/path/to/segment4.ts
#EXTINF:4,[segment 5],
/path/to/segment5.ts
#EXTINF:4,[segment 6],
/path/to/segment6.ts
#EXTINF:4,[segment 7],
/path/to/segment7.ts
#EXTINF:4,[segment 8],
/path/to/segment8.ts
#EXTINF:4,[segment 9],
/path/to/segment9.ts`);
});

test("segment", () => {
  const segments: MediaSegment[] = [];
  for (let i = 0; i < 10; i++) {
    segments.push(
      new MediaSegment(5,
        i,
        `/path/to/segment.ts`,
        { duration: 4, title: `segment` },
        false,
        { length: 18, offset: 18 * i }
      )
    );
  }
  const segmentGroup = new MediaSegmentGroup(5,
    {
      method: "SAMPLE-AES",
      uri: "http://www.mbl.is/key",
      iv: "IVIVI",
      keyformat: "identity",
      keyformatversions: [1, 3, 5]
    },
    segments
  );

  const playlist = `${segmentGroup}`;
  expect(playlist).toBe(`#EXT-X-KEY:METHOD=SAMPLE-AES,URI="http://www.mbl.is/key",IV=IVIVI,KEYFORMAT="identity",KEYFORMATVERSIONS="1/3/5"
#EXT-X-BYTERANGE:18
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@18]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@36]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@54]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@72]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@90]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@108]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@126]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@144]
#EXTINF:4,[segment],
/path/to/segment.ts
#EXT-X-BYTERANGE:18[@162]
#EXTINF:4,[segment],
/path/to/segment.ts`);
});
