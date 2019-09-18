/**
 * @description returns new array starting from element that passed test
 * @param {any[]} elements array of elements
 * @param {function(any): boolean} test test function
 * @return {any[]} filtered elements
 * @example ([1,2,3], (e) => e === 2) -> [2,3]
 */
export function dropElements(elements, test) {
  const startFrom = elements.findIndex(test);

  if (startFrom === -1) {
    return [];
  }

  return elements.slice(startFrom);
}
