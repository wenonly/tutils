import { clone } from "../modules/index";

test("clone 执行", function () {
  const obj = { a: 1, b: "", c: { c: "asdf" } };
  const newObj: any = clone(obj);
  expect(newObj.a).toBe(1)

  obj.b = '1'
  expect(newObj.b).toBe('')

  obj.c.c = '123'
  expect(newObj.c.c).toBe('123')
});
