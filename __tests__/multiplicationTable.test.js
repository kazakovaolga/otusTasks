import { multiplicationTable } from "../src/multiplicationTable";

describe("Inspect multiplicationTable function", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  it("multiplicationTable is a function", () => {
    expect(multiplicationTable).toBeInstanceOf(Function);
  });

  it("multiplicationTable on 7", () => {
    console.log(multiplicationTable()); // eslint-disable-line no-console
    expect(logSpy).toHaveBeenCalledWith(
      "7*1=7\n" +
        "7*2=14\n" +
        "7*3=21\n" +
        "7*4=28\n" +
        "7*5=35\n" +
        "7*6=42\n" +
        "7*7=49\n" +
        "7*8=56\n" +
        "7*9=63"
    );
  });
});
