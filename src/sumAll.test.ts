/* eslint-env jest */
import sumAll from './sumAll';

describe('sum all function', () => {
  it('should be imported correctly', () => {
    expect(sumAll).toBeDefined();
  });
  it('should return the sum of all numbers between specified range', () => {
    expect(sumAll([1, 4])).toEqual(10);
    expect(sumAll([4, 1])).toEqual(10);
    expect(sumAll([5, 10])).toEqual(45);
    expect(sumAll([10, 5])).toEqual(45);
  });
});
