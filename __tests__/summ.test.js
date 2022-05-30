import { summ } from "../src/summ";

describe("Inspect summ function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    console.log(logSpy); // eslint-disable-line no-console
  });

  it("sum is a function", () => {
    expect(summ).toBeInstanceOf(Function);
  });

  it("1+2=3", () => {
    console.log(summ(1, 2)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(3);
  });

  it("check undefined", () => {
    console.log(summ()); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });
  it('"1" + "2"="12"', () => {
    console.log(summ("1", "2")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("12");
  });
  it('1 + "3"=12', () => {
    console.log(summ(1, "3")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("13");
  });
  it('1 + "a"="1a"', () => {
    console.log(summ(1, "a")); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("1a");
  });
});
