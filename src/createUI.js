import { summ } from "./hw1/summ.js"; // 1
import { mul } from "./hw1/multiplication.js"; // 2
import { sumChar } from "./hw1/sumChar.js"; // 3
import { sumInp } from "./hw1/sumInput.js"; // 4
import { maxNumber } from "./hw2/maxNumber.js"; // 5
import { getMonthes } from "./hw2/getMonthes.js"; // 6
import { circleSquare } from "./hw2/circleSquare.js"; // 7
import { sumWholeNumbers } from "./hw3/sumWholeNumbers.js"; // 8
import { multiplicationTable } from "./hw3/multiplicationTable.js"; // 9
import { arithmeticMean } from "./hw3/arithmeticMean.js"; // 10
import { objectTask } from "./hw4/objectTask.js"; // 11
import { currentArr, minMaxArr } from "./hw5/arrTask.js"; // 12
import { diffNumbers } from "./hw6/diffNumbers.js"; // 13
import { isWord } from "./hw6/isWord.js"; // 14
import { pow } from "./hw6/pow.js"; // 15
import { getDayFromDate } from "./hw8/getDayFromDate.js"; // 17
import { countMinuts } from "./hw8/countMinuts.js"; // 18
import { youngUser } from "./hw8/youngUser.js"; // 19
import { isRightTriangle } from "./hw9/isRightTriangle.js"; // 20
import { circleParams } from "./hw9/circleParams.js"; // 21
import { equation } from "./hw9/equation.js"; // 22
import { isDateEmailMsisdn } from "./hw10/isDateEmailMsisdn.js"; // 23

