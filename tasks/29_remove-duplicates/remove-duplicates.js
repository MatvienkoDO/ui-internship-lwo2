export function removeDuplicates(elements) {
  const set = new Set(elements);
  return [...set.values()];
}
