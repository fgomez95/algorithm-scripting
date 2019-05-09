/* eslint-env jest */
import greeting from './index';

describe('greeting', () => {
  it('should be defined', () => {
    expect(greeting).toBeDefined();
  });
  it('should return a greeting message', () => {
    expect(greeting()).toEqual('hello, world');
  });
});
