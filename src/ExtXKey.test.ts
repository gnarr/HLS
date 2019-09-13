import ExtXKey from "./ExtXKey";

/*  tslint:disable: max-line-length */

test("ExtXKey NONE", () => {
  const extXKey = new ExtXKey(1, "NONE");
  expect(`${extXKey}`).toBe("#EXT-X-KEY:METHOD=NONE");
});

test("ExtXKey AES-128 and no URI", () => {
  expect(() => {
    const extXKey = new ExtXKey(1, "AES-128");
    extXKey.toString();
  }).toThrowError(new Error("URI is REQUIRED unless the METHOD is NONE."));
});

test("ExtXKey AES-128", () => {
  const extXKey = new ExtXKey(1, "AES-128", "http://www.example.com/key");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key"`);
});

test("ExtXKey AES-128", () => {
  const extXKey = new ExtXKey(5, "AES-128", "http://www.example.com/key");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key"`);
});

test("ExtXKey AES-128 with IV, version < 2", () => {
  const extXKey = new ExtXKey(1, "AES-128", "http://www.example.com/key", "0123456789ABCDEF");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key"`);
});

test("ExtXKey AES-128 with IV, version >= 2", () => {
  const extXKey = new ExtXKey(2, "AES-128", "http://www.example.com/key", "0123456789ABCDEF");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key",IV=0123456789ABCDEF`);
});

test("ExtXKey AES-128 with IV and KEYFORMAT, version < 5", () => {
  const extXKey = new ExtXKey(2, "AES-128", "http://www.example.com/key", "0123456789ABCDEF", "identity");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key",IV=0123456789ABCDEF`);
});

test("ExtXKey AES-128 with IV and KEYFORMAT, version >= 5", () => {
  const extXKey = new ExtXKey(5, "AES-128", "http://www.example.com/key", "0123456789ABCDEF", "identity");
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key",IV=0123456789ABCDEF,KEYFORMAT="identity"`);
});

test("ExtXKey AES-128 with IV, KEYFORMAT and KEYFORMATVERSIONS, version < 5", () => {
  const extXKey = new ExtXKey(2, "AES-128", "http://www.example.com/key", "0123456789ABCDEF", "identity", [1, 2, 5]);
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key",IV=0123456789ABCDEF`);
});

test("ExtXKey AES-128 with IV, KEYFORMAT and KEYFORMATVERSIONS, version >= 5", () => {
  const extXKey = new ExtXKey(5, "AES-128", "http://www.example.com/key", "0123456789ABCDEF", "identity", [1, 2, 5]);
  expect(`${extXKey}`).toBe(`#EXT-X-KEY:METHOD=AES-128,URI="http://www.example.com/key",IV=0123456789ABCDEF,KEYFORMAT="identity",KEYFORMATVERSIONS="1/2/5"`);
});
