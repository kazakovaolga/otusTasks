export function circleParams(r) {
  const p = 2 * Math.PI * r;
  const s = Math.PI * r * r;
  console.log("P=", p);
  console.log("S=", s);
  return [p, s];
}
