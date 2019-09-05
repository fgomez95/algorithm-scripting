/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime 
number because it's only divisible by one and two.

The provided number may not be a prime.
*/
export default function sumPrime(num: number): number {
  let result: number = 0;
  function isPrime(num: number): boolean {
    for (let i: number = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  for (let i: number = 0; i <= num; i++) if (isPrime(i)) result += i;
  return result;
}
