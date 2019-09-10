export function getIndexToInsert(arr, insertable) {
  arr.push(insertable);
  arr.sort((f, s) => f - s);

  return arr.indexOf(insertable);
}
