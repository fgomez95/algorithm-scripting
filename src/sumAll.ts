export default function sumAll(arr: Array<number>): number {
  let arrCopy = [];
  const x = arr[0];
  const y = arr[1];
  x > y
    ? arrCopy.push(y, x)
    : arrCopy = [...arr];
  let result = arrCopy[0];
  for (let i = arrCopy[0]; i < arrCopy[1]; i += 1)result += i + 1;
  return result;
}
