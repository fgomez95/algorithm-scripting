import searchAndReplace from "./searchAndReplace";

describe("search and replace", () => {
  it("Perform a search and replace on the sentence using the arguments provided and return the new sentence.", () => {
    const result1: string = "Let us go to the mall";
    const result2: string = "This has a spelling error";
    expect(searchAndReplace("Let us go to the store", "store", "mall")).toEqual(
      result1
    );
    expect(
      searchAndReplace("This has a spellngi error", "spellngi", "spelling")
    ).toEqual(result2);
  });
  it("Should be case sensitive", () => {
    const result1 = "He is Sitting on the couch";
    const result2 = "His name is John";
    const result3 = "Let us get back to more Algorithms";
    expect(
      searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")
    ).toEqual(result1);
    expect(searchAndReplace("His name is Tom", "Tom", "john")).toEqual(result2);
    expect(
      searchAndReplace("Let us get back to more Coding", "Coding", "algorithms")
    ).toEqual(result3);
  });
});
