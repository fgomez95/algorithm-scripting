/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the 
two given arrays, but not both. In other words, return the symmetric difference 
of the two arrays.

Note
You can return the array with its elements in any order.
*/
import diffArray from "./diffArrays";

describe("diffArray", () => {
  it("should be imported correctly", () => {
    expect(diffArray).toBeDefined();
  });
  it("should return an array", () => {
    expect(Array.isArray(diffArray([1, true, "hello"], [1, false, 8]))).toEqual(
      true
    );
  });
  it("should return the symmetric difference of two arrays", () => {
    const arrA: Array<any> = [
      "diorite",
      "andesite",
      "grass",
      "dirt",
      "pink wool",
      "dead shrub"
    ];
    const arrB: Array<any> = [
      "diorite",
      "andesite",
      "grass",
      "dirt",
      "dead shrub"
    ];
    expect(diffArray(arrA, arrB)).toEqual(["pink wool"]);

    const arrC: Array<any> = [];
    const arrD: Array<any> = ["snuffleupagus", "cookie monster", "elmo", false];
    expect(diffArray(arrC, arrD)).toEqual([
      "snuffleupagus",
      "cookie monster",
      "elmo",
      false
    ]);
  });
});
