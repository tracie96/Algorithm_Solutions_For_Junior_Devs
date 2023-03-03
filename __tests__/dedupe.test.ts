import { dedupeAndMaintainQuestion } from "../src/main";


describe('dedupe and maintain', () => {
    test('removeDuplicates removes duplicates while preserving order', () => {
        expect(dedupeAndMaintainQuestion([1, 2, 3, 2, 4, 3])).toEqual([1, 2, 3, 4]);
        expect(dedupeAndMaintainQuestion([1, 1, 1, 1, 1])).toEqual([1]);
        expect(dedupeAndMaintainQuestion([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(dedupeAndMaintainQuestion([4, 3, 2, 1])).toEqual([4, 3, 2, 1]);
      });
});