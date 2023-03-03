import { nonAdjacentSumQuestion } from "../src/main";

describe('maximum sum of any non-adjacent elements', () => {
    test('maxSumNonAdjacent returns the maximum sum of non-adjacent elements in a list of positive integers', () => {
        expect(nonAdjacentSumQuestion([1, 2, 3, 4, 5])).toBe(9); // 2 + 4 + 3
        expect(nonAdjacentSumQuestion([4, 1, 2, 7, 5, 3])).toBe(14); // 4 + 7 + 3
        expect(nonAdjacentSumQuestion([2, 1, 5, 8, 4])).toBe(11); // 2 + 8 + 1
        expect(nonAdjacentSumQuestion([1, 1, 1, 1, 1, 1])).toBe(3); // 1 + 1 + 1
        expect(nonAdjacentSumQuestion([10, 20, 30, 40, 50])).toBe(90); // 30 + 50 + 10
      });
  it('returns 0 if the list is empty', () => {
    expect(nonAdjacentSumQuestion([])).toBe(0);
  });

  it('handles lists with only one element', () => {
    expect(nonAdjacentSumQuestion([5])).toBe(5);
  });
});
