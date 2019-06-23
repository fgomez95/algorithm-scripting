/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and 
return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into 
one encapsulating array.
*/
export default function pairElement(str: string): string[][] {
  let copyStr: string[] = [];
  for (let i of str) copyStr.push(i);
  function getPair(el: string): Array<string> {
    const A: string = "A";
    const T: string = "T";
    const G: string = "G";
    const C: string = "C";
    let result: string[] = [el];
    switch (el) {
      case A:
        result.push(T);
        break;
      case T:
        result.push(A);
        break;
      case G:
        result.push(C);
        break;
      case C:
        result.push(G);
        break;
    }
    return result;
  }
  return copyStr.map(el => getPair(el));
}
