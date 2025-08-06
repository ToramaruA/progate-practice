export const fizzbuzz = (n: number): string => {
  const FIZZ = 1 << 0; //ビット（2進数）で1
  const BUZZ = 1 << 1; //ビットで10

  const flag = (n % 3 === 0 ? FIZZ : 0) | (n % 5 === 0 ? BUZZ : 0);

  switch (flag) {
    case FIZZ | BUZZ:
      return "FizzBuzz";
    case FIZZ:
      return "Fizz";
    case BUZZ:
      return "Buzz";
    default:
      return `${n}`;
  }
};
