/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an
English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
 */

export default function pigLatin(str: string): string {
  let flag: boolean = false;
  let vowels: RegExp = /[aeiou]/;
  let result: Array<string> = [];

  for (let i of str) result.push(i);
  for (let i of str) {
    if (vowels.test(i)) {
      break;
    } else {
      flag = true;
      const el: any = result.shift();
      result.push(el);
    }
  }
  if (!flag) return result.concat(["w", "a", "y"]).join("");
  else return result.concat(["a", "y"]).join("");
}
