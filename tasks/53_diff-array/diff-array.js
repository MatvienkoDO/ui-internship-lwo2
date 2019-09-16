/**
 * symmetric difference of the two arrays
 * @param {Array<number>} first first array
 * @param {Array<number>} second second array
 * @return {Array<number>} difference of two arrays
 */
export function diffArray(first, second) {
  const firstMinusSecond = first
      .filter((n) => second.indexOf(n) === -1);

  const secondMinusFirst = second
      .filter((n) => first.indexOf(n) === -1);

  return firstMinusSecond.concat(secondMinusFirst);
}
