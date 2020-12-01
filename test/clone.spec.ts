import { clone } from "../modules/index";

test("clone 执行", function () {
  const obj = { a: 1, b: "", c: { c: "asdf" } };
  const newObj = clone(obj);
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.a = 2;
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.c.c = "123";
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "123" } });

  const arr = [1, 2, "234", { a: 1 }];
  const newArr = clone(arr);
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);
  expect(newArr.length).toBe(4);
  arr[0] = 2;
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);
  arr[3]["a"] = 2;
  expect(newArr).toEqual([1, 2, "234", { a: 2 }]);
  arr.pop();
  expect(newArr).toEqual([1, 2, "234", { a: 2 }]);
});
