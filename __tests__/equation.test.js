import { equation } from "../src/equation.js";

describe("Inspect equation function", () => {
  it("equation is a function", () => {
    expect(equation).toBeInstanceOf(Function);
  });

  it("a=1,b=-2,c=-24 => 6,-4", () => {
    const arr = [6, -4];
    expect(equation(1, -2, -24)).toEqual(arr);
  });

  it("a=4,b=1,c=4 => undefined", () => {
    expect(equation(4, 1, 4)).toEqual(undefined);
  });

  it("a=0,b=1,c=4 => undefined", () => {
    expect(equation(0, 1, 4)).toEqual(undefined);
  });

  it("a=3,b=-18,c=27 => undefined", () => {
    const arr = [3];
    expect(equation(3, -18, 27)).toEqual(arr);
  });
});
