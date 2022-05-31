import { pow } from "./pow.js";

describe("Inspect pow function", () => {
  it("pow is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });

  it("a=2 x=5 => 32 )", () => {
    expect(pow(2, 5)).toEqual(32);
  });

  it("a=125 b=2 => 15625", () => {
    expect(pow(125, 2)).toEqual(15625);
  });
});
