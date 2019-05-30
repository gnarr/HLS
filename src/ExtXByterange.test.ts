import ExtXByterange from "./ExtXByterange";

test("ExtXByterange without byteoffset, version < 4", () => {
  const extXByterange = new ExtXByterange(20);
  expect(extXByterange.print(1)).toBe(undefined);
});

test("ExtXByterange without byteoffset, version >= 4", () => {
  const extXByterange = new ExtXByterange(20);
  expect(extXByterange.print(5)).toBe("#EXT-X-BYTERANGE:20");
});

test("ExtXByterange with byteoffset, version < 4", () => {
  const extXByterange = new ExtXByterange(20, 18);
  expect(extXByterange.print(1)).toBe(undefined);
});

test("ExtXByterange with byteoffset, version >= 4", () => {
  const extXByterange = new ExtXByterange(20, 18);
  expect(extXByterange.print(5)).toBe("#EXT-X-BYTERANGE:20[@18]");
});
