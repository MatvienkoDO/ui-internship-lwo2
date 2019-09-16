export function destroyer(initial, ...itemsToRemove) {
  return initial
      .filter((item) => itemsToRemove.indexOf(item) === -1);
}
