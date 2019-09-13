function isSimple(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export function minNumberToPrime(numbers) {
  const sum = numbers.reduce((a, c) => a + c);

  for (let i = 0; ; ++i) {
    if (isSimple(sum + i)) {
      return i;
    }
  }
}
