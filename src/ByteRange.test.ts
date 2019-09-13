import ByteRange from "./ByteRange";

test("ByteRange with length only", () => {
  const byteRange = new ByteRange(12);
  expect(`${byteRange}`).toBe("12");
});

test("ByteRange with length and offset", () => {
  const byteRange = new ByteRange(12, 8);
  expect(`${byteRange}`).toBe("12[@8]");
});
