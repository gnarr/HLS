import ExtXDiscontinuity from "./ExtXDiscontinuity";

test("ExtXDiscontinuity false", () => {
  const extXDiscontinuity = new ExtXDiscontinuity(false);
  expect(`${extXDiscontinuity}`).toBe("");
});

test("ExtXDiscontinuity true", () => {
  const extXDiscontinuity = new ExtXDiscontinuity(true);
  expect(`${extXDiscontinuity}`).toBe("#EXT-X-DISCONTINUITY");
});
