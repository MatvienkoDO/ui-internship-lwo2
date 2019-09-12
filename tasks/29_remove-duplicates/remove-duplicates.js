export function removeDuplicates(elements) {
  // eslint-disable-next-line no-undef
  const set = new Set(elements);
  return [...set.values()];
}
