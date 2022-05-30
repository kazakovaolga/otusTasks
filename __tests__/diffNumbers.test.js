import { diffNumbers } from "../src/diffNumbers.js";

describe("Inspect diffNumbers function", () => {
  it("diffNumbers is a function", () => {
    expect(diffNumbers).toBeInstanceOf(Function);
  });

  it("a=25 b=45 => 20)", () => {
    expect(diffNumbers(25, 45)).toEqual(20);
  });

  it("a=125 b=25 => 100", () => {
    expect(diffNumbers(125, 25)).toEqual(100);
  });
});
