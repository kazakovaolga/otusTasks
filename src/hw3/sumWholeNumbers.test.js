import { sumWholeNumbers } from "./sumWholeNumbers";

describe("Inspect sumWholeNumbers function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("sumWholeNumbers is a function", () => {
    expect(sumWholeNumbers).toBeInstanceOf(Function);
  });

  it("summ whole numbers between 50 and 100", () => {
    console.log(sumWholeNumbers());
    expect(logSpy).toHaveBeenCalledWith(1950);
  });
});
