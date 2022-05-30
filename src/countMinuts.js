export function countMinuts() {
  const date = new Date();
  console.log(date.getHours() * 60 + date.getMinutes()); // eslint-disable-line no-console
  return date.getHours() * 60 + date.getMinutes();
}
