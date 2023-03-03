import { subarrayQuestion } from "../src/main";

describe('returns the number of subarrays of the list', () => {
  it('returns the number of subarrays with target sum', () => {
    const inputList = [1, 2, 3, 4, 5];
    const target = 7;
    const expectedOutput = 2;

    expect(subarrayQuestion(inputList, target)).toBe(expectedOutput);
  });

  it('returns 0 if no subarrays have target sum', () => {
    const inputList = [1, 2, 3, 4, 5];
    const target = 10;
    const expectedOutput = 0;

    expect(subarrayQuestion(inputList, target)).toBe(expectedOutput);
  });

  it('returns 0 if input list is empty', () => {
    const inputList = [];
    const target = 10;
    const expectedOutput = 0;

    expect(subarrayQuestion(inputList, target)).toBe(expectedOutput);
  });
});
