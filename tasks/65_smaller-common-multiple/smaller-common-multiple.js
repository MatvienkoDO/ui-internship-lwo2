/**
 * @description finds smallest common multiple for all elements in range
 * @param {number[]} firstAndLast array of 2 elements, where 0 - first, 1 - last
 * @return {number} smallest common multiple for all elements in range
 * @example [1,3] (1,2,3) -> 6
 */
export function smallestCommons([possibleFirst, possibleLast]) {
  const first = Math.min(possibleFirst, possibleLast);
  const last = Math.max(possibleFirst, possibleLast);

  const range = [];

  for (let i = first; i <= last; ++i) {
    range.push({
      initial: i,
      current: i,
    });
  }

  const length = range.length;
  let toContinue = true;
  while (toContinue) {
    toContinue = false;

    for (let i = 0; i < length; ++i) {
      const next = (i + 1) % length;

      while (range[i].current < range[next].current) {
        range[i].current += range[i].initial;
        toContinue = true;
      }
    }
  }

  return range[0].current;
}
