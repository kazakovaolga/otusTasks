export function getDayFromDate(str) {
  const arr = str.split(".");
  const date = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
