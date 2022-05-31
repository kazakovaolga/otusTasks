export function sumWholeNumbers() {
  let summNum = 0;
  for (let i = 50; i <= 100; i += 1) {
    if (i % 2 === 0) {
      summNum += i;
    }
  }
  console.log(summNum);
  return summNum;
}
