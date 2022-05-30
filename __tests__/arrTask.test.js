import { currentArr, minMaxArr } from "../src/arrTask.js";

describe("Inspect arrTask function", () => {
  let logSpy;
  let arr;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    arr = [];
  });

  it("currentArr is a function", () => {
    expect(currentArr).toBeInstanceOf(Function);
  });

  it("minMaxArr is a function", () => {
    expect(minMaxArr).toBeInstanceOf(Function);
  });

  it('currentArr console.log("summ",19)', () => {
    console.log(currentArr()); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("summ", 19);
  });

  it('minMaxArr console.log("arrMin",0)', () => {
    arr = [18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
    console.log(minMaxArr(arr)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("arrMin", 0);
  });

  it('minMaxArr console.log("arrMax",0)', () => {
    arr = [32, 36, 24, 28, 16, 20, 8, 12, 2, 4];
    console.log(minMaxArr(arr)); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith("arrMax", 36);
  });
});
