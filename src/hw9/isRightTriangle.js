export function isRightTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return !!(
      a * a + b * b === c * c ||
      b * b + c * c === a * a ||
      a * a + c * c === b * b
    );
  }
  return false;
}
