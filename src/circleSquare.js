export function circleSquare(circle, square) {
  if (Math.sqrt(circle / Math.PI) * 2 <= Math.sqrt(square)) {
    console.log("yes"); // eslint-disable-line no-console
    return "yes";
  }
  console.log("no"); // eslint-disable-line no-console
  return "no";
}
