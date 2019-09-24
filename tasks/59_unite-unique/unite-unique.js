/**
 * @description unites arrays without repetitions
 * @param  {...any} arraysToUnite array of array that will be united
 * @return {Array<any>}
 * @example uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) = [1, 3, 2, 5, 4]
 */
export function uniteUnique(...arraysToUnite) {
  const unitedUniqueElements = new Set();

  arraysToUnite.forEach((array) => {
    array.forEach((element) => {
      unitedUniqueElements.add(element);
    });
  });

  return [...unitedUniqueElements.values()];
}
