function symDiff(f, s) {
  const firstMinusSecond = f.filter((e) => s.indexOf(e) === -1);
  const secondMinusFirst = s.filter((e) => f.indexOf(e) === -1);

  return firstMinusSecond.concat(secondMinusFirst);
}

/**
 * @description counts symmetric difference of arrays
 * @param  {Array<Array<number>>} arrays
 * @return {number[]} symmetric difference of arrays
 * @example ([1,2,3],[4,2,3]) -> [1,4]
 */
export function sym(...arrays) {
  const argumentsIter = arrays
      .map((array) => [...new Set(array)])
      .values();

  let first = argumentsIter.next().value;

  for (const next of argumentsIter) {
    first = symDiff(first, next);
  }

  return first.sort((l, r) => l - r);
}
