import pairElement from "./pairElement";

describe("pairElement", () => {
  it("should be imported properly", () => {
    expect(pairElement).toBeDefined();
  });
  it("should return a 2d array with each element paired", () => {
    const result1: string[][] = [
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"]
    ];
    const result2: string[][] = [
      ["T", "A"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
      ["G", "C"]
    ];
    const result3: string[][] = [
      ["C", "G"],
      ["T", "A"],
      ["C", "G"],
      ["T", "A"],
      ["A", "T"]
    ];
    expect(pairElement("ATCGA")).toEqual(result1);
    expect(pairElement("TTGAG")).toEqual(result2);
    expect(pairElement("CTCTA")).toEqual(result3);
  });
});
