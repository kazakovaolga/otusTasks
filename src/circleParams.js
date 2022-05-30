export function circleParams(r) {
  const p = 2 * Math.PI * r;
  const s = Math.PI * r * r;
  console.log("P=", p); // eslint-disable-line no-console
  console.log("S=", s); // eslint-disable-line no-console
  return [p, s];
}
