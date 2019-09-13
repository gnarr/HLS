import MediaSegment from "./MediaSegment";

test("segment", () => {
  const segment = new MediaSegment(5,
    0,
    "/path/to/segment.ts",
    { duration: 4, title: "First segment" },
    { byterange: 18, byteoffset: 12 },
    false
  );
  const playlist = `${segment}`;
  expect(playlist).toBe(`#EXT-X-BYTERANGE:18[@12]
#EXTINF:4,[First segment],
/path/to/segment.ts`);
});
