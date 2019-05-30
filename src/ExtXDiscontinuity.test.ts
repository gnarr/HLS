import ExtXDiscontinuity from "./ExtXDiscontinuity";

test("ExtXDiscontinuity false", () => {
  const extXDiscontinuity = new ExtXDiscontinuity(false);
  expect(extXDiscontinuity.print()).toBe(undefined);
});

test("ExtXDiscontinuity true", () => {
  const extXDiscontinuity = new ExtXDiscontinuity(true);
  expect(extXDiscontinuity.print()).toBe("#EXT-X-DISCONTINUITY");
});
