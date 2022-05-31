import { summ } from "./summ";

describe("Inspect summ function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    console.log(logSpy);
  });

  it("sum is a function", () => {
    expect(summ).toBeInstanceOf(Function);
  });

  it("1+2=3", () => {
    console.log(summ(1, 2));
    expect(logSpy).toHaveBeenCalledWith(3);
  });

  it("check undefined", () => {
    console.log(summ());
    expect(logSpy).toHaveBeenCalledWith(NaN);
  });
  it('"1" + "2"="12"', () => {
    console.log(summ("1", "2"));
    expect(logSpy).toHaveBeenCalledWith("12");
  });
  it('1 + "3"=12', () => {
    console.log(summ(1, "3"));
    expect(logSpy).toHaveBeenCalledWith("13");
  });
  it('1 + "a"="1a"', () => {
    console.log(summ(1, "a"));
    expect(logSpy).toHaveBeenCalledWith("1a");
  });
});
