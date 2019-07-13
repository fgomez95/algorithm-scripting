import htmlEntries from "./htmlEntries";

describe("htmlEntries", () => {
  it("should be defined", () => {
    expect(htmlEntries).toBeDefined();
  });
  it("should replace ampersand with html equivalent", () => {
    const TEST: string = "Dolce & Gabbana";
    const RESULT: string = "Dolce &amp; Gabbana";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
  it("should replace less than with html equivalent", () => {
    const TEST: string = "Hamburgers < Pizza < Tacos";
    const RESULT: string = "Hamburgers &lt; Pizza &lt; Tacos";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
  it("should replace greater than with html equivalent", () => {
    const TEST: string = "Sixty > twelve";
    const RESULT: string = "Sixty &​gt; twelve";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
  it("should replace quotation with html equivalent", () => {
    const TEST: string = 'Stuff in "quotation marks"';
    const RESULT: string = "Stuff in &​quot;quotation marks&​quot;";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
  it("should replace apostrophe with html equivalent", () => {
    const TEST: string = "Schindler's List";
    const RESULT: string = "Schindler&​apos;s List";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
  it("should return the same string if no match", () => {
    const TEST_RESULT: string = "abc";
    expect(htmlEntries(TEST_RESULT)).toEqual(TEST_RESULT);
  });
  it("should match global", () => {
    const TEST: string = "<>";
    const RESULT: string = "&lt;&​gt;";
    expect(htmlEntries(TEST)).toEqual(RESULT);
  });
});
