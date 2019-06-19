import pigLatin from "./pigLatin";

describe("pig latin", () => {
  it("should be defined", () => {
    expect(pigLatin).not.toBeUndefined();
  });
  it("should take the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an 'ay'.", () => {
    const test1: string = "california";
    const test2: string = "paragraphs";
    const test3: string = "glove";
    expect(pigLatin(test1)).toEqual("aliforniacay");
    expect(pigLatin(test2)).toEqual("aragraphspay");
    expect(pigLatin(test3)).toEqual("oveglay");
  });
  it("should return the string with 'way' at the end if the word begins with vowel", () => {
    const test1: string = "algorithm";
    const test2: string = "eight";
    expect(pigLatin(test1)).toEqual("algorithmway");
    expect(pigLatin(test2)).toEqual("eightway");
  });
});
