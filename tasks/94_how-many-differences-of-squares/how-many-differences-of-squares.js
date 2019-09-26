/**
 * @description returns number of numbers
 * that can be represented as difference of squares
 * @param {number} n end of range [1...n]
 * @return {number}
 * @example squares(4) -> 3
 */
export function squares(n) {
  let counter = 0;
  for (let i = 1; i <= n; ++i) {
    if (i % 4 !== 2) {
      ++counter;
    }
  }
  return counter;
}
