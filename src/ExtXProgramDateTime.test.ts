import ExtXProgramDateTime from "./ExtXProgramDateTime";

test("segment", () => {
  const extXProgramDateTime = new ExtXProgramDateTime(new Date(1559497649000));
  expect(`${extXProgramDateTime}`).toBe("#EXT-X-PROGRAM-DATE-TIME:2019-06-02T17:47:29.000Z");
});
