import { cloneDeep } from "../modules/index";

test("cloneDeep 执行", function () {
  const obj = { a: 1, b: "", c: { c: "asdf" } };
  const newObj = cloneDeep(obj);
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.a = 2;
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });
  obj.c.c = "123";
  expect(newObj).toEqual({ a: 1, b: "", c: { c: "asdf" } });

  const arr = [1, 2, "234", { a: 1 }];
  const newArr = cloneDeep(arr);
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);
  expect(newArr.length).toBe(4);
  arr[0] = 2;
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);
  arr[3]["a"] = 2;
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);
  arr.pop();
  expect(newArr).toEqual([1, 2, "234", { a: 1 }]);

  // 循环引用
  const obj2 = { a: 1, b: 2 };
  obj2["c"] = obj2;
  const newObj2 = cloneDeep(obj2);
  expect(newObj2).toEqual(obj2);

  // 函数引用
  const d = function () {};
  const obj3 = { a: 1, b: 2, d };
  obj3["c"] = obj3;
  const newObj3 = cloneDeep(obj3);
  expect(newObj3).toEqual(obj3);
});
