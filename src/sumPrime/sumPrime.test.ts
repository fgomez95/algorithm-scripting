import sumPrime from "./sumPrime";

describe("sum all primes", () => {
  test("it can be imported", () => {
    expect(sumPrime).toBeDefined();
  });
  test("should return the sum of all primes for given number", () => {
    const test1: number = 10;
    const test2: number = 977;
    const result1: number = 17;
    const result2: number = 73156;
    expect(sumPrime(test1)).toEqual(result1);
    expect(sumPrime(test2)).toEqual(result2);
  });
});
