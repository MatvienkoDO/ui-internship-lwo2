export function squares(n) {
  let counter = 0;
  for (let i = 1; i <= n; ++i) {
    if (i % 4 !== 2) {
      ++counter;
    }
  }
  return counter;
}
