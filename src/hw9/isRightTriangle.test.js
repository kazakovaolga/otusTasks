import { isRightTriangle } from "./isRightTriangle.js";

describe("Inspect isRightTriangle function", () => {
  it("isRightTriangle is a function", () => {
    expect(isRightTriangle).toBeInstanceOf(Function);
  });

  it("a=3,b=4,c=5 => true", () => {
    expect(isRightTriangle(3, 4, 5)).toBeTruthy();
  });

  it("a=5,b=4,c=3 => true", () => {
    expect(isRightTriangle(5, 4, 3)).toBeTruthy();
  });

  it("a=3,b=5,c=4 => true", () => {
    expect(isRightTriangle(3, 5, 4)).toBeTruthy();
  });

  it("a=3,b=4,c=9 => false", () => {
    expect(isRightTriangle(3, 4, 9)).toBeFalsy();
  });

  it("a=9,b=4,c=3 => false", () => {
    expect(isRightTriangle(9, 4, 3)).toBeFalsy();
  });

  it("a=3,b=9,c=4 => false", () => {
    expect(isRightTriangle(3, 9, 4)).toBeFalsy();
  });
});
