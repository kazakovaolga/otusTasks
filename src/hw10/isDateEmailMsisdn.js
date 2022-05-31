export function isDateEmailMsisdn(str) {
  if (/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/g.test(str))
    return "Date";
  if (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/g.test(str)) return "Email";
  if (/^((\+7|7|8)+([0-9]){10})$/g.test(str)) return "Msisdn";
  return undefined;
}
