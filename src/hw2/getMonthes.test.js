import { getMonthes } from "./getMonthes";

describe("Inspect maxNumber function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("maxNumber is a function", () => {
    expect(getMonthes).toBeInstanceOf(Function);
  });

  it("JAN", () => {
    console.log(getMonthes(1));
    expect(logSpy).toHaveBeenCalledWith("JAN");
  });

  it("DEC", () => {
    console.log(getMonthes(12));
    expect(logSpy).toHaveBeenCalledWith("DEC");
  });

  it("undefined", () => {
    console.log(getMonthes(13));
    expect(logSpy).toHaveBeenCalledWith(undefined);
  });
});
