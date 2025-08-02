export const fibonacciMemo = (n: number, memo: number[] = []): number => {
  if (n < 0 || n > 50) {
    throw new Error("n must be between 0 and 50");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
};
