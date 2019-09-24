/**
 * @description sum of first, second and all elements that are between
 * @param {Array<number>} param0
 * @return {number} sum
 * @example sumAll([1, 4]) = 10 (1 + 2 + 3 + 4)
 */
export function sumAll([firstInArr, secondInArr]) {
  const first = Math.min(firstInArr, secondInArr);
  const last = Math.max(firstInArr, secondInArr);

  let sum = 0;
  for (let i = first; i <= last; ++i) {
    sum += i;
  }

  return sum;
}
