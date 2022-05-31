export function currentArr() {
  const arr = [];
  let i = 0;
  while (arr.length < 10) {
    if (i % 2 === 0) arr.push(i);
    i += 1;
  }
  console.log("summ", i);
  return [arr, i];
}

export function minMaxArr(arr) {
  let arrMin = arr[0];
  let arrMax = arr[0];

  arr.reduce((acc, el) => {
    acc.push(el * 2);
    if (el < arrMin) arrMin = el;
    if (el > arrMax) arrMax = el;
    return acc;
  }, []);

  console.log("arrMin", arrMin);
  console.log("arrMax", arrMax);
  return [arrMin, arrMax];
}
