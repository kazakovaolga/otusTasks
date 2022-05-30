import { objectTask } from "../src/objectTask";

describe("Inspect objectTask function", () => {
  let obj = {};

  beforeEach(() => {
    obj = {
      name: "admin",
      role: "admin",
    };
  });

  it("objectTask is a function", () => {
    expect(objectTask).toBeInstanceOf(Function);
  });

  it("age=28", () => {
    obj.age = 28;
    expect(objectTask(28)).toEqual(obj);
  });

  it("age=18", () => {
    obj.age = 18;
    expect(objectTask(18)).toEqual(obj);
  });
});
