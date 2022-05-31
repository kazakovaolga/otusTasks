import { mul } from "./multiplication";

describe("Inspect mul function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    console.log(logSpy);
  });

  it("mul is a function", () => {
    expect(mul).toBeInstanceOf(Function);
  });

  it("2*2=4", () => {
    console.log(mul(1, 2));
    expect(logSpy).toHaveBeenCalledWith(2);
  });

  it("check undefined", () => {
    console.log(mul());
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });

  it('"3" * "2"="6"', () => {
    console.log(mul("3", "2"));
    expect(logSpy).toHaveBeenCalledWith(6);
  });

  it('4 * "3"=12', () => {
    console.log(mul(4, "3"));
    expect(logSpy).toHaveBeenCalledWith(12);
  });

  it('4 * "a"=NaN', () => {
    console.log(mul(4, "a"));
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });
});
