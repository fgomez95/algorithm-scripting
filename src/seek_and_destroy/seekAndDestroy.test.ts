import destroyer from "./seekAndDestroy";

describe("seekAndDestroy", () => {
  it("should be imported correctly", () => {
    expect(destroyer).toBeDefined();
  });
  it("should remove given elements from array", () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual([
      "hamburger"
    ]);
  });
});
