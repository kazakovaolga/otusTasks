export function getMonthes(input) {
  const monthes = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  if (!Number(input).isNaN && input > 0 && input <= 12) {
    console.log(monthes[Number(input) - 1]); // eslint-disable-line no-console
    return monthes[Number(input) - 1];
  }
  return undefined;
}
