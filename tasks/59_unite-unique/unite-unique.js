/**
 * unites arrays without repetitions
 * @param  {...any} arraysToUnite array of array that will be united
 * @return {Array<any>}
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
