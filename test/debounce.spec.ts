import { debounce } from "../modules/index";

test("debounce 延后执行", function (done) {
  let num = 0;
  const test = () => {
    num += 1;
  };
  const debounced = debounce(test, 1000);

  debounced();
  debounced();
  debounced();
  debounced();
  debounced();
  debounced();
  expect(num).toBe(0);
  // 延时执行
  setTimeout(() => {
    expect(num).toBe(1);
    done();
  }, 1200);
});

test("debounce 立即执行", function (done) {
  let num = 0;
  const test = () => {
    num += 1;
  };
  const debounced = debounce(test, 1000, true);

  debounced();
  debounced();
  debounced();
  debounced();
  debounced();
  debounced();

  expect(num).toBe(1);
  setTimeout(() => {
    expect(num).toBe(1);
    done();
  }, 1200);
});
