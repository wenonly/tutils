import { throttle } from "../modules/index";

test("throttle 执行", function (done) {
  let num = 0;
  const test = () => {
    num += 1;
  };
  const throttled = throttle(test, 1000);

  let time = setInterval(() => {
    throttled();
  }, 60);

  // 延时执行
  setTimeout(() => {
    expect(num).toBe(3);
    clearInterval(time);
    done();
  }, 3200);
});
