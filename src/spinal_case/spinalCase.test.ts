import spinalCase from "./spinalCase";

describe("spinalCase", () => {
  const test1 = "This Is Spinal Tap";
  const result1 = "this-is-spinal-tap";

  const test2 = "thisIsSpinalTap";
  const result2 = "this-is-spinal-tap";

  const test3 = "The_Andy_Griffith_Show";
  const result3 = "the-andy-griffith-show";

  const test4 = "Teletubbies say Eh-oh";
  const result4 = "teletubbies-say-eh-oh";

  const test5 = "AllThe-small Things";
  const result5 = "all-the-small-things";

  it("should be imported correctly", () => {
    expect(spinalCase).not.toBeUndefined();
  });
  it("should parse space, underscore and camel case", () => {
    expect(spinalCase(test1)).toEqual(result1);
    expect(spinalCase(test2)).toEqual(result2);
    expect(spinalCase(test3)).toEqual(result3);
    expect(spinalCase(test4)).toEqual(result4);
    expect(spinalCase(test5)).toEqual(result5);
  });
});
