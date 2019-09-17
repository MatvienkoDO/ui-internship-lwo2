/**
 * @description symmetric difference of the two arrays
 * @param {Array<number>} first first array
 * @param {Array<number>} second second array
 * @return {Array<number>} difference of two arrays
 * @example diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) = [4]
 */
export function diffArray(first, second) {
  const firstMinusSecond = first
      .filter((n) => second.indexOf(n) === -1);

  const secondMinusFirst = second
      .filter((n) => first.indexOf(n) === -1);

  return firstMinusSecond.concat(secondMinusFirst);
}
