import { mul } from "../src/multiplication";

describe("Inspect mul function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    console.log(logSpy); // eslint-disable-line no-console
  });

  it("mul is a function", () => {
    expect(mul).toBeInstanceOf(Function);
  });

  it("2*2=4", () => {
    console.log(mul(1, 2)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(2);
  });

  it("check undefined", () => {
    console.log(mul()); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });

  it('"3" * "2"="6"', () => {
    console.log(mul("3", "2")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(6);
  });

  it('4 * "3"=12', () => {
    console.log(mul(4, "3")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(12);
  });

  it('4 * "a"=NaN', () => {
    console.log(mul(4, "a")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });
});
