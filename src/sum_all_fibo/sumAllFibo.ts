/*
Given a positive integer num, return the sum of all odd Fibonacci 
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.
 */
export default function sumAllFibs(num: number): number {
  if (num < 2) return num;
  let a: number = 1;
  let b: number = 0;
  let temp: number;
  let counter: number = num;
  let result: number = 0;
  while (counter >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    if (b <= num && b % 2) result += b;
    counter--;
  }
  return result;
}
