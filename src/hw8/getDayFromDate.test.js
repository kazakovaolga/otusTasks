import { getDayFromDate } from "./getDayFromDate.js";

describe("Inspect getDayFromDate function", () => {
  it("getDayFromDate is a function", () => {
    expect(getDayFromDate).toBeInstanceOf(Function);
  });

  it("18.03.1984", () => {
    expect(getDayFromDate("18.03.1984")).toEqual("Sun");
  });

  it("01.01.2012", () => {
    expect(getDayFromDate("01.01.2012")).toEqual("Sun");
  });

  it("07.12.2015", () => {
    expect(getDayFromDate("07.12.2015")).toEqual("Mon");
  });
});
