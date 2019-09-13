import ExtXMap from "./ExtXMap";

test("ExtXMap with URI only", () => {
  const extXMap = new ExtXMap("http://www.example.com");
  expect(`${extXMap}`).toBe('#EXT-X-MAP:URI="http://www.example.com"');
});

test("ExtXMap with URI and a byte-range with only length", () => {
  const extXMap = new ExtXMap("http://www.example.com", { length: 12 });
  expect(`${extXMap}`).toBe(
    '#EXT-X-MAP:URI="http://www.example.com",BYTERANGE="12"'
  );
});

test("ExtXMap with URI and a byte-range with length and offset", () => {
  const extXMap = new ExtXMap("http://www.example.com", {
    length: 12,
    offset: 8
  });
  expect(`${extXMap}`).toBe(
    '#EXT-X-MAP:URI="http://www.example.com",BYTERANGE="12[@8]"'
  );
});
