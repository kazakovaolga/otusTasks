import { sumInp } from "./sumInput";

describe("Inspect sumInput function", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("sumInput is a function", () => {
    expect(sumInp).toBeInstanceOf(Function);
  });

  it("check undefined", () => {
    console.log(sumInp());
    expect(logSpy).toHaveBeenCalledWith(0);
  });

  it("string '568' => 5+6+8 = 19", () => {
    console.log(sumInp("568"));
    expect(logSpy).toHaveBeenCalledWith(19);
  });
});
