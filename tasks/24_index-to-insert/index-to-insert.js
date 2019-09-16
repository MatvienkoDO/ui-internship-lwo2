export function getIndexToInsert(arr, insertable) {
  const copy = arr.slice();
  copy.push(insertable);
  copy.sort((f, s) => f - s);

  return copy.indexOf(insertable);
}
