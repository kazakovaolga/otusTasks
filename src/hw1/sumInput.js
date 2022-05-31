export function sumInp(input) {
  let sum = 0;
  if (input === undefined) return sum;

  let i = 0;
  while (i < input.length) {
    if (!Number(input[i]).isNaN) {
      sum += Number(input[i]);
      i += 1;
    }
  }
  console.log(sum);
  return sum;
}
