import ExtXVersion from "./ExtXVersion";

test("ExtXMap with URI only", () => {
  const extXVersion = new ExtXVersion(5);
  expect(`${extXVersion}`).toBe("#EXT-X-VERSION:5");
});
