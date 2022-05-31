import { sumChar } from "./sumChar";

describe("Inspect sumChar function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("sumChar is a function", () => {
    expect(sumChar).toBeInstanceOf(Function);
  });

  it("'aaaa'+'bbbbb' = 9", () => {
    console.log(sumChar("aaaa", "bbbbb"));
    expect(logSpy).toHaveBeenCalledWith(9);
  });

  it("check both undefined", () => {
    console.log(sumChar(undefined, undefined));
    expect(logSpy).toHaveBeenCalledWith(0);
  });

  it("check str2 undefined", () => {
    console.log(sumChar("qwertyuiop", undefined));
    expect(logSpy).toHaveBeenCalledWith(10);
  });

  it("check str1 undefined", () => {
    console.log(sumChar(undefined, "qwertyuiop"));
    expect(logSpy).toHaveBeenCalledWith(10);
  });

  it("'' + '' = 0", () => {
    console.log(sumChar("", ""));
    expect(logSpy).toHaveBeenCalledWith(0);
  });

  it("[] + [] = 0", () => {
    console.log(sumChar([], []));
    expect(logSpy).toHaveBeenCalledWith(0);
  });

  it("[1,2,3] + 'a'= 4", () => {
    console.log(sumChar([1, 2, 3], "a"));
    expect(logSpy).toHaveBeenCalledWith(4);
  });
});
