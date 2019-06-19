/*
Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned 
array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the 
third object from the array (the first argument), because it contains the 
name and its value, that was passed on as the second argument.
*/

import whereArtThou from "./whereArtThou";

const arr1: Array<any> = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];
const test1: object = { last: "Capulet" };
const result1: Array<object> = [{ first: "Tybalt", last: "Capulet" }];

const arr2: Array<any> = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }];
const test2: object = { apple: 1 };
const result2: Array<object> = [
  { apple: 1 },
  { apple: 1 },
  { apple: 1, bat: 2 }
];

const arr3: Array<any> = [{ a: 1, b: 2, c: 3 }];
const test3: Array<any> = [{ a: 1, b: 9999, c: 3 }];
const result3: Array<any> = [];

describe("whereArtThou", () => {
  it("should be imported correctly", () => {
    expect(whereArtThou).toBeDefined();
  });
  it("should compare find object equality", () => {
    expect(whereArtThou(arr1, test1)).toEqual(result1);
    expect(whereArtThou(arr2, test2)).toEqual(result2);
    expect(whereArtThou(arr3, test3)).toEqual(result3);
  });
});
