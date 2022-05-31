import { isDateEmailMsisdn } from "./isDateEmailMsisdn.js";

describe("Inspect isDateEmailMsisdn function", () => {
  it("isDateEmailMsisdn is a function", () => {
    expect(isDateEmailMsisdn).toBeInstanceOf(Function);
  });

  it('str="+79202599518" => Msisdn', () => {
    expect(isDateEmailMsisdn("+79202599518")).toEqual("Msisdn");
  });

  it('str="test@mail.ru" => Email', () => {
    expect(isDateEmailMsisdn("test@mail.ru")).toEqual("Email");
  });

  it('str="testmail.ru" => Email', () => {
    expect(isDateEmailMsisdn("testmail.ru")).toEqual(undefined);
  });

  it('str="01.01.2012" => Date', () => {
    expect(isDateEmailMsisdn("01.01.2012")).toEqual("Date");
  });
});