export function createUI() {
  // 1 summ
  document.getElementById("btnSum").addEventListener("click", () => {
    const div = document.getElementById("task1");

    const input1 = document.getElementById("inpSumA");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inpSumB");
    const value2 = Number(input2.value);
    const p = document.getElementById("p1");

    p.innerHTML = `${summ(value1, value2)}`;
    div.append(p);

    input1.value = "";
    input2.value = "";
  });

  // 2 mul
  document.getElementById("btnMul").addEventListener("click", () => {
    const div = document.getElementById("task2");

    const input1 = document.getElementById("inpMulA");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inpMulB");
    const value2 = Number(input2.value);

    const p = document.getElementById("p2");
    p.innerText = `${mul(value1, value2)}`;
    div.append(p);

    input1.value = "";
    input2.value = "";
  });

  // 3 sumChar
  document.getElementById("btnSumChar").addEventListener("click", () => {
    const div = document.getElementById("task3");

    const input1 = document.getElementById("inp1SumChar");
    const value1 = input1.value;

    const input2 = document.getElementById("inp2SumChar");
    const value2 = input2.value;

    const p = document.getElementById("p3");
    p.innerText = `${sumChar(value1, value2)}`;
    div.append(p);

    input1.value = "";
    input2.value = "";
  });

  // 4 sumInput
  document.getElementById("btnSumInput").addEventListener("click", () => {
    const div = document.getElementById("task4");

    const input = document.getElementById("inpSumInput");
    const { value } = input;

    const p = document.getElementById("p4");
    p.innerText = `${sumInp(value)}`;
    div.append(p);

    input.value = "";
  });

  // 5 maxNumber
  document.getElementById("btnMaxNumber").addEventListener("click", () => {
    const div = document.getElementById("task5");

    const input1 = document.getElementById("maxNumber1");
    const value1 = input1.value;

    const input2 = document.getElementById("maxNumber2");
    const value2 = input2.value;

    const p = document.getElementById("p5");
    p.innerText = `${maxNumber(value1, value2)}`;
    div.append(p);

    input1.value = "";
    input2.value = "";
  });

  // 6 getMonthes
  document.getElementById("btnGetMonthes").addEventListener("click", () => {
    const div = document.getElementById("task6");

    const input = document.getElementById("getMonthes");
    const { value } = input;

    const p = document.getElementById("p6");
    p.innerText = `${getMonthes(value)}`;
    div.append(p);

    input.value = "";
  });

  // 7 circleSquare
  document.getElementById("btnСircleSquare").addEventListener("click", () => {
    const div = document.getElementById("task7");

    const input1 = document.getElementById("circleSquare1");
    const value1 = input1.value;

    const input2 = document.getElementById("circleSquare2");
    const value2 = input2.value;

    const p = document.getElementById("p7");
    p.innerHTML = `${circleSquare(value1, value2)}`;
    div.append(p);

    input1.value = "";
    input2.value = "";
  });

  // 8 sumWholeNumbers
  document
    .getElementById("btnSumWholeNumbers")
    .addEventListener("click", () => {
      const div = document.getElementById("task8");

      const p = document.getElementById("p8");
      p.innerHTML = `${sumWholeNumbers()}`;
      div.append(p);
    });

  // 9 multiplicationTable
  document
    .getElementById("btnMultiplicationTable")
    .addEventListener("click", () => {
      const div = document.getElementById("task9");

      const p = document.getElementById("p9");
      p.innerHTML = `${multiplicationTable()}`;
      div.append(p);
    });

  // 10 arithmeticMean
  document.getElementById("btnArithmeticMean").addEventListener("click", () => {
    const div = document.getElementById("task10");

    const input1 = document.getElementById("arithmeticMean");
    const value1 = input1.value;

    const p = document.getElementById("p10");
    p.innerHTML = `${arithmeticMean(value1)}`;
    div.append(p);

    input1.value = "";
  });

  // 11 objectTask
  document.getElementById("btnObjectTask").addEventListener("click", () => {
    const div = document.getElementById("task11");

    const input1 = document.getElementById("objectTask");
    const value1 = input1.value;

    const p = document.getElementById("p11");
    const data = objectTask(value1);
    p.innerHTML = `name:${data.name},age:${data.age},role:${data.role}`;
    div.append(p);
    input1.value = "";
  });

  // 12 arrTask
  document.getElementById("btnArrTask").addEventListener("click", () => {
    const div = document.getElementById("task12");
    const p = document.getElementById("p12");

    const arrSumm = currentArr();
    const arr = minMaxArr(arrSumm[0]);
    p.innerHTML = `summ=${arrSumm[1]},minEl=${arr[0]},maxEl=${arr[1]}`;
    div.append(p);
  });

  // 13 diff
  document.getElementById("btnDiff").addEventListener("click", () => {
    const div = document.getElementById("task13");

    const input1 = document.getElementById("diff1");
    const value1 = input1.value;

    const input2 = document.getElementById("diff2");
    const value2 = input2.value;

    const p = document.getElementById("p13");
    p.innerHTML = `${diffNumbers(value1, value2)}`;
    div.append(p);
    input1.value = "";
    input2.value = "";
  });

  // 14 isWord
  document.getElementById("btnIsWord").addEventListener("click", () => {
    const div = document.getElementById("task14");

    const input1 = document.getElementById("isWord");
    const value1 = input1.value;

    const p = document.getElementById("p14");
    p.innerHTML = `${isWord(value1)}`;
    div.append(p);
    input1.value = "";
  });

  // 15 pow
  document.getElementById("btnPow").addEventListener("click", () => {
    const div = document.getElementById("task15");

    const input1 = document.getElementById("pow1");
    const value1 = input1.value;

    const input2 = document.getElementById("pow2");
    const value2 = input2.value;

    const p = document.getElementById("p15");
    p.innerHTML = `${pow(value1, value2)}`;
    div.append(p);
    input1.value = "";
    input2.value = "";
  });

  // 17 getDayFromDate
  document.getElementById("btnGetDayFromDate").addEventListener("click", () => {
    const div = document.getElementById("task17");

    const input1 = document.getElementById("getDayFromDate");
    const value1 = input1.value;

    const p = document.getElementById("p17");
    p.innerHTML = `${getDayFromDate(value1)}`;
    div.append(p);
    input1.value = "";
  });

  // 18 countMinuts
  document.getElementById("btnCountMinuts").addEventListener("click", () => {
    const div = document.getElementById("task18");

    const p = document.getElementById("p18");
    const c = countMinuts();
    p.innerText = c;
    div.append(p);
  });

  // 19 youngUser
  document.getElementById("btnYoungUser").addEventListener("click", () => {
    const div = document.getElementById("task19");

    const input1 = document.getElementById("youngUser1");
    const value1 = input1.value;

    const input2 = document.getElementById("youngUser2");
    const value2 = input2.value;

    const p = document.getElementById("p19");
    p.innerHTML = `${youngUser(value1, value2)}`;
    div.append(p);
    input1.value = "";
    input2.value = "";
  });

  // 20 isRightTriangle
  document
    .getElementById("btnIsRightTriangle")
    .addEventListener("click", () => {
      const div = document.getElementById("task20");

      const input1 = document.getElementById("a");
      const value1 = Number(input1.value);

      const input2 = document.getElementById("b");
      const value2 = Number(input2.value);

      const input3 = document.getElementById("c");
      const value3 = Number(input3.value);

      const p = document.getElementById("p20");
      p.innerHTML = `${isRightTriangle(value1, value2, value3)}`;
      div.append(p);
      input1.value = "";
      input2.value = "";
      input3.value = "";
    });

  // 21 cicleParams
  document.getElementById("btnCicleParams").addEventListener("click", () => {
    const div = document.getElementById("task21");

    const input1 = document.getElementById("r");
    const value1 = Number(input1.value);

    const p = document.getElementById("p21");
    const data = circleParams(value1);
    p.innerHTML = `P=${data[0]},S=${data[1]}`;
    div.append(p);
    input1.value = "";
  });

  // 22 equation
  document.getElementById("btnEquation").addEventListener("click", () => {
    const div = document.getElementById("task22");

    const input1 = document.getElementById("A");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("B");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("C");
    const value3 = Number(input3.value);

    const p = document.getElementById("p22");
    const data = equation(value1, value2, value3);
    p.innerHTML = `x1=${data[0]},x2=${data[1]}`;
    div.append(p);
    input1.value = "";
    input2.value = "";
    input3.value = "";
  });

  // 23 isDateEmailMsisdn
  document
    .getElementById("btnIsDateEmailMsisdn")
    .addEventListener("click", () => {
      const div = document.getElementById("task23");

      const input1 = document.getElementById("str");
      const value1 = input1.value;

      const p = document.getElementById("p23");
      p.innerHTML = `${isDateEmailMsisdn(value1)}`;
      div.append(p);
      input1.value = "";
    });
}
