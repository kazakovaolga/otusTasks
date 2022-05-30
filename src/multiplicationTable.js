export function multiplicationTable() {
  let mul;
  let str = "";
  const p = 7;
  for (let i = 1; i <= 9; i += 1) {
    mul = p * i;
    str = `${str}${p}*${i}=${mul}\n`;
  }
  console.log(str.slice(0, -1)); // eslint-disable-line no-console
  return str.slice(0, -1).replaceAll("\n", "<pre>");
}
