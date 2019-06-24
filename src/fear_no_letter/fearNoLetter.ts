export default function fearNoLetter(str: string): string | undefined {
  let initCompareChar: number = str[0].charCodeAt(0) - 1;
  for (let i of str) {
    if (initCompareChar + 1 !== i.charCodeAt(0))
      return String.fromCharCode(initCompareChar + 1);
    initCompareChar++;
  }
  return undefined;
}
