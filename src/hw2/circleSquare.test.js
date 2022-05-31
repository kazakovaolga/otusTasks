import { circleSquare } from "./circleSquare";

describe("Inspect circleSquare function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("circleSquare is a function", () => {
    expect(circleSquare).toBeInstanceOf(Function);
  });

  it("circle=25 square=43 toBe(yes)", () => {
    console.log(circleSquare(25, 43));
    expect(logSpy).toHaveBeenCalledWith("yes");
  });

  it("circle=125 square=43 toBe(no)", () => {
    console.log(circleSquare(125, 43));
    expect(logSpy).toHaveBeenCalledWith("no");
  });
});
