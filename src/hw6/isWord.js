export function isWord(str) {
  return str === "" || str === undefined ? false : /^[^\s]*$/g.test(str);
}
