/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

const AMP_REGEX: RegExp = /&amp;|&/g;
const AMP_HTML: string = "&amp;";

const LESS_THAN_REGEX: RegExp = /&lt;|</g;
const LESS_THAN_HTML: string = "&lt;";

const GREATER_THAN_REGEX: RegExp = /&​gt;|>/g;
const GREATER_THAN_HTML: string = "&​gt;";

const QUOTATION_REGEX: RegExp = /&​quot;|"/g;
const QUOTATION_HTML: string = "&​quot;";

const APOST_REGEX: RegExp = /&​apos;|'/g;
const APOST_HTML: string = "&​apos;";

interface RegexHTML {
  regex: RegExp;
  html: string;
}

const regexArr: Array<RegexHTML> = [
  {
    regex: AMP_REGEX,
    html: AMP_HTML
  },
  {
    regex: LESS_THAN_REGEX,
    html: LESS_THAN_HTML
  },
  {
    regex: GREATER_THAN_REGEX,
    html: GREATER_THAN_HTML
  },
  {
    regex: QUOTATION_REGEX,
    html: QUOTATION_HTML
  },
  {
    regex: APOST_REGEX,
    html: APOST_HTML
  }
];

export default function htmlEntries(str: string): string {
  let result: string = str;

  for (let obj of regexArr) {
    if (result.match(obj.regex)) result = result.replace(obj.regex, obj.html);
  }
  return result;
}
