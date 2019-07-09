import sortedUnion from "./sortedUnion";

describe("sortedUnion", () => {
  it("should be properly imported", () => {
    expect(sortedUnion).toBeDefined();
  });
  it("should return the unique values in the same order", () => {
    const result1 = [1, 3, 2, 5, 4];
    const result2 = [1, 3, 2, [5], [4]];
    const result3 = [1, 2, 3, 5];
    const result4 = [1, 2, 3, 5, 4, 6, 7, 8];

    expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual(result1);
    expect(sortedUnion([1, 3, 2], [1, [5]], [2, [4]])).toEqual(result2)
    expect(sortedUnion([1, 2, 3], [5, 2, 1])).toEqual(result3);
    expect(sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual(
      result4
    );
  });
});
