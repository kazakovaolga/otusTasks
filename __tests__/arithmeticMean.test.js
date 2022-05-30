import { arithmeticMean } from "../src/arithmeticMean.js";

describe("Inspect arithmeticMean function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("arithmeticMean is a function", () => {
    expect(arithmeticMean).toBeInstanceOf(Function);
  });

  it("n=3 arithmeticMean=2", () => {
    console.log(arithmeticMean(3)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(arithmeticMean(3)).toEqual(2);
  });

  it("n=12 arithmeticMean=", () => {
    console.log(arithmeticMean(12)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(6);
    expect(arithmeticMean(12)).toEqual(6);
  });

  it("n=0 arithmeticMean=", () => {
    console.log(arithmeticMean(0)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(undefined);
    expect(arithmeticMean(0)).toEqual(undefined);
  });

  it('n="asdf" arithmeticMean=', () => {
    console.log(arithmeticMean("asdf")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("Is not a number");
    expect(arithmeticMean("asdf")).toEqual("Is not a number");
  });
});
