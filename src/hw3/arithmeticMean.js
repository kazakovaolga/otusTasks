export function arithmeticMean(n) {
  let sum = 0;
  let count = 0;
  if (n === 0 || n === undefined) {
    console.log(undefined);
    return undefined;
  }
  if (Number.isNaN(Number(n))) {
    console.log("Is not a number");
    return "Is not a number";
  }

  for (let i = 0; i <= Number(n); i += 1) {
    if (i % 2 !== 0) {
      sum += i;
      count += 1;
    }
  }
  console.log(sum / count);
  return sum / count;
}
