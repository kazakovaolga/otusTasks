import { maxNumber } from "./maxNumber";

describe("Inspect maxNumber function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("maxNumber is a function", () => {
    expect(maxNumber).toBeInstanceOf(Function);
  });

  it("12>2", () => {
    console.log(maxNumber(12, 2));
    expect(logSpy).toHaveBeenCalledWith(12);
  });

  it("78>56", () => {
    console.log(maxNumber(56, 78));
    expect(logSpy).toHaveBeenCalledWith(78);
  });
});
