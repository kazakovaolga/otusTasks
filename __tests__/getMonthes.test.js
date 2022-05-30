import { getMonthes } from "../src/getMonthes";

describe("Inspect maxNumber function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("maxNumber is a function", () => {
    expect(getMonthes).toBeInstanceOf(Function);
  });

  it("JAN", () => {
    console.log(getMonthes(1)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("JAN");
  });

  it("DEC", () => {
    console.log(getMonthes(12)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("DEC");
  });

  it("undefined", () => {
    console.log(getMonthes(13)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(undefined);
  });
});
