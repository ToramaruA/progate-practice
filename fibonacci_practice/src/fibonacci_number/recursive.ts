export const fibonacciRecursive = (n: number): number => {
  if (n < 0 || n > 50) {
    throw new Error("n must be between 0 and 50");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
