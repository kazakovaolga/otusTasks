export function equation(a, b, c) {
  if (a === 0) return undefined;
  const d = b * b - 4 * a * c;
  if (d < 0) return undefined;
  if (d === 0) return [-b / (2 * a)];
  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
}
