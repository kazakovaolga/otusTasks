import { youngUser } from "./youngUser.js";

describe("Inspect youngUser function", () => {
  it("youngUser is a function", () => {
    expect(youngUser).toBeInstanceOf(Function);
  });

  it("date1='18.03.1984' date2='01.01.2012' => '01.01.2012')", () => {
    expect(youngUser("18.03.1984", "01.01.2012")).toEqual(
      new Date("2012-01-01T00:00:00.000Z")
    );
  });

  it("date1='07.12.2015' date2='01.01.2012' => '07.12.2015')", () => {
    expect(youngUser("07.12.2015", "01.01.2012")).toEqual(
      new Date("2015-12-07T00:00:00.000Z")
    );
  });
});
