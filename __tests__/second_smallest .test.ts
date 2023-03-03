import { secondSmallestQuestion } from "../src/main";

describe('smallest_number', () => {
  it('returns the second smallest number in a list', () => {
    const nums = [5, 1, 7, 3, 9, 2];
    const expectedOutput = 2;
    expect(secondSmallestQuestion(nums)).toBe(expectedOutput);
  });
});

