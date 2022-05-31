export function countMinuts() {
  const date = new Date();
  console.log(date.getHours() * 60 + date.getMinutes());
  return date.getHours() * 60 + date.getMinutes();
}
