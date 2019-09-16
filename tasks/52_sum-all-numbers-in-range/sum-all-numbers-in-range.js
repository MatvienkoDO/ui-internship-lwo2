/**
 * sum of first, second and all elements that are between
 * @param {Array<number>} param0
 * @return {number} sum
 */
export function sumAll([firstInArr, secondInArr]) {
  const first = Math.min(firstInArr, secondInArr);
  const last = Math.max(firstInArr, secondInArr);

  const roundedFirst = Math.ceil(first);
  const roundedLast = Math.floor(last);

  let sum = 0;
  for (let i = roundedFirst; i <= roundedLast; ++i) {
    sum += i;
  }

  if (first !== roundedFirst) {
    sum += first;
  }

  if (last !== roundedLast) {
    sum += last;
  }

  return sum;
}
