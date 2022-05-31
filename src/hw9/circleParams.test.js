import { circleParams } from "./circleParams.js";

describe("Inspect circleParams function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("circleParams is a function", () => {
    expect(circleParams).toBeInstanceOf(Function);
  });

  it("r=25", () => {
    console.log(circleParams(25));
    expect(logSpy).toHaveBeenCalledWith("P=", 157.07963267948966);
    expect(logSpy).toHaveBeenCalledWith("S=", 1963.4954084936207);
  });
});
