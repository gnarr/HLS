import ExtInf from "./ExtInf";

test("ExtInf without title, version < 3", () => {
  const extInf = new ExtInf(4.3);
  expect(extInf.print(1)).toBe("#EXTINF:4,");
});

test("ExtInf without title, version >= 3", () => {
  const extInf = new ExtInf(4.3);
  expect(extInf.print(5)).toBe("#EXTINF:4.3,");
});

test("ExtInf with title, version < 3", () => {
  const extInf = new ExtInf(4.3, "First Segment");
  expect(extInf.print(1)).toBe("#EXTINF:4,[First Segment],");
});

test("ExtInf with title, version >= 3", () => {
  const extInf = new ExtInf(4.3, "First Segment");
  expect(extInf.print(5)).toBe("#EXTINF:4.3,[First Segment],");
});
