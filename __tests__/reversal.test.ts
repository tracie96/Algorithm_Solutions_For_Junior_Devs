import { reversalQuestion } from "../src/main";

describe("string reversal", () => {
  it("reverses a base 6 string", () => {
    const inputString = "532413";
    const expectedOutput = "314235";

    expect(reversalQuestion(inputString)).toBe(expectedOutput);
  });
});
