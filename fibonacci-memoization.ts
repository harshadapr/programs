// fibonacci-memoization.ts

function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const n = 10;
const result = fibonacci(n);
console.log(`Fibonacci(${n}) = ${result}`); // Fibonacci(10) = 55
