import { letterCountQuestion } from "../src/main";

describe('count letters', () => {
    test('counts occurrences of each letter excluding empty spaces', () => {
      const input = 'The quick brown fox jumps over the lazy dog';
      const expectedOutput = {
        T: 1,
        h: 2,
        e: 3,
        q: 1,
        u: 2,
        i: 1,
        c: 1,
        k: 1,
        b: 1,
        r: 2,
        o: 4,
        w: 1,
        n: 1,
        f: 1,
        x: 1,
        j: 1,
        m: 1,
        p: 1,
        s: 1,
        v: 1,
        t: 1,
        l: 1,
        a: 1,
        z: 1,
        y: 1,
        d: 1,
        g: 1,
      };
      expect(letterCountQuestion(input)).toEqual(expectedOutput);
    });
  
    test('ignores empty spaces', () => {
      const input = 'the quick brown fox jumps over the lazy dog';
      const expectedOutput = {
        t: 2,
        h: 2,
        e: 3,
        q: 1,
        u: 2,
        i: 1,
        c: 1,
        k: 1,
        b: 1,
        r: 2,
        o: 4,
        w: 1,
        n: 1,
        f: 1,
        x: 1,
        j: 1,
        m: 1,
        p: 1,
        s: 1,
        v: 1,
        l: 1,
        a: 1,
        z: 1,
        y: 1,
        d: 1,
        g: 1,
      };
      expect(letterCountQuestion(input)).toEqual(expectedOutput);
    });
  });
  