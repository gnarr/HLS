import MediaSegment from "./MediaSegment";

test("segment", () => {
  const segment = new MediaSegment(5,
    0,
    "/path/to/segment.ts",
    { duration: 4, title: "First segment" },
    false,
    { length: 18, offset: 12 }
  );
  const playlist = `${segment}`;
  expect(playlist).toBe(`#EXT-X-BYTERANGE:18[@12]
#EXTINF:4,[First segment],
/path/to/segment.ts`);
});
