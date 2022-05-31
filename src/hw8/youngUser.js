export function youngUser(date1, date2) {
  const arr1 = date1.split(".");
  const arr2 = date2.split(".");
  const dateUser1 = new Date(`${arr1[2]}-${arr1[1]}-${arr1[0]}`);
  const dateUser2 = new Date(`${arr2[2]}-${arr2[1]}-${arr2[0]}`);
  return Date.parse(dateUser1) < Date.parse(dateUser2) ? dateUser2 : dateUser1;
}
