import ExtXByterange from "./ExtXByterange";

test("ExtXByterange without byteoffset, version < 4", () => {
  const extXByterange = new ExtXByterange(1, 20);
  expect(`${extXByterange}`).toBe("");
});

test("ExtXByterange without byteoffset, version >= 4", () => {
  const extXByterange = new ExtXByterange(5, 20);
  expect(`${extXByterange}`).toBe("#EXT-X-BYTERANGE:20");
});

test("ExtXByterange with byteoffset, version < 4", () => {
  const extXByterange = new ExtXByterange(1, 20, 18);
  expect(`${extXByterange}`).toBe("");
});

test("ExtXByterange with byteoffset, version >= 4", () => {
  const extXByterange = new ExtXByterange(5, 20, 18);
  expect(`${extXByterange}`).toBe("#EXT-X-BYTERANGE:20[@18]");
});
