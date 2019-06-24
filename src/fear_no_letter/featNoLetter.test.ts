import fearNoLetter from "./fearNoLetter";

describe("fearNoLetter", () => {
  it("should be imported properly", () => {
    expect(fearNoLetter).toBeDefined();
  });
  it("should return the character that does not follow the pattern", () => {
    const result1 = "d";
    const result2 = "i";
    const result3 = "u";
    const result4 = "e";
    expect(fearNoLetter("abce")).toEqual(result1);
    expect(fearNoLetter("abcdefghjklmno")).toEqual(result2);
    expect(fearNoLetter("stvwx")).toEqual(result3);
    expect(fearNoLetter("bcdf")).toEqual(result4);
  });
  it("should return undefined if no character found", () => {
    expect(fearNoLetter("abcdefghijklmnopqrstuvwxyz")).toBeUndefined();
  })
});
