import { createUITask7 } from "./task7.js";

describe("Inspect objectTask function", () => {
  it("is a function", () => {
    expect(createUITask7).toBeInstanceOf(Function);
  });

  let container;
  let btn;
  let inp;

  beforeEach(() => {
    container = document.createElement("div");
    createUITask7(container);
    btn = container.querySelector(".btnTask7");
    inp = container.querySelector(".inpTask7");
  });

  it("button hidden true", () => {
    expect(btn.hidden).toBeTruthy();
  });

  it("input click =>button hidden false", () => {    
    inp.click();    
    expect(btn.hidden).toBeFalsy();
  });

  it("input text => add paragraph", () => {
    inp.click();
    inp.value = "adgjahdkahdlAD";

    for (let i = 1; i <= 3; i += 1) {
      const text = document.createElement("p");
      text.className = "output";
      text.innerText = inp.value;
      container.append(text);
    }
    btn.click();
  });
});
