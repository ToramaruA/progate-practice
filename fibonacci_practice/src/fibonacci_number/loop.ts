export const fibonacciLoop = (n: number): number => {
  if (n < 0 || n > 50) {
    throw new Error("n must be between 0 and 50");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};
