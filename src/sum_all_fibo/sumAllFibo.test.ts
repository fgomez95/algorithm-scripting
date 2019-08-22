import sumAllFibo from "./sumAllFibo";

describe("sum all fibos", () => {
  test("can be imported", () => {
    expect(sumAllFibo).toBeDefined();
  });
  test("should return a number", () => {
    const test1: number = 1;
    expect(sumAllFibo(test1)).toEqual(test1);
  });
  test("should return the sum of all odd numbers in the fibonacci sequence less than or equal given n", () => {
    const test1: number = 1000;
    const test2: number = 4000000;
    const test3: number = 4;
    const test4: number = 75024;
    const test5: number = 75025;

    const result1: number = 1785;
    const result2: number = 4613732;
    const result3: number = 5;
    const result4: number = 60696;
    const result5: number = 135721;

    expect(sumAllFibo(test1)).toEqual(result1);
    expect(sumAllFibo(test2)).toEqual(result2);
    expect(sumAllFibo(test3)).toEqual(result3);
    expect(sumAllFibo(test4)).toEqual(result4);
    expect(sumAllFibo(test5)).toEqual(result5);
  });
});
