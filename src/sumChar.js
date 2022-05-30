export function sumChar(str1, str2) {
  if (str1 === undefined && str2 === undefined) {
    console.log(0); // eslint-disable-line no-console
    return 0;
  }
  if (str1 === undefined || str2 === undefined) {
    if (str1 === undefined) {
      console.log(str2.length); // eslint-disable-line no-console
      return str2.length;
    }
    if (str2 === undefined) {
      console.log(str1.length); // eslint-disable-line no-console
      return str1.length;
    }
  }
  console.log(str1.length + str2.length); // eslint-disable-line no-console
  return str1.length + str2.length;
}
