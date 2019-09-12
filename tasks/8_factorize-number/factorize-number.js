export function factorialize(n) {
  let result = 1;

  for (let i = 2; i <= n; ++i) {
    result *= i;
  }

  return result;
}

/* solution through tail-recursion
export function factorialize(n) {
  return factorializeInner(n);
}

function factorializeInner(n, total = 1) {
  if (n <= 1) {
    return total;
  }

  return factorializeInner(n - 1, total * n);
}*/
