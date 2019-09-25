/**
 * @description finds first element that passes test
 * @param {any[]} elements array of elements for test
 * @param {function(any): boolean} test test function
 * @return {any} first element that passed test
 * @example findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0) -> 8
 */
export function findElement(elements, test) {
  for (const element of elements) {
    if (test(element)) {
      return element;
    }
  }

  return undefined;
}
