export function circleSquare(circle, square) {
  if (Math.sqrt(circle / Math.PI) * 2 <= Math.sqrt(square)) {
    console.log("yes");
    return "yes";
  }
  console.log("no");
  return "no";
}
