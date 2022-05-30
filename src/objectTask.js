export function objectTask(num) {
  const obj1 = { name: "John" };

  obj1.age = num;
  const obj2 = Object.assign(obj1, { name: "admin" });
  obj2.role = "admin";
  const { name, age, role } = obj2;
  return { name, age, role };
}
