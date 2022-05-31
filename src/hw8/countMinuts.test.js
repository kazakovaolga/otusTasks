import { countMinuts } from "./countMinuts.js";

describe("Inspect countMinuts function", () => {
  let logSpy;
  let date;
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
    date = new Date();
  });

  it("countMinuts is a function", () => {
    expect(countMinuts).toBeInstanceOf(Function);
  });

  it("check current time", () => {
    console.log(countMinuts());
    expect(logSpy).toHaveBeenCalledWith(
      date.getHours() * 60 + date.getMinutes()
    );
  });
});
