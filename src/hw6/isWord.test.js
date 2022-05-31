import { isWord } from "./isWord.js";

describe("Inspect isWord function", () => {
  it("isWord is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });

  it('"olga" is word', () => {
    expect(isWord("olga")).toBeTruthy();
  });

  it("udefined is not a word", () => {
    expect(isWord()).toBeFalsy();
  });

  it('"olga kazakova" is not a word', () => {
    expect(isWord()).toBeFalsy();
  });
});
