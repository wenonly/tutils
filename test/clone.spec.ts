import { clone } from "../modules/index";

test("clone 执行", function () {
  const obj = { a: 1, b: "", c: { c: "asdf" } };
  const newObj = clone(obj);
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.a = 2;
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.c.c = "123";
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "123" } });
});
