/*
Perform a search and replace on the sentence using the arguments 
provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
*/

export default function searchAndReplace(
  str: string,
  before: string,
  after: string
) {
  const regExp: RegExp = new RegExp(before);
  const isUpperCase: boolean = before[0][0] === before[0][0].toUpperCase();
  const replaceStr: string = isUpperCase
    ? after.charAt(0).toUpperCase() + after.slice(1)
    : after;
  const result: string = str.replace(regExp, replaceStr);
  return result;
}
