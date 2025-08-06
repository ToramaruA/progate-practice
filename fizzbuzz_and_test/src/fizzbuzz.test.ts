import {fizzbuzz} from "./fizzbuzz";

test("3の倍数ならFizzになる", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("5の倍数ならBuzzになる", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("15の倍数ならFizzBuzzになる", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("3の倍数でも5の倍数でもなければその値を返す", () => {
  expect(fizzbuzz(7)).toBe("7");
});
